import type { Metadata } from "next"

import { paymentData } from "./_data/payment"

import { CardTitle } from "@/components/ui/card"
import { EnhancedPaymentContent } from "./_components/enhanced-payment-content"

// Define metadata for the page
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: "Payment - Enhanced with Mobile & Crypto Options",
}

export default function PaymentPage() {
  return (
    <section className="container p-4">
      <div className="space-y-2 pb-6">
        <CardTitle>Enhanced Payment Options</CardTitle>
        <p className="text-muted-foreground">
          Choose from multiple payment methods including mobile wallets, bank
          transfers, and cryptocurrency
        </p>
      </div>
      <EnhancedPaymentContent data={paymentData} />
    </section>
  )
}
