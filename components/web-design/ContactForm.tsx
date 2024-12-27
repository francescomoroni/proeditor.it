"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "../style/FadeIn";
import { useForm, ValidationError } from "@formspree/react";

export function ContactFormWebDesign() {
  const [state, handleSubmit] = useForm("xjkvoakl");

  return (
    <FadeIn>
      <section id="contattiWebDesign" className="py-16 bg-secondary/10">
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
            <Card className="">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-3xl font-bold text-primary">
                  Benvenuto nella tua Web Agency di fiducia
                </h2>
                <p className="text-xl text-text-secondary">
                  Realizziamo siti web moderni, funzionali e su misura per te.
                </p>
                <p className="text-text-secondary">
                  Ti accompagniamo in ogni fase del progetto, dalla
                  progettazione al lancio online.
                </p>
                <p className="text-text-secondary">
                  Contattaci oggi stesso e riceverai una{" "}
                  <strong className="font-bold">
                    consulenza gratuita e personalizzata
                  </strong>{" "}
                  con uno dei nostri esperti.
                </p>
                <p className="text-text-secondary">
                  La nostra esperienza nel web design e nello sviluppo ci
                  permette di offrirti un{" "}
                  <strong className="font-bold">
                    sito ottimizzato, performante e responsive
                  </strong>{" "}
                  su ogni dispositivo.
                </p>
                <p className="text-text-secondary">
                  Siamo qui per rispondere a tutte le tue domande e per
                  trasformare le tue idee in realtà digitali.
                </p>
                <p className="font-bold">
                  Affidati a noi per costruire una presenza online che faccia la
                  differenza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
