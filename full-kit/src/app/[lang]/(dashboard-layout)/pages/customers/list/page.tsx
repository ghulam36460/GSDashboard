import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { CustomersList } from "@/components/pages/customers/customers-list"

export const metadata: Metadata = {
  title: "Customers List",
}

export default async function CustomersListPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <CustomersList dictionary={dictionary} />
}
