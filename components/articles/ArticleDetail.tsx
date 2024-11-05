import Image from "next/image"
import { formatDate } from "@/lib/utils"

interface ArticleDetailProps {
  title: string
  content: string
  coverImage: string
  publishedAt: Date
}

export function ArticleDetail({ title, content, coverImage, publishedAt }: ArticleDetailProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <time className="text-sm text-muted-foreground">
            {formatDate(publishedAt)}
          </time>
        </div>
        
        {/* Cover Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </div>
    </article>
  )
} 