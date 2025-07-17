# Vercel Environment Variables Setup Script for Windows
# This script sets up all necessary environment variables for the GSDashboard deployment

Write-Host "Setting up Vercel environment variables..." -ForegroundColor Green

# Production environment variables
Write-Host "Setting production environment variables..." -ForegroundColor Yellow
vercel env add BASE_URL production --value "https://gsdashboard-five.vercel.app"
vercel env add API_URL production --value "https://gsdashboard-five.vercel.app/api"
vercel env add NEXTAUTH_URL production --value "https://gsdashboard-five.vercel.app"
vercel env add NEXTAUTH_SECRET production --value "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars"
vercel env add DATABASE_URL production --value "file:./dev.db"
vercel env add HOME_PATHNAME production --value "/dashboards/analytics"
vercel env add NEXT_PUBLIC_HOME_PATHNAME production --value "/dashboards/analytics"

# Preview environment variables
Write-Host "Setting preview environment variables..." -ForegroundColor Yellow
vercel env add BASE_URL preview --value "https://gsdashboard-five.vercel.app"
vercel env add API_URL preview --value "https://gsdashboard-five.vercel.app/api"
vercel env add NEXTAUTH_URL preview --value "https://gsdashboard-five.vercel.app"
vercel env add NEXTAUTH_SECRET preview --value "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars"
vercel env add DATABASE_URL preview --value "file:./dev.db"
vercel env add HOME_PATHNAME preview --value "/dashboards/analytics"
vercel env add NEXT_PUBLIC_HOME_PATHNAME preview --value "/dashboards/analytics"

Write-Host "Environment variables have been set up successfully!" -ForegroundColor Green
Write-Host "You can now deploy your project with: vercel --prod" -ForegroundColor Cyan
