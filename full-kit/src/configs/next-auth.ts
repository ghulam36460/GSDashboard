import { PrismaAdapter } from "@auth/prisma-adapter"

import type { NextAuthOptions } from "next-auth"
import type { Adapter } from "next-auth/adapters"

import { db } from "@/lib/prisma"

import CredentialsProvider from "next-auth/providers/credentials"

// Extend NextAuth's Session and User interfaces to include custom properties
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string | null
      name: string
      avatar: string | null
      status: string
      role: "ADMIN" | "USER"
      onboardingCompleted?: boolean
    }
  }

  interface User {
    id: string
    email: string | null
    name: string
    avatar: string | null
    status: string
    role: "ADMIN" | "USER"
    onboardingCompleted?: boolean
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string | null
    name: string
    avatar: string | null
    status: string
    role: "ADMIN" | "USER"
    onboardingCompleted?: boolean
  }
}

// Configuration for NextAuth with custom adapters and providers
// NextAuth.js documentation: https://next-auth.js.org/getting-started/introduction
export const authOptions: NextAuthOptions = {
  // Ensure a stable secret for JWT encryption/decryption
  secret: process.env.NEXTAUTH_SECRET,
  // Use Prisma adapter for database interaction
  // More info: https://next-auth.js.org/getting-started/adapter
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      // Custom authorize function to validate user credentials
      async authorize(credentials) {
        if (!credentials) return null

        try {
          // Authenticate the user by sending credentials to an external API
          // Refer to the NextAuth.js documentation for handling custom sign-in flows:
          // https://next-auth.js.org/providers/credentials
          // Use a relative URL so it works across dev/prod and any port
          const res = await fetch(`/api/auth/sign-in`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          })

          const payload = await res.json()

          // Throw error if the response status indicates a failure
          if (res.status >= 400) {
            throw new Error(payload?.message ?? "An unknown error occurred.")
          }

          return payload // Return user data on successful authentication
        } catch (e: unknown) {
          // Handle errors and provide appropriate error message
          throw new Error(
            e instanceof Error ? e.message : "An unknown error occurred."
          )
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in", // Custom sign-in page
  },
  session: {
    strategy: "jwt", // Use JWT strategy for sessions
    maxAge: 30 * 24 * 60 * 60, // Set session expiration to 30 days
    updateAge: 24 * 60 * 60, // Update session every 24 hours
    // More info on session strategies: https://next-auth.js.org/getting-started/options#session
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    // Callback to add custom user properties to JWT
    // Learn more: https://next-auth.js.org/configuration/callbacks#jwt-callback
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.avatar = user.avatar
        token.email = user.email
        token.status = user.status
        token.role =
          (user as unknown as { role?: "ADMIN" | "USER" }).role ??
          token.role ??
          "USER"
        // When logging in, propagate onboarding status if available
        const u = user as Partial<{ onboardingCompleted: boolean }>
        if (typeof u.onboardingCompleted !== "undefined") {
          token.onboardingCompleted = u.onboardingCompleted
        }
      }

      return token
    },
    // Callback to include JWT properties in the session object
    // Learn more: https://next-auth.js.org/configuration/callbacks#session-callback
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.avatar = token.avatar
        session.user.email = token.email
        session.user.status = token.status
        session.user.role = token.role
        session.user.onboardingCompleted = token.onboardingCompleted
      }

      return session
    },
    // Normalize redirects so protected flows land on the app home route.
    // Locale will be added by middleware if missing.
    async redirect({ url, baseUrl }) {
      try {
        // Allow relative redirects (Next will resolve against baseUrl)
        if (url.startsWith("/")) return url
        // Allow same-origin absolute URLs
        if (url.startsWith(baseUrl)) return url
      } catch {
        // fall through
      }
      return process.env.HOME_PATHNAME || "/dashboards/analytics"
    },
  },
  events: {
    async signOut() {
      // Clear any cached data on sign out
    },
  },
  logger: {
    error(code, metadata) {
      // Suppress JWT session errors to avoid console spam
      console.error("NextAuth Error:", code, metadata)
    },
    warn(code) {
      // Log warnings
      console.warn("NextAuth Warning:", code)
    },
    debug: () => {}, // Disable debug logs
  },
}
