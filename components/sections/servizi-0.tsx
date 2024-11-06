import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Servizi0() {
  return (
    <section className="bg-buttons-primary/40 py-4">
      <div className="container mx-auto pt-4 sm:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6 px-4 order-0 sm:order-2 ">
            <h2 className="text-4xl font-bold tracking-tight text-center">
              Pubblichiamo il tuo libro
            </h2>
            <div className="text-gray-600 text-justify space-y-4">
              <p>
                I libri sono armi potentissime. Tramandano emozioni, muovono le
                masse, lasciano la nostra traccia nella Storia. Possono
                riassumere la tua esperienza di vita, oppure lanciarti quale
                autorità indiscussa nel tuo ambito di competenza. Un libro è per
                tutti, scrivere un libro non lo è. Affidati a dei professionisti
                per coronare il tuo sogno di diventare scrittore, o rilanciare
                la tua carriera professionale.
              </p>
              <p>
                Hai un&apos;idea, ma ti manca il tempo materiale per metterla su
                carta? Non preoccuparti, abbiamo una soluzione per ogni tua
                esigenza. Dalla scrittura del libro fino alla sua pubblicazione
                puoi contare sulla nostra esperienza per realizzare il tuo
                sogno.
              </p>
              <p>
                Offriamo tutti i servizi di cui hai bisogno: ghostwriting,
                creazione copertine, impaginazione, editing e pubblicazione.
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
          <div className="relative h-[500px] w-full order-1 sm:order-0">
            <Image
              src="/assets/homepage/servizi0.png"
              alt="La Tua Opera - Pro Editors servizi"
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
