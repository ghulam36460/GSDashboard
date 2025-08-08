import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { authOptions } from "@/configs/next-auth"
import { db } from "@/lib/prisma"

// List notifications with optional read filter and pagination
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get("page") || 1)
    const pageSize = Math.min(Number(searchParams.get("pageSize") || 10), 100)
    const isReadParam = searchParams.get("isRead")

    const where = {
      userId: session.user.id,
      ...(isReadParam !== null ? { isRead: isReadParam === "true" } : {}),
    }

    const [total, items] = await Promise.all([
      db.notification.count({ where }),
      db.notification.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ])

    return NextResponse.json({ total, page, pageSize, items })
  } catch (e) {
    console.error("Notifications GET error", e)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// Bulk mark as read
export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json().catch(() => ({}))
    const ids: string[] | undefined = body?.ids

    if (Array.isArray(ids) && ids.length > 0) {
      await db.notification.updateMany({
        where: { id: { in: ids }, userId: session.user.id },
        data: { isRead: true },
      })
    } else {
      await db.notification.updateMany({
        where: { userId: session.user.id, isRead: false },
        data: { isRead: true },
      })
    }

    return NextResponse.json({ message: "Notifications updated" })
  } catch (e) {
    console.error("Notifications PUT error", e)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
