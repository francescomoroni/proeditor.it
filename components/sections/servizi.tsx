import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ServiziProps {
  title: string;
  content: string[];
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
  isTextToLeftSideOfCard: boolean;
}

export function Servizi({
  title,
  content,
  imageSrc,
  buttonText,
  buttonLink,
  isTextToLeftSideOfCard,
}: ServiziProps) {
  return (
    <section className="bg-buttons-primary/40 py-4">
      <div className="container mx-auto pt-4 sm:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className={`space-y-6 px-4 ${isTextToLeftSideOfCard ? "order-0" : "md:order-1"}`}>
            <h2 className="text-4xl font-bold tracking-tight text-center">
              {title}
            </h2>
            <div className="text-gray-600 text-center space-y-4 leading-relaxed">
              {content.map((paragraph, index) => (
                <p className="text-sm md:text-lg xl:text-xl" key={index}>{paragraph}</p>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-buttons-primary hover:bg-buttons-primary/80 text-white px-8 flex mx-auto"
            >
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          </div>

          {/* Image Column */}
          <div
            className={`relative h-[500px] w-full ${isTextToLeftSideOfCard ? "order-1" : "md:order-0"}`}
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
