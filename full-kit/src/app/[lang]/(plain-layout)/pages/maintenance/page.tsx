import type { Metadata } from "next"

import { Maintenance } from "@/components/pages/maintenance"

export const metadata: Metadata = {
  title: "Under Maintenance",
}

export default function MaintenancePage() {
  return <Maintenance />
}
