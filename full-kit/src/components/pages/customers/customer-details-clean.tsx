"use client"

import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"

import type { DictionaryType } from "@/lib/get-dictionary"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CustomerDetails({
  dictionary: _,
}: {
  dictionary: DictionaryType
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/pages/customers">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Customer Details</h1>
        </div>
      </div>

      <Card>
        <CardContent className="flex items-center justify-center p-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-medium">No Customer Data</h3>
              <p className="text-sm text-muted-foreground">
                Customer information will appear here when available.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
