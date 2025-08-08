-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "url" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT,
    "emailVerifyToken" TEXT,
    "emailVerified" DATETIME,
    "password" TEXT,
    "passwordResetToken" TEXT,
    "passwordResetExpires" DATETIME,
    "avatar" TEXT,
    "profileBackground" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ONLINE',
    "role" TEXT NOT NULL DEFAULT 'USER',
    "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
    "phone" TEXT,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "company" TEXT,
    "timeZone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("addressLine1", "addressLine2", "avatar", "city", "company", "country", "createdAt", "email", "emailVerified", "emailVerifyToken", "id", "name", "onboardingCompleted", "password", "passwordResetExpires", "passwordResetToken", "phone", "postalCode", "profileBackground", "state", "status", "timeZone", "updatedAt", "username") SELECT "addressLine1", "addressLine2", "avatar", "city", "company", "country", "createdAt", "email", "emailVerified", "emailVerifyToken", "id", "name", "onboardingCompleted", "password", "passwordResetExpires", "passwordResetToken", "phone", "postalCode", "profileBackground", "state", "status", "timeZone", "updatedAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_name_username_status_createdAt_idx" ON "User"("name", "username", "status", "createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "Notification_userId_isRead_createdAt_idx" ON "Notification"("userId", "isRead", "createdAt");
