import { getServerSession } from "next-auth"

import { authOptions } from "@/configs/next-auth"

export async function requireAdmin() {
  const session = await getServerSession(authOptions)
  if (session?.user?.role !== "ADMIN") {
    throw new Error("Forbidden: Admins only")
  }
  return session
}
