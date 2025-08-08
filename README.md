# GSDashboard

A modern, production-ready dashboard application built with Next.js 15, featuring comprehensive business management tools, analytics, and secure user management.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ghulam36460/GSDashboard&env=NEXTAUTH_SECRET,DATABASE_URL&envDescription=Required%20environment%20variables%20for%20deployment&envLink=https://github.com/ghulam36460/GSDashboard#environment-variables)

## ✨ Features

- 📊 **Analytics Dashboard** - Real-time business analytics and reporting
- 🛒 **E-commerce Management** - Products, orders, and payment processing
- 👥 **CRM System** - Contact and customer relationship management
- ✅ **Project Management** - Todo lists, projects, and task tracking
- 🔐 **Secure Authentication** - NextAuth with role-based access control
- 🌍 **Internationalization** - Multi-language support (English, Arabic, Urdu)
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- 🔒 **Enterprise Security** - CSRF protection, rate limiting, and security headers

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Database**: Prisma ORM with SQLite (dev) / PostgreSQL (prod)
- **Authentication**: NextAuth.js v4
- **Security**: CSRF protection, rate limiting, input sanitization
- **Deployment**: Vercel-optimized configuration

## 📦 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ghulam36460/GSDashboard.git
cd GSDashboard/full-kit
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Copy the environment file and configure:

```bash
cp .env.example .env.local
```

Update `.env.local` with your values:

```bash
# Required for deployment
NEXTAUTH_SECRET="your-secret-key-here"
DATABASE_URL="your-database-url"
NEXTAUTH_URL="https://your-app.vercel.app"
```

### 4. Database Setup

```bash
# Generate Prisma client
pnpm db:generate

# Run migrations
pnpm db:migrate

# Seed database with sample data
pnpm db:seed
```

### 5. Run Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your dashboard.

## 🚀 Deployment

### Automatic Vercel Deployment

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Connect Vercel**: Import your repository in Vercel
3. **Environment Variables**: Add required environment variables in Vercel dashboard
4. **Deploy**: Vercel will automatically build and deploy

### Required Environment Variables for Production

```bash
NEXTAUTH_SECRET=your-random-secret-minimum-32-chars
DATABASE_URL=your-production-database-url
NEXTAUTH_URL=https://your-app.vercel.app
```

### Optional Environment Variables

```bash
# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Analytics
GOOGLE_ANALYTICS_ID=your-ga-id

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🔧 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript check
pnpm db:generate  # Generate Prisma client
pnpm db:migrate   # Run database migrations
pnpm db:seed      # Seed database with sample data
pnpm db:studio    # Open Prisma Studio
```

## 📁 Project Structure

```
full-kit/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── [lang]/         # Internationalized routes
│   │   ├── api/            # API routes
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable React components
│   │   ├── ui/            # Base UI components
│   │   ├── dashboards/    # Dashboard-specific components
│   │   └── pages/         # Page-specific components
│   ├── lib/               # Utility functions and configurations
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   └── data/              # Static data and configurations
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── docs/                  # Documentation
```

## 🔐 Security Features

- **Authentication**: Secure user authentication with NextAuth.js
- **Authorization**: Role-based access control (Admin/User)
- **CSRF Protection**: Cross-site request forgery protection
- **Rate Limiting**: API rate limiting to prevent abuse
- **Input Sanitization**: XSS protection through input sanitization
- **Security Headers**: Comprehensive security headers configuration

## 🎨 Design System

- **Consistent**: Unified design language across all components
- **Responsive**: Mobile-first responsive design
- **Accessible**: WCAG 2.1 AA compliant
- **Customizable**: Easy theme customization with CSS variables
- **Performance**: Optimized for Core Web Vitals

## 📊 Features Overview

### Analytics Dashboard
- Real-time business metrics
- Interactive charts and graphs
- Performance tracking
- Revenue analytics

### E-commerce Management
- Product catalog management
- Order processing and tracking
- Payment integration
- Inventory management

### CRM System
- Contact management
- Customer interaction tracking
- Sales pipeline
- Communication history

### Project Management
- Task and todo management
- Project tracking
- Team collaboration
- Progress monitoring

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help with deployment:

1. Check the [Documentation](./docs)
2. Open an [Issue](https://github.com/ghulam36460/GSDashboard/issues)
3. Join our [Discussions](https://github.com/ghulam36460/GSDashboard/discussions)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- [Prisma](https://www.prisma.io/) - Next-generation database toolkit
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
