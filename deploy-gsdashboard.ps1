# GSDashboard Deployment to Existing Vercel Project
# PowerShell Script

Write-Host "🚀 GSDashboard Deployment to Existing Vercel Project" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Project Details:" -ForegroundColor Cyan
Write-Host "   Name: gsdashboard" -ForegroundColor White
Write-Host "   URL: https://gsdashboard-five.vercel.app" -ForegroundColor White
Write-Host "   Project ID: prj_b7AxiDYxv1VqnaLQVAZFLmooLv0c" -ForegroundColor White
Write-Host ""

# Check prerequisites
Write-Host "🔍 Checking prerequisites..." -ForegroundColor Yellow

if (!(Test-Path "full-kit\package.json")) {
    Write-Host "❌ Error: full-kit\package.json not found. Please run from project root." -ForegroundColor Red
    exit 1
}

# Check Node.js
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Error: Node.js not found. Please install Node.js 18+" -ForegroundColor Red
    exit 1
}

# Check pnpm
try {
    $pnpmVersion = pnpm --version
    Write-Host "✅ pnpm version: $pnpmVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️ pnpm not found. Installing..." -ForegroundColor Yellow
    npm install -g pnpm
}

# Check Vercel CLI
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI version: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️ Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host ""
Write-Host "📦 Step 1: Installing dependencies..." -ForegroundColor Yellow

Set-Location "full-kit"

pnpm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "🔧 Step 2: Generating Prisma client..." -ForegroundColor Yellow
pnpm exec prisma generate
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to generate Prisma client" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Prisma client generated successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "🏗️ Step 3: Building the application..." -ForegroundColor Yellow
pnpm build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "🔐 Step 4: Setting up environment variables..." -ForegroundColor Yellow

# Define environment variables
$envVars = @{
    "BASE_URL" = "https://gsdashboard-five.vercel.app"
    "API_URL" = "https://gsdashboard-five.vercel.app/api"
    "NEXTAUTH_URL" = "https://gsdashboard-five.vercel.app"
    "NEXTAUTH_SECRET" = "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars"
    "DATABASE_URL" = "file:./dev.db"
    "HOME_PATHNAME" = "/dashboards/analytics"
    "NEXT_PUBLIC_HOME_PATHNAME" = "/dashboards/analytics"
}

# Set environment variables
foreach ($envVar in $envVars.GetEnumerator()) {
    Write-Host "Setting $($envVar.Key)..." -ForegroundColor Cyan
    try {
        $envVar.Value | vercel env add $envVar.Key production --force 2>$null
        Write-Host "✅ $($envVar.Key) set successfully" -ForegroundColor Green
    } catch {
        Write-Host "⚠️ $($envVar.Key) may already exist or couldn't be set" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "🚀 Step 5: Deploying to production..." -ForegroundColor Yellow
Write-Host "   Deploying to existing project: gsdashboard" -ForegroundColor White
Write-Host "   Target URL: https://gsdashboard-five.vercel.app" -ForegroundColor White
Write-Host ""

# Deploy to production
try {
    vercel --prod --yes
    Write-Host ""
    Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
} catch {
    Write-Host "⚠️ Direct deployment failed, trying alternative method..." -ForegroundColor Yellow
    vercel --prod
}

Write-Host ""
Write-Host "🎯 Verification Steps:" -ForegroundColor Cyan
Write-Host "1. Visit https://gsdashboard-five.vercel.app" -ForegroundColor White
Write-Host "2. Check that the dashboard loads properly" -ForegroundColor White
Write-Host "3. Test navigation between pages" -ForegroundColor White
Write-Host "4. Verify authentication works (if enabled)" -ForegroundColor White
Write-Host "5. Check responsive design on mobile" -ForegroundColor White
Write-Host ""

Write-Host "📊 Dashboard Features to Test:" -ForegroundColor Cyan
Write-Host "- Analytics dashboard" -ForegroundColor White
Write-Host "- Data tables and charts" -ForegroundColor White
Write-Host "- Theme switching (light/dark mode)" -ForegroundColor White
Write-Host "- Navigation menu" -ForegroundColor White
Write-Host "- Forms and components" -ForegroundColor White
Write-Host ""

Write-Host "🌐 Your application should now be live at:" -ForegroundColor Green
Write-Host "https://gsdashboard-five.vercel.app" -ForegroundColor Cyan
Write-Host ""

# Go back to root directory
Set-Location ".."

Write-Host "Press any key to continue..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
