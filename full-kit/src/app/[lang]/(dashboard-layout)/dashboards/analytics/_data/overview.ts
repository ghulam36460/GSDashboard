import type { OverviewType } from "../types"

interface AnalyticsDataFromDB {
  date: string
  uniqueVisitors?: number
  sessionDuration?: number
  bounceRate?: number
  conversionRate?: number
}

// This function will be called from the component to fetch real data
export async function getOverviewData(): Promise<OverviewType> {
  try {
    const response = await fetch("/api/analytics?period=30")
    if (!response.ok) {
      throw new Error("Failed to fetch analytics data")
    }

    const analyticsData: AnalyticsDataFromDB[] = await response.json()

    if (!analyticsData || analyticsData.length === 0) {
      // Return default data if no analytics data exists
      return {
        uniqueVisitors: {
          averageValue: 0,
          percentageChange: 0,
          perMonth: [],
        },
        averageSessionDuration: {
          averageValue: 0,
          percentageChange: 0,
          perMonth: [],
        },
        bounceRate: {
          averageValue: 0,
          percentageChange: 0,
          perMonth: [],
        },
        conversionRate: {
          averageValue: 0,
          percentageChange: 0,
          perMonth: [],
        },
      }
    }

    // Calculate averages and trends from real data
    const totalVisitors = analyticsData.reduce(
      (sum: number, data: AnalyticsDataFromDB) =>
        sum + (data.uniqueVisitors || 0),
      0
    )
    const totalSessionDuration = analyticsData.reduce(
      (sum: number, data: AnalyticsDataFromDB) =>
        sum + (data.sessionDuration || 0),
      0
    )
    const totalBounceRate = analyticsData.reduce(
      (sum: number, data: AnalyticsDataFromDB) => sum + (data.bounceRate || 0),
      0
    )
    const totalConversionRate = analyticsData.reduce(
      (sum: number, data: AnalyticsDataFromDB) =>
        sum + (data.conversionRate || 0),
      0
    )

    const dataLength = analyticsData.length

    // Calculate percentage changes (simple trend calculation)
    const recentData = analyticsData.slice(-7) // Last 7 days
    const previousData = analyticsData.slice(-14, -7) // Previous 7 days

    const recentVisitors = recentData.reduce(
      (sum: number, data: AnalyticsDataFromDB) =>
        sum + (data.uniqueVisitors || 0),
      0
    )
    const previousVisitors = previousData.reduce(
      (sum: number, data: AnalyticsDataFromDB) =>
        sum + (data.uniqueVisitors || 0),
      0
    )
    const visitorsChange =
      previousVisitors > 0
        ? (recentVisitors - previousVisitors) / previousVisitors
        : 0

    const recentSessionDuration = recentData.reduce(
      (sum: number, data: AnalyticsDataFromDB) =>
        sum + (data.sessionDuration || 0),
      0
    )
    const previousSessionDuration = previousData.reduce(
      (sum: number, data: AnalyticsDataFromDB) =>
        sum + (data.sessionDuration || 0),
      0
    )
    const sessionDurationChange =
      previousSessionDuration > 0
        ? (recentSessionDuration - previousSessionDuration) /
          previousSessionDuration
        : 0

    const recentBounceRate =
      recentData.reduce(
        (sum: number, data: AnalyticsDataFromDB) =>
          sum + (data.bounceRate || 0),
        0
      ) / recentData.length
    const previousBounceRate =
      previousData.reduce(
        (sum: number, data: AnalyticsDataFromDB) =>
          sum + (data.bounceRate || 0),
        0
      ) / previousData.length
    const bounceRateChange =
      previousBounceRate > 0
        ? (recentBounceRate - previousBounceRate) / previousBounceRate
        : 0

    const recentConversionRate =
      recentData.reduce(
        (sum: number, data: AnalyticsDataFromDB) =>
          sum + (data.conversionRate || 0),
        0
      ) / recentData.length
    const previousConversionRate =
      previousData.reduce(
        (sum: number, data: AnalyticsDataFromDB) =>
          sum + (data.conversionRate || 0),
        0
      ) / previousData.length
    const conversionRateChange =
      previousConversionRate > 0
        ? (recentConversionRate - previousConversionRate) /
          previousConversionRate
        : 0

    // Group data by month for charts
    // Monthly data aggregation for charts
    interface MonthlyMetrics {
      visitors: number[]
      sessionDuration: number[]
      bounceRate: number[]
      conversionRate: number[]
    }

    const monthlyData = analyticsData.reduce(
      (acc: Record<string, MonthlyMetrics>, data: AnalyticsDataFromDB) => {
        const date = new Date(data.date)
        const month = date.toLocaleString("default", { month: "long" })

        if (!acc[month]) {
          acc[month] = {
            visitors: [],
            sessionDuration: [],
            bounceRate: [],
            conversionRate: [],
          }
        }

        acc[month].visitors.push(data.uniqueVisitors || 0)
        acc[month].sessionDuration.push(data.sessionDuration || 0)
        acc[month].bounceRate.push(data.bounceRate || 0)
        acc[month].conversionRate.push(data.conversionRate || 0)

        return acc
      },
      {}
    )

    const perMonth = Object.entries(monthlyData).map(
      ([month, data]: [string, MonthlyMetrics]) => ({
        month,
        visitors: data.visitors.reduce(
          (sum: number, val: number) => sum + val,
          0
        ),
        sessionDuration: data.sessionDuration.reduce(
          (sum: number, val: number) => sum + val,
          0
        ),
        bounceRate:
          data.bounceRate.reduce((sum: number, val: number) => sum + val, 0) /
          data.bounceRate.length,
        conversionRate:
          data.conversionRate.reduce(
            (sum: number, val: number) => sum + val,
            0
          ) / data.conversionRate.length,
      })
    )

    return {
      uniqueVisitors: {
        averageValue: totalVisitors / dataLength,
        percentageChange: visitorsChange,
        perMonth: perMonth.map((data, index) => ({
          month: data.month,
          value: data.visitors,
          fill: index % 2 === 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))",
        })),
      },
      averageSessionDuration: {
        averageValue: totalSessionDuration / dataLength,
        percentageChange: sessionDurationChange,
        perMonth: perMonth.map((data, index) => ({
          month: data.month,
          value: data.sessionDuration,
          fill: index % 2 === 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))",
        })),
      },
      bounceRate: {
        averageValue: totalBounceRate / dataLength,
        percentageChange: bounceRateChange,
        perMonth: perMonth.map((data, index) => ({
          month: data.month,
          value: data.bounceRate,
          fill: index % 2 === 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))",
        })),
      },
      conversionRate: {
        averageValue: totalConversionRate / dataLength,
        percentageChange: conversionRateChange,
        perMonth: perMonth.map((data, index) => ({
          month: data.month,
          value: data.conversionRate,
          fill: index % 2 === 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))",
        })),
      },
    }
  } catch (error) {
    console.error("Error fetching overview data:", error)
    // Return fallback data
    return {
      uniqueVisitors: {
        averageValue: 0,
        percentageChange: 0,
        perMonth: [],
      },
      averageSessionDuration: {
        averageValue: 0,
        percentageChange: 0,
        perMonth: [],
      },
      bounceRate: {
        averageValue: 0,
        percentageChange: 0,
        perMonth: [],
      },
      conversionRate: {
        averageValue: 0,
        percentageChange: 0,
        perMonth: [],
      },
    }
  }
}

