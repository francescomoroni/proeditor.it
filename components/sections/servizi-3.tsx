import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Servizi3() {
  return (
    <section className="bg-gray-50 py-4">
      <div className="container mx-auto pt-4 sm:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6 px-4">
            <h2 className="text-4xl font-bold tracking-tight text-center">
              Correggiamo il tuo manoscritto
            </h2>
            <div className="text-gray-600 text-justify space-y-4">
              <p>Hai già una bozza del tuo libro?</p>
              <p>Affidati la revisione alle mani di un professionista.</p>
              <p>
                Sono i dettagli a fare la differenza tra un lavoro amatoriale e
                un&apos;opera di livello professionale. Affidati ai nostri
                servizi per trasformare il tuo gioiello grezzo in una gemma
                preziosa.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-buttons-primary hover:bg-buttons-primary/80 text-white px-8 flex mx-auto"
            >
              <a href="/#contact-form">Scopri Di Più</a>
            </Button>
          </div>

          {/* Image Column */}
          <div className="relative h-[500px] w-full ">
            <Image
              src="/assets/homepage/servizi3.png"
              alt="La Tua Opera - Correggiamo il tuo manoscritto"
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
