"use client";
  
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "../style/FadeIn";

const features = [
  "Progettazione del Sito Web su misura",
  "Dominio e Hosting inclusi",
  "Manutenzione e Sicurezza",
  "Supporto e Piccole Modifiche",
  "Ottimizzazione per mobile",
  "Aggiornamenti regolari",
];

export const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="px-3 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
            PREZZO TRASPARENTE
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
            Un investimento minimo per risultati massimi
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Nessun costo iniziale, solo un canone mensile accessibile
          </p>
        </FadeIn>

        <FadeIn>
          <div className="p-8 sm:p-12">
            <div className="flex justify-center items-baseline gap-2">
              <span className="text-5xl font-bold text-gray-900">€29.90</span>
              <span className="text-gray-600">/mese</span>
            </div>

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button className="w-full text-lg py-6" size="lg" onClick={() => {
                window.location.href = "#contattiWebDesign";
              }}>
                Inizia Ora
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
