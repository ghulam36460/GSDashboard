/**
 * Utility to clear NextAuth session data from browser storage
 * Call this function when NEXTAUTH_SECRET changes
 */
export function clearAuthSession() {
  if (typeof window !== "undefined") {
    // Clear NextAuth session tokens
    const cookies = document.cookie.split(";")

    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf("=")
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim()

      // Clear NextAuth related cookies
      if (name.includes("next-auth") || name.includes("__Secure-next-auth")) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`
      }
    })

    // Clear session storage
    sessionStorage.clear()

    // Clear specific localStorage items
    localStorage.removeItem("next-auth.session-token")
    localStorage.removeItem("next-auth.csrf-token")

    console.log("NextAuth session data cleared")
  }
}
