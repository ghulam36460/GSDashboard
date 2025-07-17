#!/bin/bash

# GSDashboard Vercel Deployment Script
# This script ensures proper environment setup and deployment

echo "🚀 Starting GSDashboard deployment to Vercel..."

# Change to the full-kit directory
cd full-kit

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Set up environment variables for Vercel
echo "⚙️ Setting up Vercel environment variables..."

# Remove existing environment variables (ignore errors if they don't exist)
vercel env rm BASE_URL production --yes 2>/dev/null || true
vercel env rm API_URL production --yes 2>/dev/null || true
vercel env rm NEXTAUTH_URL production --yes 2>/dev/null || true
vercel env rm NEXTAUTH_SECRET production --yes 2>/dev/null || true
vercel env rm DATABASE_URL production --yes 2>/dev/null || true
vercel env rm HOME_PATHNAME production --yes 2>/dev/null || true
vercel env rm NEXT_PUBLIC_HOME_PATHNAME production --yes 2>/dev/null || true

# Add production environment variables
echo "BASE_URL" | vercel env add BASE_URL production
echo "https://gsdashboard-five.vercel.app"

echo "API_URL" | vercel env add API_URL production
echo "https://gsdashboard-five.vercel.app/api"

echo "NEXTAUTH_URL" | vercel env add NEXTAUTH_URL production
echo "https://gsdashboard-five.vercel.app"

echo "NEXTAUTH_SECRET" | vercel env add NEXTAUTH_SECRET production
echo "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars"

echo "DATABASE_URL" | vercel env add DATABASE_URL production
echo "file:./dev.db"

echo "HOME_PATHNAME" | vercel env add HOME_PATHNAME production
echo "/dashboards/analytics"

echo "NEXT_PUBLIC_HOME_PATHNAME" | vercel env add NEXT_PUBLIC_HOME_PATHNAME production
echo "/dashboards/analytics"

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🔗 Your application should be available at: https://gsdashboard-five.vercel.app"
