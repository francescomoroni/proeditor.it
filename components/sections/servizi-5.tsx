import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Servizi5() {
  return (
    <section className="bg-gray-50 py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6 px-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Creiamo la tua vetrina sul web !
            </h2>
            <div className="text-gray-600 text-justify space-y-4">
              <p>
                Accresci la tua visibilità e definisci il tuo personal brand
                tramite il nostro servizio di creazione sito web. Affermati come
                autorità e rafforza la tua credibilità nei confronti di partners
                a clienti creando il tuo spazio online con il supporto di un
                team di professionisti. Siamo gli unici in Italia a offrire
                questo servizio senza alcun costo iniziale.
              </p>
              <p>
                Offerta soggetta a limitazioni, contattaci per verificare la
                disponibilità.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-buttons-primary hover:bg-buttons-primary/80 text-white px-8"
            >
              <a href="/#contact-form">Scopri Di Più</a>
            </Button>
          </div>

          {/* Image Column */}
          <div className="relative h-[500px] w-full ">
            <Image
              src="/assets/homepage/servizi5.png"
              alt="La Tua Opera - Creaiamo il tuo sito web"
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
