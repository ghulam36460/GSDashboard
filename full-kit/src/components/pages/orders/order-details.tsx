"use client"

// Order details component for dashboard
import Link from "next/link"
import { ArrowLeft, Calendar, CreditCard, Package, Truck } from "lucide-react"

import type { DictionaryType } from "@/lib/get-dictionary"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const mockOrder = {
  id: "ORD-001",
  status: "Shipped",
  orderDate: "2024-01-15",
  shippedDate: "2024-01-16",
  estimatedDelivery: "2024-01-20",
  total: 234.75,
  subtotal: 199.75,
  shipping: 15.0,
  tax: 20.0,
  customer: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
  },
  shippingAddress: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
  },
  billingAddress: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
  },
  items: [
    {
      id: "1",
      name: "Wireless Headphones",
      image: "/images/products/headphones.jpg",
      price: 99.99,
      quantity: 1,
      total: 99.99,
    },
    {
      id: "2",
      name: "Smartphone Case",
      image: "/images/products/case.jpg",
      price: 24.99,
      quantity: 2,
      total: 49.98,
    },
    {
      id: "3",
      name: "USB Cable",
      image: "/images/products/cable.jpg",
      price: 12.99,
      quantity: 4,
      total: 51.96,
    },
  ],
  timeline: [
    {
      status: "Order Placed",
      date: "2024-01-15 10:30 AM",
      description: "Order has been placed successfully",
    },
    {
      status: "Payment Confirmed",
      date: "2024-01-15 10:35 AM",
      description: "Payment has been processed",
    },
    {
      status: "Processing",
      date: "2024-01-15 2:00 PM",
      description: "Order is being prepared for shipping",
    },
    {
      status: "Shipped",
      date: "2024-01-16 9:00 AM",
      description: "Order has been shipped via FedEx",
    },
  ],
}

export function OrderDetails({
  dictionary: _,
}: {
  dictionary: DictionaryType
}) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Delivered":
        return "default"
      case "Shipped":
        return "secondary"
      case "Processing":
        return "outline"
      case "Cancelled":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/orders">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Orders
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Order Details</h1>
          <p className="text-muted-foreground">Order #{mockOrder.id}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Order Status
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <Badge
                  variant={getStatusVariant(mockOrder.status)}
                  className="text-xs"
                >
                  {mockOrder.status}
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Order Date
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">{mockOrder.orderDate}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Shipped Date
                </CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">
                  {mockOrder.shippedDate}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Amount
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">${mockOrder.total}</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrder.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="font-medium">{item.name}</div>
                      </TableCell>
                      <TableCell>${item.price}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>${item.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${mockOrder.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>${mockOrder.shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>${mockOrder.tax}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>${mockOrder.total}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockOrder.timeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {index < mockOrder.timeline.length - 1 && (
                        <div className="w-px h-8 bg-border" />
                      )}
                    </div>
                    <div className="space-y-1 pb-4">
                      <div className="font-medium">{event.status}</div>
                      <div className="text-sm text-muted-foreground">
                        {event.date}
                      </div>
                      <div className="text-sm">{event.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="font-medium">{mockOrder.customer.name}</div>
                <div className="text-sm text-muted-foreground">
                  {mockOrder.customer.email}
                </div>
                <div className="text-sm text-muted-foreground">
                  {mockOrder.customer.phone}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <p>{mockOrder.shippingAddress.street}</p>
                <p>
                  {mockOrder.shippingAddress.city},{" "}
                  {mockOrder.shippingAddress.state}{" "}
                  {mockOrder.shippingAddress.zipCode}
                </p>
                <p>{mockOrder.shippingAddress.country}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <p>{mockOrder.billingAddress.street}</p>
                <p>
                  {mockOrder.billingAddress.city},{" "}
                  {mockOrder.billingAddress.state}{" "}
                  {mockOrder.billingAddress.zipCode}
                </p>
                <p>{mockOrder.billingAddress.country}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Explicit export for TypeScript module resolution
export default OrderDetails
