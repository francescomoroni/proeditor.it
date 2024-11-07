import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Servizi4() {
  return (
    <section className="bg-buttons-primary/40 py-4">
      <div className="container mx-auto pt-4 sm:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6 px-4 order-0 md:order-2 ">
            <h2 className="text-4xl font-bold tracking-tight text-center">
              Distribuzione illimitata
            </h2>
            <div className="text-gray-600 text-justify space-y-4">
              <p>
                Rispetto a una casa editrice tradizionale garantiamo la vendita
                e distribuzione estesa nei principali mercati mondiali tramite
                Amazon KDP per un totale di 300 milioni di potenziali lettori.
                Il tutto con royalties fino al 70% del prezzo di vendita (costi
                di stampa esclusi).
              </p>
              <p>Nessun competitor può garantire margini superiori.</p>
            </div>
            <Button
              size="lg"
              className="bg-buttons-primary hover:bg-buttons-primary/80 text-white px-8 flex mx-auto"
            >
              <a href="/#contact-form">Scopri Di Più</a>
            </Button>
          </div>

          {/* Image Column */}
          <div className="relative h-[500px] w-full order-1 md:order-0">
            <Image
              src="/assets/homepage/servizi4.png"
              alt="La Tua Opera - best seller"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
