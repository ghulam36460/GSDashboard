/**
 * Payment Types for International Payment Methods
 * Comprehensive type definitions for all supported payment methods
 */

// Base payment method interface
export interface BasePaymentMethod {
  type: string
  amount: number
  currency: string
}

// Credit Card Payment
export interface CreditCardPayment extends BasePaymentMethod {
  type: "card"
  cardNumber: string
  expiryMonth: number
  expiryYear: number
  cvv: string
  cardholderName: string
  billingAddress: {
    line1: string
    line2?: string
    city: string
    state: string
    postalCode: string
    country: string
  }
}

// Bank Transfer Payment
export interface BankTransferPayment extends BasePaymentMethod {
  type: "bank_transfer"
  accountNumber: string
  routingNumber: string
  accountHolderName: string
  bankName: string
}

// Digital Wallet Payment (PayPal, Apple Pay, Google Pay)
export interface DigitalWalletPayment extends BasePaymentMethod {
  type: "digital_wallet"
  walletType: "paypal" | "apple_pay" | "google_pay" | "stripe"
  email: string
  walletId?: string
}

// Cash on Delivery Payment
export interface CashOnDeliveryPayment extends BasePaymentMethod {
  type: "cash_on_delivery"
  deliveryAddress: {
    line1: string
    line2?: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  contactPhone: string
}

// Union type for all payment methods
export type EnhancedPaymentMethod =
  | CreditCardPayment
  | BankTransferPayment
  | DigitalWalletPayment
  | CashOnDeliveryPayment

// Payment status types
export type PaymentStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed"
  | "cancelled"
  | "refunded"

// Payment currency types
export type PaymentCurrency = "PKR" | "USD" | "EUR" | "GBP"

// Payment result interface
export interface PaymentResult {
  success: boolean
  transactionId?: string
  message: string
  redirectUrl?: string
  paymentMethod: string
  amount: number
  currency: string
}

// Payment webhook data interface
export interface PaymentWebhookData {
  transactionId: string
  status: "success" | "failed" | "pending"
  amount: number
  currency: string
  paymentMethod: string
  timestamp: string
}

// Payment configuration interface
export interface PaymentConfig {
  stripe: {
    publishableKey: string
    secretKey: string
    webhookSecret: string
  }
  paypal: {
    clientId: string
    clientSecret: string
    mode: "sandbox" | "live"
  }
}

// Payment validation error interface
export interface PaymentValidationError {
  field: string
  message: string
  code: string
}

// Payment response interface
export interface PaymentResponse {
  success: boolean
  message: string
  paymentId?: string
  transactionId?: string
  redirectUrl?: string
  paymentMethod?: string
  errors?: PaymentValidationError[]
}

// Payment history item interface
export interface PaymentHistoryItem {
  id: string
  amount: number
  currency: string
  paymentMethod: string
  status: PaymentStatus
  description?: string
  transactionId?: string
  createdAt: Date
  updatedAt: Date
}

// Payment history response interface
export interface PaymentHistoryResponse {
  success: boolean
  data: {
    payments: PaymentHistoryItem[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
}
