"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { events } from "@/lib/events-data"

const AUTO_SCROLL_INTERVAL = 4000 // 4 seconds

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const prev = useCallback(() => setCurrentIndex((i) => (i === 0 ? events.length - 1 : i - 1)), [])
  const next = useCallback(() => setCurrentIndex((i) => (i === events.length - 1 ? 0 : i + 1)), [])

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      next()
    }, AUTO_SCROLL_INTERVAL)

    return () => clearInterval(interval)
  }, [isPaused, next])

  return (
    <section
      id="events"
      className="w-full min-h-screen flex flex-col justify-center gap-10 lg:gap-[5vw] items-center py-20 bg-afrix-dark"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 100%, rgba(66, 133, 244, 0.3), transparent 25%), radial-gradient(circle at 100% 0%, rgba(15, 157, 88, 0.3), transparent 35%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
        NOS <span className="text-afrix-yellow">EVENEMENTS</span>
      </h2>

      <div 
        className="relative w-[90%] max-w-[1000px] flex items-center justify-center mt-16 mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-2 z-10 w-12 h-12 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center text-white transition-all"
          aria-label="Previous event"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Event card */}
        <div className="w-full overflow-hidden rounded-2xl">
          <div
            className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] group overflow-hidden rounded-2xl"
          >
            <Image
              src={events[currentIndex].image || "/placeholder.svg"}
              alt={events[currentIndex].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <Button
                variant="outline"
                className="rounded-full text-afrix-blue bg-transparent border border-afrix-blue hover:bg-afrix-blue hover:text-white cursor-pointer opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 font-semibold px-7 py-3"
                asChild
              >
                <Link href={`/events/${events[currentIndex].id}`}>
                  Voir plus
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-2 z-10 w-12 h-12 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center text-white transition-all"
          aria-label="Next event"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center gap-3">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-afrix-yellow w-8" 
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to event ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

