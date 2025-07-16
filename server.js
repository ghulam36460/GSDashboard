const { exec } = require('child_process');
const path = require('path');

console.log('🚀 Shadboard Project Server');
console.log('==========================\n');

// Project Analysis
console.log('📊 PROJECT ANALYSIS:');
console.log('• Framework: Next.js 15.2.4 with React 19.1.0');
console.log('• Language: TypeScript 5');
console.log('• UI Library: Radix UI + Tailwind CSS 4.1.3');
console.log('• Package Manager: pnpm 10.8.1');
console.log('• Node.js: >= 22 required');
console.log('• Database: Prisma ORM (full-kit only)');
console.log('• Authentication: NextAuth.js (full-kit only)');
console.log('• Features: Dashboard components, charts, forms, tables\n');

// Check which kit to run
const args = process.argv.slice(2);
const kit = args[0] || 'full-kit'; // Default to full-kit

if (kit !== 'full-kit' && kit !== 'starter-kit') {
  console.error('❌ Invalid kit specified. Use "full-kit" or "starter-kit"');
  process.exit(1);
}

const kitPath = path.join(__dirname, kit);
console.log(`📁 Running ${kit} from: ${kitPath}`);

// Change to the kit directory and run dev server
process.chdir(kitPath);

console.log('📦 Installing dependencies...');
exec('pnpm install', (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Error installing dependencies:', error);
    return;
  }
  
  console.log('✅ Dependencies installed successfully');
  
  if (kit === 'full-kit') {
    console.log('🔧 Running Prisma setup for full-kit...');
    exec('pnpm exec prisma generate', (prismaError, prismaStdout, prismaStderr) => {
      if (prismaError) {
        console.error('⚠️  Prisma setup failed, but continuing:', prismaError.message);
      } else {
        console.log('✅ Prisma setup completed');
      }
      
      startDevServer();
    });
  } else {
    startDevServer();
  }
});

function startDevServer() {
  console.log('🌟 Starting development server...');
  console.log('📝 Visit http://localhost:3000 once the server starts\n');
  
  const devProcess = exec('pnpm run dev', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error starting dev server:', error);
      return;
    }
  });
  
  // Pipe output to console
  devProcess.stdout.pipe(process.stdout);
  devProcess.stderr.pipe(process.stderr);
  
  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    devProcess.kill();
    process.exit(0);
  });
}
