'use client'

import { Mail, Phone, Instagram } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="tel:+390123456789" className="flex items-center space-x-2 hover:text-primary-foreground/80">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+39 012 345 6789</span>
          </a>
          <a href="mailto:info@casaeditrice.it" className="flex items-center space-x-2 hover:text-primary-foreground/80">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">info@casaeditrice.it</span>
          </a>
        </div>
        <a 
          href="https://instagram.com/casaeditrice" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary-foreground/80"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
} 