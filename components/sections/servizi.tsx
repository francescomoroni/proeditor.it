// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// interface ServiziProps {
//   title: string;
//   content: string[];
//   imageSrc: string;
//   buttonText: string;
//   buttonLink: string;
//   isTextToLeftSideOfCard: boolean;
// }

// export function Servizi({
//   title,
//   content,
//   imageSrc,
//   buttonText,
//   buttonLink,
//   isTextToLeftSideOfCard,
// }: ServiziProps) {
//   return (
//     <section className={`${isTextToLeftSideOfCard ? 'bg-white' : 'bg-buttons-primary/40' } py-4`}>
//       <div className="container mx-auto pt-4 sm:pt-0">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Content Column */}
//           <div className={`space-y-6 px-4 ${isTextToLeftSideOfCard ? "order-0" : "md:order-1"}`}>
//             <h2 className="text-4xl font-bold tracking-tight text-center">
//               {title}
//             </h2>
//             <div className="text-gray-600 text-center space-y-4 leading-relaxed">
//               {content.map((paragraph, index) => (
//                 <p className="text-sm md:text-lg xl:text-xl" key={index}>{paragraph}</p>
//               ))}
//             </div>
//             <Button
//               size="lg"
//               className="bg-buttons-primary hover:bg-buttons-primary/80 text-white px-8 flex mx-auto"
//             >
//               <a href={buttonLink}>{buttonText}</a>
//             </Button>
//           </div>

//           {/* Image Column */}
//           <div
//             className={`relative h-[500px] w-full ${isTextToLeftSideOfCard ? "order-1" : "md:order-0"}`}
//           >
//             <Image
//               src={imageSrc}
//               alt={title}
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

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
    <div className="relative bg-gray-900">
      <div className="relative h-[10vh] overflow-hidden bg-buttons-primary md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/3">
      <Image
              src={imageSrc}
              alt={title}
              fill
          className="h-full w-full object-cover"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          {/* <h2 className="text-base/7 font-semibold text-indigo-400">{title}</h2> */}
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</p>
          <p className="mt-6 text-base/7 text-gray-300">
          {content.map((paragraph, index) => (
                <p className="text-sm md:text-lg xl:text-xl" key={index}>{paragraph}</p>
              ))}
          </p>
          <div className="mt-8">
            <a
              href={buttonLink}
              className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
      <div>{buttonText}{buttonLink}{isTextToLeftSideOfCard}</div>
    </div>
  )
}

 