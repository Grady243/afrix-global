"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { IoMdQuote } from "react-icons/io";

const testimonials = [
  {
    photo: "/images/testimonials/testimonial-1.jpg",
    name: "Benjamin MUMPUYA",
    title: "FullStack Developer",
    text: "Issu d’un parcours en géologie, j’ai développé grâce à Talent 4 Startup des compétences en web, en automatisation et une vision entrepreneuriale, faisant de ce programme une véritable passerelle vers le digital.",
  },
  {
    photo: "/images/testimonials/testimonial-2.png",
    name: "Amina ZABONA",
    title: "Développeuse Web",
    text: "Ma formation au programme Talent4Startup chez Afrix Global m’a permis d’acquérir de solides compétences en HTML, CSS, JavaScript et frameworks. Grâce à des formateurs engagés et des workshops enrichissants, j’ai également développé mon esprit d’équipe et ma capacité à travailler sur des projets concrets. Une expérience très formatrice pour ma carrière de développeuse web.",
  },
  {
    photo: "/images/testimonials/testimonial-3.png",
    name: "Robert KULE WA-KANGITSI",
    title: "Développeur FullStack",
    text: "Bénéficiaire du programme Talent4Startups d'Afrix Global financé par Digital Africa, j'ai traversé six mois d'une formation intensive qui n'est pas faite pour tout le monde — et j'en ressors avec une expérience concrète, une vision claire de l'IA appliquée et la capacité de concevoir des solutions web modernes de bout en bout.",
  },
  {
    photo: "/images/team/team-4.jpg",
    name: "Laurence MASIKA",
    title: "Développeur FullStack",
    text: " Ravie d'avoir participé à la formation FullStack Web du programme Talent4Startups, financé par Digital Africa et dispensé chez Afrix-Global. Ce parcours m'a permis de renforcer mes compétences techniques, particulièrement en JavaScript. Au-delà des outils, j'ai surtout acquis une véritable capacité d'adaptation. Grâce aux notions de Problem Solving, je suis désormais capable d'appréhender rapidement de nouveaux langages et frameworks. Une étape clé dans mon parcours de développeur !",
  },
  {
    photo: "/images/testimonials/testimonial-6.png",
    name: "Alfred MUKOLOKA",
    title: "Etudiant en Marketing Digital",
    text: "Mon parcours chez Afrixglobal a transformé mon expérience professionnelle grâce à un cadre structuré, une équipe collaborative et une approche claire. Aujourd’hui, je communique mieux, je développe des stratégies et mes résultats en témoignent.",
  },
  {
    photo: "/images/team/team-6.jpg",
    name: "Grady MASIRIKA",
    title: "Développeur Frontend",
    text: "Afrix Global met véritablement l’accent sur le développement des talents en offrant un accompagnement structuré et des ressources adaptées. Grâce au programme Talent for Startup, organisé et financé par Digital Africa, j’ai pu apprendre de nouvelles compétences, approfondir mes connaissances et progresser rapidement dans mon parcours d’apprentissage, ce qui m’a ouvert de nouvelles perspectives dans le monde professionnel.",
  },
  {
    photo: "/images/team/team-5.png",
    name: "Alexs Kapene",
    title: "Développeur Frontend/UI|UX Design",
    text: "J’ai appris à renforcer mes bases en développement web, à mieux comprendre la logique des projets digitaux, à utiliser des outils de travail collaboratif, à développer mon autonomie et à transformer des connaissances en réalisations concrètes.",
  },
  {
    photo: "/images/testimonials/testimonial-5.png",
    name: "Reine MULEKYA",
    title: "Etudiante en Marketing Degital",
    text: "La formation en marketing digital chez Afrix a été une étape déterminante dans mon parcours. Elle m’a permis de développer des compétences concrètes en communication digitale, en création visuelle et en gestion de campagnes publicitaires. J’applique désormais ces acquis pour professionnaliser la communication de ma marque Crown Collection et renforcer sa présence en ligne. ",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setActive((active + 1) % testimonials.length);
  const prev = () =>
    setActive((active - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center gap-10 lg:gap-[5vw] items-center py-16  bg-afrix-dark"
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
            // 1. Calcul de la distance circulaire la plus courte
            let diff = i - active;
            const len = testimonials.length;

            // Logique de bouclage (Shortest path sur le cercle)
            if (diff > len / 2) diff -= len;
            if (diff < -len / 2) diff += len;

            // 2. Seuil de visibilité (on n'affiche que les 3 avant et 3 après)
            const isVisible = Math.abs(diff) <= 3;
            if (!isVisible) return null;

            const radius = 140;
            const spacingAngle = 0.5;
            const angle = diff * spacingAngle;

            const x = -Math.cos(angle) * radius + 50;
            const y = Math.sin(angle) * radius;

            // 4. Styles dynamiques
            // L'élément actif disparaît de la colonne car il est dans "BIG IMAGE"
            const isCenter = diff === 0;
            const scale = isCenter ? 0 : 0.8 - Math.abs(diff) * 0.1;
            const opacity = isCenter ? 0 : 1 - Math.abs(diff) * 0.2;

            return (
              <div
                key={i}
                className="absolute transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: 10 - Math.abs(diff),
                }}
              >
                <button
                  onClick={() => setActive(i)}
                  className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-lg hover:border-afrix-yellow transition-colors"
                >
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
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
          <IoMdQuote className="text-afrix-red w-10 h-10" />

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