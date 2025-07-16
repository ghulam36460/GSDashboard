import type { Metadata } from "next"

import { NotFound404 } from "@/components/pages/not-found-404"

export const metadata: Metadata = {
  title: "Page Not Found",
}

export default function NotFound404Page() {
  return <NotFound404 />
}
