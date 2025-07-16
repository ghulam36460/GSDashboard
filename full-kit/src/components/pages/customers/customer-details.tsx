"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
} from "lucide-react"

import type { DictionaryType } from "@/lib/get-dictionary"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

const mockCustomer = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  location: "New York, USA",
  joinDate: "2023-01-15",
  status: "Active",
  avatar: "/images/avatars/male-01.svg",
  totalOrders: 15,
  totalSpent: 1234.56,
  lastOrder: "2024-01-15",
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
  },
}

const mockOrders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Delivered",
    total: 89.99,
    items: 3,
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "Shipped",
    total: 156.5,
    items: 2,
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    status: "Processing",
    total: 234.75,
    items: 4,
  },
  {
    id: "ORD-004",
    date: "2023-12-28",
    status: "Delivered",
    total: 67.25,
    items: 1,
  },
  {
    id: "ORD-005",
    date: "2023-12-20",
    status: "Delivered",
    total: 345.99,
    items: 5,
  },
]

export function CustomerDetails({
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
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/customers">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Customers
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Customer Details</h1>
          <p className="text-muted-foreground">
            View and manage customer information
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mockCustomer.avatar} />
                  <AvatarFallback className="text-lg">
                    {mockCustomer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{mockCustomer.name}</h3>
                  <Badge variant="secondary">{mockCustomer.status}</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{mockCustomer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{mockCustomer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{mockCustomer.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Joined {mockCustomer.joinDate}
                  </span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Shipping Address</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>{mockCustomer.address.street}</p>
                  <p>
                    {mockCustomer.address.city}, {mockCustomer.address.state}{" "}
                    {mockCustomer.address.zipCode}
                  </p>
                  <p>{mockCustomer.address.country}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Orders
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockCustomer.totalOrders}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Spent
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${mockCustomer.totalSpent}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Last Order
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockCustomer.lastOrder}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.items} items</TableCell>
                      <TableCell>${order.total}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
