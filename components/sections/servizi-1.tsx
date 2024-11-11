
import { Servizi } from "./servizi";

export function Servizi1() {
  return (
    <Servizi
      title="Scriviamo per te"
      content={[
        "Hai un'idea rivoluzionaria, ma non hai tempo da dedicare alla scrittura?",
        "Hai una storia che merita di essere raccontata, ma scrivere non è il tuo forte?",
        "Nessun problema. Il nostro servizio di ghostwriting metterà a tua disposizione uno professionista che scriverà il tuo best seller al posto tuo, seguendo le tue indicazioni passo dopo passo.",
      ]}
      imageSrc="/assets/homepage/servizi1.png"
      buttonText="Richiedi una consulenza gratuita"
      buttonLink="/#contact-form"
      isTextToLeftSideOfCard={false}
    />
  );
}
