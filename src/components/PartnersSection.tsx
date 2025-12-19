"use client";

import Link from "next/link";

export default function PartnersSection() {
  const partners = [
    {
      name: "OPTICOM",
      logo: "/images/OPTICOM.jpg",
      url: "https://opticom.cd" // Remplace par le vrai URL
    },
    {
      name: "ACA-RDC",
      logo: "/images/aca-rdc.jpg",
      url: "https://aca-rdc.cd"
    },
    {
      name: "ISIG-GOMA",
      logo: "/images/isig_goma_logo.jpg",
      url: "https://isig.ac.cd"
    },
    {
      name: "Un Jour Nouveau",
      logo: "/images/hub_Un_Jour_Nouveau_Goma.webp",
      url: "https://unjournouveau.cd"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Ils expriment leurs satisfactions
        </h2>

        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-6">TÉMOIGNAGES</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Link
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition-transform"
              >
                <div className="w-32 h-32 rounded-lg flex items-center justify-center mb-2 overflow-hidden bg-white border">
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="w-full h-full object-contain p-3"
                  />
                </div>
                <p className="text-lg font-medium">{partner.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}