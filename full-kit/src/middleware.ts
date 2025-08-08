import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

import type { NextRequest } from "next/server"

import {
  isGuestRoute,
  isPublicRoute,
  requiredRoleForRoute,
} from "@/lib/auth-routes"
import {
  ensureLocalizedPathname,
  getLocaleFromPathname,
  getPreferredLocale,
  isPathnameMissingLocale,
} from "@/lib/i18n"
import { securityMiddleware } from "@/lib/security-middleware"
import { ensureRedirectPathname, ensureWithoutPrefix } from "@/lib/utils"

function redirect(pathname: string, request: NextRequest) {
  const { search, hash } = request.nextUrl
  let resolvedPathname = pathname

  if (isPathnameMissingLocale(pathname)) {
    const preferredLocale = getPreferredLocale(request)
    resolvedPathname = ensureLocalizedPathname(pathname, preferredLocale)
  }
  if (search) {
    resolvedPathname += search
  }
  if (hash) {
    resolvedPathname += hash
  }

  const redirectUrl = new URL(resolvedPathname, request.url).toString()
  return NextResponse.redirect(redirectUrl)
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Apply security middleware first
  const securityResponse = await securityMiddleware(request)

  // If security middleware returns a response (rate limit, CSRF failure, etc.), return it
  if (
    securityResponse instanceof NextResponse &&
    securityResponse.status !== 200
  ) {
    return securityResponse
  }

  const locale = getLocaleFromPathname(pathname)
  const pathnameWithoutLocale = ensureWithoutPrefix(pathname, `/${locale}`)
  const isNotPublic = !isPublicRoute(pathnameWithoutLocale)

  // Handle authentication for protected and guest routes
  if (isNotPublic) {
    const token = await getToken({ req: request })
    const isAuthenticated = !!token
    const isGuest = isGuestRoute(pathnameWithoutLocale)
    const isProtected = !isGuest

    // Redirect authenticated users away from guest routes
    if (isAuthenticated && isGuest) {
      return redirect(process.env.HOME_PATHNAME || "/", request)
    }

    // If authenticated but onboarding not completed, force onboarding page
    if (
      isAuthenticated &&
      pathnameWithoutLocale !== "/onboarding" &&
      (token as unknown as { onboardingCompleted?: boolean })
        .onboardingCompleted === false &&
      !request.cookies.get("onboarding-complete")
    ) {
      let redirectPathname = "/onboarding"
      if (pathnameWithoutLocale !== "") {
        redirectPathname = ensureRedirectPathname(redirectPathname, pathname)
      }
      return redirect(redirectPathname, request)
    }

    // Enforce role-based access for certain routes
    const requiredRole = requiredRoleForRoute(pathnameWithoutLocale)
    if (isAuthenticated && requiredRole) {
      const userRole = (token as unknown as { role?: "ADMIN" | "USER" }).role
      if (requiredRole === "ADMIN" && userRole !== "ADMIN") {
        // Non-admin trying to access an admin-only route
        return redirect(process.env.HOME_PATHNAME || "/", request)
      }
    }

    // Redirect unauthenticated users from protected routes to sign-in
    if (!isAuthenticated && isProtected) {
      let redirectPathname = "/sign-in"

      // Maintain the original path for redirection
      if (pathnameWithoutLocale !== "") {
        redirectPathname = ensureRedirectPathname(redirectPathname, pathname)
      }

      return redirect(redirectPathname, request)
    }
  }

  // Redirect to localized URL if the pathname is missing a locale
  if (!locale) {
    return redirect(pathname, request)
  }

  /**
   * NOTE
   * If your homepage is not '/', you need to configure a redirect
   * in next.config.mjs using the redirects() function,
   * and set the HOME_PATHNAME environment variable accordingly.
   *
   * See https://nextjs.org/docs/app/building-your-application/routing/redirecting#redirects-in-nextconfigjs
   */

  // Apply security headers to the response
  const response = NextResponse.next()

  // Copy security headers from security middleware
  if (securityResponse instanceof NextResponse) {
    securityResponse.headers.forEach((value, key) => {
      if (
        key.startsWith("x-") ||
        key.includes("security") ||
        key.includes("content-security-policy")
      ) {
        response.headers.set(key, value)
      }
    })

    // Copy CSRF token cookie
    const csrfCookie = securityResponse.cookies.get("csrf-token")
    if (csrfCookie) {
      response.cookies.set("csrf-token", csrfCookie.value, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
      })
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - images folder
     * - docs
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images|docs).*)",
  ],
}
