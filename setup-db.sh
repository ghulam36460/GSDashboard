#!/bin/bash

# Production database setup script
echo "Setting up production database..."

# Navigate to full-kit directory
cd full-kit

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

# Push database schema (for production without migrations)
echo "Pushing database schema..."
npx prisma db push --accept-data-loss

echo "Database setup completed!"
