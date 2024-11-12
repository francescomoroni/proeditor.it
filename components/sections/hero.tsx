"use client";

import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Placeholder Image using Next.js Image component */}
      <Image
        src="/assets/homepage/hero_books_img.mp4"
        alt="Hero Image"
        layout="fill"
        className="absolute inset-0 object-cover"
        priority // Load the image with high priority
        onLoadingComplete={() => {
          // Hide the image when it has loaded
          const videoElement = document.querySelector('video');
          if (videoElement && videoElement.previousElementSibling) {
            (videoElement.previousElementSibling as HTMLElement).style.display = 'none';
          }
        }}
      />

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedData={(e) => {
          // Hide the image when the video is ready
          if (e.currentTarget.previousElementSibling) {
            (e.currentTarget.previousElementSibling as HTMLElement).style.display = 'none';
          }
        }}
      >
        <source src="/assets/homepage/hero_books.mp4" type="video/mp4" />
      </video>

      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenuto */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white mx-auto px-4 space-y-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Il tuo libro chiavi in mano pronto per il grande pubblico
        </h1>
        <p className="text-xl md:text-4xl text-center ">
          La tua storia merita di essere raccontata
        </p>
        {/* <p className="text-xl md:text-4xl text-center ">
          Trasformiamo le tue parole in opere d&apos;arte
        </p> */}
        {/* 
        <Button
          size="lg"
          className="text-lg bg-buttons-primary hover:bg-buttons-primary/80 text-white px-8"
        >
          Inizia il Tuo Viaggio
        </Button> */}
      </div>
    </div>
  );
}
