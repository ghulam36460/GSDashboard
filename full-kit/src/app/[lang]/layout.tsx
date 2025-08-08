import { Lato, Noto_Sans } from "next/font/google"
import { getServerSession } from "next-auth"

import { i18n } from "@/configs/i18n"
import { authOptions } from "@/configs/next-auth"
import { cn } from "@/lib/utils"

import "../globals.css"

import { Providers } from "@/providers"

import type { LocaleType } from "@/types"
import type { Metadata } from "next"
import type { ReactNode } from "react"

import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"

// Define metadata for the application
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
function getValidBaseUrl() {
  const url =
    process.env.BASE_URL ||
    process.env.NEXTAUTH_URL ||
    "https://gsdashboard-five.vercel.app"
  if (!url || url === "REPLACE_WITH_YOUR_VERCEL_URL") {
    // Use default URL for production builds
    return new URL("https://gsdashboard-five.vercel.app")
  }
  try {
    return new URL(url)
  } catch {
    throw new Error(`BASE_URL is invalid: ${url}`)
  }
}

export const metadata: Metadata = {
  title: {
    template: "%s | GSDashboard",
    default: "GSDashboard - Modern Business Dashboard",
  },
  description:
    "A comprehensive business dashboard with analytics, CRM, e-commerce management, and project tracking. Built with Next.js, TypeScript, and modern web technologies.",
  metadataBase: getValidBaseUrl(),
  keywords: [
    "dashboard",
    "analytics",
    "CRM",
    "e-commerce",
    "business management",
    "project tracking",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ghulam", url: "https://github.com/ghulam36460" }],
  creator: "Ghulam",
  openGraph: {
    title: "GSDashboard - Modern Business Dashboard",
    description:
      "Comprehensive business dashboard with analytics, CRM, and e-commerce management",
    url: getValidBaseUrl().toString(),
    siteName: "GSDashboard",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GSDashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSDashboard - Modern Business Dashboard",
    description:
      "Comprehensive business dashboard with analytics, CRM, and e-commerce management",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
const latoFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
})
const urduFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-urdu",
})

export default async function LangLayout(props: {
  children: ReactNode
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params

  const { children } = props

  const session = await getServerSession(authOptions)
  const direction = i18n.localeDirection[params.lang]

  return (
    <div
      className={cn(
        "[&:lang(en)]:font-lato [&:lang(ur)]:font-urdu",
        "bg-background text-foreground antialiased overscroll-none",
        latoFont.variable,
        urduFont.variable
      )}
      lang={params.lang}
      dir={direction}
    >
      <Providers locale={params.lang} direction={direction} session={session}>
        {children}
        <Toaster />
        <Sonner />
      </Providers>
    </div>
  )
}
