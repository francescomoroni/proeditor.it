'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

export function ContactForm() {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-4">
              <Input placeholder="Nome completo" required />
              <Input type="email" placeholder="Email" required />
              <Input type="tel" placeholder="Telefono" />
              <Textarea 
                placeholder="Il tuo messaggio" 
                className="min-h-[150px]" 
                required 
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="privacy" required />
              <label 
                htmlFor="privacy" 
                className="text-sm text-muted-foreground"
              >
                Acconsento al trattamento dei dati personali secondo la 
                normativa sulla privacy
              </label>
            </div>

            <Button type="submit" className="w-full">
              Invia Messaggio
            </Button>
          </form>

          {/* Info Box */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-3xl font-bold">
                Benvenuto nella Casa Editrice 3.0
              </h2>
              <p className="text-xl text-muted-foreground">
                Trasforma il tuo manoscritto in un&apos;opera pubblicata
              </p>
              <p className="text-muted-foreground">
                Siamo qui per guidarti in ogni fase del processo editoriale, 
                dalla revisione alla pubblicazione.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 