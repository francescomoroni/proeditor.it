import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] space-y-4 text-center mx-auto">
      <h2 className="text-3xl font-bold tracking-tight">Articolo non trovato</h2>
      <p className="text-text-secondary">
        Non siamo riusciti a trovare l&apos;articolo che stai cercando.
      </p>
      <Button asChild>
        <Link href="/articoli">
          Torna agli articoli
        </Link>
      </Button>
    </div>
  )
} 