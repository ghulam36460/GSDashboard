import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Test the database connection with Accelerate
    const result = await db.$queryRaw`SELECT 1 as test`
    
    // Test user count (if tables exist)
    const userCount = await db.user.count()
    
    return NextResponse.json({
      success: true,
      message: 'Prisma Accelerate connection successful!',
      data: {
        testQuery: result,
        userCount: userCount,
        timestamp: new Date().toISOString()
      }
    })
  } catch (error: any) {
    console.error('Database connection error:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Database connection failed',
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
