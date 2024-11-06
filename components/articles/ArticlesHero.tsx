
interface ArticlesHeroProps {
  backgroundImage: string
  title: string
  subtitle?: string
}

export function ArticlesHero({ backgroundImage, title, subtitle }: ArticlesHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[400px] w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      
      
      {/* Hero Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-lg text-gray-200 sm:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
} 