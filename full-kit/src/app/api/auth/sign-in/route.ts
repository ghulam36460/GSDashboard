import { NextResponse } from "next/server"
import { compare } from "bcryptjs"

import { SignInSchema } from "@/schemas/sign-in-schema"

import { db } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsedData = SignInSchema.safeParse(body)

    // If validation fails, return an error response with a 400 status
    if (!parsedData.success) {
      return NextResponse.json(parsedData.error, { status: 400 })
    }

    const { email, password } = parsedData.data

    // Find user by email
    const user = await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        avatar: true,
        status: true,
        role: true,
        onboardingCompleted: true,
      },
    })

    if (!user || !user.password) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Verify password
    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Return success response with user data if credentials are correct
    return NextResponse.json(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        status: user.status,
        role: user.role,
        onboardingCompleted: user.onboardingCompleted,
      },
      { status: 200 }
    )
  } catch (e) {
    console.error("Error signing in:", e)
    return NextResponse.json({ error: "Error signing in" }, { status: 500 })
  }
}
