import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

const articles = [
    {
        title: "Les tendances du developpement web en 2026",
        image: "/images/pub1.jpg",
        date: "03 Janvier 2026",
        author: "David Kitenge",
        category: "Tech",
        categoryColor: "bg-afrix-blue",
        excerpt:
            "Decouvrez les technologies et frameworks qui domineront le paysage du developpement web cette annee. De l'IA generative aux nouvelles architectures.",
    },
    {
        title: "Comment debuter dans le marketing digital en Afrique",
        image: "/images/pub2.jpg",
        date: "27 Decembre 2025",
        author: "prud Zihalirwa",
        category: "Marketing",
        categoryColor: "bg-afrix-yellow",
        excerpt:
            "Un guide complet pour les debutants qui souhaitent se lancer dans le marketing digital, adapte au contexte africain et aux realites locales.",
    },
    {
        title: "Retour sur le Tech Summit 2025",
        image: "/images/pub3.jpg",
        date: "15 Decembre 2025",
        author: "Dieumerci Muhindo",
        category: "Evenements",
        categoryColor: "bg-afrix-green",
        excerpt:
            "Un evenement exceptionnel qui a reuni plus de 300 participants autour de l'innovation numerique. Retour en images et en temoignages.",
    },
    {
        title: "5 competences numeriques indispensables pour 2026",
        image: "/images/event.jpg",
        date: "10 Decembre 2025",
        author: "Lemoisson Metre",
        category: "Formation",
        categoryColor: "bg-afrix-red",
        excerpt:
            "Le marche du travail evolue rapidement. Voici les 5 competences numeriques les plus recherchees par les employeurs cette annee.",
    },
    {
        title: "L'impact de l'IA sur l'education en Afrique",
        image: "/images/about-1.jpg",
        date: "01 Decembre 2025",
        author: "john Santos",
        category: "Tech",
        categoryColor: "bg-afrix-blue",
        excerpt:
            "L'intelligence artificielle transforme la maniere dont nous apprenons. Exploration des opportunites et defis pour le continent africain.",
    },
    {
        title: "Temoignage : de formateur a entrepreneur",
        image: "/images/about-2.jpg",
        date: "20 Novembre 2025",
        author: "Bienvenu Mupenzi",
        category: "Temoignage",
        categoryColor: "bg-afrix-green",
        excerpt:
            "Moussa partage son parcours de formateur en developpement mobile a la creation de sa propre startup technologique.",
    },
]

export function BlogGrid() {
    return (
        <section
            className="w-full py-16 bg-afrix-dark flex flex-col items-center gap-12"
            style={{
                backgroundImage:
                    "radial-gradient(circle at 0% 0%, rgba(66, 133, 244, 0.3), transparent 25%), radial-gradient(circle at 100% 100%, rgba(219, 68, 55, 0.3), transparent 25%)",
            }}
        >
            {/* Featured Article (first one) */}
            <div className="w-[90%] max-w-[1200px]">
                <Card className="w-full rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md overflow-hidden group">
                    <div className="flex flex-col lg:flex-row">
                        <div className="relative w-full lg:w-1/2 h-[250px] lg:h-auto min-h-[300px] overflow-hidden">
                            <Image
                                src={articles[0].image}
                                alt={articles[0].title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className={`${articles[0].categoryColor} text-white border-0`}>
                                    {articles[0].category}
                                </Badge>
                            </div>
                        </div>
                        <CardContent className="w-full lg:w-1/2 p-8 flex flex-col justify-center gap-4">
                            <div className="flex items-center gap-4 text-white/50 text-sm">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    {articles[0].date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <User className="w-4 h-4" />
                                    {articles[0].author}
                                </span>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                                {articles[0].title}
                            </h2>
                            <p className="text-white/70 text-base leading-relaxed">{articles[0].excerpt}</p>
                            <Button
                                variant="outline"
                                className="self-start rounded-full border-afrix-blue/50 bg-transparent text-afrix-blue hover:bg-afrix-blue/10 mt-2"
                            >
                                Lire la suite
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </CardContent>
                    </div>
                </Card>
            </div>

            {/* Articles Grid */}
            <div className="w-[90%] max-w-[1200px] flex flex-wrap justify-center gap-8">
                {articles.slice(1).map((article) => (
                    <Card
                        key={article.title}
                        className="w-full sm:w-[45%] lg:w-[30%] rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl group"
                    >
                        <div className="relative w-full h-[180px] overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                                <Badge className={`${article.categoryColor} text-white border-0 text-xs`}>
                                    {article.category}
                                </Badge>
                            </div>
                        </div>
                        <CardContent className="p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-white/50 text-xs">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {article.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    {article.author}
                                </span>
                            </div>
                            <h3 className="text-base font-bold text-white leading-tight">{article.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                                {article.excerpt}
                            </p>
                            <Button
                                variant="outline"
                                className="self-start rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 text-sm mt-1 px-5"
                            >
                                Lire plus
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
