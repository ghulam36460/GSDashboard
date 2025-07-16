import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { ProductCategory } from "@/components/pages/products"

export const metadata: Metadata = {
  title: "Product Categories",
}

export default async function ProductCategoryPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <ProductCategory dictionary={dictionary} />
}
