# GSDashboard Deployment Script for Vercel
# Run this script from the full-kit directory

Write-Host "🚀 GSDashboard Deployment to Vercel" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green

# Check if we're in the right directory
if (!(Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Make sure you're in the full-kit directory." -ForegroundColor Red
    exit 1
}

# Set the deployment URL
$VERCEL_URL = "https://gsdashboard-five.vercel.app"

Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
pnpm install

Write-Host "🔧 Generating Prisma client..." -ForegroundColor Yellow
pnpm exec prisma generate

Write-Host "🏗️  Building the project..." -ForegroundColor Yellow
pnpm build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green

Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Yellow

# Deploy with environment variables
$env:BASE_URL = $VERCEL_URL
$env:API_URL = "$VERCEL_URL/api"
$env:NEXTAUTH_URL = $VERCEL_URL
$env:NEXTAUTH_SECRET = "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars"
$env:DATABASE_URL = "file:./dev.db"
$env:HOME_PATHNAME = "/dashboards/analytics"
$env:NEXT_PUBLIC_HOME_PATHNAME = "/dashboards/analytics"

# Deploy to production
vercel --prod --yes

Write-Host "✅ Deployment completed!" -ForegroundColor Green
Write-Host "🌐 Your application should be available at: $VERCEL_URL" -ForegroundColor Cyan

Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Visit $VERCEL_URL to test your deployment" -ForegroundColor White
Write-Host "2. Set up environment variables in Vercel dashboard if needed" -ForegroundColor White
Write-Host "3. Configure a production database if required" -ForegroundColor White
Write-Host "4. Set up OAuth providers if using social login" -ForegroundColor White
