"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    photo: "/images/testimonials/testimonial-1.jpg",
    name: "Jean Dupont",
    title: "Developpeur Web",
    text: "Afrix Global m'a permis d'acquerir les competences necessaires pour lancer ma carriere dans le numerique. Le programme est complet et pratique.",
  },
  {
    photo: "/images/testimonials/testimonial-2.jpg",
    name: "Marie Kamau",
    title: "Designer UI/UX",
    text: "Grace aux formations, j'ai pu developper mes competences en design et trouver un emploi rapidement. Le suivi est excellent !",
  },
  {
    photo: "/images/testimonials/testimonial-3.jpg",
    name: "Aliou Diouf",
    title: "Entrepreneur Digital",
    text: "Les cours sont concrets et orientes projets reels. Afrix Global a transforme ma vision du numerique et booste ma confiance.",
  },
  {
    photo: "/images/testimonials/testimonial-4.jpg",
    name: "Fatou Ndiaye",
    title: "Frontend Developer",
    text: "Une experience incroyable qui m'a permis de me lancer en freelance et obtenir mes premiers clients.",
  },
  {
    photo: "/images/testimonials/testimonial-5.jpg",
    name: "Omar Traore",
    title: "Data Analyst",
    text: "Le programme de formation est tres complet et m'a permis d'acquerir des competences en data science qui sont tres demandees sur le marche.",
  },
];

// Orbit positions for the small images (in degrees) - 5 images around the circle
const orbitPositions = [270, 342, 54, 126, 198] // Starting from top, going clockwise
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [rotation, setRotation] = useState(0)

  const prev = useCallback(() => setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1)), [])
  const next = useCallback(() => setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1)), [])

  // Continuous rotation animation + auto change testimonial
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((r) => r + 0.3)
    }, 50)
    return () => clearInterval(rotationInterval)
  }, [])

  // Change testimonial every full rotation (360 degrees / 5 testimonials = 72 degrees per testimonial)
  useEffect(() => {
    const changeInterval = setInterval(() => {
      next()
    }, 4000) // Change every 4 seconds
    return () => clearInterval(changeInterval)
  }, [next])

  const current = testimonials[currentIndex]

  // Get orbit images (all except current)
  const getOrbitImages = () => {
    return testimonials
      .filter((_, i) => i !== currentIndex)
      .map(t => t.photo)
  }
  
  const orbitImages = getOrbitImages()
  return (
    <section
      className="w-full min-h-screen bg-afrix-dark flex flex-col items-center justify-center gap-10 lg:gap-[5vw] py-16"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 100%, rgba(245, 180, 0, 0.302), transparent 35%), radial-gradient(circle at 100% 100%, rgba(15, 157, 88, 0.3), transparent 35%), radial-gradient(circle at 100% 0%, rgba(219, 68, 55, 0.3), transparent 25%)",
      }}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-afrix-yellow text-center mb-10">
        TESTIMONIALES
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Orbit animation */}
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] flex-shrink-0">
            {/* Dotted circle track - matching orbit radius */}
            <div 
              className="absolute inset-[30px] sm:inset-[35px] lg:inset-[40px] rounded-full"
              style={{
                border: "2px dashed #e0e0e0",
              }}
            />

            {/* Center main image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
              <Image
                src={current.photo}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Orbiting images */}
            {orbitImages.map((img, index) => {
              const angle = orbitPositions[index % orbitPositions.length] + rotation
              const radian = (angle * Math.PI) / 180
              // Orbit radius - further from the main image
              const orbitRadius = 140 // Increased to separate from main image
              const x = Math.cos(radian) * orbitRadius
              const y = Math.sin(radian) * orbitRadius
              
              // Vary sizes for visual interest
              const sizes = [48, 40, 44, 38, 42]
              const size = sizes[index % sizes.length]

              return (
                <div
                  key={img}
                  className="absolute rounded-full overflow-hidden border-2 border-white shadow-lg"
                  style={{
                    width: size,
                    height: size,
                    top: `calc(50% + ${y}px - ${size / 2}px)`,
                    left: `calc(50% + ${x}px - ${size / 2}px)`,
                  }}
                >
                  <Image
                    src={img}
                    alt={`Testimonial ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            })}

            {/* Connection lines (decorative dots on the orbit path) */}
            {[30, 90, 150, 210, 270, 330].map((angle, i) => {
              const radian = ((angle + rotation * 0.5) * Math.PI) / 180
              const distance = 140 // Same as orbit radius
              const x = Math.cos(radian) * distance
              const y = Math.sin(radian) * distance
              return (
                <div
                  key={`dot-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full bg-afrix-red/30"
                  style={{
                    top: `calc(50% + ${y}px - 3px)`,
                    left: `calc(50% + ${x}px - 3px)`,
                  }}
                />
              )
            })}
          </div>

          {/* Right side - Testimonial content */}
          <div className="flex-1 max-w-[500px]">
            {/* Quote icon */}
            <div className="text-afrix-red text-6xl font-serif leading-none mb-4">
              "
            </div>

            {/* Testimonial text */}
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {current.text}
            </p>

            {/* Navigation and author */}
            <div className="flex items-center justify-between">
              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-afrix-red flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Author info */}
              <div className="text-right">
                <h4 className="font-bold text-gray-900">{current.name}</h4>
                <p className="text-gray-500 text-sm">{current.title}</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
