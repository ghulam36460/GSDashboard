# Deployment Checklist

## Pre-Deployment Steps

### 1. Environment Variables

- [ ] Set `DATABASE_URL` in Vercel
- [ ] Set `NEXTAUTH_URL` to your production domain
- [ ] Set `NEXTAUTH_SECRET` with a secure 32-character string
- [ ] Set `HOME_PATHNAME` and `NEXT_PUBLIC_HOME_PATHNAME`

### 2. Database

- [ ] Verify Prisma Accelerate connection works
- [ ] Run database migrations if needed
- [ ] Seed database with admin user (if required)

### 3. Code Quality

- [ ] Run `pnpm build` successfully
- [ ] Fix all ESLint warnings/errors
- [ ] Test authentication flow locally

### 4. Security

- [ ] Ensure strong `NEXTAUTH_SECRET` (32+ characters)
- [ ] Verify API endpoints are protected
- [ ] Check no sensitive data in client-side code

## Vercel Environment Variables

```bash
DATABASE_URL=prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_API_KEY
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secure-32-character-secret-here
HOME_PATHNAME=/dashboards/analytics
NEXT_PUBLIC_HOME_PATHNAME=/dashboards/analytics
```

## Post-Deployment Steps

### 1. Verify Functionality

- [ ] Test user registration
- [ ] Test user sign-in
- [ ] Test dashboard access
- [ ] Check database connections

### 2. Performance

- [ ] Check Core Web Vitals
- [ ] Verify fast page loads
- [ ] Test on mobile devices

### 3. Monitoring

- [ ] Set up error tracking
- [ ] Monitor database performance
- [ ] Check application logs

## Troubleshooting Common Issues

### JWT Session Errors

- Clear browser cookies and session storage
- Ensure `NEXTAUTH_SECRET` is consistent
- Check `NEXTAUTH_URL` matches your domain

### Database Connection Issues

- Verify Prisma Accelerate API key is valid
- Check database URL format
- Ensure proper environment variable naming

### Build Failures

- Check TypeScript errors
- Verify all dependencies are installed
- Ensure proper file imports and exports
