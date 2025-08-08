// Interface for raw analytics data from the database/API
export interface AnalyticsDataFromDB {
  id: string
  userId: string
  date: Date | string
  uniqueVisitors?: number | null
  sessionDuration?: number | null
  bounceRate?: number | null
  conversionRate?: number | null
  pageViews?: number | null
  createdAt: Date | string
  updatedAt: Date | string
}

// Grouped analytics data by month for chart processing
export interface MonthlyAnalyticsData {
  [month: string]: {
    visitors: number[]
    sessionDuration: number[]
    bounceRate: number[]
    conversionRate: number[]
  }
}

// Processed monthly data for charts
export interface ProcessedMonthlyData {
  month: string
  visitors: number
  sessionDuration: number
  bounceRate: number
  conversionRate: number
}
