import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { TodoApp } from "@/components/pages/apps/todo-app"

export const metadata: Metadata = {
  title: "Todo",
}

export default async function TodoPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <TodoApp dictionary={dictionary} />
}
