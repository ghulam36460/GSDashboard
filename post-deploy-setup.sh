#!/bin/bash

# Post-deployment setup script
# Run this script after your initial Vercel deployment

echo "🚀 Post-Deployment Setup for GS Dashboard"
echo "=========================================="

# Get the deployment URL from user
read -p "Enter your Vercel deployment URL (e.g., https://your-project-abc123.vercel.app): " VERCEL_URL

if [ -z "$VERCEL_URL" ]; then
    echo "❌ Error: Vercel URL is required!"
    exit 1
fi

# Remove trailing slash if present
VERCEL_URL=$(echo $VERCEL_URL | sed 's:/*$::')

echo "📝 Setting up environment variables..."

# Set environment variables using Vercel CLI
vercel env add BASE_URL production
echo $VERCEL_URL

vercel env add API_URL production  
echo "${VERCEL_URL}/api"

vercel env add NEXTAUTH_URL production
echo $VERCEL_URL

vercel env add HOME_PATHNAME production
echo "/dashboards/analytics"

vercel env add NEXT_PUBLIC_HOME_PATHNAME production
echo "/dashboards/analytics"

echo ""
echo "🔐 IMPORTANT: You still need to set these manually:"
echo "1. NEXTAUTH_SECRET - Generate with: openssl rand -base64 32"
echo "2. DATABASE_URL - Your production database URL"
echo "3. OAuth credentials (if using social login)"
echo ""
echo "To set these:"
echo "vercel env add NEXTAUTH_SECRET production"
echo "vercel env add DATABASE_URL production"
echo ""
echo "✅ Basic environment variables have been set!"
echo "🚀 Redeploy your project: vercel --prod"
