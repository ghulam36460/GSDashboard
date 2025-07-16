"use client"

import { useState } from "react"
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Package,
  Plus,
  Search,
} from "lucide-react"

import type { DictionaryType } from "@/lib/get-dictionary"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const mockOrders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    date: "2025-01-15",
    total: 125.99,
    status: "Completed",
    items: 3,
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "2025-01-14",
    total: 89.5,
    status: "Processing",
    items: 2,
  },
  {
    id: "#ORD-003",
    customer: "Bob Johnson",
    email: "bob@example.com",
    date: "2025-01-13",
    total: 234.75,
    status: "Shipped",
    items: 5,
  },
  {
    id: "#ORD-004",
    customer: "Alice Brown",
    email: "alice@example.com",
    date: "2025-01-12",
    total: 67.25,
    status: "Pending",
    items: 1,
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Completed":
      return <CheckCircle className="h-4 w-4 text-green-600" />
    case "Processing":
      return <Clock className="h-4 w-4 text-blue-600" />
    case "Shipped":
      return <Package className="h-4 w-4 text-purple-600" />
    case "Pending":
      return <AlertCircle className="h-4 w-4 text-yellow-600" />
    default:
      return null
  }
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Completed":
      return "default"
    case "Processing":
      return "secondary"
    case "Shipped":
      return "outline"
    case "Pending":
      return "destructive"
    default:
      return "secondary"
  }
}

export function OrdersList({ dictionary: _ }: { dictionary: DictionaryType }) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredOrders = mockOrders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground">
            Manage customer orders and fulfillment
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Order
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockOrders.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockOrders.filter((o) => o.status === "Completed").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockOrders.filter((o) => o.status === "Processing").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${mockOrders.reduce((acc, o) => acc + o.total, 0).toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Recent Orders</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <div className="font-medium">{order.id}</div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customer}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>${order.total}</TableCell>
                  <TableCell>
                    <Badge
                      variant={getStatusVariant(order.status)}
                      className="flex items-center gap-1 w-fit"
                    >
                      {getStatusIcon(order.status)}
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
  )
}
