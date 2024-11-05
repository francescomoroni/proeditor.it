'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted={isMuted}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/homepage/home.mp4" type="video/mp4" />
      </video>

      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenuto */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          La Tua Storia Merita di Essere Raccontata
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Trasformiamo le tue parole in opere d&apos;arte letterarie
        </p>
        <Button size="lg" className="text-lg px-8">
          Inizia il Tuo Viaggio
        </Button>

        {/* Controllo audio */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-4 right-4 p-2 bg-black/50 rounded-full"
          aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
        >
          {isMuted ? (
            <VolumeX className="h-6 w-6" />
          ) : (
            <Volume2 className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  )
} 