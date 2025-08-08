import { redirect } from "next/navigation"

import { i18n } from "@/configs/i18n"

export default function RootRedirect() {
  // Fallback redirect from non-localized "/" to default locale
  return redirect(`/${i18n.defaultLocale}`)
}
