import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { CustomerDetails } from "@/components/pages/customers/customer-details"

export const metadata: Metadata = {
  title: "Customer Details",
}

export default async function CustomerDetailsPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <CustomerDetails dictionary={dictionary} />
}
