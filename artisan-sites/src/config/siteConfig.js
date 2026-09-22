// =============================================================
// CONFIGURATION CENTRALE DU SITE
// Modifier ici se répercute sur tout le site.
// =============================================================

export const siteConfig = {
  brand: {
    name: "Atelier Web",
    tagline: "Des sites internet pensés pour les artisans et petites entreprises locales.",
  },

  contact: {
    email: "contact@exemple.fr",
    phone: "06 00 00 00 00",
    phoneDisplay: "06 00 00 00 00",
    social: { facebook: "", instagram: "", linkedin: "" },
  },

  area: {
    mainDepartment: "Oise",
    mainDepartmentCode: "60",
    launchCity: "Chantilly",
    mainRegion: "Hauts-de-France",
    targetCities: ["Chantilly", "Senlis", "Creil", "Compiègne", "Beauvais"],
    extensions: ["Val-d'Oise", "Somme", "Paris"],
  },

  seo: {
    title: "Création de sites internet pour artisans dans l'Oise",
    description:
      "Sites internet modernes, simples et professionnels pour artisans, indépendants et petites entreprises. Accompagnement humain, tarifs transparents.",
    keywords: [
      "création site internet artisan Oise",
      "création site web artisan",
      "site internet entreprise locale",
    ],
  },

  colors: {
    ink: "#1f2a24",
    paper: "#f7f3ec",
    accent: "#b8663a",
    accentSoft: "#d9c4a8",
    muted: "#6b6b63",
  },

  showPrices: true,

  offers: [
    {
      id: "essentiel",
      name: "Essentiel",
      subtitle: "Votre présence en ligne, simplement",
      description:
        "Un site vitrine d'une page pour être trouvé, rassurer et être contacté facilement.",
      audience: "Artisan qui démarre ou qui veut une présence simple et sérieuse.",
      price: 690,
      priceSuffix: "à partir de",
      maintenancePrice: 15,
      maintenanceUnit: "/ mois",
      showPrice: true,
      features: [
        "Site une page (one-page)",
        "Design adapté à votre métier",
        "Formulaire de contact",
        "Affichage de vos réalisations",
        "Avis clients",
        "Optimisé mobile",
        "Mise en ligne accompagnée",
      ],
      demoUrl: "/demo/essentiel",
      highlighted: false,
      ctaLabel: "Voir la démo",
    },
    {
      id: "plus",
      name: "Plus",
      subtitle: "Un site complet, à votre image",
      description:
        "Un site multipage structuré, pensé pour présenter votre savoir-faire en détail.",
      audience: "Artisan établi qui veut un site professionnel et durable.",
      price: 1290,
      priceSuffix: "à partir de",
      maintenancePrice: 25,
      maintenanceUnit: "/ mois",
      showPrice: true,
      features: [
        "Jusqu'à 5 pages",
        "Page d'accueil éditoriale",
        "Page services détaillée",
        "Portfolio de réalisations",
        "Page à propos / l'atelier",
        "Formulaire de devis guidé",
        "Témoignages clients",
        "Référencement local de base",
      ],
      demoUrl: "/demo/plus",
      highlighted: true,
      ctaLabel: "Voir la démo",
    },
    {
      id: "pro",
      name: "Pro",
      subtitle: "Une expérience mémorable",
      description:
        "Un site premium immersif qui met en scène votre savoir-faire et marque les esprits.",
      audience: "Artisan d'exception ou activité à forte valeur ajoutée.",
      price: 2490,
      priceSuffix: "à partir de",
      maintenancePrice: 45,
      maintenanceUnit: "/ mois",
      showPrice: true,
      features: [
        "Site premium sur-mesure",
        "Direction artistique poussée",
        "Animations et transitions élégantes",
        "Portfolio interactif",
        "Storytelling de vos projets",
        "Galerie avant / après",
        "Estimateur de projet interactif",
        "Parcours de demande premium",
      ],
      demoUrl: "/demo/pro",
      highlighted: false,
      ctaLabel: "Voir la démo",
    },
  ],

  process: [
    { step: "01", title: "Premier échange", text: "On discute de votre métier, vos clients, vos envies." },
    { step: "02", title: "Compréhension du besoin", text: "J'analyse votre activité et vos objectifs." },
    { step: "03", title: "Proposition de design", text: "Je vous présente une première direction visuelle." },
    { step: "04", title: "Création du site", text: "Je construis votre site, vous suivez l'avancement." },
    { step: "05", title: "Validation", text: "On ajuste ensemble jusqu'à ce que ce soit parfait." },
    { step: "06", title: "Mise en ligne", text: "Votre site est en ligne, prêt à travailler pour vous." },
    { step: "07", title: "Maintenance (facultative)", text: "Je peux continuer à m'occuper de votre site." },
  ],

  faq: [
    { q: "Est-ce que je serai propriétaire de mon site ?", a: "Oui, entièrement. Le site et le nom de domaine vous appartiennent." },
    { q: "Dois-je fournir les textes ?", a: "Vous pouvez, mais je peux aussi vous aider à les rédiger à partir d'un simple échange." },
    { q: "Puis-je utiliser mes propres photos ?", a: "Oui, et c'est même recommandé : vos vraies réalisations inspirent confiance." },
    { q: "Combien de temps faut-il pour créer un site ?", a: "En général 2 à 4 semaines selon le niveau de l'offre et votre réactivité." },
    { q: "Puis-je modifier mon site plus tard ?", a: "Oui. Selon l'offre, soit je m'en occupe, soit vous disposez d'une interface simple." },
    { q: "La maintenance est-elle obligatoire ?", a: "Non. Elle est proposée en option pour vous libérer l'esprit." },
    { q: "Le référencement Google est-il inclus ?", a: "Les bases sont toujours incluses. Un travail approfondi peut être ajouté." },
    { q: "Est-ce adapté au téléphone ?", a: "Tous mes sites sont pensés mobile d'abord. C'est essentiel aujourd'hui." },
    { q: "Puis-je ajouter des fonctionnalités plus tard ?", a: "Oui, tout est prévu pour évoluer avec votre activité." },
    { q: "Travaillez-vous uniquement dans l'Oise ?", a: "Je démarre dans l'Oise, mais je peux travailler à distance partout en France." },
    { q: "Peut-on travailler ensemble à distance ?", a: "Absolument. Visio, téléphone et email suffisent pour un accompagnement de qualité." },
  ],
};

export default siteConfig;
