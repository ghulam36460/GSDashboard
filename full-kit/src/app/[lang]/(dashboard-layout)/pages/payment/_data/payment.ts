import type { PaymentType } from "../types"

export const paymentData: PaymentType = {
  summary: {
    originalPrice: 6592,
    savings: -299,
    storePickup: 99,
    tax: 799,
    total: 7191,
  },
  savedCards: [
    {
      id: "1",
      cardType: "Visa",
      cardNumber: "4532 9876 5432 1234",
      cardName: "John Doe",
      expiry: "11/24",
      cvc: "832",
      last4: "1234",
      isDefault: true,
    },
    {
      id: "2",
      cardType: "Mastercard",
      cardNumber: "6011 1234 5678 9012",
      cardName: "John Doe",
      expiry: "05/26",
      cvc: "237",
      last4: "9012",
      isDefault: false,
    },
  ],
  savedWallets: [
    {
      id: "wallet_1",
      provider: "easypaisa",
      phoneNumber: "03123456789",
      maskedNumber: "03XX-XXXX-789",
      isDefault: true,
    },
    {
      id: "wallet_2",
      provider: "jazzcash",
      phoneNumber: "03210987654",
      maskedNumber: "03XX-XXXX-654",
      isDefault: false,
    },
  ],
  savedBinanceAccounts: [
    {
      id: "binance_1",
      binanceId: "user@example.com",
      currency: "USDT",
      maskedId: "use***@example.com",
      isDefault: true,
    },
  ],
  savedBankAccounts: [
    {
      id: "bank_1",
      bankName: "Habib Bank Limited (HBL)",
      accountNumber: "1234567890123456",
      accountTitle: "John Doe",
      iban: "PK12HABB1234567890123456",
      maskedAccount: "****-****-3456",
      isDefault: true,
    },
  ],
}
