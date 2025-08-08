import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { OnboardingSchema } from "@/schemas/onboarding-schema"

import { authOptions } from "@/configs/next-auth"
import { db } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const parsed = OnboardingSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          issues: parsed.error.issues.map((i) => ({
            path: i.path,
            message: i.message,
          })),
        },
        { status: 400 }
      )
    }

    const data = parsed.data
    await db.user.update({
      where: { id: session.user.id },
      data: {
        onboardingCompleted: true,
        phone: data.phone,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        country: data.country,
        company: data.company,
        timeZone: data.timeZone,
      },
    })

    const res = NextResponse.json(
      { message: "Onboarding completed" },
      { status: 200 }
    )
    res.cookies.set("onboarding-complete", "true", {
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
      path: "/",
    })
    return res
  } catch (e) {
    console.error("Onboarding submit error", e)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
