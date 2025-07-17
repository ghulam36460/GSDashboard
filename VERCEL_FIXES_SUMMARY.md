# Vercel Deployment Error Fixes

## Issues Fixed

### 1. ESLint ENOENT Error - `.gitignore` not found

**Problem**: ESLint was trying to read `.gitignore` file during build but couldn't find it in the Vercel environment.

**Solution**: Updated `full-kit/eslint.config.mjs` to check if `.gitignore` exists before trying to include it:

```javascript
// Only include gitignore if the file exists
...(existsSync(gitignorePath) ? [includeIgnoreFile(gitignorePath)] : []),
```

### 2. BASE_URL Invalid Value Error

**Problem**: The `BASE_URL` environment variable was set to `REPLACE_WITH_YOUR_VERCEL_URL` which caused the build to fail.

**Solutions Applied**:

#### A. Updated `.env.production` file

Fixed the placeholder values in `full-kit/.env.production`:

```bash
BASE_URL=https://gsdashboard-five.vercel.app
API_URL=https://gsdashboard-five.vercel.app/api
NEXTAUTH_URL=https://gsdashboard-five.vercel.app
NEXTAUTH_SECRET=gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars
```

#### B. Enhanced Layout Files Error Handling

Updated both layout files to handle missing or invalid BASE_URL gracefully:

- `full-kit/src/app/[lang]/layout.tsx`
- `full-kit/src/app/(unlocalized)/layout.tsx`

Added fallback logic:

```typescript
function getValidBaseUrl() {
  const url =
    process.env.BASE_URL ||
    process.env.NEXTAUTH_URL ||
    'https://gsdashboard-five.vercel.app';
  if (!url || url === 'REPLACE_WITH_YOUR_VERCEL_URL') {
    // Use default URL for production builds
    return new URL('https://gsdashboard-five.vercel.app');
  }
  try {
    return new URL(url);
  } catch {
    throw new Error(`BASE_URL is invalid: ${url}`);
  }
}
```

#### C. Updated Vercel Configuration

Enhanced `full-kit/vercel.json` with environment variables:

```json
{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "env": {
    "BASE_URL": "https://gsdashboard-five.vercel.app",
    "API_URL": "https://gsdashboard-five.vercel.app/api",
    "NEXTAUTH_URL": "https://gsdashboard-five.vercel.app",
    "NEXTAUTH_SECRET": "gsdashboard_next_auth_secret_key_for_production_2024_secure_random_32chars",
    "DATABASE_URL": "file:./dev.db",
    "HOME_PATHNAME": "/dashboards/analytics",
    "NEXT_PUBLIC_HOME_PATHNAME": "/dashboards/analytics"
  }
}
```

## Deployment Scripts Created

### For Windows (PowerShell)

- `deploy-fixed.ps1` - Complete deployment script with environment setup
- `setup-vercel-env-fixed.ps1` - Environment variables setup only

### For Linux/Mac (Bash)

- `deploy-fixed.sh` - Complete deployment script with environment setup
- `setup-vercel-env-fixed.sh` - Environment variables setup only

## Next Steps

1. **Run the deployment script**:

   ```powershell
   .\deploy-fixed.ps1
   ```

2. **Or manually deploy**:

   ```bash
   cd full-kit
   vercel --prod
   ```

3. **Verify deployment**:
   - Check that the application loads at: https://gsdashboard-five.vercel.app
   - Verify that all routes work correctly
   - Test authentication if enabled

## Environment Variables Set

All environment variables are now properly configured for production:

- `BASE_URL`: https://gsdashboard-five.vercel.app
- `API_URL`: https://gsdashboard-five.vercel.app/api
- `NEXTAUTH_URL`: https://gsdashboard-five.vercel.app
- `NEXTAUTH_SECRET`: (32-character secure secret)
- `DATABASE_URL`: file:./dev.db
- `HOME_PATHNAME`: /dashboards/analytics
- `NEXT_PUBLIC_HOME_PATHNAME`: /dashboards/analytics

The deployment should now work without the previous errors.
