"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setActive((active + 1) % testimonials.length);
  const prev = () =>
    setActive((active - 1 + testimonials.length) % testimonials.length);

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

      <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* MOBILE AVATARS */}
        <div className="flex lg:hidden gap-3 overflow-x-auto pb-4 w-full justify-center">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 transition
        ${i === active ? "border-afrix-yellow scale-110" : "border-white/20 opacity-70"}`}
            >
              <Image
                src={t.photo}
                alt={t.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* AVATARS COLUMN */}
        <div className="relative h-105 w-55 items-center justify-center hidden lg:flex">
          {testimonials.map((t, i) => {
            let offset = i - active;

            if (offset > testimonials.length / 2) offset -= testimonials.length;
            if (offset < -testimonials.length / 2)
              offset += testimonials.length;

            const radius = 120;
            const angle = offset * 0.65;
            const x = -Math.cos(angle) * radius + 40;
            const y = Math.sin(angle) * radius;
            const scale = offset === 0 ? 0 : 0.75;
            const opacity = Math.abs(offset) > 2 ? 0 : 1;

            return (
              <div
                key={i}
                className="absolute transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${scale})`,
                  opacity,
                  zIndex: 10 - Math.abs(offset),
                }}
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* BIG IMAGE */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shrink-0">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-afrix-red via-afrix-blue to-afrix-green blur-2xl opacity-40"></div>

          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
            <Image
              src={testimonials[active].photo}
              alt={testimonials[active].name}
              fill
              priority
              className="object-cover transition-all duration-700"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <Quote className="text-afrix-red w-10 h-10" />

          <p className="text-white/80 leading-relaxed text-lg transition-all duration-500">
            {testimonials[active].text}
          </p>

          <div>
            <h3 className="text-white font-semibold text-lg">
              {testimonials[active].name}
            </h3>
            <p className="text-white/60">{testimonials[active].title}</p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4 justify-center lg:justify-start">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={next}
              className="p-3 rounded-full bg-afrix-red hover:bg-[#c5372c] transition"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}