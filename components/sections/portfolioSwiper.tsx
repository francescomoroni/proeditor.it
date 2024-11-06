import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css'; // Assicurati di importare gli stili di Swiper
import Image from "next/image";

const books = [
  { title: "Libro 1", image: "/assets/homepage/books/0.jpg", link: "https://link-to-book1.com" },
  { title: "Libro 2", image: "/assets/homepage/books/1.jpg", link: "https://link-to-book2.com" },
  { title: "Libro 3", image: "/assets/homepage/books/2.jpg", link: "https://link-to-book3.com" },
  { title: "Libro 4", image: "/assets/homepage/books/3.jpg", link: "https://link-to-book4.com" },
  { title: "Libro 5", image: "/assets/homepage/books/4.jpg", link: "https://link-to-book5.com" },
  { title: "Libro 6", image: "/assets/homepage/books/5.jpg", link: "https://link-to-book6.com" },
  { title: "Libro 7", image: "/assets/homepage/books/6.jpg", link: "https://link-to-book7.com" },
  { title: "Libro 8", image: "/assets/homepage/books/7.jpg", link: "https://link-to-book8.com" },
];

export function PortfolioSwiper() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center mb-4 w-full">Portfolio</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
      >
        {books.map((book, index) => (
          <SwiperSlide key={index} className="p-4">
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={book.image} alt={book.title} width={500} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

