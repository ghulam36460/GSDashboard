import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { Unauthorized401 } from "@/components/pages/unauthorized-401"

export const metadata: Metadata = {
  title: "Unauthorized Access",
}

export default async function Unauthorized401Page(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  return <Unauthorized401 locale={params.lang} />
}
