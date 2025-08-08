import type { z } from "zod"
import type { EnhancedPaymentMethodSchema } from "./_schemas/enhanced-payment-schema"
import type { PaymentMethodSchema } from "./_schemas/payment-method-schema"

export interface CardType {
  id: string
  cardType: string
  cardNumber: string
  cardName: string
  expiry: string
  cvc: string
  last4: string
  isDefault: boolean
}

export interface MobileWalletType {
  id: string
  provider: "easypaisa" | "jazzcash" | "upaisa"
  phoneNumber: string
  maskedNumber: string // e.g., "03XX-XXXX-789"
  isDefault: boolean
}

export interface BinanceAccountType {
  id: string
  binanceId: string
  currency: "USDT" | "BTC" | "ETH" | "BNB" | "BUSD"
  maskedId: string // e.g., "user***@email.com"
  isDefault: boolean
}

export interface BankAccountType {
  id: string
  bankName: string
  accountNumber: string
  accountTitle: string
  iban?: string
  maskedAccount: string // e.g., "****-****-1234"
  isDefault: boolean
}

export interface PaymentType {
  summary: {
    originalPrice: number
    savings: number
    storePickup: number
    tax: number
    total: number
  }
  savedCards: CardType[]
  savedWallets: MobileWalletType[]
  savedBinanceAccounts: BinanceAccountType[]
  savedBankAccounts: BankAccountType[]
}

export type PaymentMethodFormType = z.infer<typeof PaymentMethodSchema>
export type EnhancedPaymentMethodFormType = z.infer<
  typeof EnhancedPaymentMethodSchema
>
