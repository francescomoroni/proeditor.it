"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Articoli", href: "/articoli" },
];

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo Casa Editrice ProEditors"
              width={150}
              height={40}
              // className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold">Pro Editors</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8 ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
