"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import type { EnhancedPaymentMethodFormType, PaymentType } from "../types"

import { EnhancedPaymentMethodSchema } from "../_schemas/enhanced-payment-schema"

import { getCreditCardBrandName } from "@/lib/utils"

import { ButtonLoading } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CreditCardBrandIcon } from "@/components/credit-card-brand-icon"
import { SavedCard } from "./saved-card"

interface EnhancedPaymentMethodFormProps {
  data: PaymentType
}

export function EnhancedPaymentMethodForm({
  data,
}: EnhancedPaymentMethodFormProps) {
  const [selectedMethod, setSelectedMethod] = useState<
    "saved" | "credit_card" | "digital_wallet" | "bank_transfer"
  >("credit_card")

  const form = useForm<EnhancedPaymentMethodFormType>({
    resolver: zodResolver(EnhancedPaymentMethodSchema),
    defaultValues: {
      paymentMethod: "credit_card",
    },
  })

  const { isSubmitting } = form.formState

  // Handle payment method change
  const handleMethodChange = (method: typeof selectedMethod) => {
    setSelectedMethod(method)
    form.setValue("paymentMethod", method)
    // Reset form with proper defaults based on method
    if (method === "credit_card") {
      form.reset({
        paymentMethod: "credit_card",
      })
    } else if (method === "digital_wallet") {
      form.reset({
        paymentMethod: "digital_wallet",
        email: "",
      })
    } else if (method === "bank_transfer") {
      form.reset({
        paymentMethod: "bank_transfer",
        bankName: "",
        accountNumber: "",
        accountTitle: "",
      })
    } else if (method === "saved") {
      form.reset({
        paymentMethod: "saved",
      })
    }
  }

  function onSubmit(formData: EnhancedPaymentMethodFormType) {
    console.log("Payment data:", formData)
    // Here you would integrate with your payment processor
  }

  return (
    <div className="space-y-6">
      {/* Payment Method Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedMethod}
            onValueChange={handleMethodChange}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="credit_card" id="credit_card" />
              <label
                htmlFor="credit_card"
                className="flex items-center space-x-2 cursor-pointer"
              >
                <span>💳</span>
                <span>Credit/Debit Card</span>
              </label>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="digital_wallet" id="digital_wallet" />
              <label
                htmlFor="digital_wallet"
                className="flex items-center space-x-2 cursor-pointer"
              >
                <span>📱</span>
                <span>Digital Wallet (PayPal, Apple Pay)</span>
              </label>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="bank_transfer" id="bank_transfer" />
              <label
                htmlFor="bank_transfer"
                className="flex items-center space-x-2 cursor-pointer"
              >
                <span>🏦</span>
                <span>Bank Transfer</span>
              </label>
            </div>

            {(data.savedCards.length > 0 ||
              data.savedWallets?.length > 0 ||
              data.savedBankAccounts?.length > 0 ||
              data.savedBinanceAccounts?.length > 0) && (
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="saved" id="saved" />
                <label
                  htmlFor="saved"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <span>💾</span>
                  <span>Saved Methods</span>
                </label>
              </div>
            )}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Payment Form */}
      <Form {...form}>
        <Card>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-6 space-y-6"
          >
            {/* Saved Payment Methods */}
            {selectedMethod === "saved" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Saved Payment Methods</h3>

                {data.savedCards.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Credit/Debit Cards</h4>
                    <FormField
                      control={form.control}
                      name="savedPaymentId"
                      render={({ field }) => (
                        <RadioGroup value={field.value} className="gap-3">
                          {data.savedCards.map((card) => (
                            <SavedCard
                              key={card.id}
                              card={card}
                              onSelect={field.onChange}
                            />
                          ))}
                        </RadioGroup>
                      )}
                    />
                  </div>
                )}

                {data.savedWallets && data.savedWallets.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Mobile Wallets</h4>
                    <FormField
                      control={form.control}
                      name="savedPaymentId"
                      render={({ field }) => (
                        <RadioGroup value={field.value} className="gap-3">
                          {data.savedWallets.map((wallet) => (
                            <div
                              key={wallet.id}
                              className="flex items-center space-x-2 p-3 border rounded-lg"
                            >
                              <RadioGroupItem
                                value={wallet.id}
                                onClick={() => field.onChange(wallet.id)}
                              />
                              <div className="flex-1">
                                <div className="font-medium capitalize">
                                  {wallet.provider}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {wallet.maskedNumber}
                                </div>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Credit Card Form */}
            {selectedMethod === "credit_card" && <CreditCardForm form={form} />}

            {/* Digital Wallet Form */}
            {selectedMethod === "digital_wallet" && (
              <DigitalWalletForm form={form} />
            )}

            {/* Bank Transfer Form */}
            {selectedMethod === "bank_transfer" && (
              <BankTransferForm form={form} />
            )}

            <ButtonLoading
              isLoading={isSubmitting}
              size="lg"
              className="w-full"
            >
              Pay now - ${data.summary.total.toFixed(2)}
            </ButtonLoading>
          </form>
        </Card>
      </Form>
    </div>
  )
}

// Credit Card Form Component
interface CreditCardFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any
}

function CreditCardForm({ form }: CreditCardFormProps) {
  const cardNumber = form.watch("cardNumber")
  const creditCardName = getCreditCardBrandName(cardNumber || "")

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Credit/Debit Card Details</h3>

      <FormField
        control={form.control}
        name="cardNumber"
        render={({ field }) => (
          <FormItem className="relative">
            <FormLabel>Card Number</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="ps-9"
                {...field}
              />
            </FormControl>
            <CreditCardBrandIcon
              brandName={creditCardName}
              className="absolute start-3 top-[2rem] h-4 w-4"
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="cardName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cardholder&apos;s Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex gap-x-4">
        <FormField
          control={form.control}
          name="expiry"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Expiry Date</FormLabel>
              <FormControl>
                <Input placeholder="MM/YY" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cvc"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>CVC</FormLabel>
              <FormControl>
                <Input placeholder="123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="saveCard"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center gap-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Save card for future billing?</FormLabel>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

// Digital Wallet Form Component
interface DigitalWalletFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any
}

function DigitalWalletForm({ form }: DigitalWalletFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Digital Wallet Payment</h3>

      <FormField
        control={form.control}
        name="walletType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Wallet Provider</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Choose wallet provider" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="paypal">
                  <div className="flex items-center space-x-2">
                    <span>�</span>
                    <span>PayPal</span>
                  </div>
                </SelectItem>
                <SelectItem value="apple_pay">
                  <div className="flex items-center space-x-2">
                    <span>🍎</span>
                    <span>Apple Pay</span>
                  </div>
                </SelectItem>
                <SelectItem value="google_pay">
                  <div className="flex items-center space-x-2">
                    <span>🎨</span>
                    <span>Google Pay</span>
                  </div>
                </SelectItem>
                <SelectItem value="stripe">
                  <div className="flex items-center space-x-2">
                    <span>�</span>
                    <span>Stripe</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input type="email" placeholder="you@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="walletId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Wallet ID (Optional)</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter wallet ID if available"
                {...field}
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="saveWallet"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center gap-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Save wallet for future payments?</FormLabel>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

// Bank Transfer Form Component
interface BankTransferFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any
}

function BankTransferForm({ form }: BankTransferFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Bank Transfer Details</h3>

      <FormField
        control={form.control}
        name="bankName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bank Name</FormLabel>
            <FormControl>
              <Input placeholder="e.g., HBL, UBL, MCB" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="accountNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Account Number</FormLabel>
            <FormControl>
              <Input placeholder="1234567890123456" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="accountTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Account Title</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="iban"
        render={({ field }) => (
          <FormItem>
            <FormLabel>IBAN (Optional)</FormLabel>
            <FormControl>
              <Input
                placeholder="PK12ABCD1234567890123456"
                {...field}
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="saveAccount"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center gap-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Save account for future transfers?</FormLabel>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
