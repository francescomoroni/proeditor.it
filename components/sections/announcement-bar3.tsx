"use client";

import { FadeIn } from "../style/FadeIn";

export function AnnouncementBar3() {
  return (
    <FadeIn>
      <div className="relative isolate overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('/assets/homepage/hero_books_img.jpg')] bg-cover bg-center blur-md opacity-50"></div>
        <div className="px-6 py-12 lg:px-8 lg:py-20 relative z-10">
          <div className="mx-auto max-w-2xl text-center space-y-12">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              Pro Editors
            </h2>
            <p className="mx-auto font-bold mt-6 max-w-3xl text-pretty text-lg text-text-primary">
              Leader nel settore dal 2019
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-pretty text-lg/8 text-text-primary">
              Dopo anni di esperienza nel mercato americano e inglese, abbiamo
              deciso di estendere i nostri servizi proponendo qualcosa di mai
              visto prima sul mercato Italiano. <strong className="font-bold">Contattaci per una consulenza
              gratuita </strong>e avere un preventivo sulla base delle tue esigenze. Che
              tu sia un professionista desideroso di affermare la propria figura
              o un autore pronto a lanciare il prossimo best seller, abbiamo la
              soluzione che fa per te.
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contatti"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Richiedi una consulenza gratuita
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
