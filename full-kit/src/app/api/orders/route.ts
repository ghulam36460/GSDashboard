import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { authOptions } from "@/configs/next-auth"
import { db } from "@/lib/prisma"

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await db.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get("page") || 1)
    const pageSize = Math.min(Number(searchParams.get("pageSize") || 10), 100)
    const q = searchParams.get("q")?.trim()
    const status = searchParams.get("status")?.trim()
    const sort = (searchParams.get("sort") || "createdAt:desc").split(":")
    const [sortField, sortDir] = [
      sort[0] as "orderDate" | "totalAmount" | "createdAt",
      (sort[1] as "asc" | "desc") || "desc",
    ]

    const where = {
      userId: user.id,
      ...(q
        ? {
            OR: [
              { orderNumber: { contains: q, mode: "insensitive" } },
              { customerName: { contains: q, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(status ? { status } : {}),
    }

    const [total, items] = await Promise.all([
      db.order.count({ where }),
      db.order.findMany({
        where,
        orderBy: { [sortField]: sortDir },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ])

    return NextResponse.json({ total, page, pageSize, items })
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await db.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const body = await req.json()
    const { orderNumber, customerName, totalAmount, status, orderDate } = body

    if (!orderNumber || !customerName || !totalAmount) {
      return NextResponse.json(
        { error: "Order number, customer name, and total amount are required" },
        { status: 400 }
      )
    }

    const order = await db.order.create({
      data: {
        orderNumber,
        customerName,
        totalAmount: parseFloat(totalAmount),
        status: status || "Pending",
        orderDate: orderDate ? new Date(orderDate) : new Date(),
        userId: user.id,
      },
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
