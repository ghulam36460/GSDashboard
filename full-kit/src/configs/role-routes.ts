// Define routes that require specific roles.
// Use unlocalized paths (middleware strips locale before matching).

export const adminOnlyRoutes: string[] = [
  // E.g., restrict the eCommerce dashboard to admins
  "/dashboards/ecommerce",
  // Add more admin-only base paths or full paths as needed
]

// In the future, you can add other role groups (e.g., managerOnlyRoutes)
