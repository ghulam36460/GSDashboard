@echo off
echo 🚀 GSDashboard Production Deployment
echo ===================================

echo.
echo 📋 Pre-deployment checklist:
echo ✓ Project: GSDashboard 
echo ✓ URL: https://gsdashboard-five.vercel.app
echo ✓ Framework: Next.js 15 with React 19
echo ✓ Database: SQLite (Prisma ORM)
echo ✓ Authentication: NextAuth.js
echo.

echo 📦 Step 1: Installing dependencies...
cd full-kit
call pnpm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo 🔧 Step 2: Generating Prisma client...
call pnpm exec prisma generate
if %errorlevel% neq 0 (
    echo ❌ Failed to generate Prisma client
    pause
    exit /b 1
)

echo.
echo 🏗️ Step 3: Building the project...
call pnpm build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo.
echo ✅ Build completed successfully!
echo.
echo 🔐 Step 4: Environment Variables Setup
echo.
echo Please set the following environment variables in Vercel dashboard:
echo.
echo BASE_URL = https://gsdashboard-five.vercel.app
echo API_URL = https://gsdashboard-five.vercel.app/api  
echo NEXTAUTH_URL = https://gsdashboard-five.vercel.app
echo NEXTAUTH_SECRET = gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars
echo DATABASE_URL = file:./dev.db
echo HOME_PATHNAME = /dashboards/analytics
echo NEXT_PUBLIC_HOME_PATHNAME = /dashboards/analytics
echo.

echo 📝 Manual deployment steps:
echo 1. Go to https://vercel.com/dashboard
echo 2. Find your 'gsdashboard' project
echo 3. Go to Settings → Environment Variables
echo 4. Add each variable above for 'Production' environment
echo 5. Go to Deployments tab and click 'Redeploy'
echo.

echo 🎯 Alternative: If you have Vercel CLI access, run:
echo vercel --prod
echo.

echo ✅ Deployment preparation completed!
echo 🌐 Your app will be available at: https://gsdashboard-five.vercel.app
echo.

pause
