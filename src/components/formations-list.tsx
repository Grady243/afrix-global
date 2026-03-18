import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Star } from "lucide-react";
import Link from "next/link";

const formations = [
  {
    title: "Developpement Web Full-Stack",
    image: "/images/formations/fullstack.jpg",
    duration: "6 mois",
    level: "Debutant",
    students: 120,
    rating: 4.8,
    color: "bg-afrix-blue",
    description:
      "Maitrisez HTML, CSS, JavaScript, React, Node.js et les bases de donnees pour devenir un developpeur web complet.",
    modules: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Projet final",
    ],
  },
  {
    title: "Developpement Mobile",
    image: "/images/formations/developpemement_mobile.png",
    duration: "4 mois",
    level: "Intermediaire",
    students: 85,
    rating: 4.7,
    color: "bg-afrix-green",
    description:
      "Apprenez a creer des applications mobiles performantes avec React Native et Flutter pour Android et iOS.",
    modules: [
      "React Native",
      "Flutter",
      "APIs REST",
      "Firebase",
      "Publication",
      "Projet final",
    ],
  },
  {
    title: "Marketing Digital",
    image: "/images/formations/marqueting_digital.jpg",
    duration: "3 mois",
    level: "Debutant",
    students: 200,
    rating: 4.9,
    color: "bg-afrix-yellow",
    description:
      "Devenez un expert en marketing digital : SEO, publicite en ligne, reseaux sociaux et strategie de contenu.",
    modules: [
      "SEO",
      "Google Ads",
      "Social Media",
      "Email Marketing",
      "Analytics",
      "Projet final",
    ],
  },
  {
    title: "Communication Visuelle",
    image: "/images/formations/communication-visuelle.jpg",
    duration: "3 mois",
    level: "Debutant",
    students: 95,
    rating: 4.6,
    color: "bg-afrix-red",
    description:
      "Maitrisez les outils de design graphique et apprenez a creer des supports visuels professionnels et impactants.",
    modules: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "Branding",
      "Motion Design",
      "Projet final",
    ],
  },
  {
    title: "Consultation Informatique",
    image: "/images/formations/consultation_informatique.jpg",
    duration: "4 mois",
    level: "Avance",
    students: 45,
    rating: 4.8,
    color: "bg-afrix-green",
    description:
      "Apprenez a diagnostiquer, conseiller et optimiser les systemes informatiques des entreprises.",
    modules: [
      "Audit IT",
      "Cloud",
      "Securite",
      "Architecture",
      "Gestion de projet",
      "Projet final",
    ],
  },
  {
    title: "Redaction de Contenus",
    image: "/images/formations/redaction_contenus.jpg",
    duration: "2 mois",
    level: "Debutant",
    students: 150,
    rating: 4.5,
    color: "bg-afrix-blue",
    description:
      "Produisez des textes clairs, engageants et optimises pour le web, les reseaux sociaux et les supports marketing.",
    modules: [
      "Copywriting",
      "Redaction web",
      "SEO writing",
      "Storytelling",
      "Contenus sociaux",
      "Projet final",
    ],
  },
];

export function FormationsList() {
  return (
    <section
      className="w-full py-16 bg-afrix-dark flex flex-col items-center gap-12"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 0%, rgba(244, 180, 0, 0.3), transparent 25%), radial-gradient(circle at 100% 100%, rgba(66, 133, 244, 0.3), transparent 35%)",
      }}
    >
      <div className="w-[90%] max-w-300 flex flex-wrap justify-center gap-8">
        {formations.map((formation) => (
          <Card
            key={formation.title}
            className="w-full sm:w-[45%] lg:w-[30%] rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl group"
          >
            {/* Image */}
            <div className="relative w-full h-45 overflow-hidden">
              <Image
                src={formation.image}
                alt={formation.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <Badge
                  className={`${formation.color} text-white border-0 text-xs font-medium`}
                >
                  {formation.level}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white leading-tight">
                {formation.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {formation.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-4 text-white/60 text-xs">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {formation.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {formation.students} inscrits
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-afrix-yellow" />
                  {formation.rating}
                </span>
              </div>

              {/* Modules */}
              <div className="flex flex-wrap gap-2 mt-1">
                {formation.modules.slice(0, 4).map((mod) => (
                  <span
                    key={mod}
                    className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-md"
                  >
                    {mod}
                  </span>
                ))}
                {formation.modules.length > 4 && (
                  <span className="text-xs text-white/40 px-2 py-1">
                    +{formation.modules.length - 4}
                  </span>
                )}
              </div>

              <Button
                asChild
                variant="outline"
                className="mt-2 rounded-lg border-afrix-blue bg-transparent text-white hover:text-white hover:bg-afrix-blue text-sm"
              >
                <Link href="/contact">{"S'inscrire"}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
