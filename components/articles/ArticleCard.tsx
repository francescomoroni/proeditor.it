import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import Image from "next/image"

interface ArticleCardProps {
  title: string
  excerpt: string
  coverImage: string
  publishedAt: Date
  slug: string
}

export function ArticleCard({ 
  title, 
  excerpt, 
  coverImage, 
  publishedAt, 
  slug 
}: ArticleCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <Image 
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <h2 className="line-clamp-2 text-xl font-semibold">{title}</h2>
      </CardHeader>
      
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between">
        <time className="text-sm text-muted-foreground">
          {format(publishedAt, 'dd MMM yyyy')}
        </time>
        <Button variant="secondary" asChild>
          <a href={`/articoli/${slug}`}>Leggi di più</a>
        </Button>
      </CardFooter>
    </Card>
  )
} 