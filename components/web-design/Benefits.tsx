import { Check } from "lucide-react";
import { FadeIn } from "../style/FadeIn";

const benefits = [
  {
    title: "Maggiore Credibilità",
    description:
      "Un sito web professionale comunica ai clienti che sei serio, affidabile e al passo coi tempi.",
  },
  {
    title: "Visibilità H24",
    description:
      "Sei sempre aperto online. Il sito continua a lavorare per te, mostrando i tuoi servizi e attirando nuovi contatti.",
  },
  {
    title: "Maggiore Coinvolgimento",
    description:
      "Crea un legame più umano con i tuoi clienti raccontando la tua storia e mettendo in evidenza il tuo team.",
  },
  {
    title: "Informazioni Sempre Accessibili",
    description:
      "Orari, contatti e servizi sono sempre a portata di clic per i tuoi clienti.",
  },
];

export const Benefits = () => {
  return (
    <FadeIn>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Perché ogni attività deve avere un sito web oggi
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Un sito web ben fatto è molto più di una semplice pagina online
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};
