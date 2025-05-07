import Link from "next/link"
import { Brain, Heart, Mail, Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-gradient-to-b from-background to-mindtrack-50/30 dark:to-mindtrack-950/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link href="/" className="font-bold text-xl flex items-center">
              <Brain className="h-5 w-5 mr-2 text-mindtrack-600" />
              <span className="gradient-heading">MindTrack</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-driven mental health analysis through speech and text patterns.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/analyze/text" className="text-sm text-muted-foreground hover:text-mindtrack-600">
                  Text Analysis
                </Link>
              </li>
              <li>
                <Link href="/analyze/voice" className="text-sm text-muted-foreground hover:text-mindtrack-600">
                  Voice Analysis
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-mindtrack-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/recommendations" className="text-sm text-muted-foreground hover:text-mindtrack-600">
                  Recommendations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-sm text-muted-foreground hover:text-mindtrack-600">
                  Mental Health Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-mindtrack-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-mindtrack-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-mindtrack-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-muted-foreground hover:text-mindtrack-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-mindtrack-600">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-mindtrack-600">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              Contact us at{" "}
              <a href="mailto:support@mindtrack.com" className="text-mindtrack-600 hover:underline">
                support@mindtrack.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MindTrack. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-mindtrack-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-mindtrack-600">
              Terms of Service
            </Link>
            <div className="text-xs text-muted-foreground flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500 animate-pulse" /> for mental wellness
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
