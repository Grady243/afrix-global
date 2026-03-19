import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Globe, Target, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Nous visons l'excellence dans tout ce que nous faisons, des formations aux solutions digitales.",
    color: "text-afrix-blue",
    bgColor: "bg-afrix-blue/10",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Nous croyons au pouvoir du travail d'equipe et de la collaboration pour atteindre des objectifs communs.",
    color: "text-afrix-green",
    bgColor: "bg-afrix-green/10",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "Nous adoptons les nouvelles technologies et methodes pour rester a la pointe de l'education numerique.",
    color: "text-afrix-yellow",
    bgColor: "bg-afrix-yellow/10",
  },
  {
    icon: Heart,
    title: "Impact Social",
    description:
      "Notre objectif ultime est de creer un impact positif durable sur les communautes que nous servons.",
    color: "text-afrix-red",
    bgColor: "bg-afrix-red/10",
  },
];

const stats = [
  { value: 1000, label: "Membres actifs" },
  { value: 50, label: "Formations" },
  { value: 200, label: "Diplomes" },
  { value: 10, label: "Partenaires" },
];

const teamMembers = [
  {
    name: "Prud Zihalirwa",
    role: "Fondateur & CEO",
    photo: "/images/team/team-1.jpg",
    color: "border-afrix-blue",
    description:
      "Visionnaire et entrepreneur, Prud dirige Afrix Global avec la mission de transformer l'education numerique en Afrique.",
    sociaMedia: {
      linkdin: "https://www.linkedin.com/in/prud-zihalirwa/",
      x: "https://x.com/PrudZihalirwa",
    },
  },
  {
    name: "Dieumerci Muhindo",
    role: "Coach developpement Fullstack & Developpeur",
    photo: "/images/team/team-2.jpg",
    color: "border-afrix-green",
    description:
      "Specialiste du developpement Web, Dieumerci accompagne les apprenants dans la creation d'applications performantes.",
    sociaMedia: {
      linkdin: "https://www.linkedin.com/in/dieumerci-muhindo-028b06232/",
      x: "https://x.com/MdDieumerci",
    },
  },
  {
    name: "Michael Bagheni ",
    role: "Responsable Marketing",
    photo: "/images/team/team-3.jpg",
    color: "border-afrix-red",
    description:
      "Strategiste digitale, Michael pilote la communication et la visibilite de la marque Afrix Global.",
    sociaMedia: {
      linkdin: "https://www.linkedin.com/in/micha%C3%ABl-bagheni/",
      x: "https://x.com/michaelbagheni1",
    },
  },
  {
    name: "Laurence Masika ",
    role: "FullStack Developer",
    photo: "/images/team/team-4.jpg",
    color: "border-afrix-red",
    description:
      "Laurence assure la fiabilité, la sécurité et la performance des systèmes d’Afrix Global.",
    sociaMedia: {
      linkdin: "https://www.linkedin.com/in/laure-masika-8a7aa832a/",
      x: "https://x.com/LaurenceMasika",
    },
  },
  {
    name: "Alexs Kapene ",
    role: "Fronted Developer/UI/UX Design",
    photo: "/images/team/team-5.png",
    color: "border-afrix-blue",
    description:
      "Imagine des interfaces intuitives et engageantes, pensées pour répondre aux besoins des utilisateurs.",
    sociaMedia: {
      linkdin: "https://www.linkedin.com/in/alexs-kapene-789b02293/",
      x: "https://x.com/alexs_kape41937",
    },
  },
  {
    name: "Grady Masirika ",
    role: "Fronted Developer/UI/UX Design",
    photo: "/images/team/team-6.jpg",
    color: "border-afrix-green",
    description:
      "Imagine des interfaces intuitives et engageantes, pensées pour répondre aux besoins des utilisateurs.",
    sociaMedia: {
      linkdin: "https://www.linkedin.com/in/grady-masirika-aa92b6327/",
      x: "https://x.com/GradyMasirika",
    },
  },
];



