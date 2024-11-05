import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Servizi1() {
  return (
    <section className="bg-gray-50 py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6 px-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Scriviamo per te!
            </h2>
            <div className="text-gray-600 text-justify space-y-4">
              <p>
                Hai un&apos;idea rivoluzionaria, ma non hai tempo da dedicare
                alla scrittura? Hai una storia che merita di essere raccontata,
                ma scrivere non è il tuo forte?
              </p>
              <p>
                Nessun problema. Il nostro servizio di ghostwriting metterà a
                tua disposizione uno professionista che scriverà il tuo best
                seller al posto tuo, seguendo le tue indicazioni passo dopo
                passo.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-buttons-primary hover:bg-buttons-primary/80 text-white px-8"
            >
              Scopri Di Più
            </Button>
          </div>

          {/* Image Column */}
          <div className="relative h-[500px] w-full">
            <Image
              src="/assets/homepage/servizi1.png" // Assicurati di avere questa immagine nella cartella public
              alt="La Tua Opera - Copertina libro"
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
