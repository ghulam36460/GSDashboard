import { NextResponse } from "next/server"
import { hash } from "bcryptjs"

import { RegisterSchema } from "@/schemas/register-schema"

import { db } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsedData = RegisterSchema.safeParse(body)

    // If validation fails, return an error response with a 400 status
    if (!parsedData.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          issues: parsedData.error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          })),
        },
        { status: 400 }
      )
    }

    const { firstName, lastName, username, email, password } = parsedData.data

    // Check if user already exists
    const existingUser = await db.user.findFirst({
      where: {
        OR: [{ email: email }, { username: username }],
      },
    })

    if (existingUser) {
      if (existingUser.email === email) {
        return NextResponse.json(
          {
            message: "User already exists",
            issues: [
              { path: ["email"], message: "Email is already registered" },
            ],
          },
          { status: 400 }
        )
      }
      if (existingUser.username === username) {
        return NextResponse.json(
          {
            message: "User already exists",
            issues: [
              { path: ["username"], message: "Username is already taken" },
            ],
          },
          { status: 400 }
        )
      }
    }

    // Hash the password
    const hashedPassword = await hash(password, 12)

    // Create the user
    const user = await db.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        username,
        password: hashedPassword,
        preferences: {
          create: {
            theme: "zinc",
            mode: "light",
            radius: "0.5",
            layout: "vertical",
            direction: "ltr",
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        createdAt: true,
      },
    })

    return NextResponse.json(
      {
        message: "User created successfully",
        user,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
