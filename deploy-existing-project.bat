@echo off
setlocal enabledelayedexpansion

echo 🚀 GSDashboard Deployment to Existing Vercel Project
echo ================================================
echo.
echo 📋 Project Details:
echo    Name: gsdashboard
echo    URL: https://gsdashboard-five.vercel.app
echo    Project ID: prj_b7AxiDYxv1VqnaLQVAZFLmooLv0c
echo.

echo 🔍 Checking prerequisites...

:: Check if we're in the right directory
if not exist "full-kit\package.json" (
    echo ❌ Error: full-kit\package.json not found. Please run from project root.
    pause
    exit /b 1
)

:: Check if Node.js is available
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Node.js not found. Please install Node.js 18+
    pause
    exit /b 1
)

:: Check if pnpm is available
pnpm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: pnpm not found. Installing pnpm...
    npm install -g pnpm
)

:: Check if Vercel CLI is available
vercel --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Vercel CLI not found. Installing Vercel CLI...
    npm install -g vercel
)

echo ✅ Prerequisites check completed!
echo.

echo 📦 Step 1: Installing dependencies...
cd full-kit
call pnpm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed successfully!
echo.

echo 🔧 Step 2: Generating Prisma client...
call pnpm exec prisma generate
if errorlevel 1 (
    echo ❌ Failed to generate Prisma client
    pause
    exit /b 1
)
echo ✅ Prisma client generated successfully!
echo.

echo 🏗️ Step 3: Building the application...
call pnpm build
if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✅ Build completed successfully!
echo.

echo 🔐 Step 4: Setting up environment variables...

:: Set environment variables directly
set "BASE_URL=https://gsdashboard-five.vercel.app"
set "API_URL=https://gsdashboard-five.vercel.app/api"
set "NEXTAUTH_URL=https://gsdashboard-five.vercel.app"
set "NEXTAUTH_SECRET=gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars"
set "DATABASE_URL=file:./dev.db"
set "HOME_PATHNAME=/dashboards/analytics"
set "NEXT_PUBLIC_HOME_PATHNAME=/dashboards/analytics"

echo Setting environment variables in Vercel...

:: Try to set each environment variable
echo %BASE_URL% | vercel env add BASE_URL production --force 2>nul || echo ⚠️ BASE_URL may already exist
echo %API_URL% | vercel env add API_URL production --force 2>nul || echo ⚠️ API_URL may already exist
echo %NEXTAUTH_URL% | vercel env add NEXTAUTH_URL production --force 2>nul || echo ⚠️ NEXTAUTH_URL may already exist
echo %NEXTAUTH_SECRET% | vercel env add NEXTAUTH_SECRET production --force 2>nul || echo ⚠️ NEXTAUTH_SECRET may already exist
echo %DATABASE_URL% | vercel env add DATABASE_URL production --force 2>nul || echo ⚠️ DATABASE_URL may already exist
echo %HOME_PATHNAME% | vercel env add HOME_PATHNAME production --force 2>nul || echo ⚠️ HOME_PATHNAME may already exist
echo %NEXT_PUBLIC_HOME_PATHNAME% | vercel env add NEXT_PUBLIC_HOME_PATHNAME production --force 2>nul || echo ⚠️ NEXT_PUBLIC_HOME_PATHNAME may already exist

echo ✅ Environment variables setup completed!
echo.

echo 🚀 Step 5: Deploying to production...
echo    Deploying to existing project: gsdashboard
echo    Target URL: https://gsdashboard-five.vercel.app
echo.

:: Deploy to production
call vercel --prod --yes --token=%VERCEL_TOKEN%
if errorlevel 1 (
    echo ⚠️ Direct deployment failed, trying alternative method...
    call vercel --prod
)

echo.
echo ✅ Deployment process completed!
echo.
echo 🎯 Verification Steps:
echo 1. Visit https://gsdashboard-five.vercel.app
echo 2. Check that the dashboard loads properly
echo 3. Test navigation between pages
echo 4. Verify authentication works (if enabled)
echo 5. Check responsive design on mobile
echo.
echo 📊 Dashboard Features to Test:
echo - Analytics dashboard
echo - Data tables and charts
echo - Theme switching (light/dark mode)
echo - Navigation menu
echo - Forms and components
echo.
echo 🔧 If there are any issues:
echo 1. Check Vercel deployment logs in dashboard
echo 2. Verify environment variables are set correctly
echo 3. Ensure all dependencies are properly installed
echo.
echo 🌐 Your application should now be live at:
echo https://gsdashboard-five.vercel.app
echo.

pause
