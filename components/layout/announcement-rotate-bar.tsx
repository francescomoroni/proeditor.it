'use client'

import { useEffect, useState } from "react"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const checkWindowSize = () => {
      setIsVisible(window.innerWidth >= 768)
    }
    
    window.addEventListener('resize', checkWindowSize)
    checkWindowSize()
    
    return () => window.removeEventListener('resize', checkWindowSize)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-buttons-primary overflow-hidden py-2 text-white">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4">
          Finalmente anche in Italia arriva la prima Casa Editrice 3.0
        </span>
      </div>
    </div>
  )
} 