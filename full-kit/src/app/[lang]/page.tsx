import { redirect } from "next/navigation"

import type { LocaleType } from "@/types"

export default async function RootPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params

  // Redirect to analytics dashboard as the default home page
  redirect(`/${params.lang}/dashboards/analytics`)
}
