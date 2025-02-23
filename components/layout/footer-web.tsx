"use client";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function FooterWebDesign() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Colonna 1: Contatti */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contatti</h3>
            <div className="space-y-2">
              {/* <a href="tel:+390123456789" className="flex items-center space-x-2 hover:opacity-80">
                <Phone className="h-4 w-4" />
                <span>+39 012 345 6789</span>
              </a> */}
              <a
                href="mailto:info@casaeditrice.it"
                className="flex items-center space-x-2 hover:opacity-80"
              >
                <Mail className="h-4 w-4" />
                <span>info@proeditors.it</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Milano, 20121</span>
              </div>
            </div>
          </div>

          {/* Colonna 2: Link Utili */}
          {/* <div>
            <h3 className="font-bold text-lg mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#portfolio" className="hover:opacity-80">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/articoli" className="hover:opacity-80">
                  Articoli
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Colonna 3: Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/proeditorsmilan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/proeditorsmilano"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              {/* <a href="#" className="hover:opacity-80" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a> */}
            </div>
          </div>

          {/* Colonna 4: Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informazioni Legali</h3>
            <ul className="space-y-2">
              <li><Link href="/cookie-policy" className="hover:opacity-80">Cookie Policy</Link></li>
              <li>
                <Link href="/privacy-policy" className="hover:opacity-80">
                  Privacy Policy
                </Link>
              </li>
              {/* <li><Link href="/termini" className="hover:opacity-80">Termini e Condizioni</Link></li> */}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center">
          <p className="text-text-primary">
            &copy; {new Date().getFullYear()} Pro Editors. Tutti i diritti
            riservati.
          </p>
          <p className="text-text-primary">P.Iva 13294140560</p>
        </div>
      </div>
    </footer>
  );
}
