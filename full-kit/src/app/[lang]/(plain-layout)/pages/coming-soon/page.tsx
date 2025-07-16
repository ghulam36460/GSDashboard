import type { Metadata } from "next"

import { ComingSoon } from "@/components/pages/coming-soon"

export const metadata: Metadata = {
  title: "Coming Soon",
}

export default function ComingSoonPage() {
  // Get the current date and add two days
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 2)

  return <ComingSoon targetDate={targetDate} />
}
