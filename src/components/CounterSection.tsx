"use client";

import AnimatedCounter from "../../components/AnimatedCounter";

const counters = [
  {
    value: 5,
    prefix: "+",
    color: "text-[#ea4335]",
    label: "Annees d'experience",
  },
  {
    value: 10,
    prefix: "+",
    color: "text-[#30b43f]",
    label: "Formations disponibles",
  },
  {
    value: 500,
    prefix: "+",
    color: "text-[#2898c5]",
    label: "Apprenants formes",
  },
  {
    value: 100,
    prefix: "+",
    color: "text-[#fbbc05]",
    label: "Certificats delivres",
  },
];

export default function CounterSection() {
  return (
    <section className="bg-afrix-dark">
      <div
        className="w-full  flex flex-wrap justify-around items-center gap-8 px-[10%] md:px-40 py-12 "
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 50%, rgba(219, 68, 55, 0.3), transparent 35%)",
        }}
      >
        {counters.map((counter) => (
          <div key={counter.label} className="text-center flex-1 min-w-35">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${counter.color}`}
            >
              <AnimatedCounter target={counter.value} prefix={counter.prefix} />
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              {counter.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
