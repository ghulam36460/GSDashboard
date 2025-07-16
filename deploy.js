#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 GSDashboard Deployment Script');
console.log('=================================\n');

// Environment variables for production
const productionEnv = {
  BASE_URL: 'https://gsdashboard-five.vercel.app',
  API_URL: 'https://gsdashboard-five.vercel.app/api',
  NEXTAUTH_URL: 'https://gsdashboard-five.vercel.app',
  NEXTAUTH_SECRET:
    'gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars',
  DATABASE_URL: 'file:./dev.db',
  HOME_PATHNAME: '/dashboards/analytics',
  NEXT_PUBLIC_HOME_PATHNAME: '/dashboards/analytics',
};

function runCommand(command, cwd = process.cwd()) {
  try {
    console.log(`📝 Running: ${command}`);
    const result = execSync(command, {
      cwd,
      stdio: 'inherit',
      env: { ...process.env, ...productionEnv },
    });
    return result;
  } catch (error) {
    console.error(`❌ Error running command: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

function setVercelEnvVar(name, value) {
  try {
    console.log(`🔧 Setting environment variable: ${name}`);
    execSync(`echo "${value}" | vercel env add ${name} production`, {
      stdio: 'inherit',
      env: process.env,
    });
    console.log(`✅ ${name} set successfully`);
  } catch (error) {
    console.log(
      `⚠️  Warning: Could not set ${name}. You may need to set it manually.`
    );
  }
}

async function deploy() {
  try {
    // Check if we're in the right directory
    if (!fs.existsSync('full-kit/package.json')) {
      console.error(
        "❌ Error: full-kit/package.json not found. Make sure you're in the project root."
      );
      process.exit(1);
    }

    // Install dependencies
    console.log('📦 Installing root dependencies...');
    runCommand('pnpm install');

    // Change to full-kit directory
    const fullKitPath = path.join(process.cwd(), 'full-kit');

    console.log('📦 Installing full-kit dependencies...');
    runCommand('pnpm install', fullKitPath);

    console.log('🔧 Generating Prisma client...');
    runCommand('pnpm exec prisma generate', fullKitPath);

    console.log('🏗️  Building the project...');
    runCommand('pnpm build', fullKitPath);

    console.log('✅ Build successful!');

    // Set environment variables
    console.log('\n🔧 Setting up environment variables...');
    Object.entries(productionEnv).forEach(([key, value]) => {
      setVercelEnvVar(key, value);
    });

    // Deploy to Vercel
    console.log('\n🚀 Deploying to Vercel...');
    runCommand('vercel --prod --yes');

    console.log('\n✅ Deployment completed successfully!');
    console.log(
      `🌐 Your application is available at: ${productionEnv.BASE_URL}`
    );

    console.log('\n📋 Post-deployment checklist:');
    console.log('1. ✅ Environment variables configured');
    console.log('2. ✅ Application deployed');
    console.log('3. 🔄 Test the application functionality');
    console.log('4. 🔄 Verify authentication works');
    console.log('5. 🔄 Check all dashboard pages load correctly');
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

// Run deployment
deploy();
