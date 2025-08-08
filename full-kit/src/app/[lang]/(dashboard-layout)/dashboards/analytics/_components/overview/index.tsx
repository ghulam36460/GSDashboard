"use client"

import { useEffect, useState } from "react"

import type { OverviewType } from "../../types"

import { AverageSessionDuration } from "./average-session-duration"
import { BounceRate } from "./bounce-rate"
import { ConversionRate } from "./conversion-rate"
import { UniqueVisitors } from "./unique-visitors"

interface AnalyticsDataFromDB {
  date: string
  uniqueVisitors?: number
  sessionDuration?: number
  bounceRate?: number
  conversionRate?: number
}

interface MonthlyMetrics {
  visitors: number[]
  sessionDuration: number[]
  bounceRate: number[]
  conversionRate: number[]
}

export function Overview() {
  const [overviewData, setOverviewData] = useState<OverviewType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const response = await fetch("/api/analytics?period=30")
        if (response.ok) {
          const analyticsData = await response.json()

          if (!analyticsData || analyticsData.length === 0) {
            // Return default data if no analytics data exists
            setOverviewData({
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
            })
            return
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
            (sum: number, data: AnalyticsDataFromDB) =>
              sum + (data.bounceRate || 0),
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
          const monthlyData = analyticsData.reduce(
            (
              acc: Record<string, MonthlyMetrics>,
              data: AnalyticsDataFromDB
            ) => {
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

          const perMonth = Object.entries(monthlyData).map(([month, data]) => {
            const monthData = data as MonthlyMetrics
            return {
              month,
              visitors: monthData.visitors.reduce(
                (sum: number, val: number) => sum + val,
                0
              ),
              sessionDuration: monthData.sessionDuration.reduce(
                (sum: number, val: number) => sum + val,
                0
              ),
              bounceRate:
                monthData.bounceRate.reduce(
                  (sum: number, val: number) => sum + val,
                  0
                ) / monthData.bounceRate.length,
              conversionRate:
                monthData.conversionRate.reduce(
                  (sum: number, val: number) => sum + val,
                  0
                ) / monthData.conversionRate.length,
            }
          })

          setOverviewData({
            uniqueVisitors: {
              averageValue: totalVisitors / dataLength,
              percentageChange: visitorsChange,
              perMonth: perMonth.map((data, index) => ({
                month: data.month,
                value: data.visitors,
                fill:
                  index % 2 === 0
                    ? "hsl(var(--chart-1))"
                    : "hsl(var(--chart-2))",
              })),
            },
            averageSessionDuration: {
              averageValue: totalSessionDuration / dataLength,
              percentageChange: sessionDurationChange,
              perMonth: perMonth.map((data, index) => ({
                month: data.month,
                value: data.sessionDuration,
                fill:
                  index % 2 === 0
                    ? "hsl(var(--chart-1))"
                    : "hsl(var(--chart-2))",
              })),
            },
            bounceRate: {
              averageValue: totalBounceRate / dataLength,
              percentageChange: bounceRateChange,
              perMonth: perMonth.map((data, index) => ({
                month: data.month,
                value: data.bounceRate,
                fill:
                  index % 2 === 0
                    ? "hsl(var(--chart-1))"
                    : "hsl(var(--chart-2))",
              })),
            },
            conversionRate: {
              averageValue: totalConversionRate / dataLength,
              percentageChange: conversionRateChange,
              perMonth: perMonth.map((data, index) => ({
                month: data.month,
                value: data.conversionRate,
                fill:
                  index % 2 === 0
                    ? "hsl(var(--chart-1))"
                    : "hsl(var(--chart-2))",
              })),
            },
          })
        }
      } catch (error) {
        console.error("Error fetching overview data:", error)
        // Set fallback data
        setOverviewData({
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
        })
      } finally {
        setLoading(false)
      }
    }

    fetchOverviewData()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-full md:grid-cols-4">
        <div className="h-32 bg-muted animate-pulse rounded-lg" />
        <div className="h-32 bg-muted animate-pulse rounded-lg" />
        <div className="h-32 bg-muted animate-pulse rounded-lg" />
        <div className="h-32 bg-muted animate-pulse rounded-lg" />
      </div>
    )
  }

  if (!overviewData) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-full md:grid-cols-4">
        <div className="h-32 flex items-center justify-center">
          <p className="text-muted-foreground">No data available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-full md:grid-cols-4">
      <UniqueVisitors data={overviewData.uniqueVisitors} />
      <AverageSessionDuration data={overviewData.averageSessionDuration} />
      <BounceRate data={overviewData.bounceRate} />
      <ConversionRate data={overviewData.conversionRate} />
    </div>
  )
}
