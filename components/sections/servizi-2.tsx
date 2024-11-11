import { Servizi } from "./servizi";

export function Servizi2() {
  return (
    <Servizi
      title="Disegniamo per te"
      content={[
        "L'abito fa il monaco quando si parla di libri.",
        "Una copertina professionale e accattivante è in grado di fare la differenza agli occhi dei nostri lettori.",
        "Selezioniamo i migliori designer per realizzare le migliori copertine sul mercato sulla base delle tue indicazioni.",
      ]}
      imageSrc="/assets/homepage/servizi2.png"
      buttonText="Richiedi una consulenza gratuita"
      buttonLink="/#contact-form"
      isTextToLeftSideOfCard={true}
    />
  );
}
