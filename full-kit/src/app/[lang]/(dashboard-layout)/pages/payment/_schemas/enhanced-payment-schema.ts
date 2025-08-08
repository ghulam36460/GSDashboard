import { z } from "zod"

// Digital wallet schema for standard services
const DigitalWalletSchema = z.object({
  paymentMethod: z.literal("digital_wallet"),
  walletType: z
    .enum(["paypal", "apple_pay", "google_pay", "stripe"])
    .optional(),
  email: z.string().email("Please enter a valid email address"),
  walletId: z.string().optional(),
  saveWallet: z.boolean().optional(),
})

// Bank transfer schema (simplified)
const BankTransferSchema = z.object({
  paymentMethod: z.literal("bank_transfer"),
  bankName: z.string().min(2, "Bank name is required"),
  accountNumber: z
    .string()
    .min(10, "Account number must be at least 10 digits"),
  accountTitle: z.string().min(2, "Account title is required"),
  routingNumber: z
    .string()
    .min(9, "Routing number must be at least 9 digits")
    .optional(),
  iban: z.string().optional(),
  saveAccount: z.boolean().optional(),
})

// Enhanced card schema (keeping existing functionality)
const CreditCardBaseSchema = z.object({
  paymentMethod: z.literal("credit_card"),
  savedCardId: z.string().optional(),
  cardNumber: z.string().optional(),
  cardName: z.string().optional(),
  expiry: z.string().optional(),
  cvc: z.string().optional(),
  saveCard: z.boolean().optional(),
})

// Saved payment method schema
const SavedPaymentSchema = z.object({
  paymentMethod: z.literal("saved"),
  savedPaymentId: z.string().optional(),
})

export type EnhancedPaymentMethodFormType = z.infer<
  typeof EnhancedPaymentMethodSchema
>
export const EnhancedPaymentMethodSchema = z
  .discriminatedUnion("paymentMethod", [
    SavedPaymentSchema,
    CreditCardBaseSchema,
    DigitalWalletSchema,
    BankTransferSchema,
  ])
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "credit_card") {
      // If using saved card
      if (data.savedCardId) {
        return
      }
      // If entering new card, all fields required
      if (!(data.cardNumber && data.cardName && data.expiry && data.cvc)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please select a saved card or fill in all card details",
          path: [],
        })
      }
    }

    if (data.paymentMethod === "digital_wallet") {
      if (!data.walletType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please select a wallet provider",
          path: ["walletType"],
        })
      }
    }
  })
