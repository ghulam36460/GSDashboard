# 🚀 Production Deployment Guide

## **✅ Pre-Deployment Checklist**

### **🔧 Environment Setup**

1. **PostgreSQL Database**
   - Set up production PostgreSQL database (recommend: Supabase, Neon, or Vercel Postgres)
   - Update `DATABASE_URL` in production environment
   - Run database migrations: `pnpm db:migrate`

2. **Environment Variables**

   ```bash
   # Copy .env.example to .env.local for production
   cp .env.example .env.local

   # Update all required variables:
   DATABASE_URL="postgresql://user:pass@host:5432/dbname"
   NEXTAUTH_URL="https://yourdomain.com"
   NEXTAUTH_SECRET="32-character-secret-key"

   # Payment Gateway Credentials
   EASYPAISA_MERCHANT_ID="your-merchant-id"
   EASYPAISA_API_KEY="your-api-key"
   EASYPAISA_API_SECRET="your-secret"

   # Security Keys
   PAYMENT_ENCRYPTION_KEY="32-character-encryption-key"
   CSRF_SECRET="32-character-csrf-secret"
   ```

### **🔐 Security Configuration**

1. **Generate Strong Secrets**

   ```bash
   # Generate NEXTAUTH_SECRET
   openssl rand -base64 32

   # Generate encryption keys
   openssl rand -hex 32
   ```

2. **Payment Gateway Setup**
   - **EasyPaisa**: Register merchant account, get API credentials
   - **JazzCash**: Set up merchant portal, obtain API keys
   - **UPaisa**: Create developer account, get sandbox/production keys
   - **Binance Pay**: Apply for merchant account, get API credentials

---

## **🌐 Vercel Deployment**

### **Step 1: Prepare Repository**

```bash
# Ensure all changes are committed
git add .
git commit -m "Production ready deployment"
git push origin main
```

### **Step 2: Deploy to Vercel**

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select the `full-kit` folder as root directory

2. **Configure Environment Variables**

   ```bash
   # In Vercel Dashboard > Settings > Environment Variables
   DATABASE_URL=postgresql://...
   NEXTAUTH_URL=https://your-app.vercel.app
   NEXTAUTH_SECRET=your-secret
   PAYMENT_ENCRYPTION_KEY=your-key
   CSRF_SECRET=your-csrf-secret

   # Payment Gateway Variables
   EASYPAISA_MERCHANT_ID=your-id
   EASYPAISA_API_KEY=your-key
   EASYPAISA_API_SECRET=your-secret
   EASYPAISA_ENVIRONMENT=production

   # Add all other payment gateway variables
   ```

3. **Build Configuration**
   - Framework: Next.js
   - Build Command: `pnpm build`
   - Install Command: `pnpm install --no-frozen-lockfile`
   - Root Directory: `full-kit`

### **Step 3: Database Migration**

```bash
# After deployment, run migrations
pnpm db:migrate
pnpm db:seed  # Optional: seed with initial data
```

---

## **🗄️ Database Setup Options**

### **Option 1: Vercel Postgres (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Create Postgres database
vercel postgres create gsdashboard

