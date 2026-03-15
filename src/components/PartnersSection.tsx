"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const partners = [
  "https://cdn.prod.website-files.com/67290660990553e15f9b92b6/6729258180b8be5879a317bc_logoblock.svg",
  "/images/paterners/logo_talent4startup.webp",
  "/images/paterners/logo_primeTec.webp",
  "https://skynet-burundi.bi/assets/icones/logo_sous2.svg",
  "/images/paterners/logo_harvely.webp",
  "/images/paterners/logo_isig.webp",
];

export default function PartnersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect with continuous slow animation
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth } = carouselRef.current;
        carouselRef.current.scrollLeft += 0.5; // Slow scroll speed

        // Reset to start when reaching the duplicated part
        if (scrollLeft >= scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      className="w-full min-h-[50vh] py-16 bg-afrix-dark flex flex-col items-center gap-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 0%, rgba(15, 157, 88, 0.3), transparent 35%), radial-gradient(circle at 0% 0%, rgba(245, 180, 0, 0.302), transparent 35%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
        NOS <span className="text-[#4285f4]">PARTENAIRES</span>
      </h2>

      <div className="relative w-[90%] max-w-300 flex items-center justify-center">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-8 lg:gap-[5vw] overflow-x-auto scroll-smooth py-4 px-16 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...partners, ...partners].map((src, i) => (
            <div
              key={i}
              className="w-25 h-25 sm:w-30 sm:h-30 lg:w-[10vw] lg:h-[10vw] shrink-0 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Partenaire ${i + 1}`}
                width={150}
                height={150}
                className="object-contain w-full h-full p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
