"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Activity, Brain } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const routes = [
    { name: "Home", path: "/" },
    { name: "Text Analysis", path: "/analyze/text" },
    { name: "Voice Analysis", path: "/analyze/voice" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Recommendations", path: "/recommendations" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl flex items-center">
            <Brain className="h-6 w-6 mr-2 text-mindtrack-600" />
            <span className="gradient-heading">MindTrack</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-mindtrack-600",
                  pathname === route.path
                    ? "text-mindtrack-600 after:block after:h-0.5 after:bg-mindtrack-600 after:mt-0.5"
                    : "text-muted-foreground",
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            asChild
            className="hidden md:flex bg-gradient-to-r from-mindtrack-600 to-calm-600 hover:from-mindtrack-700 hover:to-calm-700"
          >
            <Link href="/analyze">
              <Activity className="mr-2 h-4 w-4" />
              Start Analysis
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t p-4 glass-effect animate-in">
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-mindtrack-600 p-2 rounded-md",
                  pathname === route.path
                    ? "text-mindtrack-600 bg-mindtrack-50 dark:bg-mindtrack-950/20"
                    : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-gradient-to-r from-mindtrack-600 to-calm-600 hover:from-mindtrack-700 hover:to-calm-700"
            >
              <Link href="/analyze" onClick={() => setMobileMenuOpen(false)}>
                <Activity className="mr-2 h-4 w-4" />
                Start Analysis
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
