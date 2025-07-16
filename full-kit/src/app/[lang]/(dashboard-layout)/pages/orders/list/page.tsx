import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { OrdersList } from "@/components/pages/orders/orders-list"

export const metadata: Metadata = {
  title: "Orders List",
}

export default async function OrdersListPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <OrdersList dictionary={dictionary} />
}
