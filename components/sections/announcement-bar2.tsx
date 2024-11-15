"use client";

// export function AnnouncementBar2() {
//   return (
//     <div className="bg-white">
//       <div className="px-6 py-24 sm:px-6 sm:py-26 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//             I libri sono armi potentissime.
//           </h2>
//           <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
//             Tramandano emozioni, muovono le masse, lasciano la nostra traccia
//             nella Storia. Possono riassumere la tua esperienza di vita, oppure
//             lanciarti quale autorità indiscussa nel tuo ambito di competenza.
//           </p>
//           <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
//             Un libro è per tutti, scrivere un libro non lo è. Affidati a dei
//             professionisti per coronare il tuo sogno di diventare scrittore, o
//             rilanciare la tua carriera professionale.
//           </p>
//           <div className="mt-10 flex items-center justify-center gap-x-6">
//             <a
//               href="#"
//               className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Richiedi una consulenza gratuita
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export function AnnouncementBar2() {
  return (
    <div className="relative isolate overflow-hidden bg-primary">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            I libri sono armi potentissime.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
            Un libro è per tutti, scrivere un libro non lo è. Affidati a dei
            professionisti per coronare il tuo sogno di diventare scrittore, o
            rilanciare la tua carriera professionale.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contatti"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Richiedi una consulenza gratuita
            </a>
            {/* <a href="#" className="text-sm/6 font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
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
