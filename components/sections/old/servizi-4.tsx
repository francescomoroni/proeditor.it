

import { Servizi } from "./servizi";

export function Servizi4() {
  return (
    <Servizi
      title="Distribuzione illimitata"
      content={[
        "Rispetto a una casa editrice tradizionale garantiamo la vendita e distribuzione estesa nei principali mercati mondiali tramite Amazon KDP per un totale di 300 milioni di potenziali lettori. Il tutto con royalties fino al 70% del prezzo di vendita (costi di stampa esclusi).",
        "Nessun competitor può garantire margini superiori.",
      ]}
      imageSrc="/assets/homepage/servizi4.png"
      buttonText="Richiedi una consulenza gratuita"
      buttonLink="/#contact-form"
      isTextToLeftSideOfCard={true}
    />
  );
}