/**
 * Production Health Check API
 * Provides system status and health monitoring
 */

import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"

import { db } from "@/lib/prisma"

export async function GET(_request: NextRequest) {
  const startTime = Date.now()

  try {
    // Basic health check
    const health: {
      status: string
      timestamp: string
      version: string
      environment: string
      uptime: number
      responseTime?: number
      checks: {
        database: { status: string; responseTime: number; error?: string }
        environment: { status: string; missingVars: string[] }
        memory: { status: string; usage: number; limit: number }
      }
    } = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || "1.0.0",
      environment: process.env.NODE_ENV || "development",
      uptime: process.uptime(),
      checks: {
        database: { status: "unknown", responseTime: 0 },
        environment: { status: "unknown", missingVars: [] as string[] },
        memory: { status: "unknown", usage: 0, limit: 0 },
      },
    }

    // Database connectivity check
    try {
      const dbStart = Date.now()
      await db.$queryRaw`SELECT 1`
      health.checks.database = {
        status: "healthy",
        responseTime: Date.now() - dbStart,
      }
    } catch (error) {
      health.checks.database = {
        status: "unhealthy",
        responseTime: Date.now() - startTime,
        error:
          error instanceof Error ? error.message : "Database connection failed",
      }
      health.status = "unhealthy"
    }

    // Environment variables check
    const requiredEnvVars = ["DATABASE_URL", "NEXTAUTH_SECRET", "NEXTAUTH_URL"]

    const missingVars = requiredEnvVars.filter(
      (varName) => !process.env[varName]
    )
    health.checks.environment = {
      status: missingVars.length === 0 ? "healthy" : "unhealthy",
      missingVars,
    }

    if (missingVars.length > 0) {
      health.status = "unhealthy"
    }

    // Memory usage check
    const memUsage = process.memoryUsage()
    const memUsageMB = Math.round(memUsage.heapUsed / 1024 / 1024)
    const memLimitMB = Math.round(memUsage.heapTotal / 1024 / 1024)

    health.checks.memory = {
      status: memUsageMB < 900 ? "healthy" : "warning", // Warning if using > 900MB
      usage: memUsageMB,
      limit: memLimitMB,
    }

    // Overall response time
    health.responseTime = Date.now() - startTime

    // Return appropriate status code
    const statusCode = health.status === "healthy" ? 200 : 503

    return NextResponse.json(health, { status: statusCode })
  } catch (error) {
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Health check failed",
        responseTime: Date.now() - startTime,
      },
      { status: 503 }
    )
  }
}
