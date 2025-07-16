import type { DictionaryType } from "@/lib/get-dictionary"

import {
  Auth,
  AuthDescription,
  AuthForm,
  AuthHeader,
  AuthTitle,
} from "./auth-layout"
import { VerifyEmailForm } from "./verify-email-form"

export function VerifyEmail({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <Auth dictionary={dictionary}>
      <AuthHeader>
        <AuthTitle>Verify Your Email</AuthTitle>
        <AuthDescription>
          Check your inbox for an email from us and follow the verification link
        </AuthDescription>
      </AuthHeader>
      <AuthForm>
        <VerifyEmailForm />
      </AuthForm>
      <div className="text-center mt-6">
        <p className="text-xs text-muted-foreground">
          Developed by Ghulam & Shehwar
        </p>
      </div>
    </Auth>
  )
}
