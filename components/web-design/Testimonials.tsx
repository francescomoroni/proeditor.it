import { FadeIn } from "../style/FadeIn";

const testimonials = [
  {
    quote:
      "Finalmente un servizio pensato per chi non vuole spendere una fortuna ma vuole comunque un sito professionale. Ho avuto il mio sito pronto in una settimana!",
    author: "Maria",
    role: "Fisioterapista",
  },
  {
    quote:
      "Non ho mai avuto tempo per occuparmi di queste cose. Ora il mio sito è sempre aggiornato e sicuro. Il tutto al costo di un caffè al giorno",
    author: "Simone",
    role: "Parrucchiere",
  },
  {
    quote:
      "Il mio sito è sempre aggiornato e non devo preoccuparmi di nulla. Ho più tempo per concentrarmi sul mio lavoro.",
    author: "Martino",
    role: "Medico",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ecco perché altri come te ci hanno scelto
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index}>
              <div className="h-full flex flex-col">
                <blockquote className="flex-1">
                  <p className="text-gray-600 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">
                    — {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
