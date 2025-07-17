# GSDashboard Vercel Deployment Script for Windows
# This script ensures proper environment setup and deployment

Write-Host "🚀 Starting GSDashboard deployment to Vercel..." -ForegroundColor Green

# Change to the full-kit directory
Set-Location full-kit

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
pnpm install

# Set up environment variables for Vercel
Write-Host "⚙️ Setting up Vercel environment variables..." -ForegroundColor Yellow

# Remove existing environment variables (ignore errors if they don't exist)
try { vercel env rm BASE_URL production --yes } catch { }
try { vercel env rm API_URL production --yes } catch { }
try { vercel env rm NEXTAUTH_URL production --yes } catch { }
try { vercel env rm NEXTAUTH_SECRET production --yes } catch { }
try { vercel env rm DATABASE_URL production --yes } catch { }
try { vercel env rm HOME_PATHNAME production --yes } catch { }
try { vercel env rm NEXT_PUBLIC_HOME_PATHNAME production --yes } catch { }

# Add production environment variables
Write-Host "Setting BASE_URL..." -ForegroundColor Cyan
echo "https://gsdashboard-five.vercel.app" | vercel env add BASE_URL production

Write-Host "Setting API_URL..." -ForegroundColor Cyan
echo "https://gsdashboard-five.vercel.app/api" | vercel env add API_URL production

Write-Host "Setting NEXTAUTH_URL..." -ForegroundColor Cyan
echo "https://gsdashboard-five.vercel.app" | vercel env add NEXTAUTH_URL production

Write-Host "Setting NEXTAUTH_SECRET..." -ForegroundColor Cyan
echo "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars" | vercel env add NEXTAUTH_SECRET production

Write-Host "Setting DATABASE_URL..." -ForegroundColor Cyan
echo "file:./dev.db" | vercel env add DATABASE_URL production

Write-Host "Setting HOME_PATHNAME..." -ForegroundColor Cyan
echo "/dashboards/analytics" | vercel env add HOME_PATHNAME production

Write-Host "Setting NEXT_PUBLIC_HOME_PATHNAME..." -ForegroundColor Cyan
echo "/dashboards/analytics" | vercel env add NEXT_PUBLIC_HOME_PATHNAME production

# Deploy to Vercel
Write-Host "🌐 Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🔗 Your application should be available at: https://gsdashboard-five.vercel.app" -ForegroundColor Cyan
