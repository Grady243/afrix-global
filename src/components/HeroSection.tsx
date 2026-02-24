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
      // Écrire caractère par caractère
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    } 
    else if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause après avoir fini d'écrire
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pause)
    } 
    else if (isDeleting && charIndex > 0) {
      // Effacer caractère par caractère
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, speed / 2)
    } 
    else if (isDeleting && charIndex === 0) {
      // Passer à la phrase suivante
      setIsDeleting(false)
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases, speed, pause])

  return displayedText
}

export default function HeroSection() {
  const animatedText = useSequentialPhrases(phrases)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative flex flex-col items-center w-full min-h-screen bg-[#0a0a0a] pt-[120px]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-[5vw]">
        {/* Left side */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] font-bold italic leading-tight text-white min-h-[3em]">
            {animatedText}
            <span className="animate-pulse ml-1">|</span>
          </h1>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 relative flex items-end justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[35vw]">
          {/* Main circle with image */}
          <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] lg:h-[35vw] lg:w-[35vw] border-2 border-[#4285f4] rounded-full flex items-center justify-center overflow-hidden">
            <div className="relative h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[25vw] lg:w-[25vw] border-2 border-[#30b43f] rounded-full overflow-hidden">
              <Image
                src="/images/hero-person.png"
                alt="Afrix Global - formation"
                fill
                className="object-cover scale-110 translate-y-[-5%]" // L'image dépasse légèrement
                priority
              />
            </div>
          </div>

          {/* Top circle - We Train (red) */}
          <div className="absolute right-[5%] lg:right-[10%] top-[-5%] lg:top-[-10%] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[10vw] lg:h-[10vw] bg-[#ea4335] rounded-full flex items-center justify-center z-20 shadow-lg transition-all duration-500">
            <h3 className="text-white text-center text-xs sm:text-sm lg:text-base font-bold leading-tight">We <br/> train
            </h3>
          </div>

          {/* Bottom circle - We Create (yellow) */}
          <div className="absolute left-[10%] lg:left-[15%] bottom-[5%] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[10vw] lg:h-[10vw] bg-[#fbbc05] rounded-full flex items-center justify-center z-20 shadow-lg transition-all duration-500">
            <h3 className="text-white text-center text-xs sm:text-sm lg:text-base font-bold leading-tight">We <br/> create
            </h3>
          </div>

          {/* Right circle - We Connect (green) */}
          <div className="absolute bottom-[15%] right-[-5%] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[10vw] lg:h-[10vw] bg-[#30b43f] rounded-full flex items-center justify-center z-20 shadow-lg transition-all duration-500">
            <h3 className="text-white text-center text-xs sm:text-sm lg:text-base font-bold leading-tight">We <br/> connect
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}