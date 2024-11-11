import { Servizi } from "./servizi";

export function Servizi5() {
  return (
    <Servizi
      title="Creiamo la tua vetrina sul web"
      content={[
        "Accresci la tua visibilità e definisci il tuo personal brand tramite il nostro servizio di creazione sito web. Affermati come autorità e rafforza la tua credibilità nei confronti di partners a clienti creando il tuo spazio online con il supporto di un team di professionisti.",
        "Siamo gli unici in Italia a offrire questo servizio senza alcun costo iniziale.",
        "Offerta soggetta a limitazioni, contattaci per verificare la disponibilità.",
      ]}
      imageSrc="/assets/homepage/servizi5.png"
      buttonText="Richiedi una consulenza gratuita"
      buttonLink="/#contact-form"
      isTextToLeftSideOfCard={false}
    />
  );
}