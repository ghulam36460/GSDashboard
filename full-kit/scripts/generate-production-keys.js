#!/usr/bin/env node
/**
 * Security Key Generator for Production Deployment
 * Generates cryptographically secure keys for production environment
 */
import { randomBytes } from "crypto"

function generateSecureKey(length = 32) {
  return randomBytes(length).toString("hex")
}

console.log("🔐 Security Key Generator for GS Dashboard Production")
console.log("=".repeat(60))
console.log()

console.log("📋 Copy these values to your Vercel Environment Variables:")
console.log()

// Core security keys
console.log("# Core Security Keys (Required)")
console.log(`NEXTAUTH_SECRET=${generateSecureKey(32)}`)
console.log(`PAYMENT_ENCRYPTION_KEY=${generateSecureKey(32)}`)
console.log(`CARD_ENCRYPTION_KEY=${generateSecureKey(32)}`)
console.log(`JWT_SECRET=${generateSecureKey(32)}`)
console.log(`CSRF_SECRET=${generateSecureKey(32)}`)
console.log()

// Additional security keys
console.log("# Additional Security Keys (Optional but Recommended)")
console.log(`SESSION_SECRET=${generateSecureKey(32)}`)
console.log(`API_SECRET_KEY=${generateSecureKey(32)}`)
console.log(`WEBHOOK_SECRET=${generateSecureKey(16)}`)
console.log()

// Database credentials (example format)
console.log("# Database Configuration Example")
console.log("# Replace with your actual production database URL")
console.log(
  "DATABASE_URL=postgresql://username:password@hostname:5432/database_name?sslmode=require"
)
console.log()

// Domain configuration
console.log("# Domain Configuration")
console.log("NEXTAUTH_URL=https://gsdashbord.vercel.app")
console.log("BASE_URL=https://gsdashbord.vercel.app")
console.log("API_URL=https://gsdashbord.vercel.app/api")
console.log()

console.log("⚠️  SECURITY WARNINGS:")
console.log("   • Never commit these keys to version control")
console.log("   • Use different keys for development and production")
console.log("   • Store keys securely in Vercel environment variables")
console.log("   • Rotate keys regularly for enhanced security")
console.log()

console.log("✅ Next Steps:")
console.log("   1. Copy the above keys to Vercel dashboard")
console.log("   2. Add your payment gateway API keys")
console.log("   3. Configure your production database URL")
console.log("   4. Deploy using: vercel --prod")
console.log()

console.log("📚 Documentation: ./PRODUCTION_DEPLOYMENT.md")
