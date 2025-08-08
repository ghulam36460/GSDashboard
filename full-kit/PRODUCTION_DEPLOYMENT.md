# Production Deployment Guide

## Overview

Complete guide to deploy your enhanced GS Dashboard to production at gsdashbord.vercel.app

## Prerequisites

- Vercel account
- Production database (Prisma Postgres recommended)
- Payment gateway accounts (EasyPaisa, JazzCash, UPaisa, Binance Pay)
- Email service (SMTP)

## Step 1: Prepare Production Database

### Option A: Create New Prisma Postgres Database

1. Login to Prisma Console: https://console.prisma.io
2. Create new project: "GSDashboard Production"
3. Create database in your preferred region
4. Copy the connection string

### Option B: Use Existing PostgreSQL Database

1. Ensure your database supports Prisma
2. Create production database schema
3. Generate connection string

## Step 2: Deploy to Vercel

### 2.1 Connect Repository

1. Go to Vercel dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Select the `full-kit` folder as root directory

### 2.2 Configure Environment Variables

In Vercel dashboard, add all environment variables from `.env.production.template`:

#### Core Configuration

```
NEXTAUTH_URL=https://gsdashbord.vercel.app
DATABASE_URL=your-production-database-url
NEXTAUTH_SECRET=generate-64-character-random-string
```

#### Security Keys (Generate with crypto.randomBytes(32))

```
PAYMENT_ENCRYPTION_KEY=generate-32-character-random-string
CARD_ENCRYPTION_KEY=generate-32-character-random-string
JWT_SECRET=generate-32-character-random-string
CSRF_SECRET=generate-32-character-random-string
```

#### Payment Gateways

Replace with your actual production API keys:

```
EASYPAISA_MERCHANT_ID=your-merchant-id
EASYPAISA_API_KEY=your-api-key
EASYPAISA_API_SECRET=your-api-secret
EASYPAISA_ENVIRONMENT=production

JAZZCASH_MERCHANT_ID=your-merchant-id
JAZZCASH_API_KEY=your-api-key
JAZZCASH_API_SECRET=your-api-secret
JAZZCASH_ENVIRONMENT=production

UPAISA_MERCHANT_ID=your-merchant-id
UPAISA_API_KEY=your-api-key
UPAISA_API_SECRET=your-api-secret
UPAISA_ENVIRONMENT=production

BINANCE_PAY_API_KEY=your-api-key
BINANCE_PAY_SECRET_KEY=your-secret-key
BINANCE_PAY_ENVIRONMENT=production
```

### 2.3 Set Domain Configuration

1. In Vercel dashboard, go to project settings
2. Add custom domain: `gsdashbord.vercel.app`
3. Configure DNS if using custom domain

## Step 3: Database Migration

After deployment, run database migrations:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy and run migrations
vercel --prod
vercel env pull .env.production
npx prisma migrate deploy --env-file .env.production
npx prisma generate
```

## Step 4: Post-Deployment Verification

### 4.1 Health Check

Visit: https://gsdashbord.vercel.app/api/health
Expected response: `{"status":"ok","timestamp":"..."}`

### 4.2 Authentication Test

1. Visit: https://gsdashbord.vercel.app
2. Test login/registration
3. Verify user sessions persist

### 4.3 Payment System Test

1. Navigate to: https://gsdashbord.vercel.app/en/pages/payment
2. Test each payment method:
   - EasyPaisa
   - JazzCash
   - UPaisa
   - Binance Pay
   - Credit/Debit cards

### 4.4 Dashboard Functionality

1. Test analytics dashboard
2. Verify data isolation between users
3. Check all navigation links

## Step 5: Security Verification

### 5.1 Security Headers

Check headers at: https://securityheaders.com

- Should receive A+ rating

### 5.2 SSL Certificate

- Verify HTTPS working
- Check certificate validity

### 5.3 Rate Limiting

- Test API rate limits
- Verify protection against abuse

## Step 6: Monitoring Setup

### 6.1 Error Tracking (Optional)

1. Create Sentry account
2. Add SENTRY_DSN environment variable
3. Monitor errors and performance

### 6.2 Analytics (Optional)

1. Set up Google Analytics
2. Add GOOGLE_ANALYTICS_ID environment variable

## Step 7: Performance Optimization

### 7.1 Database Performance

- Monitor query performance
- Set up connection pooling
- Configure read replicas if needed

### 7.2 CDN Configuration

- Vercel handles this automatically
- Verify static assets cached properly

## Troubleshooting

### Common Issues

#### 1. Database Connection Errors

- Verify DATABASE_URL format
- Check database server accessibility
- Ensure IP whitelisting if required

#### 2. Authentication Issues

- Verify NEXTAUTH_URL matches deployment URL
- Check NEXTAUTH_SECRET is secure (64+ chars)
- Ensure cookies work with HTTPS

#### 3. Payment Gateway Errors

- Verify production API keys
- Check endpoint URLs for production
- Test webhook configurations

#### 4. Environment Variable Issues

- Ensure all required variables set
- Check for typos in variable names
- Verify sensitive data encryption

### Debug Commands

```bash
# Check deployment logs
vercel logs

# Check environment variables
vercel env ls

# Redeploy with latest changes
vercel --prod

# Check build logs
vercel inspect <deployment-url>
```

## Security Checklist

- [ ] All API keys are production-ready
- [ ] Encryption keys are randomly generated
- [ ] Database uses SSL connections
- [ ] CSRF protection enabled
- [ ] Rate limiting configured
- [ ] Security headers properly set
- [ ] No sensitive data in client-side code
- [ ] Webhook endpoints secured

## Performance Checklist

- [ ] Database queries optimized
- [ ] Images optimized and served via CDN
- [ ] Static assets compressed
- [ ] Caching strategies implemented
- [ ] Error handling comprehensive
- [ ] Loading states implemented

## Post-Launch Tasks

1. **Monitor Performance**: Use Vercel Analytics
2. **Track Errors**: Monitor Sentry/logs
3. **User Feedback**: Collect and address issues
4. **Security Updates**: Keep dependencies updated
5. **Backup Strategy**: Regular database backups
6. **Scaling**: Monitor usage and scale as needed

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- Prisma Documentation: https://www.prisma.io/docs
- NextAuth.js Documentation: https://next-auth.js.org
- Payment Gateway Documentation (provider-specific)

---

## Quick Deploy Commands

For experienced users:

```bash
# Clone and setup
git clone <your-repo>
cd full-kit

# Install dependencies
pnpm install

# Set environment variables (copy from template)
cp .env.production.template .env.production
# Edit .env.production with your values

# Deploy to Vercel
vercel --prod

# Run database migrations
npx prisma migrate deploy
npx prisma generate
```

Your production dashboard will be available at: https://gsdashbord.vercel.app
