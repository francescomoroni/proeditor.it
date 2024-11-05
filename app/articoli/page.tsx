import { ArticlesHero } from "@/components/articles/ArticlesHero"
import { ArticleCard } from "@/components/articles/ArticleCard"

// Tipo per l'articolo (da adattare in base al tuo backend)
interface Article {
  title: string
  excerpt: string
  coverImage: string
  publishedAt: Date
  slug: string
}

export default function ArticlesPage() {
  // Esempio di articoli (da sostituire con i dati reali)
  const articles: Article[] = [
    {
      title: "Come Pubblicare il Tuo Primo Libro su Amazon KDP",
      excerpt: "Una guida completa per autori esordienti che vogliono pubblicare il loro primo libro attraverso Amazon Kindle Direct Publishing. Scopri tutti i passaggi necessari, dalla formattazione alla pubblicazione.",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      publishedAt: new Date("2024-03-15"),
      slug: "come-pubblicare-primo-libro-amazon-kdp"
    },
    {
      title: "5 Strategie di Marketing per Autori Self-Published",
      excerpt: "Scopri le tecniche più efficaci per promuovere il tuo libro in modo indipendente. Dal social media marketing alle recensioni, tutto quello che devi sapere per aumentare le vendite.",
      coverImage: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
      publishedAt: new Date("2024-03-10"),
      slug: "strategie-marketing-autori-self-published"
    },
    {
      title: "L'Importanza dell'Editing nel Self Publishing",
      excerpt: "Perché l'editing professionale è fondamentale per il successo del tuo libro? Analizziamo i diversi tipi di editing e come possono migliorare la qualità della tua opera.",
      coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
      publishedAt: new Date("2024-03-05"),
      slug: "importanza-editing-self-publishing"
    }
  ]

  return (
    <main className="min-h-screen">
      <ArticlesHero 
        backgroundImage="/images/articles-hero.jpg"
        title="Articoli"
        subtitle="Scopri i nostri articoli e guide sul Self Publishing"
      />
      
      <section className="container mx-auto py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard 
              key={article.slug}
              {...article}
            />
          ))}
        </div>
      </section>
    </main>
  )
} 