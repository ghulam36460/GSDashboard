# GSDashboard Vercel Deployment Script
# Run this script to deploy to Vercel production

Write-Host "🚀 GSDashboard Deployment Script" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "full-kit/package.json")) {
    Write-Host "❌ Error: Please run this script from the GSDashboard root directory" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Directory check passed" -ForegroundColor Green

# Check if Vercel CLI is installed
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI detected: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

# Navigate to full-kit directory
Set-Location full-kit

Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
pnpm install

Write-Host "🔨 Testing build locally..." -ForegroundColor Blue
pnpm build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Local build successful!" -ForegroundColor Green
    
    Write-Host "🚀 Deploying to Vercel production..." -ForegroundColor Blue
    vercel --prod
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 Deployment successful!" -ForegroundColor Green
        Write-Host "🌐 Your app is live at: https://gsdashboard-five.vercel.app" -ForegroundColor Cyan
    } else {
        Write-Host "❌ Deployment failed!" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Local build failed! Please check the errors above." -ForegroundColor Red
}

# Return to root directory
Set-Location ..

Write-Host "
📝 Post-Deployment Checklist:
1. ✅ Verify app loads at https://gsdashboard-five.vercel.app
2. ⚠️  Set up production database (PostgreSQL recommended)
3. 🔧 Update DATABASE_URL environment variable
4. 🎨 Test all features and pages
" -ForegroundColor Yellow

Read-Host "Press Enter to exit"
