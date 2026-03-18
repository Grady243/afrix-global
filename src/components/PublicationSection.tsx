import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const publications = [
  {
    image: "/images/pub1.jpeg",
    date: "03 Janvier 2026",
    description:
      "Une courte description de la publication pour donner envie de lire.",
  },
  {
    image: "/images/pub2.jpeg",
    date: "27 Decembre 2025",
    description: "Resume succinct de la publication et details importants.",
  },
  {
    image: "/images/hero3.jpg",
    date: "15 Decembre 2025",
    description: "Petit resume de la publication avec un texte accrocheur.",
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
                className="object-cover"
              />
            </div>
            <CardContent className="p-5 flex flex-col gap-3">
              <span className="text-white/70 text-sm">{pub.date}</span>
              <p className="text-white text-base leading-relaxed">
                {pub.description}
              </p>
              <Button
                variant="outline"
                className="self-start rounded-full border-white/40 bg-white/10 text-white hover:bg-white/25 transition-all text-sm px-5"
              >
                Lire plus
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
