"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const phrases = [
  "We Train. We Create. We Connect.",
  "Formation. Innovation. Croissance.",
  "Compétences. Réseau. Opportunités.",
  "Apprendre. Créer. Connecter."
]

function useSequentialPhrases(phrases: string[], speed = 50, pause = 2000) {
  const [displayedText, setDisplayedText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    }
    else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pause)
    }
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, speed / 2)
    }
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases, speed, pause])

  return displayedText
}

export default function HeroSection() {
  const animatedText = useSequentialPhrases(phrases)

  return (
    <section className="relative flex flex-col items-center w-full min-h-screen bg-[#0a0a0a] pt-[120px] overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-[5vw]">
        {/* Left side */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] font-bold italic leading-tight text-white min-h-[3em]">
            {animatedText}
            <span className="animate-pulse ml-1">|</span>
          </h1>
        </div>

        {/* Right side - Container with relative positioning */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[350px] sm:min-h-[400px] lg:min-h-[35vw]">
          {/* Main circle container */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[35vw] lg:h-[35vw]">
            {/* Main circle with image */}
            <div className="absolute inset-0 border-2 border-[#4285f4] rounded-full flex items-center justify-center">
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[25vw] lg:h-[25vw] border-2 border-[#30b43f] rounded-full flex items-end justify-center">
                <div className="absolute -top-[20%] w-full h-[120%] z-10">
                  <Image
                    src="/images/hero-person.png"
                    alt="Afrix Global - formation"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Top circle - We Train (red) */}
            <div className="absolute -top-4 sm:-top-6 lg:-top-[5%] right-[5%] sm:right-[8%] lg:right-[10%] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[8vw] lg:h-[8vw] bg-[#ea4335] rounded-full flex items-center justify-center z-20 shadow-lg">
              <h3 className="text-white text-center text-[10px] sm:text-xs lg:text-sm font-bold leading-tight">
                We <br /> train
              </h3>
            </div>

            {/* Bottom circle - We Create (yellow) */}
            <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-[5%] left-[5%] sm:left-[8%] lg:left-[10%] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[8vw] lg:h-[8vw] bg-[#fbbc05] rounded-full flex items-center justify-center z-20 shadow-lg">
              <h3 className="text-white text-center text-[10px] sm:text-xs lg:text-sm font-bold leading-tight">
                We <br /> create
              </h3>
            </div>

            {/* Right circle - We Connect (green) */}
            <div className="absolute bottom-[10%] sm:bottom-[12%] lg:bottom-[15%] -right-4 sm:-right-6 lg:-right-[5%] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[8vw] lg:h-[8vw] bg-[#30b43f] rounded-full flex items-center justify-center z-20 shadow-lg">
              <h3 className="text-white text-center text-[10px] sm:text-xs lg:text-sm font-bold leading-tight">
                We <br /> connect
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}