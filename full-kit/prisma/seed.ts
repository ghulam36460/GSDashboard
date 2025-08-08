import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  try {
    // Check if any users exist
    const userCount = await prisma.user.count()

    if (userCount > 0) {
      console.log("Database already seeded")
      return
    }

    // Create default admin user
    const hashedPassword = await hash("admin123", 12)

    const adminUser = await prisma.user.create({
      data: {
        name: "Admin User",
        email: "admin@example.com",
        username: "admin",
        password: hashedPassword,
        role: "ADMIN",
        status: "ONLINE",
        avatar: "/images/avatars/male-01.svg",
        preferences: {
          create: {
            theme: "zinc",
            mode: "light",
            radius: "0.5",
            layout: "vertical",
            direction: "ltr",
          },
        },
      },
    })

    console.log("Seeded admin user:", adminUser.email)

    // Create sample analytics data for the admin user
    const analyticsData = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)

      analyticsData.push({
        userId: adminUser.id,
        date,
        uniqueVisitors: Math.floor(Math.random() * 1000) + 500,
        sessionDuration: Math.floor(Math.random() * 300) + 100,
        bounceRate: Math.random() * 0.5 + 0.2,
        conversionRate: Math.random() * 0.1 + 0.02,
        pageViews: Math.floor(Math.random() * 2000) + 1000,
      })
    }

    await prisma.analyticsData.createMany({
      data: analyticsData,
    })

    console.log("Created sample analytics data")

    // Create sample CRM data
    const crmData = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)

      crmData.push({
        userId: adminUser.id,
        date,
        totalSales: Math.floor(Math.random() * 50000) + 10000,
        totalProfit: Math.floor(Math.random() * 15000) + 3000,
        revenueGrowth: Math.floor(Math.random() * 20000) + 5000,
        newCustomers: Math.floor(Math.random() * 50) + 10,
      })
    }

    await prisma.cRMData.createMany({
      data: crmData,
    })

    console.log("Created sample CRM data")

    // Create sample ecommerce data
    const ecommerceData = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)

      ecommerceData.push({
        userId: adminUser.id,
        date,
        totalSales: Math.floor(Math.random() * 100000) + 20000,
        revenueSummary: Math.floor(Math.random() * 80000) + 15000,
        numberOfOrders: Math.floor(Math.random() * 100) + 20,
        averageOrderValue: Math.floor(Math.random() * 500) + 100,
      })
    }

    await prisma.ecommerceData.createMany({
      data: ecommerceData,
    })

    console.log("Created sample ecommerce data")

    // Create sample todos
    const sampleTodos = [
      {
        title: "Review quarterly sales report",
        description:
          "Analyze Q4 sales data and prepare summary for stakeholders",
        priority: "High",
        category: "Work",
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        userId: adminUser.id,
      },
      {
        title: "Update customer database",
        description:
          "Clean up duplicate entries and update contact information",
        priority: "Medium",
        category: "Admin",
        dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
        userId: adminUser.id,
      },
      {
        title: "Schedule team meeting",
        description: "Plan weekly team sync for next week",
        priority: "Medium",
        category: "Management",
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
        userId: adminUser.id,
      },
      {
        title: "Order office supplies",
        description: "Restock printer paper, pens, and notebooks",
        priority: "Low",
        category: "Admin",
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        userId: adminUser.id,
      },
      {
        title: "Prepare presentation slides",
        description: "Create slides for client presentation next week",
        priority: "High",
        category: "Work",
        dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
        userId: adminUser.id,
      },
    ]

    await prisma.todo.createMany({
      data: sampleTodos,
    })

    console.log("Created sample todos")

    // Create sample projects
    const sampleProjects = [
      {
        name: "E-Commerce Platform Redesign",
        description: "Complete redesign of the main e-commerce platform",
        status: "Active",
        progress: 85,
        startDate: new Date("2024-01-15"),
        dueDate: new Date("2024-10-01"),
        userId: adminUser.id,
      },
      {
        name: "Mobile App Development",
        description: "Develop new mobile app for iOS and Android",
        status: "Active",
        progress: 60,
        startDate: new Date("2024-03-10"),
        dueDate: new Date("2024-09-30"),
        userId: adminUser.id,
      },
      {
        name: "Marketing Automation Setup",
        description: "Implement automated marketing workflows",
        status: "On Hold",
        progress: 40,
        startDate: new Date("2024-05-05"),
        dueDate: new Date("2024-12-15"),
        userId: adminUser.id,
      },
    ]

    await prisma.project.createMany({
      data: sampleProjects,
    })

    console.log("Created sample projects")

    // Create sample contacts
    const sampleContacts = [
      {
        name: "John Smith",
        email: "john.smith@company.com",
        phone: "+1-555-0123",
        company: "Tech Corp",
        position: "CEO",
        status: "Active",
        notes: "Key decision maker for enterprise deals",
        userId: adminUser.id,
      },
      {
        name: "Sarah Johnson",
        email: "sarah.johnson@startup.com",
        phone: "+1-555-0456",
        company: "Startup Inc",
        position: "CTO",
        status: "Lead",
        notes: "Interested in our enterprise solution",
        userId: adminUser.id,
      },
      {
        name: "Mike Wilson",
        email: "mike.wilson@agency.com",
        phone: "+1-555-0789",
        company: "Digital Agency",
        position: "Project Manager",
        status: "Active",
        notes: "Regular client for web development projects",
        userId: adminUser.id,
      },
    ]

    await prisma.contact.createMany({
      data: sampleContacts,
    })

    console.log("Created sample contacts")

    // Create sample products
    const sampleProducts = [
      {
        name: "Premium Widget",
        description: "High-quality widget for professional use",
        price: 99.99,
        category: "Electronics",
        stock: 50,
        status: "Active",
        userId: adminUser.id,
      },
      {
        name: "Design Template Pack",
        description: "Collection of professional design templates",
        price: 29.99,
        category: "Design",
        stock: 100,
        status: "Active",
        userId: adminUser.id,
      },
      {
        name: "Software License",
        description: "Annual software license for enterprise",
        price: 499.99,
        category: "Software",
        stock: 25,
        status: "Active",
        userId: adminUser.id,
      },
    ]

    await prisma.product.createMany({
      data: sampleProducts,
    })

    console.log("Created sample products")

    // Create sample orders
    const sampleOrders = [
      {
        orderNumber: "ORD-001",
        customerName: "John Smith",
        totalAmount: 299.97,
        status: "Delivered",
        orderDate: new Date("2024-01-15"),
        userId: adminUser.id,
      },
      {
        orderNumber: "ORD-002",
        customerName: "Sarah Johnson",
        totalAmount: 99.99,
        status: "Processing",
        orderDate: new Date("2024-01-20"),
        userId: adminUser.id,
      },
      {
        orderNumber: "ORD-003",
        customerName: "Mike Wilson",
        totalAmount: 149.98,
        status: "Shipped",
        orderDate: new Date("2024-01-25"),
        userId: adminUser.id,
      },
    ]

    await prisma.order.createMany({
      data: sampleOrders,
    })

    console.log("Created sample orders")

    // Create sample notifications
    await prisma.notification.createMany({
      data: [
        {
          userId: adminUser.id,
          type: "info",
          title: "Welcome to GS Dashboard",
          message: "Your admin account has been set up successfully.",
          url: "/",
        },
        {
          userId: adminUser.id,
          type: "success",
          title: "Data Seeded",
          message: "Sample data has been populated for demo.",
          url: "/dashboards/analytics",
        },
      ],
    })

    console.log("Created sample notifications")

    console.log("Database seeding completed successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
