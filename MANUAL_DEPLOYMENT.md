# Manual Deployment Guide for GSDashboard

## Environment Variables Setup

Since we're deploying to the existing Vercel project at https://gsdashboard-five.vercel.app/,
you need to set the following environment variables in the Vercel dashboard:

### Required Environment Variables:

1. **BASE_URL**

   - Value: `https://gsdashboard-five.vercel.app`
   - Environment: Production

2. **API_URL**

   - Value: `https://gsdashboard-five.vercel.app/api`
   - Environment: Production

3. **NEXTAUTH_URL**

   - Value: `https://gsdashboard-five.vercel.app`
   - Environment: Production

4. **NEXTAUTH_SECRET**

   - Value: `gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars`
   - Environment: Production
   - Note: This is a secure 64-character string for production use

5. **DATABASE_URL**

   - Value: `file:./dev.db`
   - Environment: Production
   - Note: For production, consider upgrading to PostgreSQL

6. **HOME_PATHNAME**

   - Value: `/dashboards/analytics`
   - Environment: Production

7. **NEXT_PUBLIC_HOME_PATHNAME**
   - Value: `/dashboards/analytics`
   - Environment: Production

## Steps to Deploy:

### Option 1: Via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Find your "gsdashboard" project
3. Go to Settings → Environment Variables
4. Add each variable listed above for the "Production" environment
5. Go to Deployments tab
6. Click "Redeploy" on the latest deployment

### Option 2: Via GitHub Push (if connected)

1. Ensure your GitHub repository is connected to Vercel
2. Push this code to the main/master branch
3. Vercel will automatically deploy with the environment variables

### Option 3: Manual CLI Commands

If you have Vercel CLI access, run these commands:

```bash
# Set environment variables
vercel env add BASE_URL production
# Enter: https://gsdashboard-five.vercel.app

vercel env add API_URL production
# Enter: https://gsdashboard-five.vercel.app/api

vercel env add NEXTAUTH_URL production
# Enter: https://gsdashboard-five.vercel.app

vercel env add NEXTAUTH_SECRET production
# Enter: gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars

vercel env add DATABASE_URL production
# Enter: file:./dev.db

vercel env add HOME_PATHNAME production
# Enter: /dashboards/analytics

vercel env add NEXT_PUBLIC_HOME_PATHNAME production
# Enter: /dashboards/analytics

# Deploy
vercel --prod
```

## Verification Steps:

1. Visit https://gsdashboard-five.vercel.app
2. Check that the dashboard loads properly
3. Test navigation between different pages
4. Verify authentication works (if using sign-in features)
5. Check that all components render correctly
6. Test responsive design on mobile devices

## Project Structure:

- The main application is in the `full-kit/` directory
- Build command: `pnpm vercel-build` (defined in root package.json)
- Output directory: `full-kit/.next`
- Framework: Next.js 15

## Important Notes:

- The project uses SQLite database (file:./dev.db) which is suitable for demo/development
- For production use, consider upgrading to PostgreSQL or another cloud database
- All authentication is handled via NextAuth.js with the configured secret
- The project includes internationalization (i18n) support

## Troubleshooting:

- If deployment fails, check Vercel deployment logs
- Ensure all environment variables are set correctly
- Verify the build process completes successfully
- Check that the DATABASE_URL is accessible
- Ensure NEXTAUTH_SECRET is exactly as specified (case-sensitive)
