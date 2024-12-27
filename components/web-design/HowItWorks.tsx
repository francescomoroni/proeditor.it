import { FadeIn } from "../style/FadeIn";

const steps = [
  {
    number: "1",
    title: "Parliamo delle tue esigenze",
    description:
      "Raccontaci della tua attività, inviaci le tue foto e informazioni: creeremo il sito perfetto per te.",
  },
  {
    number: "2",
    title: "Il sito è pronto in una settimana",
    description: "Professionale, ottimizzato per mobile e facile da usare.",
  },
  {
    number: "3",
    title: "Manutenzione continua inclusa",
    description: "Tu non devi fare niente, ci occupiamo di tutto noi.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ecco come funziona
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index}>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