# Get connection string
vercel env pull .env.local
```

### **Option 2: Supabase**

1. Create project at [supabase.com](https://supabase.com)
2. Get connection string from Settings > Database
3. Enable Row Level Security for user data isolation

### **Option 3: Neon (Serverless Postgres)**

1. Create database at [neon.tech](https://neon.tech)
2. Copy connection string
3. Configure connection pooling

---

## **🔒 Security Hardening**

### **Content Security Policy**

Already configured in `vercel.json` and middleware:

- XSS Protection
- Frame Options
- Content Type Sniffing Prevention
- CSRF Protection

### **Rate Limiting**

- ✅ Implemented in security middleware
- 100 requests per 15 minutes per IP
- Configurable via environment variables

### **Data Encryption**

- ✅ Payment data encrypted with AES-256
- ✅ Card numbers encrypted before storage
- ✅ CVV data hashed, never stored

---

## **📊 Monitoring & Analytics**

### **Health Checks**

- Endpoint: `/api/health`
- Monitors: Database, Environment, Memory
- Status codes: 200 (healthy), 503 (unhealthy)

### **Logging**

```bash
# Production logging configuration
LOG_LEVEL=info
SENTRY_DSN=your-sentry-dsn  # Optional error tracking
```

### **Performance Monitoring**

- Enable Vercel Analytics
- Set up Sentry for error tracking
- Monitor payment success rates

---

## **💳 Payment Integration Testing**

### **Sandbox Testing**

1. **EasyPaisa Sandbox**
   - Use test phone numbers: +92300XXXXXXX
   - Test CNIC: 12345-1234567-1

2. **JazzCash Sandbox**
   - Test credentials provided by JazzCash
   - Use sandbox environment URLs

3. **Binance Pay Testnet**
   - Use testnet wallet addresses
   - Test with small crypto amounts

### **Production Validation**

```bash
# Test payment flow
curl -X POST https://your-app.vercel.app/api/payments \
  -H "Content-Type: application/json" \
  -H "x-csrf-token: your-token" \
  -d '{
    "paymentMethod": {
      "type": "mobile_wallet",
      "provider": "easypaisa",
      "phoneNumber": "+923001234567",
      "cnicNumber": "12345-1234567-1"
    },
    "amount": 100,
    "currency": "PKR"
  }'
```

---

## **🔄 Post-Deployment Steps**

### **1. Verify Deployment**

- [ ] Health check: `https://your-app.vercel.app/health`
- [ ] Login functionality working
- [ ] Dashboard loading with user data
- [ ] Payment forms rendering correctly

### **2. Test User Flows**

- [ ] User registration/login
- [ ] Dashboard navigation
- [ ] Payment processing
- [ ] Data isolation between users

### **3. Monitor Performance**

- [ ] Check Vercel Analytics
- [ ] Monitor error logs
- [ ] Verify payment webhook delivery

### **4. Security Verification**

- [ ] HTTPS enforced
- [ ] Security headers present
- [ ] CSRF protection working
- [ ] Rate limiting active

---

## **🛠️ Troubleshooting**

### **Common Issues**

1. **Database Connection Errors**

   ```bash
   # Check connection string format
   postgresql://username:password@host:port/database?sslmode=require
   ```

2. **Environment Variable Issues**

   ```bash
   # Verify in Vercel dashboard
   vercel env ls
   ```

3. **Payment Gateway Errors**
   - Verify API credentials
   - Check environment (sandbox vs production)
   - Validate webhook URLs

4. **Build Failures**

   ```bash
   # Local build test
   pnpm build

   # Check TypeScript errors
   pnpm type-check
   ```

### **Emergency Rollback**

```bash
# Rollback to previous deployment
vercel rollback
```

---

## **📈 Scaling Considerations**

### **Database Optimization**

- Enable connection pooling
- Add database indexes for performance
- Consider read replicas for heavy traffic

### **Caching Strategy**

- Redis for session storage (optional)
- CDN for static assets
- API response caching

### **Load Balancing**

- Vercel handles automatically
- Consider Edge Functions for global distribution

---

## **🎯 Success Metrics**

After deployment, monitor:

- ✅ **Uptime**: >99.9%
- ✅ **Page Load Time**: <2 seconds
- ✅ **Payment Success Rate**: >95%
- ✅ **User Authentication**: Working smoothly
- ✅ **Data Isolation**: Each user sees only their data
- ✅ **Security**: No vulnerabilities detected

---

## **🔗 Useful Links**

- [Vercel Deployment Docs](https://vercel.com/docs)
- [Next.js Production Checklist](https://nextjs.org/docs/deployment)
- [Prisma Production Best Practices](https://www.prisma.io/docs/guides/deployment)
- [NextAuth.js Deployment Guide](https://next-auth.js.org/deployment)

**🎉 Your dashboard is now production-ready with:**

- ✅ Real user data isolation
- ✅ Pakistani payment methods integration
- ✅ Enterprise security features
- ✅ Scalable architecture
- ✅ Production monitoring
