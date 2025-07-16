"use client"

// Product category management component
import { useState } from "react"
import { Filter, Plus, Search, Tag } from "lucide-react"

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

const mockCategories = [
  {
    id: "1",
    name: "Electronics",
    description: "Electronic devices and accessories",
    products: 45,
    status: "Active",
    color: "bg-blue-500",
  },
  {
    id: "2",
    name: "Clothing",
    description: "Fashion and apparel items",
    products: 128,
    status: "Active",
    color: "bg-green-500",
  },
  {
    id: "3",
    name: "Home & Garden",
    description: "Home improvement and garden tools",
    products: 67,
    status: "Active",
    color: "bg-orange-500",
  },
  {
    id: "4",
    name: "Sports",
    description: "Sports equipment and fitness gear",
    products: 23,
    status: "Active",
    color: "bg-red-500",
  },
  {
    id: "5",
    name: "Books",
    description: "Books and educational materials",
    products: 89,
    status: "Active",
    color: "bg-purple-500",
  },
  {
    id: "6",
    name: "Toys",
    description: "Children's toys and games",
    products: 34,
    status: "Inactive",
    color: "bg-yellow-500",
  },
]

export function ProductCategory({
  dictionary: _,
}: {
  dictionary: DictionaryType
}) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCategories = mockCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "Inactive":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Product Categories</h1>
          <p className="text-muted-foreground">
            Organize your products into categories
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Categories
            </CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockCategories.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockCategories.filter((c) => c.status === "Active").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockCategories.reduce((acc, c) => acc + c.products, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average per Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                mockCategories.reduce((acc, c) => acc + c.products, 0) /
                  mockCategories.length
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Categories</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full ${category.color}`}
                      />
                      <div className="font-medium">{category.name}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {category.description}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {category.products} products
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(category.status)}>
                      {category.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        View Products
                      </Button>
                    </div>
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

// Explicit export for TypeScript module resolution
export default ProductCategory
