import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { HelpCenter } from "@/components/pages/help-center/help-center"

export const metadata: Metadata = {
  title: "Help Center",
}

export default async function HelpCenterPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <HelpCenter dictionary={dictionary} />
}
