
import { Servizi } from "./servizi";

export function Servizi3() {
  return (
    <Servizi
      title="Correggiamo il tuo manoscritto"
      content={[
        "Hai già una bozza del tuo libro?",
        "Affidati la revisione alle mani di un professionista.",
        "Sono i dettagli a fare la differenza tra un lavoro amatoriale e un'opera di livello professionale. Affidati ai nostri servizi per trasformare il tuo gioiello grezzo in una gemma preziosa.",
      ]}
      imageSrc="/assets/homepage/servizi3.png"
      buttonText="Richiedi una consulenza gratuita"
      buttonLink="/#contact-form"
      isTextToLeftSideOfCard={false}
    />
  );
}