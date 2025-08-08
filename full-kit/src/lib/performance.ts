/**
 * Performance utilities for Core Web Vitals optimization
 */

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === "undefined") return

  // Preload fonts
  const fontLinks = [
    { href: "/fonts/lato-regular.woff2", as: "font", type: "font/woff2" },
    { href: "/fonts/lato-bold.woff2", as: "font", type: "font/woff2" },
  ]

  fontLinks.forEach(({ href, as, type }) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = href
    link.as = as
    link.type = type
    link.crossOrigin = "anonymous"
    document.head.appendChild(link)
  })
}

// Lazy load images with intersection observer
export function lazyLoadImages() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.classList.remove("lazy")
            imageObserver.unobserve(img)
          }
        }
      })
    },
    { rootMargin: "50px" }
  )

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}

// Optimize layout shifts
export function optimizeLayoutShifts() {
  // Add skeleton loading classes
  const skeletonElements = document.querySelectorAll(".skeleton")
  skeletonElements.forEach((element) => {
    element.classList.add("animate-pulse")
  })
}

// Web Vitals monitoring
export function initWebVitalsMonitoring() {
  if (typeof window === "undefined") return

  // Simple performance monitoring without external dependencies
  if ("performance" in window) {
    // Monitor page load time
    window.addEventListener("load", () => {
      const navigationTiming = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming
      const loadTime =
        navigationTiming.loadEventEnd - navigationTiming.fetchStart

      if (process.env.NODE_ENV === "development") {
        console.log("Page Load Time:", `${loadTime}ms`)
      }
    })

    // Monitor LCP (Largest Contentful Paint)
    if ("PerformanceObserver" in window) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]

        if (process.env.NODE_ENV === "development") {
          console.log("LCP:", `${lastEntry.startTime}ms`)
        }
      })

      try {
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })
      } catch {
        // LCP not supported
      }
    }
  }
}

// Resource hints
export function addResourceHints() {
  if (typeof window === "undefined") return

  // DNS prefetch for external domains
  const domains = ["fonts.googleapis.com", "fonts.gstatic.com"]

  domains.forEach((domain) => {
    const link = document.createElement("link")
    link.rel = "dns-prefetch"
    link.href = `//${domain}`
    document.head.appendChild(link)
  })
}