// Fallback static data for backward compatibility
export const overviewData: OverviewType = {
  uniqueVisitors: {
    averageValue: 15091.67,
    percentageChange: 0.07,
    perMonth: [
      { month: "January", value: 12000 },
      { month: "February", value: 16000 },
      { month: "March", value: 15050 },
      { month: "April", value: 14000 },
      { month: "May", value: 17500 },
      { month: "June", value: 16000 },
    ],
  },
  averageSessionDuration: {
    averageValue: 73333.33,
    percentageChange: -0.04,
    perMonth: [
      { month: "January", value: 110000, fill: "hsl(var(--chart-1))" },
      { month: "February", value: -90000, fill: "hsl(var(--chart-2))" },
      { month: "March", value: 220000, fill: "hsl(var(--chart-1))" },
      { month: "April", value: -130000, fill: "hsl(var(--chart-2))" },
      { month: "May", value: 135000, fill: "hsl(var(--chart-1))" },
      { month: "June", value: 195000, fill: "hsl(var(--chart-1))" },
    ],
  },
  bounceRate: {
    averageValue: 0.5933,
    percentageChange: 0.05,
    perMonth: [
      { month: "January", value: 0.12 },
      { month: "February", value: 0.55 },
      { month: "March", value: 0.68 },
      { month: "April", value: 0.48 },
      { month: "May", value: 0.7 },
      { month: "June", value: 0.53 },
    ],
  },
  conversionRate: {
    averageValue: 0.5631,
    percentageChange: 0.038,
    perMonth: [
      { month: "January", value: 0.4 },
      { month: "February", value: 0.48 },
      { month: "March", value: 0.43 },
      { month: "April", value: 0.6 },
      { month: "May", value: 0.52 },
      { month: "June", value: 0.75 },
    ],
  },
}
