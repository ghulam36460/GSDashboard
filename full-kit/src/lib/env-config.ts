/**
 * Production Environment Configuration
 * Validates and provides secure access to environment variables
 */

interface EnvironmentConfig {
  // Database
  databaseUrl: string

  // NextAuth
  nextAuthUrl: string
  nextAuthSecret: string

  // Payment Gateways
  stripe: {
    secretKey: string
    environment: "sandbox" | "production"
  }

  // Security
  paymentEncryptionKey: string
  cardEncryptionKey: string
  csrfSecret: string
  jwtSecret: string

  // Rate Limiting
  rateLimitMaxRequests: number
  rateLimitWindowMs: number

  // Email
  smtp: {
    host: string
    port: number
    user: string
    pass: string
  }

  // Monitoring
  googleAnalyticsId?: string
  sentryDsn?: string
  logLevel: "debug" | "info" | "warn" | "error"

  // File Upload
  maxFileSize: number
  allowedFileTypes: string[]

  // Redis
  redisUrl?: string
}

function validateEnvironmentVariable(
  name: string,
  value: string | undefined
): string {
  if (!value || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value.trim()
}

function getOptionalEnvironmentVariable(name: string): string | undefined {
  const value = process.env[name]
  return value && value.trim() !== "" ? value.trim() : undefined
}

export function getEnvironmentConfig(): EnvironmentConfig {
  // Validate required variables
  const requiredVars = [
    "DATABASE_URL",
    "NEXTAUTH_URL",
    "NEXTAUTH_SECRET",
    "PAYMENT_ENCRYPTION_KEY",
    "CARD_ENCRYPTION_KEY",
    "CSRF_SECRET",
    "JWT_SECRET",
  ]

  // Check all required variables exist
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`)
    }
  }

  // Validate secret lengths for security
  if (process.env.NEXTAUTH_SECRET!.length < 32) {
    throw new Error("NEXTAUTH_SECRET must be at least 32 characters long")
  }

  if (process.env.PAYMENT_ENCRYPTION_KEY!.length < 32) {
    throw new Error(
      "PAYMENT_ENCRYPTION_KEY must be at least 32 characters long"
    )
  }

  return {
    // Database
    databaseUrl: validateEnvironmentVariable(
      "DATABASE_URL",
      process.env.DATABASE_URL
    ),

    // NextAuth
    nextAuthUrl: validateEnvironmentVariable(
      "NEXTAUTH_URL",
      process.env.NEXTAUTH_URL
    ),
    nextAuthSecret: validateEnvironmentVariable(
      "NEXTAUTH_SECRET",
      process.env.NEXTAUTH_SECRET
    ),

    // Payment Gateways
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY || "",
      environment:
        (process.env.STRIPE_ENVIRONMENT as "sandbox" | "production") ||
        "sandbox",
    },

    // Security
    paymentEncryptionKey: validateEnvironmentVariable(
      "PAYMENT_ENCRYPTION_KEY",
      process.env.PAYMENT_ENCRYPTION_KEY
    ),
    cardEncryptionKey: validateEnvironmentVariable(
      "CARD_ENCRYPTION_KEY",
      process.env.CARD_ENCRYPTION_KEY
    ),
    csrfSecret: validateEnvironmentVariable(
      "CSRF_SECRET",
      process.env.CSRF_SECRET
    ),
    jwtSecret: validateEnvironmentVariable(
      "JWT_SECRET",
      process.env.JWT_SECRET
    ),

    // Rate Limiting
    rateLimitMaxRequests: parseInt(
      process.env.RATE_LIMIT_MAX_REQUESTS || "100"
    ),
    rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000"),

    // Email
    smtp: {
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },

    // Monitoring
    googleAnalyticsId: getOptionalEnvironmentVariable("GOOGLE_ANALYTICS_ID"),
    sentryDsn: getOptionalEnvironmentVariable("SENTRY_DSN"),
    logLevel:
      (process.env.LOG_LEVEL as "debug" | "info" | "warn" | "error") || "info",

    // File Upload
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE || "10485760"), // 10MB default
    allowedFileTypes: (
      process.env.ALLOWED_FILE_TYPES ||
      "image/jpeg,image/png,image/gif,application/pdf"
    ).split(","),

    // Redis
    redisUrl: getOptionalEnvironmentVariable("REDIS_URL"),
  }
}

// Export singleton instance
export const env = getEnvironmentConfig()

// Export individual configurations for easier imports
export const dbConfig = {
  url: env.databaseUrl,
}

export const authConfig = {
  url: env.nextAuthUrl,
  secret: env.nextAuthSecret,
}

export const paymentConfig = {
  stripe: env.stripe,
  encryptionKey: env.paymentEncryptionKey,
  cardEncryptionKey: env.cardEncryptionKey,
}

export const securityConfig = {
  csrfSecret: env.csrfSecret,
  jwtSecret: env.jwtSecret,
  rateLimitMaxRequests: env.rateLimitMaxRequests,
  rateLimitWindowMs: env.rateLimitWindowMs,
}

export const emailConfig = env.smtp

export const uploadConfig = {
  maxFileSize: env.maxFileSize,
  allowedFileTypes: env.allowedFileTypes,
}
