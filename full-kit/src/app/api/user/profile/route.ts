import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { authOptions } from "@/configs/next-auth"
import { db } from "@/lib/prisma"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        avatar: true,
        profileBackground: true,
        status: true,
        phone: true,
        addressLine1: true,
        addressLine2: true,
        city: true,
        state: true,
        postalCode: true,
        country: true,
        company: true,
        timeZone: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (e) {
    console.error("Profile GET error", e)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json().catch(() => ({}))
    const {
      name,
      username,
      avatar,
      profileBackground,
      phone,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      country,
      company,
      timeZone,
    } = body || {}

    const updated = await db.user.update({
      where: { id: session.user.id },
      data: {
        name,
        username,
        avatar,
        profileBackground,
        phone,
        addressLine1,
        addressLine2,
        city,
        state,
        postalCode,
        country,
        company,
        timeZone,
      },
      select: { id: true },
    })

    return NextResponse.json({ message: "Profile updated", id: updated.id })
  } catch (e) {
    console.error("Profile PUT error", e)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
