"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <Image
        src="/assets/homepage/web/web1.png"
        alt="Hero Image"
        layout="fill"
        className="absolute inset-0 object-cover w-full h-full"
        priority 
        onLoadingComplete={() => {
          // Hide the image when it has loaded
          const videoElement = document.querySelector('video');
          if (videoElement && videoElement.previousElementSibling) {
            (videoElement.previousElementSibling as HTMLElement).style.display = 'none';
          }
        }}
      />

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedData={(e) => {
          // Hide the image when the video is ready
          if (e.currentTarget.previousElementSibling) {
            (e.currentTarget.previousElementSibling as HTMLElement).style.display = 'none';
          }
        }}
      >
        <source src="/assets/homepage/web/web_cut.mp4" type="video/mp4" />
      </video>

      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenuto */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white mx-auto px-4 space-y-32">
      <div className="max-w-4xl mx-auto text-center">
           <span className="px-3 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
             NESSUN COSTO INIZIALE
           </span>

           <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
             Il Tuo sito web professionale
             <span className="block text-primary">SENZA costi iniziali!</span>
           </h1>

           <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
             Progettato per piccole attività, liberi professionisti e
             imprenditori come te. Porta la tua attività online con un sito web
             professionale a soli €29.90 al mese.
           </p>

          <div className="mt-10">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => {
              window.location.href = "#contattiWebDesign";
            }}>
              Richiedi ora il tuo sito professionale
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import { Button } from "@/components/ui/button";
// import { FadeIn } from "../style/FadeIn";

// export const Hero = () => {
//   return (
//     <FadeIn>
//       <section className="min-h-screen flex items-center justify-center px-4 py-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <span className="px-3 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
//             NESSUN COSTO INIZIALE
//           </span>

//           <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
//             Il Tuo sito web professionale
//             <span className="block text-primary">SENZA costi iniziali!</span>
//           </h1>

//           <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
//             Progettato per piccole attività, liberi professionisti e
//             imprenditori come te. Porta la tua attività online con un sito web
//             professionale a soli €30 al mese.
//           </p>

//           <div className="mt-10">
//             <Button size="lg" className="text-lg px-8 py-6" onClick={() => {
//               window.location.href = "#contattiWebDesign";
//             }}>
//               Richiedi ora il tuo sito professionale
//             </Button>
//           </div>
//         </div>
//       </section>
//     </FadeIn>
//   );
// };
