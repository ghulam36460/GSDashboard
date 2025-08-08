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

    const crmData = await db.cRMData.findMany({
      where: {
        userId: user.id,
        date: {
          gte: startDate,
        },
      },
      orderBy: { date: "asc" },
    })

    // If no data exists, create some sample data for the user
    if (crmData.length === 0) {
      // Generate sample data for the last 30 days
      const sampleData = []
      for (let i = 29; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)

        sampleData.push({
          userId: user.id,
          date,
          totalSales: Math.floor(Math.random() * 50000) + 10000,
          totalProfit: Math.floor(Math.random() * 15000) + 3000,
          revenueGrowth: Math.floor(Math.random() * 20000) + 5000,
          newCustomers: Math.floor(Math.random() * 50) + 10,
        })
      }

      await db.cRMData.createMany({
        data: sampleData,
      })

      // Fetch the newly created data
      const newData = await db.cRMData.findMany({
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

    return NextResponse.json(crmData)
  } catch (error) {
    console.error("Error fetching CRM data:", error)
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
    const { date, totalSales, totalProfit, revenueGrowth, newCustomers } = body

    const crmData = await db.cRMData.create({
      data: {
        userId: user.id,
        date: new Date(date),
        totalSales,
        totalProfit,
        revenueGrowth,
        newCustomers,
      },
    })

    return NextResponse.json(crmData, { status: 201 })
  } catch (error) {
    console.error("Error creating CRM data:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
