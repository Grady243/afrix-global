import {
    Code,
    Smartphone,
    Monitor,
    Globe,
    ImageIcon,
    PenTool,
    ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
    {
        icon: Code,
        color: "text-afrix-blue",
        bgColor: "bg-afrix-blue/10",
        borderColor: "border-afrix-blue/30",
        title: "Developpement Web",
        description:
            "Apprenez a creez des sites et applications web modernes du front-end au back-end et realisez des projets concrets.",
        details: [
            "Sites vitrines et e-commerce",
            "Applications web complexes",
            "Integration d'APIs et services tiers",
            "Optimisation des performances",
        ],
    },
    {
        icon: Smartphone,
        color: "text-afrix-green",
        bgColor: "bg-afrix-green/10",
        borderColor: "border-afrix-green/30",
        title: "Developpement Mobile",
        description:
            "Apprenez a creer des applications mobiles performantes pour Android et iOS et realisez des projets concrets.",
        details: [
            "Applications Android natives",
            "Applications iOS natives",
            "Applications cross-platform",
            "Publication sur les stores",
        ],
    },
    {
        icon: Monitor,
        color: "text-afrix-yellow",
        bgColor: "bg-afrix-yellow/10",
        borderColor: "border-afrix-yellow/30",
        title: "Marketing Digital",
        description:
            "Apprenez a concevoir et gerer des campagnes en ligne efficaces et realisez des projets concrets.",
        details: [
            "Strategie de contenu",
            "Referencement SEO / SEA",
            "Gestion des reseaux sociaux",
            "Email marketing",
        ],
    },
    {
        icon: Globe,
        color: "text-afrix-green",
        bgColor: "bg-afrix-green/10",
        borderColor: "border-afrix-green/30",
        title: "Consultation Informatique",
        description:
            "Apprenez a diagnostiquer, conseiller et optimiser les systemes informatiques avec des projets concrets.",
        details: [
            "Audit de systemes existants",
            "Conseil en architecture",
            "Migration cloud",
            "Securite informatique",
        ],
    },
    {
        icon: ImageIcon,
        color: "text-afrix-red",
        bgColor: "bg-afrix-red/10",
        borderColor: "border-afrix-red/30",
        title: "Communication Visuelle",
        description:
            "Apprenez a creer des contenus graphiques impactants et realistes pour vos projets concrets.",
        details: [
            "Identite visuelle",
            "Design de supports print",
            "Creation de contenus sociaux",
            "Motion design",
        ],
    },
    {
        icon: PenTool,
        color: "text-afrix-blue",
        bgColor: "bg-afrix-blue/10",
        borderColor: "border-afrix-blue/30",
        title: "Redaction de Contenus",
        description:
            "Apprenez a produire des textes clairs et efficaces pour vos projets et supports numeriques.",
        details: [
            "Redaction web et blog",
            "Copywriting publicitaire",
            "Contenus techniques",
            "Storytelling de marque",
        ],
    },
]

export function ServicesDetail() {
    return (
        <section
            className="w-full py-16 bg-afrix-dark flex flex-col items-center gap-12"
            style={{
                backgroundImage:
                    "radial-gradient(circle at 10% 0%, rgba(244, 180, 0, 0.3), transparent 25%), radial-gradient(circle at 100% 100%, rgba(15, 157, 88, 0.3), transparent 35%)",
            }}
        >
            {/* Services Grid */}
            <div className="w-[90%] max-w-[1200px] flex flex-wrap justify-center gap-8">
                {services.map((service) => (
                    <Card
                        key={service.title}
                        className={`w-full sm:w-[45%] lg:w-[30%] rounded-2xl border ${service.borderColor} bg-black/30 backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-2xl group`}
                    >
                        <CardContent className="p-8 flex flex-col gap-5">
                            <div
                                className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                            >
                                <service.icon className={`w-8 h-8 ${service.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                            <ul className="flex flex-col gap-2 mt-2">
                                {service.details.map((detail) => (
                                    <li key={detail} className="flex items-center gap-2 text-white/60 text-sm">
                                        <ArrowRight className={`w-4 h-4 ${service.color} flex-shrink-0`} />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 mt-8">
                <p className="text-white/80 text-base text-center max-w-[600px]">
                    {"Vous avez un projet en tete ? Contactez-nous pour discuter de vos besoins et decouvrir comment nous pouvons vous accompagner."}
                </p>
                <Button
                    asChild
                    className="rounded-full bg-afrix-blue text-white hover:bg-[#3367d6] px-8 py-6 text-base font-medium"
                >
                    <Link href="/contact">Contactez-nous</Link>
                </Button>
            </div>
        </section>
    )
}
