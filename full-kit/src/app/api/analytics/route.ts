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

    const analyticsData = await db.analyticsData.findMany({
      where: {
        userId: user.id,
        date: {
          gte: startDate,
        },
      },
      orderBy: { date: "asc" },
    })

    // If no data exists, create some sample data for the user
    if (analyticsData.length === 0) {
      // Generate sample data for the last 30 days
      const sampleData = []
      for (let i = 29; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)

        sampleData.push({
          userId: user.id,
          date,
          uniqueVisitors: Math.floor(Math.random() * 1000) + 500,
          sessionDuration: Math.floor(Math.random() * 300) + 100,
          bounceRate: Math.random() * 0.5 + 0.2,
          conversionRate: Math.random() * 0.1 + 0.02,
          pageViews: Math.floor(Math.random() * 2000) + 1000,
        })
      }

      await db.analyticsData.createMany({
        data: sampleData,
      })

      // Fetch the newly created data
      const newData = await db.analyticsData.findMany({
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

    return NextResponse.json(analyticsData)
  } catch (error) {
    console.error("Error fetching analytics data:", error)
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
      uniqueVisitors,
      sessionDuration,
      bounceRate,
      conversionRate,
      pageViews,
    } = body

    const analyticsData = await db.analyticsData.create({
      data: {
        userId: user.id,
        date: new Date(date),
        uniqueVisitors,
        sessionDuration,
        bounceRate,
        conversionRate,
        pageViews,
      },
    })

    return NextResponse.json(analyticsData, { status: 201 })
  } catch (error) {
    console.error("Error creating analytics data:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
