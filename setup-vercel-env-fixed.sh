#!/bin/bash

# Vercel Environment Variables Setup Script
# This script sets up all necessary environment variables for the GSDashboard deployment

echo "Setting up Vercel environment variables..."

# Production environment variables
vercel env add BASE_URL production <<< "https://gsdashboard-five.vercel.app"
vercel env add API_URL production <<< "https://gsdashboard-five.vercel.app/api"
vercel env add NEXTAUTH_URL production <<< "https://gsdashboard-five.vercel.app"
vercel env add NEXTAUTH_SECRET production <<< "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars"
vercel env add DATABASE_URL production <<< "file:./dev.db"
vercel env add HOME_PATHNAME production <<< "/dashboards/analytics"
vercel env add NEXT_PUBLIC_HOME_PATHNAME production <<< "/dashboards/analytics"

# Preview environment variables (same as production for now)
vercel env add BASE_URL preview <<< "https://gsdashboard-five.vercel.app"
vercel env add API_URL preview <<< "https://gsdashboard-five.vercel.app/api"
vercel env add NEXTAUTH_URL preview <<< "https://gsdashboard-five.vercel.app"
vercel env add NEXTAUTH_SECRET preview <<< "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars"
vercel env add DATABASE_URL preview <<< "file:./dev.db"
vercel env add HOME_PATHNAME preview <<< "/dashboards/analytics"
vercel env add NEXT_PUBLIC_HOME_PATHNAME preview <<< "/dashboards/analytics"

echo "Environment variables have been set up successfully!"
echo "You can now deploy your project with: vercel --prod"
