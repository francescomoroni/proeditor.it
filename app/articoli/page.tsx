import { ArticlesHero } from "@/components/articles/ArticlesHero";
import { ArticleCard } from "@/components/articles/ArticleCard";

// Tipo per l'articolo (da adattare in base al tuo backend)
interface Article {
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: Date;
  slug: string;
}

export default function ArticlesPage() {
  // Esempio di articoli (da sostituire con i dati reali)
  const articles: Article[] = [
    {
      title: "Come un libro potenzierà il tuo business",
      excerpt: `Pubblicare un libro non è solo una grande soddisfazione personale: è anche un potente strumento per costruire credibilità e distinguersi come esperto nel proprio settore. Se sei un professionista, un imprenditore o un leader, scrivere un libro può trasformarsi nella tua arma segreta per guadagnare autorevolezza e conquistare la fiducia di clienti, colleghi e concorrenti.`,
      coverImage: "/articles/1_marketing.png",
      publishedAt: new Date("2024-03-15"),
      slug: "Come-un-libro-potenziera-il-tuo-business",
    },
    {
      title: "Come pubblicare un libro su Amazon",
      excerpt: `Pubblicare un libro su Amazon è un processo che può essere un po' complesso, ma con la giusta preparazione e la conoscenza dei passaggi chiave, puoi farlo in modo efficiente e senza troppi problemi. Ecco una guida passo-passo per aiutarti a pubblicare il tuo libro su Amazon.`,
      coverImage: "/articles/2_come-pubblicare.png",
      publishedAt: new Date("2024-03-15"),
      slug: "Come-pubblicare-un-libro-su-Amazon",
    },
    {
      title: "Chi sono i ghostwriter",
      excerpt: `Il ghostwriter è uno scrittore professionista che, pur creando contenuti, rimane anonimo. Questo vale per libri, articoli, discorsi, blog e persino post sui social media. La parola "ghost" si riferisce proprio a questa invisibilità, dato che tutto il merito dell'opera finita va al cliente, che si prende la firma e il titolo di "autore."`,
      coverImage: "/articles/3_chi-sono.png",
      publishedAt: new Date("2024-03-15"),
      slug: "Chi-sono-i-ghostwriter",
    },
    {
      title: "Come far scrivere il proprio libro da un ghostwriter",
      excerpt: `Molto spesso, chi sceglie un ghostwriter ha una storia da raccontare ma non ha il tempo, le competenze o la voglia di scriverla da solo. In molti casi, il ghostwriter viene coinvolto in progetti dove l'autenticità e l'esperienza dell'autore sono fondamentali, ma serve una mano esperta per trasmetterle in modo accattivante.`,
      coverImage: "/articles/4_ghostwriter.png",
      publishedAt: new Date("2024-03-15"),
      slug: "Come-far-scrivere-il-proprio-libro-da-un-ghostwriter",
    },
    {
      title: "Come pubblicare un libro da colorare su Amazon",
      excerpt: `Pubblicare libri da colorare su Amazon può essere un ottimo modo per condividere la propria creatività, raggiungere un vasto pubblico e, magari, guadagnare una rendita passiva. I libri da colorare, popolari sia tra i bambini che tra gli adulti, possono essere prodotti in modo relativamente semplice e distribuiti su Amazon tramite Kindle Direct Publishing (KDP), la piattaforma self-publishing di Amazon. Ecco una guida passo-passo su come creare, pubblicare e promuovere il tuo libro da colorare su Amazon.`,
      coverImage: "/articles/5_colorare.png",
      publishedAt: new Date("2024-03-15"),
      slug: "Come-pubblicare-un-libro-da-colorare-su-Amazon",
    },
    {
      title: "Come scrivere un libro con l'intelligenza artificiale",
      excerpt: `Scrivere un libro con l'intelligenza artificiale (AI) è un processo che può essere sia stimolante che impegnativo. Questo approccio ti permette di utilizzare le potenzialità dell'IA per aiutarti a creare un testo, ma richiede anche una certa conoscenza e cura per assicurarti che il risultato sia di qualità. Ecco una guida su come scrivere un libro con l'intelligenza artificiale.`,
      coverImage: "/articles/6_libro-con-ai.png",
      publishedAt: new Date("2024-03-15"),
      slug: "Come-scrivere-un-libro-con-l'intelligenza-artificiale",
    },
  ];

  return (
    <main className="min-h-screen">
      <ArticlesHero
        backgroundImage="/images/blog-hero.jpg"
        title="Articoli"
        subtitle="Scopri i nostri articoli e guide sul Self Publishing"
      />

      <section className="container mx-auto py-16 px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>
    </main>
  );
}
