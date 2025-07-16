import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { ProductsList } from "@/components/pages/products/products-list"

export const metadata: Metadata = {
  title: "Products List",
}

export default async function ProductsListPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <ProductsList dictionary={dictionary} />
}
