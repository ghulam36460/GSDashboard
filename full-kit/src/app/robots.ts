import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXTAUTH_URL || "https://gsdashboard.vercel.app"

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/docs"],
        disallow: [
          "/api/",
          "/admin/",
          "/dashboards/",
          "/apps/",
          "/pages/",
          "/sign-in",
          "/register",
          "/forgot-password",
          "/verify-email",
          "/new-password",
          "/onboarding",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
