import { Container } from "@/components/style/Container";
import { FadeIn } from "@/components/style/FadeIn";
import { StylizedImage } from "@/components/style/StylizedImage";
import servizi0 from "@/public/assets/homepage/servizi0.png";
import servizi1 from "@/public/assets/homepage/servizi1.png";
import servizi2 from "@/public/assets/homepage/servizi2.png";
// import servizi3 from "@/public/assets/homepage/servizi3.png"
import { TagList, TagListItem } from "@/components/style/TagList";
import { List, ListItem } from "../style/List";

function Section({
  title,
  image,
  children,
}: {
  title: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>;
  children: React.ReactNode;
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-[&apos;/_&apos;] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function Servizi0() {
  return (
    <Section
      title="Realizziamo il tuo libro perfetto"
      image={{ src: servizi0 }}
    >
      <div className="space-y-6 text-base ">
        <p className="text-text-secondary">
          Hai un&apos;idea straordinaria ma non hai il tempo o le competenze per
          scrivere? Nessun problema: il nostro servizio di ghostwriting ti
          affianca con un professionista dedicato, pronto a trasformare la tua
          visione in un <strong className="font-bold"> best seller</strong>{" "}
          seguendo le tue indicazioni.
        </p>
        <p className="text-text-secondary">
          Inoltre, sappiamo che l&apos;abito fa il monaco: per questo
          collaboriamo con i migliori designer per creare copertine accattivanti
          e professionali, capaci di catturare l&apos;attenzione dei lettori e
          valorizzare il tuo libro.
        </p>
        <p className="text-text-secondary">
          Hai già una bozza? Lascia che i nostri esperti la revisionino con
          cura, perché sono i dettagli a trasformare un&apos;opera amatoriale in
          un capolavoro. Affidati a noi per{" "}
          <strong className="font-bold">
            rendere il tuo manoscritto una vera gemma
          </strong>
          .
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Inclusi in questa fase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Scriviamo per te</TagListItem>
        <TagListItem>Creiamo la copertina</TagListItem>
        <TagListItem>Revisioniamo il tuo manoscritto</TagListItem>
      </TagList>
    </Section>
  );
}

function Servizi1() {
  return (
    <Section
      title="Diamo vita e visibilità al tuo libro"
      image={{ src: servizi1, shape: 1 }}
    >
      <div className="space-y-6 text-base text-text-secondary">
        <p className="text-text-secondary">
          Un libro è molto più di un semplice oggetto: trasmette emozioni,
          racconta storie, ispira e lascia un&apos;impronta nella Storia. Che tu
          voglia condividere la tua esperienza di vita o affermarti come
          autorità nel tuo settore,{" "}
          <strong className="font-bold">siamo qui per aiutarti</strong>.
        </p>
        <p className="text-text-secondary">
          Ti manca il tempo per scrivere o ti serve supporto professionale? Con
          il nostro servizio completo,{" "}
          <strong className="font-bold">ti affianchiamo in ogni fase</strong>:
          dalla scrittura del libro, alla creazione di copertine, impaginazione,
          editing, fino alla pubblicazione.
        </p>
        <p className="text-text-secondary">
          Grazie alla distribuzione illimitata tramite Amazon KDP,{" "}
          <strong className="font-bold">
            raggiungerai i principali mercati mondiali
          </strong>{" "}
          e oltre 300 milioni di potenziali lettori, con royalties fino al 70%.
          Sfrutta un sistema che garantisce margini superiori rispetto alle case
          editrici tradizionali e trasforma il tuo sogno di diventare scrittore
          in realtà.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Inclusi in questa fase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Pubblichiamo il tuo libro</TagListItem>
        <TagListItem>Distribuiamo il tuo libro</TagListItem>
        <TagListItem>Promuoviamo il tuo libro</TagListItem>
      </TagList>

      {/* <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  );
}

function Servizi2() {
  return (
    <Section
      title="Creiamo la tua vetrina sul web"
      image={{ src: servizi2, shape: 2 }}
    >
      <div className="space-y-6 text-base text-text-secondary">
        <p className="text-text-secondary">
          Nel mondo digitale di oggi, avere una presenza online è fondamentale
          per distinguerti e affermarti come professionista. Con il nostro
          servizio di creazione siti web, puoi costruire una piattaforma unica e
          accattivante che rifletta la tua identità e accresca la tua
          visibilità.
        </p>
        <p className="text-text-secondary">
          Un sito ben realizzato non è solo una vetrina, ma un potente strumento
          per definire il tuo personal brand, affermarti come autorità nel tuo
          settore e rafforzare la tua credibilità agli occhi di partner, clienti
          e collaboratori.
        </p>
        <p className="text-text-secondary">
          Collaboriamo con un team di professionisti specializzati per garantire
          un design moderno, funzionale e ottimizzato per la user experience.
          Ogni sito è pensato per adattarsi alle tue esigenze e comunicare al
          meglio i tuoi valori.
        </p>
        <p className="text-text-secondary">
          Siamo gli unici in Italia a offrirti questo servizio senza alcun costo
          iniziale: un&apos;opportunità esclusiva per chi vuole investire nel
          proprio futuro senza pensieri. Approfitta della nostra offerta unica,
          valida fino a esaurimento disponibilità.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Inclusi in questa fase
      </h3>
      <List className="mt-8">
        <ListItem title="Personalizzazione completa">
          Creazione di un sito web che rispecchi la tua identità e i tuoi
          obiettivi professionali.
        </ListItem>
        <ListItem title="Design professionale">
          Sviluppo di una piattaforma moderna, funzionale e ottimizzata per
          garantire la migliore user experience.
        </ListItem>
        <ListItem title="Zero costi iniziali">
          Accesso esclusivo al nostro servizio senza alcun costo iniziale,
          un&apos;opportunità unica per costruire la tua presenza online.
        </ListItem>
      </List>
    </Section>
  );
}

export default function Services() {
  return (
    <>
      <div className="my-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-32 lg:space-y-32">
        <Servizi0 />
        <Servizi1 />
        <Servizi2 />
      </div>
    </>
  );
}
