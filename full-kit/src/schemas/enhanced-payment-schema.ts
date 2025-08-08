import { z } from "zod"

// Enhanced payment method schema with comprehensive validation
export const enhancedPaymentSchema = z.discriminatedUnion("type", [
  // Credit/Debit Card
  z.object({
    type: z.literal("card"),
    cardNumber: z.string().regex(/^\d{13,19}$/, "Invalid card number"),
    expiryMonth: z.number().min(1).max(12),
    expiryYear: z.number().min(new Date().getFullYear()),
    cvv: z.string().regex(/^\d{3,4}$/, "Invalid CVV"),
    cardholderName: z.string().min(1, "Cardholder name is required"),
    billingAddress: z.object({
      line1: z.string().min(1, "Address line 1 is required"),
      line2: z.string().optional(),
      city: z.string().min(1, "City is required"),
      state: z.string().min(1, "State is required"),
      postalCode: z.string().min(1, "Postal code is required"),
      country: z.string().min(1, "Country is required"),
    }),
  }),

  // Bank Transfer
  z.object({
    type: z.literal("bank_transfer"),
    accountNumber: z.string().min(1, "Account number is required"),
    routingNumber: z.string().min(1, "Routing number is required"),
    accountHolderName: z.string().min(1, "Account holder name is required"),
    bankName: z.string().min(1, "Bank name is required"),
  }),

  // Digital Wallet (e.g., PayPal, Apple Pay, Google Pay)
  z.object({
    type: z.literal("digital_wallet"),
    walletType: z.enum(["paypal", "apple_pay", "google_pay", "stripe"]),
    email: z.string().email("Valid email is required for digital wallet"),
    walletId: z.string().optional(),
  }),

  // Cash on Delivery
  z.object({
    type: z.literal("cash_on_delivery"),
    deliveryAddress: z.object({
      line1: z.string().min(1, "Delivery address is required"),
      line2: z.string().optional(),
      city: z.string().min(1, "City is required"),
      state: z.string().min(1, "State is required"),
      postalCode: z.string().min(1, "Postal code is required"),
      country: z.string().min(1, "Country is required"),
    }),
    contactPhone: z
      .string()
      .regex(/^\+92\d{10}$/, "Invalid Pakistani phone number"),
  }),
])

// Payment status enum
export const paymentStatusSchema = z.enum([
  "pending",
  "processing",
  "completed",
  "failed",
  "cancelled",
  "refunded",
])

// Payment currency enum
export const paymentCurrencySchema = z.enum(["PKR", "USD", "EUR", "GBP"])

// Complete payment request schema
export const paymentRequestSchema = z.object({
  paymentMethod: enhancedPaymentSchema,
  amount: z.number().positive().max(1000000), // Max 1M PKR
  currency: paymentCurrencySchema.default("PKR"),
  description: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
})

// Payment response schema
export const paymentResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  paymentId: z.string().optional(),
  transactionId: z.string().optional(),
  redirectUrl: z.string().optional(),
  paymentMethod: z.string().optional(),
})

// Payment history item schema
export const paymentHistoryItemSchema = z.object({
  id: z.string(),
  amount: z.number(),
  currency: z.string(),
  paymentMethod: z.string(),
  status: paymentStatusSchema,
  description: z.string().optional(),
  transactionId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

// Payment history response schema
export const paymentHistoryResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    payments: z.array(paymentHistoryItemSchema),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      totalPages: z.number(),
    }),
  }),
})

export type EnhancedPaymentMethod = z.infer<typeof enhancedPaymentSchema>
export type PaymentStatus = z.infer<typeof paymentStatusSchema>
export type PaymentCurrency = z.infer<typeof paymentCurrencySchema>
export type PaymentRequest = z.infer<typeof paymentRequestSchema>
export type PaymentResponse = z.infer<typeof paymentResponseSchema>
export type PaymentHistoryItem = z.infer<typeof paymentHistoryItemSchema>
export type PaymentHistoryResponse = z.infer<
  typeof paymentHistoryResponseSchema
>
