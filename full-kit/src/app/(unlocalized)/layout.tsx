import { Lato } from "next/font/google"

import "../globals.css"

import { Providers } from "@/providers"

import type { Metadata } from "next"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"

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
    default: "GSDashboard",
  },
  description: "",
  metadataBase: getValidBaseUrl(),
}

// Define fonts for the application
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
const latoFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "[&:lang(en)]:font-lato", // Set font styles based on the language
          "bg-background text-foreground antialiased overscroll-none", // Set background, text, , anti-aliasing styles, and overscroll behavior
          latoFont.variable // Include Lato font variable
        )}
      >
        <Providers locale="en" direction="ltr" session={null}>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  )
}
