import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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
      "Specialiste du developpement mobile, Dieumerci accompagne les apprenants dans la creation d'applications performantes.",
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

export function TeamGrid() {
  return (
    <section
      className="w-full py-16 bg-afrix-dark flex flex-col items-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 100%, rgba(15, 157, 88, 0.3), transparent 35%), radial-gradient(circle at 100% 0%, rgba(244, 180, 0, 0.3), transparent 35%)",
      }}
    >
      <div className="w-[90%] max-w-[1200px] flex flex-wrap justify-center gap-8">
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
  );
}
