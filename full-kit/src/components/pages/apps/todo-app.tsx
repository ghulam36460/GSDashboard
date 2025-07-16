"use client"

import { useState } from "react"
import { CheckCircle, Circle, Edit, Plus, Search, Trash2 } from "lucide-react"

import type { DictionaryType } from "@/lib/get-dictionary"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Todo {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: "Low" | "Medium" | "High"
  dueDate?: string
  category: string
}

const mockTodos: Todo[] = [
  {
    id: "1",
    title: "Review quarterly sales report",
    description: "Analyze Q4 sales data and prepare summary",
    completed: false,
    priority: "High",
    dueDate: "2024-01-20",
    category: "Work",
  },
  {
    id: "2",
    title: "Update customer database",
    description: "Clean up duplicate entries and update contact information",
    completed: true,
    priority: "Medium",
    dueDate: "2024-01-18",
    category: "Admin",
  },
  {
    id: "3",
    title: "Schedule team meeting",
    description: "Plan weekly team sync for next week",
    completed: false,
    priority: "Medium",
    dueDate: "2024-01-19",
    category: "Management",
  },
  {
    id: "4",
    title: "Order office supplies",
    description: "Restock printer paper, pens, and notebooks",
    completed: false,
    priority: "Low",
    dueDate: "2024-01-25",
    category: "Admin",
  },
  {
    id: "5",
    title: "Prepare presentation slides",
    description: "Create slides for client presentation next week",
    completed: false,
    priority: "High",
    dueDate: "2024-01-22",
    category: "Work",
  },
  {
    id: "6",
    title: "Call insurance company",
    description: "Inquire about policy renewal",
    completed: true,
    priority: "Medium",
    dueDate: "2024-01-15",
    category: "Personal",
  },
]

export function TodoApp({ dictionary: _ }: { dictionary: DictionaryType }) {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<
    "all" | "completed" | "pending"
  >("all")
  const [filterPriority, setFilterPriority] = useState<
    "all" | "High" | "Medium" | "Low"
  >("all")

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch =
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "completed" && todo.completed) ||
      (filterStatus === "pending" && !todo.completed)

    const matchesPriority =
      filterPriority === "all" || todo.priority === filterPriority

    return matchesSearch && matchesStatus && matchesPriority
  })

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive"
      case "Medium":
        return "default"
      case "Low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const pendingCount = todos.filter((todo) => !todo.completed).length
  const highPriorityCount = todos.filter(
    (todo) => todo.priority === "High" && !todo.completed
  ).length

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Todo App</h1>
          <p className="text-muted-foreground">
            Manage your tasks and stay organized
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todos.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Circle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highPriorityCount}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Tasks</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
              <Select
                value={filterStatus}
                onValueChange={(value: "all" | "completed" | "pending") =>
                  setFilterStatus(value)
                }
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={filterPriority}
                onValueChange={(value: "all" | "High" | "Medium" | "Low") =>
                  setFilterPriority(value)
                }
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-4 p-4 border rounded-lg ${
                  todo.completed ? "bg-muted/50" : "bg-background"
                }`}
              >
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3
                      className={`font-medium ${todo.completed ? "line-through text-muted-foreground" : ""}`}
                    >
                      {todo.title}
                    </h3>
                    <Badge
                      variant={getPriorityVariant(todo.priority)}
                      className="text-xs"
                    >
                      {todo.priority}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {todo.category}
                    </Badge>
                  </div>
                  {todo.description && (
                    <p
                      className={`text-sm ${todo.completed ? "line-through text-muted-foreground" : "text-muted-foreground"}`}
                    >
                      {todo.description}
                    </p>
                  )}
                  {todo.dueDate && (
                    <p className="text-xs text-muted-foreground">
                      Due: {todo.dueDate}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
            {filteredTodos.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No tasks found matching your criteria.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
