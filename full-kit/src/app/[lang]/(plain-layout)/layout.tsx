import type { ReactNode } from "react"

export default function GSDashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  return <main className="min-h-screen w-full">{children}</main>
}
