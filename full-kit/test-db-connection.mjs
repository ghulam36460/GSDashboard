// Test script to verify Prisma Accelerate connection
// Run with: node test-db-connection.mjs

import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import dotenv from "dotenv"

dotenv.config()

console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Found" : "Not found")
console.log("URL starts with:", process.env.DATABASE_URL?.substring(0, 20))

const prisma = new PrismaClient().$extends(withAccelerate())

async function testConnection() {
  try {
    console.log("🔄 Testing Prisma Accelerate connection...")

    // Test basic connection
    const result = await prisma.$queryRaw`SELECT 1 as test`
    console.log("✅ Database connection successful!")
    console.log("Test query result:", result)

    // Test user model (if tables exist)
    try {
      const userCount = await prisma.user.count()
      console.log("✅ User model accessible!")
      console.log("Total users:", userCount)
    } catch (error) {
      console.log("⚠️  User table might not exist yet. Run migrations first.")
      console.log("Error:", error.message)
    }
  } catch (error) {
    console.error("❌ Database connection failed:", error.message)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
