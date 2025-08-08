import { z } from "zod"

export const AccountRecoveryOptionsSchema = z.object({
  option: z.enum(["email", "sms", "codes"]),
})
