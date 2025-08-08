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
    default: "GSDashboard",
  },
  description: "",
  metadataBase: getValidBaseUrl(),
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
