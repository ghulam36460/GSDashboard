/**
 * Production Payment API Endpoint
 * Handles secure payment processing with full validation and error handling
 */

import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

import type { EnhancedPaymentMethod as PaymentServiceType } from "@/types/payment-types"
import type { NextRequest } from "next/server"

import { enhancedPaymentSchema } from "@/schemas/enhanced-payment-schema"

import { authOptions } from "@/configs/next-auth"
import { processPayment } from "@/lib/payment-service"
import { db } from "@/lib/prisma"
import { sanitizeApiInput, validateCSRF } from "@/lib/security-middleware"

// Request validation schema
const paymentRequestSchema = z.object({
  paymentMethod: enhancedPaymentSchema,
  amount: z.number().positive().max(1000000), // Max 1M PKR
  currency: z.string().default("PKR"),
  description: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Check CSRF token
    if (!validateCSRF(request)) {
      return NextResponse.json(
        { success: false, message: "CSRF token validation failed" },
        { status: 403 }
      )
    }

    // Get user session
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, message: "Authentication required" },
        { status: 401 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const sanitizedBody = sanitizeApiInput(body)

    const validationResult = paymentRequestSchema.safeParse(sanitizedBody)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request data",
          errors: validationResult.error.issues,
        },
        { status: 400 }
      )
    }

    const { paymentMethod, amount, currency, description } =
      validationResult.data

    // Check user's payment limits (if any)
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        email: true,
        name: true,
        // Add any payment limit fields here
      },
    })

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      )
    }

    // Create payment record in database
    const paymentRecord = await db.payment.create({
      data: {
        userId: user.id,
        amount: amount,
        currency: currency,
        paymentMethod: paymentMethod.type,
        status: "pending",
        description: description || "Dashboard service payment",
        metadata: JSON.stringify({
          paymentMethodDetails: paymentMethod,
          userAgent: request.headers.get("user-agent"),
          ip: request.headers.get("x-forwarded-for") || "unknown",
        }),
      },
    })

    // Convert schema payment method to payment service format
    const paymentServiceMethod: PaymentServiceType = {
      ...paymentMethod,
      amount,
      currency,
    }

    const paymentResult = await processPayment(
      paymentServiceMethod,
      amount,
      currency
    )

    // Update payment record with result
    await db.payment.update({
      where: { id: paymentRecord.id },
      data: {
        status: paymentResult.success ? "processing" : "failed",
        transactionId: paymentResult.transactionId,
        failureReason: paymentResult.success ? null : paymentResult.message,
        updatedAt: new Date(),
      },
    })

    // Log the payment attempt
    console.log(`Payment ${paymentResult.success ? "initiated" : "failed"}:`, {
      userId: user.id,
      paymentId: paymentRecord.id,
      amount,
      currency,
      paymentMethod: paymentMethod.type,
      success: paymentResult.success,
    })

    // Return response
    if (paymentResult.success) {
      return NextResponse.json({
        success: true,
        message: paymentResult.message,
        paymentId: paymentRecord.id,
        transactionId: paymentResult.transactionId,
        redirectUrl: paymentResult.redirectUrl,
        paymentMethod: paymentResult.paymentMethod,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: paymentResult.message,
          paymentId: paymentRecord.id,
        },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error("Payment API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error during payment processing",
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get user session
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, message: "Authentication required" },
        { status: 401 }
      )
    }

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")

    // Build where clause
    const where: {
      userId: string
      status?: string
    } = {
      userId: session.user.id,
    }

    if (
      status &&
      ["pending", "processing", "completed", "failed"].includes(status)
    ) {
      where.status = status
    }

    // Get user's payment history
    const [payments, total] = await Promise.all([
      db.payment.findMany({
        where,
        select: {
          id: true,
          amount: true,
          currency: true,
          paymentMethod: true,
          status: true,
          description: true,
          transactionId: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      db.payment.count({ where }),
    ])

    return NextResponse.json({
      success: true,
      data: {
        payments,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    })
  } catch (error) {
    console.error("Payment history API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch payment history",
      },
      { status: 500 }
    )
  }
}
