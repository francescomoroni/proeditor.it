"use client";

import { Mail, Instagram, Facebook } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-buttons-primary text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* <a
            href="tel:+390123456789"
            className="flex items-center space-x-2 hover:text-primary-foreground/80"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+39 012 345 6789</span>
          </a> */}
          <a
            href="mailto:info@proeditors.it"
            className="flex items-center space-x-2 hover:text-primary-foreground/80"
          >
            <Mail className="sm:h-6 sm:w-6 h-4 w-4" />
            <span className="hidden sm:inline">info@proeditors.it</span>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="https://instagram.com/proeditors"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80"
          >
            <Instagram className="sm:h-6 sm:w-6 h-4 w-4" />
          </a>
          <a
            href="https://facebook.com/proeditorsmilano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80"
          >
            <Facebook className="sm:h-6 sm:w-6 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
