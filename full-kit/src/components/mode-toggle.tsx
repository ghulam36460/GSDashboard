"use client"

import { useCallback } from "react"
import { Moon, Sun } from "lucide-react"

import { useIsDarkMode } from "@/hooks/use-mode"
import { useSettings } from "@/hooks/use-settings"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { settings, updateSettings } = useSettings()
  const isDarkMode = useIsDarkMode()

  const toggleMode = useCallback(() => {
    const newMode = isDarkMode ? "light" : "dark"
    updateSettings({ ...settings, mode: newMode })
  }, [isDarkMode, settings, updateSettings])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMode}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      className="relative overflow-hidden transition-all duration-300 hover:scale-110"
    >
      <div className="relative">
        {/* Sun icon for light mode */}
        <Sun
          className={`absolute size-4 transition-all duration-500 ${
            isDarkMode
              ? "scale-0 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
        />

        {/* Moon icon for dark mode */}
        <Moon
          className={`absolute size-4 transition-all duration-500 ${
            isDarkMode
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
        />
      </div>
    </Button>
  )
}
