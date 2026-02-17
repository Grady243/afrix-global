"use client";
import { Code, Smartphone, Monitor, Globe, ImageIcon, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    color: "text-[#4285f4]",
    title: "Developpement web",
    description:
      "Apprenez a creez des sites et applications web modernes du front-end au back-end et realisez des projets concrets.",
  },
  {
    icon: Smartphone,
    color: "text-[#30b43f]",
    title: "Developpement Mobile",
    description:
      "Apprenez a creer des applications mobiles performantes pour Android et iOS et realisez des projets concrets.",
  },
  {
    icon: Monitor,
    color: "text-[#fbbc05]",
    title: "Marketing Digital",
    description:
      "Apprenez a concevoir et gerer des campagnes en ligne efficaces et realisez des projets concrets.",
  },
  {
    icon: Globe,
    color: "text-[#30b43f]",
    title: "Consultation Informatique",
    description:
      "Apprenez a diagnostiquer, conseiller et optimiser les systemes informatiques avec des projets concrets.",
  },
  {
    icon: ImageIcon,
    color: "text-[#ea4335]",
    title: "Communication visuelle",
    description:
      "Apprenez a creer des contenus graphiques impactants et realistes pour vos projets concrets.",
  },
  {
    icon: PenTool,
    color: "text-[#4285f4]",
    title: "Redaction des contenus",
    description:
      "Apprenez a produire des textes clairs et efficaces pour vos projets et supports numeriques.",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full min-h-screen flex flex-col justify-center gap-10 lg:gap-[5vw] items-center py-16 lg:py-8 bg-[#0a0a0a]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 0%, rgba(244, 180, 0, 0.3), transparent 25%), radial-gradient(circle at 100% 100%, rgba(15, 157, 88, 0.3), transparent 35%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
        NOS <span className="text-[#ea4335]">SERVICES</span>
      </h2>

      <div className="w-[90%] lg:w-[80%] flex flex-wrap justify-center gap-6">
        {services.map((service) => (
          <Card
            key={service.title}
            className="w-full sm:w-[45%] lg:w-[30%] glass rounded-2xl border border-white/20 text-center transition-transform hover:-translate-y-1 hover:shadow-2xl bg-black/30"
          >
            <CardContent className="p-8 flex flex-col items-center gap-4">
              <service.icon className={`w-12 h-12 lg:w-16 lg:h-16 ${service.color}`} />
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
