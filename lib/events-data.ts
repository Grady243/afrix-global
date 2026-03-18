export interface Event {
  id: string
  image: string
  title: string
  date: string
  location: string
  description: string
  fullDescription: string
  schedule: { time: string; activity: string }[]
  speakers: { name: string; role: string; image: string }[]
  gallery: string[]
}

export const events: Event[] = [
  {
    id: "Workshop-1",
    image: "/images/event-cover1.png",
    title: "Réussir sa carrière dans le numérique : stratégies, erreurs à éviter et opportunités ",
    date: "22 Decembre 2025",
    location: "Afrix Global",
    description: "Ce workshop a été un moment riche en échanges et en apprentissages, réunissant des professionnels seniors en activité et nos apprenants engagés, autour des enjeux clés de l’employabilité dans le numérique.",
    fullDescription:
      "Ce workshop a été un moment riche en échanges et en apprentissages, réunissant des professionnels seniors en activité et nos apprenants engagés, autour des enjeux clés de l’employabilité dans le numérique.Les échanges ont été animés par Lemoisson Metre de Harvely et John Santos Nd. de PrimeTek Africa. Les discussions ont porté sur la gestion de carrière, le positionnement professionnel et l’articulation entre le marché local et les opportunités internationales pour les développeurs. Ces interventions ont mis en évidence un constat largement partagé : l’asymétrie d’information entre les jeunes talents et le marché de l’emploi demeure l’un des principaux freins à une insertion professionnelle durable.Nous avons également eu une intervention particulièrement marquante de Ushindi Gedeon, autour du software development et de 𝗹'𝗼𝗽𝗲𝗻 𝘀𝗼𝘂𝗿𝗰𝗲. Il a rappelé que l’open source repose sur du code ouvert, le partage et la collaboration, et que ce n’est pas simplement du code gratuit, mais une véritable manière d’apprendre, de construire des solutions concrètes et de créer de la valeur.Un grand merci à John Santos Nd., Lemoisson Metre et Ushindi Gedeon pour leur disponibilité, leur expertise et la qualité des échanges.",
    schedule: [
      { time: "14h:00", activity: "Ouverture de l'evenement" },
      { time: "17h30", activity: "Session de questions-réponses et clôture" },
    ],
    speakers: [
      { name: "Lemoisson Metre", role: "CEO, Harvely compagny", image: "/images/speakers/lemoisson.jpeg" },
      { name: "John Santos Nd.", role: "CEO, PrimeTek Africa", image: "/images/speakers/santos.jpeg" },
      { name: "Ushindi Gedeon", role: "Software Engineer", image: "/images/speakers/ushindi.jpeg" },
    ],
    gallery: ["/images/events/event.jpeg", "/images/events/event8.jpeg", "/images/events/event9.jpeg", "/images/events/event10.jpeg"],
  },
  {
    id: "workshop-2",
    image: "/images/event-cover2.png",
    title: "Penser en architecte, construire comme un ingénieur (Fullstack Developer)",
    date: "25 fevrier 2026",
    location: "Afrix Global & Online",
    description: "Ce workshop est une occasion unique pour apprendre, progresser et comprendre les vraies clés pour réussir dans l’industrie tech.",
    fullDescription:
  "Ce workshop intensif intitulé « Penser en architecte, construire comme un ingénieur » a été conçu pour transformer la manière dont les développeurs abordent la création d’applications modernes. Plus qu’une simple formation technique, il s’agit d’un véritable changement de posture : passer du rôle de codeur exécutant à celui d’ingénieur capable de concevoir des systèmes robustes, évolutifs et durables.\n\nDurant cette expérience immersive, les participants ont été introduits aux fondamentaux de l’architecture logicielle moderne, en comprenant comment les différentes couches d’une application (client, API, base de données, cache) interagissent dans un système réel.\n\nLe workshop a mis un accent particulier sur les principes fondamentaux du développement professionnel...",
    schedule: [
      { time: "10:00", activity: "Ouverture de la session" },
      { time: "14:00", activity: "Q&A et cloture" },
    ],
    speakers: [
      { name: "David Kitenge", role: "Senior FullStack AI/ML Engineer", image: "/images/speakers/kitenge.jpeg" },
    ],
    gallery: ["/images/events/event2.jpg", "/images/events/event3.jpg", "/images/events/event4.jpg"],
  },
  {
    id: "Workshop-3",
    image: "/images/event-cover3.png",
    title: "Analyse de cas réels : campagnes réussies et campagnes ratées",
    date: "10-11 fevrier 2026",
    location: "Afrix Global",
    description: "48 heures pour creer des solutions innovantes aux defis africains.",
    fullDescription:`Ce workshop intitulé « Analyse de cas réels : campagnes réussies et campagnes ratées » plonge les participants au cœur des stratégies concrètes du marketing digital à travers des exemples réels tirés de grandes marques et de projets locaux.
      L’objectif principal de cette session est d’aller au-delà de la théorie pour comprendre, de manière pratique, ce qui fait le succès ou l’échec d’une campagne digitale. Les participants découvriront comment certaines entreprises ont réussi à capter l’attention, engager leur audience et générer des résultats mesurables, tandis que d’autres ont échoué malgré des moyens importants.
      À travers une analyse détaillée, le workshop mettra en lumière les éléments clés d’une campagne réussie : la compréhension de la cible, le choix des canaux (réseaux sociaux, email, publicité), la qualité du message, le timing, ainsi que l’utilisation des données pour optimiser les performances.
      En parallèle, les participants étudieront des campagnes ratées afin d’identifier les erreurs fréquentes à éviter, telles que le manque de stratégie claire, une mauvaise connaissance de l’audience, des messages mal adaptés ou mal positionnés, une mauvaise gestion du budget publicitaire, ou encore l’absence d’analyse des résultats.
      Le workshop abordera également des notions essentielles comme le branding, le storytelling, le funnel marketing (parcours client) et l’importance des indicateurs de performance (KPIs) dans la prise de décision.
      Grâce à une approche interactive, les participants seront amenés à analyser, réfléchir et proposer leurs propres solutions, en se mettant dans la peau de véritables stratèges digitaux.
      À l’issue de cette formation, ils seront capables de décrypter une campagne marketing, identifier les facteurs de succès ou d’échec, éviter les erreurs courantes et concevoir des campagnes plus efficaces basées sur des données et une stratégie claire.
      Ce workshop s’adresse à toute personne souhaitant améliorer ses compétences en marketing digital, développer un projet, promouvoir une marque ou renforcer son impact dans le monde numérique.`,
    schedule: [
      { time: "8:30", activity: "ouverture" },
      { time: "12:30", activity: "Cloture" },
    ],
    speakers: [
      { name: "Justin KASEREKA", role: "artiste visuel", image: "/images/speakers/justin.jpeg" },
    ],
    gallery: ["/images/events/event5.jpeg", "/images/events/event6.jpeg", "/images/events/event7.jpeg"],
  },
]

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id)
}
