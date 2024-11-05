"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error();

      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo il prima possibile.",
      });

      // Reset form
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore nell'invio del messaggio.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact-form" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input name="name" placeholder="Nome" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="phone" type="tel" placeholder="Telefono" />
              <Textarea
                name="message"
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

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Invio in corso..." : "Invia Messaggio"}
            </Button>
          </form>

          {/* Info Box */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-3xl font-bold">
                Benvenuto nella Casa Editrice 3.0
              </h2>
              <p className="text-xl text-buttons-primary">
                Trasforma il tuo manoscritto in un&apos;opera pubblicata
              </p>
              <p className="text-muted-foreground">
                Siamo qui per guidarti in ogni fase del processo editoriale,
                dalla revisione alla pubblicazione.
              </p>
              <p className="text-muted-foreground">
                Scrivici e verrai ricontattato al più presto da uno dei nostri
                consulenti esperti per una consulenza completamente gratuita.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
