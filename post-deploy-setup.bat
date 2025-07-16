@echo off
echo 🚀 Post-Deployment Setup for GS Dashboard
echo ==========================================

set /p VERCEL_URL="Enter your Vercel deployment URL (e.g., https://your-project-abc123.vercel.app): "

if "%VERCEL_URL%"=="" (
    echo ❌ Error: Vercel URL is required!
    pause
    exit /b 1
)

echo 📝 Setting up environment variables...

echo Setting BASE_URL...
echo %VERCEL_URL% | vercel env add BASE_URL production

echo Setting API_URL...
echo %VERCEL_URL%/api | vercel env add API_URL production

echo Setting NEXTAUTH_URL...
echo %VERCEL_URL% | vercel env add NEXTAUTH_URL production

echo Setting HOME_PATHNAME...
echo /dashboards/analytics | vercel env add HOME_PATHNAME production

echo Setting NEXT_PUBLIC_HOME_PATHNAME...
echo /dashboards/analytics | vercel env add NEXT_PUBLIC_HOME_PATHNAME production

echo.
echo 🔐 IMPORTANT: You still need to set these manually:
echo 1. NEXTAUTH_SECRET - Generate a random 32+ character string
echo 2. DATABASE_URL - Your production database URL
echo 3. OAuth credentials (if using social login)
echo.
echo To set these manually in Vercel dashboard or CLI:
echo vercel env add NEXTAUTH_SECRET production
echo vercel env add DATABASE_URL production
echo.
echo ✅ Basic environment variables have been set!
echo 🚀 Redeploy your project: vercel --prod
pause
