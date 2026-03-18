"use client";

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
  return (
    <section
      className="w-full min-h-[50vh] py-16 bg-afrix-dark flex flex-col items-center gap-10 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 0%, rgba(15, 157, 88, 0.3), transparent 35%), radial-gradient(circle at 0% 0%, rgba(245, 180, 0, 0.302), transparent 35%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
        NOS <span className="text-[#4285f4]">PARTENAIRES</span>
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Fade gauche */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-linear-to-r from-afrix-dark/50 to-transparent" />

        {/* Fade droite */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-linear-to-l from-afrix-dark/50 to-transparent" />

        {/* Track */}
        <div className="flex w-max animate-partners-scroll gap-8 lg:gap-[5vw] py-4">
          {[...partners, ...partners].map((src, i) => (
            <div
              key={i}
              className="w-25 h-25 sm:w-30 sm:h-30 lg:w-[10vw] lg:h-[10vw] shrink-0 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center  hover:scale-105 transition-transform"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Partenaire ${(i % partners.length) + 1}`}
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
