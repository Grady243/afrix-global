"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const gradientBorderVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    pulse: {
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-600 font-semibold tracking-wide text-lg mb-3"
          >
            <span className="inline-block px-4 py-1 bg-blue-50 rounded-full">
              À PROPOS DE NOUS
            </span>
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
          >
            Découvrez Afrix Global
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 100 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        <div ref={ref} className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Block avec animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-full md:w-1/2 flex justify-center"
          >
            {/* Bordure animée avec gradient */}
            <motion.div
              variants={gradientBorderVariants}
              initial="hidden"
              animate={inView ? ["visible", "pulse"] : "hidden"}
              className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-700 blur-xl opacity-70"
            />

            {/* Bordure intérieure */}
            <motion.div
              variants={gradientBorderVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-700"
            />

            {/* Image principale avec effet de flottement */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              className="relative w-full md:w-96 h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white z-10"
            >
              <Image
                src="/images/service1.jpg"
                alt="Afrix Global"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
              {/* Overlay sur hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Petite image droite avec animation flottante */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-6 -right-4 w-36 h-52 md:w-44 md:h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full relative"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </motion.div>
              {/* Effet de brillance */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>

            {/* Petite image gauche avec animation flottante décalée */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute -bottom-6 -left-4 w-36 h-52 md:w-44 md:h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20"
            >
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-full h-full relative"
              >
                <Image
                  src="/images/service4.jpg"
                  alt="Service"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            </motion.div>

            {/* Décoration supplémentaire */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-100/50 blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -bottom-4 -right-6 w-16 h-16 rounded-full bg-blue-200/50 blur-md"
            />
          </motion.div>

          {/* Texte avec animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full md:w-1/2 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 group"
              >
                <motion.div
                  animate={inView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-2 w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"
                />
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium group-hover:text-blue-700 transition-colors duration-300">
                  Afrix-Global est une organisation dédiée à la formation et à l'insertion professionnelle
                  dans le secteur du numérique. Nous offrons des programmes innovants adaptés aux besoins
                  du marché digital.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 group"
              >
                <motion.div
                  animate={inView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="mt-2 w-3 h-3 rounded-full bg-blue-400 flex-shrink-0"
                />
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium group-hover:text-blue-700 transition-colors duration-300">
                  Notre mission est de fournir des opportunités d'apprentissage accessibles, pratiques et
                  orientées vers l'emploi. Nous collaborons avec des entreprises et des experts du secteur
                  pour garantir des formations alignées aux exigences actuelles du marché.
                </p>
              </motion.div>
            </motion.div>

            {/* Bouton CTA avec animation */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl overflow-hidden group"
              >
                <span className="relative z-10">En savoir plus</span>
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600"
                />
              </motion.button>
            </motion.div>

            {/* Statistiques avec animations */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              {[
                { number: "95%", label: "Taux de réussite" },
                { number: "500+", label: "Étudiants formés" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <motion.div
                    animate={inView ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}