import { getServerSession } from "next-auth"

import type { UserType } from "@/types"

import { authOptions } from "@/configs/next-auth"
import { db } from "@/lib/prisma"

export async function getUserData(): Promise<UserType | null> {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return null
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
    include: {
      preferences: true,
    },
  })

  if (!user) {
    return null
  }

  return {
    id: user.id,
    firstName: user.name.split(" ")[0] || "",
    lastName: user.name.split(" ").slice(1).join(" ") || "",
    name: user.name,
    password: "", // Never expose password
    username: user.username || "",
    role: "",
    avatar: user.avatar || "/images/avatars/default-avatar.svg",
    background: user.profileBackground || "",
    status: user.status,
    phoneNumber: "",
    email: user.email || "",
    state: "",
    country: "",
    address: "",
    zipCode: "",
    language: "English",
    timeZone: "GMT+00:00",
    currency: "USD",
    organization: "",
    twoFactorAuth: false,
    loginAlerts: true,
    accountReoveryOption: "email",
    connections: 0,
    followers: 0,
  }
}

// Default fallback for components that need a user object
export const defaultUserData: UserType = {
  id: "",
  firstName: "",
  lastName: "",
  name: "New User",
  password: "",
  username: "",
  role: "",
  avatar: "/images/avatars/default-avatar.svg",
  background: "",
  status: "ONLINE",
  phoneNumber: "",
  email: "",
  state: "",
  country: "",
  address: "",
  zipCode: "",
  language: "English",
  timeZone: "GMT+00:00",
  currency: "USD",
  organization: "",
  twoFactorAuth: false,
  loginAlerts: true,
  accountReoveryOption: "email",
  connections: 0,
  followers: 0,
}
