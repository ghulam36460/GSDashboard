import { z } from "zod"

export const OnboardingSchema = z.object({
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^\+?[0-9\-\s()]+$/, "Invalid phone number format"),
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().optional(),
  postalCode: z.string().min(2, "Postal/ZIP is required"),
  country: z.string().min(1, "Country is required"),
  company: z.string().optional(),
  timeZone: z.string().optional(),
})

export type OnboardingFormType = z.infer<typeof OnboardingSchema>
