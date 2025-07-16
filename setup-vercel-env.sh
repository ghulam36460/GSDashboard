#!/bin/bash

# GSDashboard Vercel Environment Variables Setup Script
# This script sets up all required environment variables for the production deployment

echo "🚀 GSDashboard Environment Variables Setup"
echo "=========================================="
echo ""

# Check if Vercel CLI is available
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Please install it first:"
    echo "npm install -g vercel"
    exit 1
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel first:"
    vercel login
fi

echo "🔧 Setting up environment variables..."
echo ""

# Function to set environment variable
set_env_var() {
    local key=$1
    local value=$2
    echo "Setting $key..."
    echo "$value" | vercel env add "$key" production --force 2>/dev/null || echo "⚠️  Warning: Could not set $key"
}

# Set all environment variables
set_env_var "BASE_URL" "https://gsdashboard-five.vercel.app"
set_env_var "API_URL" "https://gsdashboard-five.vercel.app/api"
set_env_var "NEXTAUTH_URL" "https://gsdashboard-five.vercel.app"
set_env_var "NEXTAUTH_SECRET" "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars"
set_env_var "DATABASE_URL" "file:./dev.db"
set_env_var "HOME_PATHNAME" "/dashboards/analytics"
set_env_var "NEXT_PUBLIC_HOME_PATHNAME" "/dashboards/analytics"

echo ""
echo "✅ Environment variables setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Deploy to production: vercel --prod"
echo "2. Visit https://gsdashboard-five.vercel.app to test"
echo "3. Verify all dashboard features work correctly"
echo ""
echo "🔍 To view current environment variables:"
echo "vercel env ls"
echo ""

# Optional: Deploy immediately
read -p "🚀 Deploy to production now? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Deploying to production..."
    vercel --prod
    echo ""
    echo "✅ Deployment completed!"
    echo "🌐 Visit: https://gsdashboard-five.vercel.app"
else
    echo "👍 Run 'vercel --prod' when ready to deploy"
fi
