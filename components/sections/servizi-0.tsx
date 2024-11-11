import { Servizi } from "./servizi";

export function Servizi0() {
  return (
    <Servizi
      title="Pubblichiamo il tuo libro"
      content={[
        "Hai un'idea, ma ti manca il tempo materiale per metterla su carta? Non preoccuparti, abbiamo una soluzione per ogni tua esigenza. Dalla scrittura del libro fino alla sua pubblicazione puoi contare sulla nostra esperienza per realizzare il tuo sogno.",
        "Offriamo tutti i servizi di cui hai bisogno: ghostwriting, creazione copertine, impaginazione, editing e pubblicazione."
      ]}
      imageSrc="/assets/homepage/servizi0.png"
      buttonText="Richiedi una consulenza gratuita"
      buttonLink="/#contact-form"
      isTextToLeftSideOfCard={true}
    />
  );
}
