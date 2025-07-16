# Vercel Deployment Guide for GS Dashboard

## 📋 Pre-deployment Checklist

### 1. Generate NextAuth Secret
Generate a secure secret for NextAuth:

**Windows PowerShell:**
```powershell
[System.Web.Security.Membership]::GeneratePassword(32, 0)
```

**Linux/Mac:**
```bash
openssl rand -base64 32
```

**Online Generator:**
Visit: https://generate-secret.vercel.app/32

### 2. Prepare Database (Optional for initial deployment)
For production, consider these database options:
- **Vercel Postgres** (Recommended)
- **PlanetScale** (MySQL)
- **Railway** (PostgreSQL) 
- **Supabase** (PostgreSQL)

## 🚀 Deployment Steps

### Step 1: Initial Deployment

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy from root directory:**
```bash
vercel
```

4. **Follow the prompts:**
   - Set up and deploy? → `Y`
   - Which scope? → Select your account
   - Link to existing project? → `N`
   - Project name? → `gs-dashboard` (or your preferred name)
   - In which directory is your code? → `./` (current directory)

5. **Note your deployment URL** (e.g., `https://gs-dashboard-abc123.vercel.app`)

### Step 2: Configure Environment Variables

After the initial deployment, you need to set environment variables:

#### Option A: Using Post-Deploy Script (Recommended)
Run the setup script:

**Windows:**
```bash
./post-deploy-setup.bat
```

**Linux/Mac:**
```bash
chmod +x post-deploy-setup.sh
./post-deploy-setup.sh
```

#### Option B: Manual Setup via Vercel CLI
```bash
# Set your actual deployment URL
vercel env add BASE_URL production
# Enter: https://your-actual-deployment-url.vercel.app

vercel env add NEXTAUTH_URL production  
# Enter: https://your-actual-deployment-url.vercel.app

vercel env add NEXTAUTH_SECRET production
# Enter: your-generated-32-character-secret

vercel env add DATABASE_URL production
# Enter: file:./dev.db (for SQLite) or your cloud database URL

vercel env add HOME_PATHNAME production
# Enter: /dashboards/analytics

vercel env add NEXT_PUBLIC_HOME_PATHNAME production
# Enter: /dashboards/analytics
```

#### Option C: Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable for "Production" environment

### Step 3: Redeploy with Environment Variables
```bash
vercel --prod
```

## 🔧 Required Environment Variables

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `BASE_URL` | `https://your-project.vercel.app` | Your actual Vercel deployment URL |
| `NEXTAUTH_URL` | `https://your-project.vercel.app` | Same as BASE_URL |
| `NEXTAUTH_SECRET` | `abc123...` | 32+ character random string |
| `DATABASE_URL` | `file:./dev.db` | Database connection string |
| `HOME_PATHNAME` | `/dashboards/analytics` | Default home route |
| `NEXT_PUBLIC_HOME_PATHNAME` | `/dashboards/analytics` | Public home route |

## 🔗 Connect to GitHub (Optional)

1. Go to your Vercel project settings
2. Connect to GitHub repository
3. Enable automatic deployments
4. Future pushes to main/master will auto-deploy

## 📊 Database Setup for Production

### Option 1: Vercel Postgres (Recommended)
```bash
vercel env add DATABASE_URL production
# Enter: Your Vercel Postgres connection string
```

### Option 2: Keep SQLite (Development/Testing only)
The current setup uses SQLite which works for testing but isn't recommended for production.

## 🧪 Testing Your Deployment

1. Visit your deployment URL
2. Test authentication (if configured)
3. Check all dashboard features
4. Verify responsive design on mobile

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version in Vercel (should be 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

### Authentication Not Working
- Verify `NEXTAUTH_URL` matches your exact domain
- Check `NEXTAUTH_SECRET` is set and is 32+ characters
- Ensure no trailing slashes in URLs

### Database Errors
- For SQLite: Ensure `DATABASE_URL=file:./dev.db`
- For cloud DB: Test connection string locally first
- Run `prisma db push` if using cloud database

### Environment Variables Not Working
- Ensure variables are set for "Production" environment
- Redeploy after setting environment variables
- Check variable names match exactly (case-sensitive)

## 📝 Next Steps After Deployment

1. **Custom Domain**: Add your custom domain in Vercel settings
2. **Database Migration**: Set up production database if needed
3. **OAuth Setup**: Configure GitHub, Google, etc. for social login
4. **Analytics**: Add analytics tracking
5. **Error Monitoring**: Set up error tracking (Sentry, etc.)

## 🆘 Need Help?

- Check Vercel deployment logs
- Verify all environment variables are set
- Test locally with production environment variables
- Check Vercel documentation: https://vercel.com/docs
