# Post-Deployment Checklist ✅

After your Vercel deployment is complete, follow this checklist:

## 📝 Step-by-Step Setup

### 1. ✅ Get Your Deployment URL
- After running `vercel`, note your deployment URL (e.g., `https://gs-dashboard-abc123.vercel.app`)

### 2. ✅ Generate NextAuth Secret
Run this command to generate a secure secret:
```bash
# Windows PowerShell
[System.Web.Security.Membership]::GeneratePassword(32, 0)

# Linux/Mac
openssl rand -base64 32

# Or visit: https://generate-secret.vercel.app/32
```

### 3. ✅ Set Required Environment Variables
Replace `YOUR_DEPLOYMENT_URL` with your actual URL from step 1:

```bash
vercel env add BASE_URL production
# Enter: YOUR_DEPLOYMENT_URL

vercel env add NEXTAUTH_URL production
# Enter: YOUR_DEPLOYMENT_URL

vercel env add NEXTAUTH_SECRET production
# Enter: Your generated secret from step 2

vercel env add DATABASE_URL production
# Enter: file:./dev.db (or your cloud database URL)

vercel env add HOME_PATHNAME production
# Enter: /dashboards/analytics

vercel env add NEXT_PUBLIC_HOME_PATHNAME production
# Enter: /dashboards/analytics
```

### 4. ✅ Redeploy with Environment Variables
```bash
vercel --prod
```

### 5. ✅ Test Your Deployment
- Visit your deployment URL
- Test navigation
- Test authentication (if configured)
- Check responsive design

## 🚨 Common Issues & Solutions

**❌ Build fails**: Check Node.js version is 18+ in Vercel settings
**❌ Authentication not working**: Make sure NEXTAUTH_URL matches your exact domain (no trailing slash)
**❌ Environment variables not working**: Ensure they're set for "Production" environment and redeploy

## 🎉 You're Done!
Your GS Dashboard should now be live and working correctly!
