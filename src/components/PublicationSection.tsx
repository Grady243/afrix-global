import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const publications = [
  {
    image: "/images/publications/pub-2.png",
    date: "16 Mars 2026",
    description:
      "Dans le cadre du programme Talent 4 Startups, nos étudiants en Marketing Digital Junior partagent leur expérience et les compétences acquises tout au long de la formation.",
    link: "https://www.linkedin.com/posts/afrix-global_talent4startups-marketingdigital-formation-activity-7439242595786088448-nhYn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEctRdkBYpYsxcmmUb6I5PI8kudJhWhu-HU",
  },
  {
    image: "/images/publications/pub-1.png",
    date: "14 Mars 2026",
    description:
      "Nous vous proposons 5 formations pratiques, en présentiel et en ligne, pour renforcer vos compétences en numérique et analyse de données, des atouts essentiels et recherchés sur le marché.",
    link: "https://www.linkedin.com/posts/afrix-global_saisissez-cette-opportunit%C3%A9-de-formation-activity-7438079660426567680-MYUm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEctRdkBYpYsxcmmUb6I5PI8kudJhWhu-HU",
  },

  {
    image: "/images/publications/pub-3.png",
    date: "24 Février 2026",
    description:
      "Nous lançons une série de sessions sur les grands enjeux du numérique, de l’IA au DevOps, pour inspirer, former et renforcer les compétences de la nouvelle génération du digital.",
    link: "https://x.com/Afrix_Global/status/2026188762280054828?s=20",
  },
];
export default function PublicationSection() {
  return (
    <section
      id="publications"
      className="w-full min-h-screen bg-afrix-dark flex flex-col items-center gap-10 lg:gap-[5vw] py-16"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 0%, rgba(66, 133, 244, 0.3), transparent 25%), radial-gradient(circle at 100% 100%, rgba(219, 68, 55, 0.3), transparent 25%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-10">
        NOS RECENTES <span className="text-afrix-blue">PUBLICATIONS</span>
      </h2>

      <div className="w-[90%] lg:w-[80%] flex flex-wrap justify-center gap-6">
        {publications.map((pub) => (
          <Card
            key={pub.date}
            className="w-full sm:w-[48%] lg:w-[30%] glass-light rounded-2xl overflow-hidden border-0 transition-transform hover:-translate-y-1 hover:shadow-2xl bg-white/5"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={pub.image || "/placeholder.svg"}
                alt={pub.description}
                fill
                className="absolute  inset-0 w-full h-full z-20 object-cover"
              />
            </div>
            <CardContent className="p-5 flex flex-col gap-3">
              <span className="text-white/70 text-sm">{pub.date}</span>
              <p className="text-white text-base leading-relaxed">
                {pub.description}
              </p>
              <Link href={pub.link}>
                <Button
                  variant="default"
                  className="self-start  bg-afrix-blue text-white hover:bg-afrix-blue/70 transition-all text-sm px-5"
                >
                  Lire plus
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
