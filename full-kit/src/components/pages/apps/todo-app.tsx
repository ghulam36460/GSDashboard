"use client"

import { useCallback, useEffect, useState } from "react"
import { Edit, Plus, Search, Trash2 } from "lucide-react"

import type { DictionaryType } from "@/lib/get-dictionary"

import { useToast } from "@/hooks/use-toast"
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
  category?: string
}

export function TodoApp({ dictionary: _ }: { dictionary: DictionaryType }) {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<
    "all" | "completed" | "pending"
  >("all")
  const [filterPriority, setFilterPriority] = useState<
    "all" | "High" | "Medium" | "Low"
  >("all")
  const [newTodo, setNewTodo] = useState<{
    title: string
    description: string
    priority: "Low" | "Medium" | "High"
    dueDate: string
    category: string
  }>({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    category: "",
  })
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null)
  const { toast } = useToast()

  // Fetch todos from API
  const fetchTodos = useCallback(async () => {
    try {
      const response = await fetch("/api/todos")
      if (response.ok) {
        const data = await response.json()
        setTodos(data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch todos",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching todos:", error)
      toast({
        title: "Error",
        description: "Failed to fetch todos",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }, [toast])

  // Create new todo
  const createTodo = async () => {
    if (!newTodo.title.trim()) return

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      })

      if (response.ok) {
        const createdTodo = await response.json()
        setTodos([createdTodo, ...todos])
        setNewTodo({
          title: "",
          description: "",
          priority: "Medium",
          dueDate: "",
          category: "",
        })
        toast({
          title: "Success",
          description: "Todo created successfully",
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to create todo",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error creating todo:", error)
      toast({
        title: "Error",
        description: "Failed to create todo",
        variant: "destructive",
      })
    }
  }

  // Update todo
  const updateTodo = async (todo: Todo) => {
    try {
      const response = await fetch(`/api/todos/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })

      if (response.ok) {
        const updatedTodo = await response.json()
        setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)))
        setEditingTodo(null)
        toast({
          title: "Success",
          description: "Todo updated successfully",
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to update todo",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error updating todo:", error)
      toast({
        title: "Error",
        description: "Failed to update todo",
        variant: "destructive",
      })
    }
  }

  // Delete todo
  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setTodos(todos.filter((todo) => todo.id !== id))
        toast({
          title: "Success",
          description: "Todo deleted successfully",
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to delete todo",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error deleting todo:", error)
      toast({
        title: "Error",
        description: "Failed to delete todo",
        variant: "destructive",
      })
    }
  }

  // Toggle todo completion
  const toggleTodo = (todo: Todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed }
    updateTodo(updatedTodo)
  }

  // Get priority variant for badge
  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive"
      case "Medium":
        return "default"
      case "Low":
        return "secondary"
      default:
        return "default"
    }
  }

  // Filter todos based on search and filters
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch =
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (todo.description &&
        todo.description.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "completed" && todo.completed) ||
      (filterStatus === "pending" && !todo.completed)

    const matchesPriority =
      filterPriority === "all" || todo.priority === filterPriority

    return matchesSearch && matchesStatus && matchesPriority
  })

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading todos...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Todo App</h1>
          <p className="text-muted-foreground">
            Manage your tasks and stay organized
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {todos.filter((todo) => !todo.completed).length} pending
          </span>
          <span className="text-sm text-muted-foreground">
            {todos.filter((todo) => todo.completed).length} completed
          </span>
        </div>
      </div>

      {/* Add New Todo */}
      <Card>
        <CardHeader>
          <CardTitle>Add New Todo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              placeholder="Todo title"
              value={newTodo.title}
              onChange={(e) =>
                setNewTodo({ ...newTodo, title: e.target.value })
              }
            />
            <Select
              value={newTodo.priority}
              onValueChange={(value) =>
                setNewTodo({
                  ...newTodo,
                  priority: value as "Low" | "Medium" | "High",
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              placeholder="Category (optional)"
              value={newTodo.category}
              onChange={(e) =>
                setNewTodo({ ...newTodo, category: e.target.value })
              }
            />
            <Input
              type="date"
              value={newTodo.dueDate}
              onChange={(e) =>
                setNewTodo({ ...newTodo, dueDate: e.target.value })
              }
            />
          </div>
          <Input
            placeholder="Description (optional)"
            value={newTodo.description}
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
          />
          <Button onClick={createTodo} className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Add Todo
          </Button>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select
          value={filterStatus}
          onValueChange={(value) =>
            setFilterStatus(value as "all" | "completed" | "pending")
          }
        >
          <SelectTrigger className="w-full sm:w-32">
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
          onValueChange={(value) =>
            setFilterPriority(value as "Low" | "Medium" | "High" | "all")
          }
        >
          <SelectTrigger className="w-full sm:w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="High">High</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Todo List */}
      <div className="space-y-4">
        {filteredTodos.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">No todos found</p>
            </CardContent>
          </Card>
        ) : (
          filteredTodos.map((todo) => (
            <Card key={todo.id}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3
                          className={`font-medium ${
                            todo.completed
                              ? "line-through text-muted-foreground"
                              : ""
                          }`}
                        >
                          {editingTodo?.id === todo.id ? (
                            <Input
                              value={editingTodo.title}
                              onChange={(e) =>
                                setEditingTodo({
                                  ...editingTodo,
                                  title: e.target.value,
                                })
                              }
                              className="max-w-xs"
                            />
                          ) : (
                            todo.title
                          )}
                        </h3>
                        {todo.description && (
                          <p
                            className={`text-sm text-muted-foreground ${
                              todo.completed ? "line-through" : ""
                            }`}
                          >
                            {editingTodo?.id === todo.id ? (
                              <Input
                                value={editingTodo.description || ""}
                                onChange={(e) =>
                                  setEditingTodo({
                                    ...editingTodo,
                                    description: e.target.value,
                                  })
                                }
                                className="mt-1 max-w-xs"
                              />
                            ) : (
                              todo.description
                            )}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant={getPriorityVariant(todo.priority)}>
                            {todo.priority}
                          </Badge>
                          {todo.category && (
                            <Badge variant="outline">{todo.category}</Badge>
                          )}
                          {todo.dueDate && (
                            <Badge variant="outline">
                              Due: {new Date(todo.dueDate).toLocaleDateString()}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {editingTodo?.id === todo.id ? (
                          <>
                            <Button
                              size="sm"
                              onClick={() => updateTodo(editingTodo)}
                            >
                              Save
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setEditingTodo(null)}
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setEditingTodo(todo)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => deleteTodo(todo.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
