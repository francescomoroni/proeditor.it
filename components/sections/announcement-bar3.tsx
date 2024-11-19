"use client";

export function AnnouncementBar3() {
  return (
    <div className="relative isolate overflow-hidden bg-primary">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-5xl">
            Pro Editors
          </h2>
          <p className="mx-auto font-bold mt-6 max-w-3xl text-pretty text-lg/8">
            Leader nel settore dal 2019
          </p>
          <p className="mx-auto mt-6 max-w-5xl text-pretty text-lg/8 text-text-primary/80">
            Dopo anni di esperienza nel mercato americano e inglese, abbiamo
            deciso di estendere i nostri servizi proponendo qualcosa di mai
            visto prima sul mercato Italiano. Contattaci per una consulenza
            gratuita e avere un preventivo sulla base delle tue esigenze. Che tu
            sia un professionista desideroso di affermare la propria figura o un
            autore pronto a lanciare il prossimo best seller, abbiamo la
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
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
