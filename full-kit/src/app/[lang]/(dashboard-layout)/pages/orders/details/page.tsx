import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { OrderDetails } from "@/components/pages/orders"

export const metadata: Metadata = {
  title: "Order Details",
}

export default async function OrderDetailsPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <OrderDetails dictionary={dictionary} />
}
