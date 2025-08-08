import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { Onboarding } from "@/components/auth/onboarding"

export const metadata: Metadata = { title: "Complete your profile" }

export default async function OnboardingPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)
  return <Onboarding dictionary={dictionary} />
}
