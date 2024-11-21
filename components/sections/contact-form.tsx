"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "../style/FadeIn";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xjkvoakl")
  
  // if (state.succeeded) {
  //   return <p>Grazie per averci contattato!</p>;
  // }

  return (
    <FadeIn>
      <section id="contatti" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center pb-12">Contattaci</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input name="name" placeholder="Nome" required />
                <Input name="email" type="email" placeholder="Email" required />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input name="phone" type="tel" placeholder="Telefono" />
                <Textarea
                  name="message"
                  placeholder="Il tuo messaggio"
                  className="min-h-[150px]"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" required />
                <label
                  htmlFor="privacy"
                  className="text-sm text-text-secondary"
                >
                  Acconsento al trattamento dei dati personali secondo la
                  normativa sulla privacy
                </label>
              </div>

              <Button type="submit" className="w-full text-white">
                Invia Messaggio
              </Button>
            </form>

            {/* Info Box */}
            <Card className="hidden md:block">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-3xl font-bold text-primary">
                  Benvenuto nella Casa Editrice 3.0
                </h2>
                <p className="text-xl text-text-secondary">
                  Trasforma il tuo manoscritto in un&apos;opera pubblicata
                </p>
                <p className="text-text-secondary">
                  Siamo qui per guidarti in ogni fase del processo editoriale,
                  dalla revisione alla pubblicazione.
                </p>
                <p className="text-text-secondary">
                  Scrivici e verrai ricontattato al più presto da uno dei nostri
                  consulenti esperti per una{" "}
                  <strong className="font-bold">
                    consulenza completamente gratuita
                  </strong>
                  .
                </p>
                <p className="text-text-secondary">
                  La nostra esperienza nel settore editoriale ci permette di
                  offrirti un servizio{" "}
                  <strong className="font-bold">
                    personalizzato e di alta qualità
                  </strong>
                  .
                </p>
                <p className="text-text-secondary">
                  Non esitare a contattarci per qualsiasi domanda o per
                  discutere le tue idee.
                </p>
                <p className="font-bold">
                  Siamo qui per aiutarti a realizzare il tuo sogno di il tuo
                  sogno di pubblicazione.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
