import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { AddProduct } from "@/components/pages/products/add-product"

export const metadata: Metadata = {
  title: "Add Product",
}

export default async function AddProductPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <AddProduct dictionary={dictionary} />
}
