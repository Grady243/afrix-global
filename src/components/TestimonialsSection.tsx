export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Samuel Wassa",
      role: "Community Manager",
      img: null,
      quote: "Des solutions sur mesure pour un avant d'ajout optimisé.",
    },
    {
      name: "Yvonne Kadima",
      role: "Director Marketing", // EXACT comme maquette
      img: null,
      quote: "Des solutions sur mesure pour un avant d'ajout optimisé.",
    },
    {
      name: "Yasdim Hassan", // EXACT comme maquette
      role: "Fullstack Developer",
      img: null,
      quote: "Des solutions sur mesure pour un avant d'ajout optimisé.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre EXACT comme maquette */}
        <h2 className="text-2xl font-bold text-center mb-8">
          Ils expriment leurs satisfactions
        </h2>

        {/* 3 colonnes comme maquette */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              {/* Placeholder avatar - cercle gris */}
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>

              {/* Nom et rôle sur la même ligne comme maquette */}
              <div className="mb-2">
                <span className="font-bold">{t.name}</span>
                <span className="text-gray-600 ml-2">{t.role}</span>
              </div>

              {/* Citation EXACTE comme maquette */}
              <p className="text-gray-700 italic">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}