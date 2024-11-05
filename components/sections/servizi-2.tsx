import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Servizi2() {
  return (
    <section className="bg-gray-50 py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6 px-4 sm:order-1">
            <h2 className="text-4xl font-bold tracking-tight">
              Disegniamo per te!
            </h2>
            <div className="text-gray-600 text-justify space-y-4">
              <p>
                Selezioniamo i migliori designer per realizzare le migliori
                copertine sul mercato sulla base delle tue indicazioni.
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
          <div className="relative h-[500px] w-full sm:order-0">
            <Image
              src="/assets/homepage/servizi2.png"
              alt="La Tua Opera - Migliori designers"
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
