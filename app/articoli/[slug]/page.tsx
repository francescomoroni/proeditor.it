import { ArticleDetail } from "@/components/articles/ArticleDetail"
import { notFound } from "next/navigation"

// Questa funzione simula il recupero di un articolo dal database
async function getArticle(slug: string) {
  console.log(`Fetching article with slug: ${slug}`);
  const article = {
    slug,
    title: "Come Pubblicare il Tuo Primo Libro su Amazon KDP",
    content: `
      <p>La pubblicazione di un libro su Amazon KDP (Kindle Direct Publishing) è un processo che può sembrare intimidatorio all'inizio, ma che in realtà è abbastanza semplice se seguito passo dopo passo.</p>

      <h2>1. Preparazione del Manoscritto</h2>
      <p>Prima di tutto, assicurati che il tuo manoscritto sia completamente editato e formattato correttamente. Questo include:</p>
      <ul>
        <li>Correzione di bozze professionale</li>
        <li>Formattazione appropriata per ebook</li>
        <li>Indice dei contenuti navigabile</li>
      </ul>

      <h2>2. Creazione di un Account KDP</h2>
      <p>Vai su kdp.amazon.com e crea un nuovo account se non ne hai già uno. Dovrai fornire informazioni fiscali e bancarie per ricevere i pagamenti delle royalty.</p>

      <h2>3. Caricamento del Libro</h2>
      <p>Una volta che il tuo account è pronto, puoi iniziare il processo di pubblicazione:</p>
      <ul>
        <li>Carica il tuo manoscritto in formato DOCX o PDF</li>
        <li>Aggiungi una copertina accattivante</li>
        <li>Scrivi una descrizione convincente</li>
        <li>Scegli le categorie e le parole chiave appropriate</li>
      </ul>
    `,
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    publishedAt: new Date("2024-03-15"),
  }

  return article
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container py-10">
      <ArticleDetail {...article} />
    </div>
  )
} 