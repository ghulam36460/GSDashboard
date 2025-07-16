import type { DictionaryType } from "@/lib/get-dictionary"

import {
  Auth,
  AuthDescription,
  AuthForm,
  AuthHeader,
  AuthTitle,
} from "./auth-layout"
import { ForgotPasswordForm } from "./forgot-password-form"

export function ForgotPassword({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <Auth dictionary={dictionary}>
      <AuthHeader>
        <AuthTitle>Forgot Password</AuthTitle>
        <AuthDescription>
          Enter your email below to send you instructions to reset your password
        </AuthDescription>
      </AuthHeader>
      <AuthForm>
        <ForgotPasswordForm />
      </AuthForm>
      <div className="text-center mt-6">
        <p className="text-xs text-muted-foreground">
          Developed by Ghulam & Shehwar
        </p>
      </div>
    </Auth>
  )
}
