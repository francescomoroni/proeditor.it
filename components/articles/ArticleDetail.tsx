import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface ArticleDetailProps {
  title: string;
  content: string;
  coverImage: string;
  publishedAt: Date;
}

export function ArticleDetail({
  title,
  content,
  coverImage,
  publishedAt,
}: ArticleDetailProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-6">
          <a
            href="/articoli"
            className="text-sm text-text-secondary hover:text-foreground flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Torna agli articoli
          </a>
          <h1 className="text-4xl font-bold tracking-tight pb-4">{title}</h1>

        <time className="text-sm text-text-secondary">
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
        <div
          className="prose prose-lg max-w-none "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
}
