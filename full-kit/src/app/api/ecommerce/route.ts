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
    const period = searchParams.get("period") || "30" // Default to 30 days
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - parseInt(period))

    const ecommerceData = await db.ecommerceData.findMany({
      where: {
        userId: user.id,
        date: {
          gte: startDate,
        },
      },
      orderBy: { date: "asc" },
    })

    // If no data exists, create some sample data for the user
    if (ecommerceData.length === 0) {
      // Generate sample data for the last 30 days
      const sampleData = []
      for (let i = 29; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)

        sampleData.push({
          userId: user.id,
          date,
          totalSales: Math.floor(Math.random() * 100000) + 20000,
          revenueSummary: Math.floor(Math.random() * 80000) + 15000,
          numberOfOrders: Math.floor(Math.random() * 100) + 20,
          averageOrderValue: Math.floor(Math.random() * 500) + 100,
        })
      }

      await db.ecommerceData.createMany({
        data: sampleData,
      })

      // Fetch the newly created data
      const newData = await db.ecommerceData.findMany({
        where: {
          userId: user.id,
          date: {
            gte: startDate,
          },
        },
        orderBy: { date: "asc" },
      })

      return NextResponse.json(newData)
    }

    return NextResponse.json(ecommerceData)
  } catch (error) {
    console.error("Error fetching ecommerce data:", error)
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
    const {
      date,
      totalSales,
      revenueSummary,
      numberOfOrders,
      averageOrderValue,
    } = body

    const ecommerceData = await db.ecommerceData.create({
      data: {
        userId: user.id,
        date: new Date(date),
        totalSales,
        revenueSummary,
        numberOfOrders,
        averageOrderValue,
      },
    })

    return NextResponse.json(ecommerceData, { status: 201 })
  } catch (error) {
    console.error("Error creating ecommerce data:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
