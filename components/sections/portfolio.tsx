import React from "react";
import Image from "next/image";

const books = [
  { id: 1, title: "Libro 1", image: "/assets/homepage/books/0.jpg", imageAlt: "Libro 1" },
  { id: 2, title: "Libro 2", image: "/assets/homepage/books/1.jpg", imageAlt: "Libro 2" },
  { id: 3, title: "Libro 3", image: "/assets/homepage/books/2.jpg", imageAlt: "Libro 3" },
  { id: 4, title: "Libro 4", image: "/assets/homepage/books/3.jpg", imageAlt: "Libro 4" },
  { id: 5, title: "Libro 5", image: "/assets/homepage/books/4.jpg", imageAlt: "Libro 5" },
  { id: 6, title: "Libro 6", image: "/assets/homepage/books/5.jpg", imageAlt: "Libro 6" },
  { id: 7, title: "Libro 7", image: "/assets/homepage/books/6.jpg", imageAlt: "Libro 7" },
  { id: 8, title: "Libro 8", image: "/assets/homepage/books/7.jpg", imageAlt: "Libro 8" },
];

export function Portfolio() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-18 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Portfolio
          </h2>
        </div>

        <div className="mt-6 grid gap-x-4 gap-y-10 lg:gap-x-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {books.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-80 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:h-96">
                <Image alt={product.imageAlt} src={product.image} width={300} height={500} className="size-full object-contain object-center" />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p> */}
            </div>
          ))}
        </div>

        {/* <div className="mt-8 text-sm md:hidden">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div> */}
      </div>
    </div>
  )
}
  //   return (
//     <div id="portfolio" className="px-4 py-8">
//       <h2 className="text-4xl font-bold tracking-tight text-center pb-8">
//         Portfolio
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
//         {books.map((book, index) => (
//           <div
//             key={index}
//             className="border rounded-lg overflow-hidden shadow-lg"
//           >
//             <Image
//               src={book.image}
//               alt={book.title}
//               width={300}
//               height={500}
//               className="w-full h-96 object-cover"
//             />
//             {/* <div className="p-4">
//               <h3 className="text-lg font-semibold">{book.title}</h3>
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
