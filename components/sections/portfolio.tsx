import React from 'react';
import Image from 'next/image';

const books = [
  { title: 'Libro 1', image: '/assets/homepage/books/0.jpg' },
  { title: 'Libro 2', image: '/assets/homepage/books/1.jpg' },
  { title: 'Libro 3', image: '/assets/homepage/books/2.jpg' },
  { title: 'Libro 4', image: '/assets/homepage/books/3.jpg' },
  { title: 'Libro 5', image: '/assets/homepage/books/4.jpg' },
  { title: 'Libro 6', image: '/assets/homepage/books/5.jpg' },
  { title: 'Libro 7', image: '/assets/homepage/books/6.jpg' },
  { title: 'Libro 8', image: '/assets/homepage/books/7.jpg' },
];

export function Portfolio() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Portfolio</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
        {books.map((book, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={book.image} alt={book.title} width={300} height={500} className="w-full h-96 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
