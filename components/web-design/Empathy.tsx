import { FadeIn } from "../style/FadeIn";
export const Empathy = () => {
  const thoughts = [
    "Realizzare un sito web costa troppo.",
    "Non saprei nemmeno da dove cominciare.",
    "Troppo complicato creare e gestire un sito web.",
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <p className="text-xl text-gray-700 leading-relaxed">
            Lo sai anche tu: avere un sito web non è più un lusso, ma una
            necessità assoluta. Oggi, il tuo prossimo cliente cerca online PRIMA
            di contattarti, e se non ti trova… beh, lo farà con il tuo
            concorrente.
          </p>
          <div className="space-y-4">
            <p className="text-xl font-semibold text-gray-800 pt-10">
              Ma quante volte hai pensato:
            </p>
            <ul className="space-y-3">
              {thoughts.map((thought, index) => (
                <li key={index} className="flex items-center text-lg text-gray-700">
                  <span className="text-primary mr-2">•</span>
                  &quot;{thought}&quot;
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xl text-gray-700 my-10">
            Se ti ritrovi in uno di questi pensieri, ho una buona notizia per
            te.
          </p>
          <div className="space-y-4 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">
              Un sito web professionale senza costi iniziali
            </h2>
            <p className="text-2xl font-semibold text-gray-800">È Possibile?</p>
            <p className="text-2xl font-bold text-primary">Sì, è possibile.</p>
            <p className="text-xl text-gray-700">
              Con il nostro servizio innovativo, non paghi nulla per la
              creazione del tuo sito web.
              <br />
              Hai letto bene: <span className="font-bold">€0</span>. Nessun
              costo iniziale. Nessuna sorpresa.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
