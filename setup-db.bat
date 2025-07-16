@echo off
echo Setting up production database...

cd full-kit

echo Generating Prisma client...
npx prisma generate

echo Pushing database schema...
npx prisma db push --accept-data-loss

echo Database setup completed!
