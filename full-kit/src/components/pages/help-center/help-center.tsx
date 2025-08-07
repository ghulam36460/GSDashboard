"use client"

import { useState } from "react"
import {
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Video,
} from "lucide-react"

import type { DictionaryType } from "@/lib/get-dictionary"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const helpCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics of using our platform",
    icon: FileText,
    articles: 12,
    color: "bg-blue-500",
  },
  {
    id: "account-management",
    title: "Account Management",
    description: "Manage your account settings and profile",
    icon: FileText,
    articles: 8,
    color: "bg-green-500",
  },
  {
    id: "billing-payments",
    title: "Billing & Payments",
    description: "Payment methods, invoices, and billing cycles",
    icon: FileText,
    articles: 15,
    color: "bg-orange-500",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Common issues and how to resolve them",
    icon: FileText,
    articles: 20,
    color: "bg-red-500",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "How to create your first GSDashboard",
    category: "Getting Started",
    views: 1250,
    helpful: 145,
  },
  {
    id: "2",
    title: "Setting up team permissions",
    category: "Account Management",
    views: 980,
    helpful: 87,
  },
  {
    id: "3",
    title: "Understanding your billing cycle",
    category: "Billing & Payments",
    views: 756,
    helpful: 92,
  },
  {
    id: "4",
    title: "Troubleshooting login issues",
    category: "Troubleshooting",
    views: 2340,
    helpful: 234,
  },
  {
    id: "5",
    title: "Integrating third-party tools",
    category: "Getting Started",
    views: 567,
    helpful: 45,
  },
]

const contactOptions = [
  {
    type: "Live Chat",
    description: "Chat with our support team",
    availability: "Available 24/7",
    icon: MessageCircle,
    action: "Start Chat",
  },
  {
    type: "Phone Support",
    description: "Call our support hotline",
    availability: "Mon-Fri, 9AM-6PM PST",
    icon: Phone,
    action: "Call Now",
  },
  {
    type: "Email Support",
    description: "Send us an email",
    availability: "Response within 24 hours",
    icon: Mail,
    action: "Send Email",
  },
  {
    type: "Video Call",
    description: "Schedule a video consultation",
    availability: "Book appointment",
    icon: Video,
    action: "Schedule",
  },
]

export function HelpCenter({ dictionary: _ }: { dictionary: DictionaryType }) {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Help Center</h1>
        <p className="text-xl text-muted-foreground">
          Find answers to your questions and get the help you need
        </p>
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>
      </div>

      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="browse">Browse Topics</TabsTrigger>
          <TabsTrigger value="popular">Popular Articles</TabsTrigger>
          <TabsTrigger value="contact">Contact Support</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {helpCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${category.color}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {category.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">
                        {category.articles} articles
                      </Badge>
                      <Button variant="outline" size="sm">
                        Browse Articles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Most Popular Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{article.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {article.views} views
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.helpful} found helpful
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {contactOptions.map((option) => {
              const IconComponent = option.icon
              return (
                <Card key={option.type}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{option.type}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground">
                        {option.availability}
                      </div>
                      <Button className="w-full">{option.action}</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Support Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Technical Support",
                    avatar: "/images/avatars/female-01.svg",
                  },
                  {
                    name: "Mike Chen",
                    role: "Billing Specialist",
                    avatar: "/images/avatars/male-01.svg",
                  },
                  {
                    name: "Lisa Rodriguez",
                    role: "Customer Success",
                    avatar: "/images/avatars/female-02.svg",
                  },
                ].map((member) => (
                  <div key={member.name} className="text-center space-y-2">
                    <Avatar className="h-16 w-16 mx-auto">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
