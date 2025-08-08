/**
 * Production Security Middleware
 * Implements CSRF protection, rate limiting, security headers, and input validation
 */

import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

import type { NextRequest } from "next/server"

import { securityConfig } from "@/lib/env-config"
import { ensureLocalizedPathname, getPreferredLocale } from "@/lib/i18n"

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

interface RateLimitResult {
  success: boolean
  remaining: number
  resetTime: number
}

function getRateLimitKey(request: NextRequest): string {
  // Use IP address for rate limiting
  const forwarded = request.headers.get("x-forwarded-for")
  const realIp = request.headers.get("x-real-ip")
  const ip = forwarded ? forwarded.split(",")[0] : realIp || "unknown"
  return `rate_limit:${ip}`
}

function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now()
  const windowMs = securityConfig.rateLimitWindowMs
  const maxRequests = securityConfig.rateLimitMaxRequests

  const current = rateLimitStore.get(key)

  if (!current || now > current.resetTime) {
    // New window or expired window
    const resetTime = now + windowMs
    rateLimitStore.set(key, { count: 1, resetTime })
    return {
      success: true,
      remaining: maxRequests - 1,
      resetTime,
    }
  }

  if (current.count >= maxRequests) {
    // Rate limit exceeded
    return {
      success: false,
      remaining: 0,
      resetTime: current.resetTime,
    }
  }

  // Increment counter
  current.count++
  rateLimitStore.set(key, current)

  return {
    success: true,
    remaining: maxRequests - current.count,
    resetTime: current.resetTime,
  }
}

function setSecurityHeaders(response: NextResponse): NextResponse {
  // Prevent XSS attacks
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")

  // HTTPS enforcement (in production)
  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains"
    )
  }

  // Content Security Policy
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
    ].join("; ")
  )

  // Referrer Policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // Permissions Policy
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  )

  return response
}

// CSRF token generation and validation
function generateCSRFToken(): string {
  return Buffer.from(Math.random().toString()).toString("base64").slice(0, 32)
}

function validateCSRFToken(request: NextRequest): boolean {
  if (
    request.method === "GET" ||
    request.method === "HEAD" ||
    request.method === "OPTIONS"
  ) {
    return true // Safe methods don't need CSRF protection
  }

  const tokenFromHeader = request.headers.get("x-csrf-token")
  const tokenFromCookie = request.cookies.get("csrf-token")?.value

  return tokenFromHeader === tokenFromCookie && tokenFromHeader !== undefined
}

// Input sanitization
function sanitizeInput(value: string): string {
  return value.replace(/[<>\"'&]/g, (match) => {
    const map: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "&": "&amp;",
    }
    return map[match]
  })
}

export async function securityMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static files and API routes that don't need protection
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/auth/") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next()
  }

  // Create response
  let response = NextResponse.next()

  // Apply security headers
  response = setSecurityHeaders(response)

  // Rate limiting
  const rateLimitKey = getRateLimitKey(request)
  const rateLimitResult = checkRateLimit(rateLimitKey)

  if (!rateLimitResult.success) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": Math.ceil(
          (rateLimitResult.resetTime - Date.now()) / 1000
        ).toString(),
        "X-RateLimit-Limit": securityConfig.rateLimitMaxRequests.toString(),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": rateLimitResult.resetTime.toString(),
      },
    })
  }

  // Add rate limit headers
  response.headers.set(
    "X-RateLimit-Limit",
    securityConfig.rateLimitMaxRequests.toString()
  )
  response.headers.set(
    "X-RateLimit-Remaining",
    rateLimitResult.remaining.toString()
  )
  response.headers.set(
    "X-RateLimit-Reset",
    rateLimitResult.resetTime.toString()
  )

  // CSRF Protection for API routes
  if (pathname.startsWith("/api/") && !pathname.startsWith("/api/auth/")) {
    if (!validateCSRFToken(request)) {
      return new NextResponse("CSRF Token Validation Failed", { status: 403 })
    }
  }

  // Set CSRF token cookie for forms
  const csrfToken = generateCSRFToken()
  response.cookies.set("csrf-token", csrfToken, {
    httpOnly: false, // Needs to be accessible to JavaScript for forms
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24 hours
  })

  // Authentication check for protected routes
  const protectedRoutes = ["/dashboards", "/payments", "/settings", "/profile"]
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  if (isProtectedRoute) {
    // Use the default NextAuth secret by omitting the custom secret here,
    // so decoding matches NextAuth's JWT cookie (NEXTAUTH_SECRET).
    const token = await getToken({ req: request })

    if (!token) {
      // Redirect unauthenticated users to the localized sign-in page and
      // preserve the original pathname using the "redirectTo" param
      // (this matches the sign-in form logic across the app).
      const preferredLocale = getPreferredLocale(request)
      const localizedSignIn = ensureLocalizedPathname(
        "/sign-in",
        preferredLocale
      )
      const loginUrl = new URL(localizedSignIn, request.url)
      loginUrl.searchParams.set("redirectTo", pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return response
}

// Utility function for API routes to validate CSRF
export function validateCSRF(request: Request): boolean {
  const tokenFromHeader = request.headers.get("x-csrf-token")
  // In API routes, we need to parse cookies manually
  const cookieHeader = request.headers.get("cookie")
  const cookies = cookieHeader?.split(";").reduce(
    (acc, cookie) => {
      const [key, value] = cookie.trim().split("=")
      acc[key] = value
      return acc
    },
    {} as Record<string, string>
  )

  const tokenFromCookie = cookies?.["csrf-token"]

  return tokenFromHeader === tokenFromCookie && tokenFromHeader !== undefined
}

// Utility function for input sanitization in API routes
export function sanitizeApiInput(data: unknown): unknown {
  if (typeof data === "string") {
    return sanitizeInput(data)
  }

  if (Array.isArray(data)) {
    return data.map(sanitizeApiInput)
  }

  if (typeof data === "object" && data !== null) {
    const sanitized: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(data)) {
      sanitized[key] = sanitizeApiInput(value)
    }
    return sanitized
  }

  return data
}

// Clean up rate limit store periodically (in production, use Redis with TTL)
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}, 60000) // Clean up every minute
