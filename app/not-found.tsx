import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] space-y-4 text-center mx-auto">
      <h2 className="text-3xl font-bold tracking-tight">Pagina non trovata</h2>
      <p className="text-text-secondary">
        La pagina che stai cercando non esiste.
      </p>
      <Button asChild>
        <Link href="/">
          Torna alla home
        </Link>
      </Button>
    </div>
  )
} 