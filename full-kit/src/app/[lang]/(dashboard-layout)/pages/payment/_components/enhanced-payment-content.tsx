import type { PaymentType } from "../types"

import { EnhancedPaymentMethodForm } from "./enhanced-payment-method-form"
import { PaymentSummary } from "./payment-summary"

export function EnhancedPaymentContent({ data }: { data: PaymentType }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex-1">
        <EnhancedPaymentMethodForm data={data} />
      </div>
      <div className="lg:w-80">
        <PaymentSummary data={data.summary} />
      </div>
    </div>
  )
}