export function AboutContent() {
  return (
    <div className="w-full bg-afrix-dark">
      {/* Notre Histoire */}
      <section
        className="w-full py-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 50%, rgba(48, 180, 63, 0.15), transparent 30%)",
        }}
      >
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="w-full lg:w-1/2 relative min-h-100 lg:min-h-125">
            <div className="absolute left-0 top-0 w-[70%] h-[80%] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-1.jpg"
                alt="Formation Afrix Global"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[60%] h-[50%] rounded-2xl overflow-hidden border-4 border-afrix-dark">
              <Image
                src="/images/about-2.jpg"
                alt="Equipe Afrix Global"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute right-[5%] top-[30%] w-32.5 h-25 bg-afrix-green rounded-2xl flex flex-col justify-center items-center z-10">
              <h3 className="text-3xl font-bold text-white">
                <AnimatedCounter prefix="+" target={5} />
              </h3>
              <p className="text-white text-sm">Annees</p>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Notre <span className="text-afrix-blue">Histoire</span>
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Afrix Global est ne d'une vision simple mais ambitieuse : rendre
              l'education numerique accessible a tous en Afrique. Fonde par une
              equipe de passionnes de technologie et d'education, nous avons
              commence notre aventure avec la conviction que la technologie peut
              etre un puissant levier de changement social.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              Depuis notre creation, nous avons forme des centaines de jeunes
              talents, les preparant aux defis du marche du travail moderne.
              Notre approche pratique et notre engagement envers l'excellence
              nous ont permis de devenir un acteur reconnu dans le domaine de la
              formation numerique.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="w-full py-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(66, 133, 244, 0.2), transparent 30%), radial-gradient(circle at 0% 100%, rgba(219, 68, 55, 0.15), transparent 30%)",
        }}
      >
        <div className="w-[90%] lg:w-[80%] mx-auto mt-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Notre <span className="text-afrix-yellow">Mission</span> &{" "}
            <span className="text-afrix-red">Vision</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mx-auto mt-16">
            {/* Mission */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-afrix-yellow/20 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-afrix-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-white">Notre Mission</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Afrix Global a pour mission de rendre l'education accessible, de
                developper des competences cles et de favoriser l'employabilite
                des talents africains dans l'economie digitale. Nous formons les
                jeunes et les moins jeunes aux competences numeriques
                essentielles, afin de renforcer leur employabilite, stimuler
                l'entrepreneuriat et repondre aux besoins reels du marche du
                travail.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-afrix-red/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-afrix-red" />
              </div>
              <h3 className="text-2xl font-bold text-white">Notre Vision</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Afrix Global vise a construire un avenir educatif inclusif et
                innovant, ou la technologie favorise l'apprentissage,
                l'entrepreneuriat et l'autonomisation des talents africains.
                Nous aspirons a etre le pont entre le potentiel inexploite de
                l'Afrique et les opportunites de l'economie numerique mondiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="w-full py-20">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Nos <span className="text-afrix-green">Valeurs</span>
          </h2>
          <p className="text-white/70 text-center max-w-[600px] mx-auto mb-12">
            Les principes qui guident notre action au quotidien et definissent
            notre culture d'entreprise.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mt-16">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-white/20 transition-colors"
              >
                <div
                  className={`w-14 h-14 rounded-full ${value.bgColor} flex items-center justify-center`}
                >
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="w-full py-16"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.15), transparent 50%)",
        }}
      >
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mt-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 p-6"
              >
                <h3
                  className={`text-4xl sm:text-5xl font-bold ${index === 0
                      ? "text-afrix-blue"
                      : index === 1
                        ? "text-afrix-green"
                        : index === 2
                          ? "text-afrix-yellow"
                          : "text-afrix-red"
                    }`}
                >
                  <AnimatedCounter prefix="+" target={stat.value} />
                </h3>
                <p className="text-white/70 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full py-20 bg-afrix-dark flex flex-col items-center"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 100%, rgba(15, 157, 88, 0.3), transparent 35%), radial-gradient(circle at 100% 0%, rgba(244, 180, 0, 0.3), transparent 35%)",
        }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Notre Equipe<span className="text-afrix-green"> - Afrix Global</span>
          </h2>
          <p className="text-white/70 text-center max-w-[600px] mx-auto mb-12">
            Decouvrez l'equipe passionnee d'Afrix Global qui forme et accompagne les talents africains dans le numerique.
          </p>
        <div className="w-[90%] max-w-[1200px] mx-auto mt-16 flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="w-full sm:w-[45%] lg:w-[30%] glass rounded-2xl border border-white/10 bg-black/30 transition-transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div
                  className={`relative w-32.5 h-32.5 rounded-full overflow-hidden border-4 ${member.color} group-hover:scale-105 transition-transform`}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <span className="text-afrix-blue text-sm font-medium">
                  {member.role}
                </span>
                <p className="text-white/70 text-sm leading-relaxed">
                  {member.description}
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href={member.sociaMedia.linkdin}
                    aria-label={`LinkedIn de ${member.name}`}
                    className="text-white/50 hover:text-afrix-blue transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={member.sociaMedia.x}
                    aria-label={`Twitter de ${member.name}`}
                    className="text-white/50 hover:text-afrix-blue transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20">
        <div className="w-[90%] lg:w-[80%] mx-auto bg-gradient-to-r from-afrix-blue/20 to-afrix-green/20 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Pret a rejoindre l'aventure ?
          </h2>
          <p className="text-white/70 max-w-[500px]">
            Decouvrez nos formations et commencez votre parcours vers une
            carriere reussie dans le numerique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="w-36 md:w-45 p-6  bg-afrix-blue  hover:bg-afrix-blue/80 cursor-pointer"
            >
              <Link href="/formations">Voir nos formations</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-36 md:w-45 p-6 bg-transparent border border-afrix-blue text-white hover:text-white hover:bg-afrix-blue cursor-pointer"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
