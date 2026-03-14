import Image from "next/image"
import { Rocket, Globe, Target, Users, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
]

const stats = [
  { value: "+1000", label: "Membres actifs" },
  { value: "+50", label: "Formations" },
  { value: "+200", label: "Diplomes" },
  { value: "+10", label: "Partenaires" },
]

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
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
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
            <div className="absolute right-[5%] top-[30%] w-[130px] h-[100px] bg-afrix-green rounded-2xl flex flex-col justify-center items-center z-10">
              <h3 className="text-3xl font-bold text-white">+5</h3>
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
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Notre <span className="text-afrix-yellow">Mission</span> &{" "}
            <span className="text-afrix-red">Vision</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 p-6"
              >
                <h3
                  className={`text-4xl sm:text-5xl font-bold ${
                    index === 0
                      ? "text-afrix-blue"
                      : index === 1
                        ? "text-afrix-green"
                        : index === 2
                          ? "text-afrix-yellow"
                          : "text-afrix-red"
                  }`}
                >
                  {stat.value}
                </h3>
                <p className="text-white/70 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
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
              className="rounded-full bg-afrix-blue text-white hover:bg-[#3367d6] px-8 py-6"
            >
              <Link href="/formations">Voir nos formations</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/30 text-white hover:bg-white/10 px-8 py-6"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
