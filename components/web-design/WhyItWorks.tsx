import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "../style/FadeIn";
import Image from "next/image";

export const WhyItWorks = () => {
  const reasons = [
    {
      title: "Nessun Rischio",
      description: "Non devi investire grosse somme iniziali. Puoi iniziare senza paura di sbagliare."
    },
    {
      title: "Automazione Completa",
      description: "Noi gestiamo il lato tecnico, così non devi preoccuparti di nulla."
    },
    {
      title: "Flessibilità Totale",
      description: "Nessun vincolo lungo termine. Se cambi idea, puoi interrompere in qualsiasi momento."
    },
    {
      title: "Onestà",
      description: "La maggior parte delle aziende ti chiede centinaia o migliaia di euro per un sito web. Noi crediamo che ogni attività, grande o piccola, meriti una presenza online professionale senza dover affrontare costi proibitivi."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 mx-auto text-center">Perché Funziona?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Persona che usa un laptop"
                className="rounded-lg shadow-xl max-w-full h-auto object-cover"
                width={500}
                height={500}
              />
            </div>
            
            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                  <Card className="h-full" key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};