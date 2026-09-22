#!/usr/bin/env node
// install.js — Crée l'intégralité du projet "artisan-sites" prêt à npm install
// Usage : node install.js

const fs = require('fs');
const path = require('path');

const ROOT = './artisan-sites';

function write(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.replace(/^\n/, ''), 'utf8');
  console.log('  ✓', relPath);
}

console.log('\n📦 Création du projet artisan-sites...\n');

/* ============================================================
   FICHIERS RACINE
   ============================================================ */

write('package.json', `
{
  "name": "artisan-sites",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.8"
  }
}
`);

write('vite.config.js', `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
});
`);

write('.gitignore', `
node_modules
dist
.DS_Store
*.log
.env
.vscode
`);

write('index.html', `
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Création de sites internet pour artisans et petites entreprises</title>
    <meta name="description" content="Sites internet modernes, simples et professionnels pour artisans, indépendants et petites entreprises locales. Accompagnement humain, tarifs transparents." />
    <meta property="og:title" content="Sites internet pour artisans et petites entreprises" />
    <meta property="og:description" content="Votre savoir-faire mérite un site qui travaille pour vous." />
    <meta property="og:type" content="website" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`);

write('README.md', `
# Sites pour artisans

Site commercial + 3 démonstrations (Essentiel / Plus / Pro) pour une activité de création de sites internet destinée aux artisans et petites entreprises locales.

## Installation

\`\`\`bash
npm install
npm run dev
\`\`\`

Le site est accessible sur http://localhost:5173

## Build

\`\`\`bash
npm run build
\`\`\`

Génère un dossier \`dist/\` prêt à déployer sur Netlify, Vercel ou GitHub Pages.

## Structure

- \`src/config/siteConfig.js\` — **configuration centrale** (nom, contact, offres, tarifs, SEO, zone géographique)
- \`src/data/demoArtisan.js\` — artisan fictif utilisé dans les 3 démos
- \`src/pages/\` — pages du site commercial
- \`src/pages/demos/\` — les 3 démos (Essentiel / Plus / Pro)

## Personnalisation

Modifier \`src/config/siteConfig.js\` pour :
- changer le nom commercial
- ajuster les tarifs ou les masquer (\`showPrices: false\`)
- adapter la zone géographique
- modifier les contenus des offres
`);

write('public/favicon.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#1f2a24"/>
  <path d="M8 22V10h3l5 8 5-8h3v12h-3v-7l-5 7-5-7v7H8z" fill="#e8dfd0"/>
</svg>
`);

write('public/_redirects', `
/*  /index.html  200
`);

/* ============================================================
   POINT D'ENTRÉE
   ============================================================ */

write('src/main.jsx', `
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
`);

write('src/App.jsx', `
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Demos from './pages/Demos.jsx';
import Contact from './pages/Contact.jsx';
import Essentiel from './pages/demos/Essentiel.jsx';
import Plus from './pages/demos/Plus.jsx';
import Pro from './pages/demos/Pro.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demos" element={<Demos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/demo/essentiel" element={<Essentiel />} />
      <Route path="/demo/plus" element={<Plus />} />
      <Route path="/demo/pro" element={<Pro />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
`);

/* ============================================================
   CONFIGURATION CENTRALE
   ============================================================ */

write('src/config/siteConfig.js', `
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
`);

/* ============================================================
   DONNÉES ARTISAN FICTIF
   ============================================================ */

write('src/data/demoArtisan.js', `
export const demoArtisan = {
  businessName: "Dubois Plomberie",
  ownerName: "Thomas Dubois",
  activity: "Plombier chauffagiste",
  city: "Chantilly",
  department: "Oise (60)",
  address: "12 rue des Artisans, 60500 Chantilly",
  phone: "03 44 00 00 00",
  phoneDisplay: "03 44 00 00 00",
  email: "contact@dubois-plomberie-demo.fr",
  since: 2008,
  tagline: "Plombier chauffagiste à Chantilly depuis 2008",
  shortIntro:
    "Artisan plombier chauffagiste installé à Chantilly, j'interviens chez les particuliers et les petites entreprises de l'Oise pour tous vos travaux de plomberie, chauffage et sanitaires.",
  longStory:
    "Formé auprès d'un maître artisan à Senlis, j'ai créé mon entreprise en 2008 avec une idée simple : faire un travail soigné, expliquer clairement ce que je fais, et laisser un chantier propre derrière moi. Aujourd'hui, c'est toujours la même chose — sauf que je connais par cœur les vieilles maisons de Chantilly et leurs installations parfois surprenantes.",
  services: [
    { title: "Dépannage & urgences", description: "Fuites, engorgements, pannes de chaudière. Intervention rapide dans tout l'Oise." },
    { title: "Salle de bain", description: "Rénovation complète ou partielle, du plan à la finition." },
    { title: "Chauffage", description: "Installation, entretien et dépannage de chaudières gaz et fioul." },
    { title: "Sanitaires", description: "Remplacement de WC, lavabos, douches, robinetterie." },
  ],
  projects: [
    { title: "Rénovation salle de bain", place: "Chantilly", year: 2024, tag: "Salle de bain" },
    { title: "Installation chaudière gaz", place: "Senlis", year: 2024, tag: "Chauffage" },
    { title: "Dépannage fuite urgente", place: "Creil", year: 2023, tag: "Dépannage" },
    { title: "Remplacement WC & lavabo", place: "Gouvieux", year: 2023, tag: "Sanitaires" },
    { title: "Rénovation complète salle d'eau", place: "Chantilly", year: 2023, tag: "Salle de bain" },
    { title: "Entretien chaudière annuel", place: "Vineuil-Saint-Firmin", year: 2023, tag: "Chauffage" },
  ],
  testimonials: [
    { name: "Claire M.", city: "Chantilly", text: "Thomas est venu en urgence un dimanche pour une fuite. Travail propre, prix annoncé respecté. Je recommande vraiment." },
    { name: "Julien R.", city: "Senlis", text: "Rénovation complète de notre salle de bain. Chantier laissé impeccable, conseils utiles. Merci !" },
    { name: "Sophie L.", city: "Creil", text: "Intervention rapide et efficace. Thomas explique bien ce qu'il fait, ce qui est rassurant." },
  ],
  areas: ["Chantilly", "Senlis", "Creil", "Gouvieux", "Vineuil-Saint-Firmin", "Lamorlaye", "Coye-la-Forêt"],
  hours: "Lun–Sam · 8h – 19h",
};

export default demoArtisan;
`);

/* ============================================================
   STYLES
   ============================================================ */

write('src/styles/global.css', `
*, *::before, *::after { box-sizing: border-box; }
html, body, #root { margin: 0; padding: 0; }
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1f2a24;
  background: #f7f3ec;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: none; background: none; }
h1, h2, h3, h4 { line-height: 1.15; margin: 0; font-weight: 600; letter-spacing: -0.02em; }
p { margin: 0; }

:root {
  --ink: #1f2a24;
  --paper: #f7f3ec;
  --paper-2: #efe9dd;
  --accent: #b8663a;
  --accent-dark: #96502a;
  --accent-soft: #d9c4a8;
  --muted: #6b6b63;
  --line: rgba(31, 42, 36, 0.12);
  --radius: 12px;
  --radius-lg: 20px;
  --shadow: 0 10px 40px -20px rgba(31, 42, 36, 0.25);
}

.container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}
.btn-primary { background: var(--ink); color: var(--paper); }
.btn-primary:hover { background: #0f1611; transform: translateY(-1px); }
.btn-outline { background: transparent; border-color: var(--ink); color: var(--ink); }
.btn-outline:hover { background: var(--ink); color: var(--paper); }
.btn-accent { background: var(--accent); color: #fff; }
.btn-accent:hover { background: var(--accent-dark); transform: translateY(-1px); }
.btn-ghost { color: var(--ink); padding: 12px 20px; }
.btn-ghost:hover { color: var(--accent); }

.section { padding: 96px 0; }
.section-sm { padding: 64px 0; }

.eyebrow {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(28px, 4vw, 44px);
  margin-bottom: 20px;
  max-width: 720px;
}
.section-lead {
  font-size: 18px;
  color: var(--muted);
  max-width: 640px;
  margin-bottom: 48px;
}

.text-center { text-align: center; }
.mx-auto { margin-left: auto; margin-right: auto; }

@media (max-width: 720px) {
  .section { padding: 64px 0; }
  .section-sm { padding: 40px 0; }
}
`);

write('src/styles/commercial.css', `
.site-header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(247, 243, 236, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}
.site-header-inner {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px; max-width: 1180px; margin: 0 auto;
}
.brand { font-size: 18px; font-weight: 600; letter-spacing: -0.02em; }
.brand span { color: var(--accent); }

.site-nav { display: flex; gap: 32px; align-items: center; }
.site-nav a { font-size: 15px; color: var(--ink); transition: color 0.2s; }
.site-nav a:hover { color: var(--accent); }

.menu-toggle { display: none; font-size: 24px; padding: 8px; }

@media (max-width: 820px) {
  .site-nav { display: none; }
  .menu-toggle { display: block; }
  .site-nav.open {
    display: flex; flex-direction: column;
    position: absolute; top: 100%; left: 0; right: 0;
    background: var(--paper); padding: 24px;
    border-bottom: 1px solid var(--line); gap: 20px;
  }
}

.hero { padding: 120px 0 100px; position: relative; overflow: hidden; }
.hero::before {
  content: ''; position: absolute; top: -100px; right: -100px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(184, 102, 58, 0.1), transparent 70%);
  border-radius: 50%; pointer-events: none;
}
.hero h1 { font-size: clamp(36px, 6vw, 68px); max-width: 900px; margin-bottom: 24px; }
.hero-lead { font-size: clamp(17px, 2vw, 20px); color: var(--muted); max-width: 620px; margin-bottom: 40px; }
.hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
.hero-meta {
  margin-top: 64px; display: flex; gap: 48px; flex-wrap: wrap;
  padding-top: 40px; border-top: 1px solid var(--line);
}
.hero-meta-item strong { display: block; font-size: 24px; margin-bottom: 4px; }
.hero-meta-item span { font-size: 14px; color: var(--muted); }

.problems-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
.problem-card {
  padding: 28px; background: #fff;
  border: 1px solid var(--line); border-radius: var(--radius);
  transition: transform 0.2s;
}
.problem-card:hover { transform: translateY(-2px); }
.problem-card h3 { font-size: 16px; margin-bottom: 8px; }
.problem-card p { font-size: 15px; color: var(--muted); }

.solution { background: var(--ink); color: var(--paper); }
.solution .section-title { color: var(--paper); }
.solution .eyebrow { color: var(--accent-soft); }
.solution-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px; margin-top: 48px;
}
.solution-item { border-top: 1px solid rgba(247, 243, 236, 0.15); padding-top: 24px; }
.solution-item h3 { font-size: 18px; margin-bottom: 8px; color: var(--paper); }
.solution-item p { color: rgba(247, 243, 236, 0.7); font-size: 15px; }

.offers-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px; align-items: stretch;
}
.offer-card {
  background: #fff; border: 1px solid var(--line);
  border-radius: var(--radius-lg); padding: 36px 32px;
  display: flex; flex-direction: column; position: relative;
  transition: transform 0.25s, box-shadow 0.25s;
}
.offer-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.offer-card.highlighted { border-color: var(--accent); border-width: 2px; }
.offer-badge {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  background: var(--accent); color: #fff;
  font-size: 12px; padding: 6px 16px; border-radius: 999px;
  font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;
}
.offer-name { font-size: 22px; margin-bottom: 4px; }
.offer-subtitle { font-size: 14px; color: var(--accent); margin-bottom: 16px; }
.offer-desc { font-size: 15px; color: var(--muted); margin-bottom: 20px; min-height: 66px; }
.offer-price {
  padding: 20px 0; border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line); margin-bottom: 24px;
}
.offer-price-value { font-size: 32px; font-weight: 600; }
.offer-price-suffix { font-size: 14px; color: var(--muted); display: block; }
.offer-maintenance { font-size: 13px; color: var(--muted); margin-top: 8px; }
.offer-features { list-style: none; padding: 0; margin: 0 0 32px 0; flex: 1; }
.offer-features li {
  font-size: 14.5px; padding: 8px 0;
  padding-left: 24px; position: relative; color: var(--ink);
}
.offer-features li::before {
  content: '✓'; position: absolute; left: 0;
  color: var(--accent); font-weight: 600;
}
.offer-actions { display: flex; flex-direction: column; gap: 10px; }
.offer-actions .btn { justify-content: center; }

.demos-teaser { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.demo-teaser-card {
  border-radius: var(--radius-lg); overflow: hidden;
  position: relative; aspect-ratio: 4 / 3; cursor: pointer;
  transition: transform 0.3s;
  display: flex; align-items: flex-end; padding: 28px; color: #fff;
}
.demo-teaser-card:hover { transform: scale(1.02); }
.demo-teaser-card h3 { font-size: 24px; position: relative; z-index: 2; }
.demo-teaser-card p {
  font-size: 14px; opacity: 0.85;
  position: relative; z-index: 2; margin-top: 4px;
}
.demo-teaser-card::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65), transparent 60%);
}
.demo-teaser-card > * { position: relative; z-index: 2; }

.demo-essentiel { background: linear-gradient(135deg, #6b8e7f, #4a6b5c); }
.demo-plus { background: linear-gradient(135deg, #c48b5a, #8a5a2f); }
.demo-pro { background: linear-gradient(135deg, #1f2a24, #3a4a3f); }

.process-list {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px; margin-top: 48px;
}
.process-item { border-top: 2px solid var(--accent); padding-top: 20px; }
.process-step {
  font-size: 13px; color: var(--accent);
  letter-spacing: 0.1em; font-weight: 600; margin-bottom: 8px;
}
.process-item h3 { font-size: 17px; margin-bottom: 8px; }
.process-item p { font-size: 14.5px; color: var(--muted); }

.why-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px; margin-top: 48px;
}
.why-item { padding: 28px; background: var(--paper-2); border-radius: var(--radius); }
.why-item h3 { font-size: 17px; margin-bottom: 8px; }
.why-item p { font-size: 14.5px; color: var(--muted); }

.faq-list { max-width: 800px; margin: 0 auto; }
.faq-item { border-bottom: 1px solid var(--line); }
.faq-question {
  width: 100%; text-align: left; padding: 24px 0;
  font-size: 17px; font-weight: 500;
  display: flex; justify-content: space-between;
  align-items: center; gap: 16px;
}
.faq-question::after {
  content: '+'; font-size: 24px; color: var(--accent);
  transition: transform 0.2s;
}
.faq-item.open .faq-question::after { transform: rotate(45deg); }
.faq-answer {
  font-size: 15.5px; color: var(--muted);
  padding: 0 0 24px 0; max-width: 640px;
}

.site-footer {
  background: var(--ink); color: rgba(247, 243, 236, 0.75);
  padding: 64px 0 32px; margin-top: 80px;
}
.footer-grid {
  display: grid; grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px; margin-bottom: 48px;
}
.footer-brand { font-size: 20px; color: var(--paper); margin-bottom: 12px; }
.footer-brand span { color: var(--accent-soft); }
.footer-col h4 {
  font-size: 14px; text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--paper);
  margin-bottom: 16px; font-weight: 500;
}
.footer-col a, .footer-col p {
  display: block; font-size: 14.5px;
  margin-bottom: 10px; color: rgba(247, 243, 236, 0.7);
}
.footer-col a:hover { color: var(--paper); }
.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid rgba(247, 243, 236, 0.12);
  display: flex; justify-content: space-between;
  flex-wrap: wrap; gap: 16px; font-size: 13.5px;
}
@media (max-width: 720px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
}

.contact-grid {
  display: grid; grid-template-columns: 1fr 1.5fr;
  gap: 64px; align-items: start;
}
@media (max-width: 860px) {
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
}
.contact-form { display: grid; gap: 20px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
@media (max-width: 620px) { .form-row { grid-template-columns: 1fr; } }
.form-field label {
  display: block; font-size: 13.5px; font-weight: 500;
  margin-bottom: 8px; color: var(--ink);
}
.form-field input,
.form-field select,
.form-field textarea {
  width: 100%; padding: 14px 16px;
  border: 1px solid var(--line); border-radius: 10px;
  font: inherit; font-size: 15px; background: #fff;
  transition: border-color 0.2s;
}
.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus { outline: none; border-color: var(--accent); }
.form-field textarea { min-height: 140px; resize: vertical; }
.form-success {
  padding: 20px; background: #e6f0e8;
  border-radius: 10px; color: #2b5a37; font-size: 15px;
}

.demo-banner {
  background: var(--ink); color: var(--paper);
  padding: 12px 24px;
  display: flex; justify-content: space-between;
  align-items: center; font-size: 13.5px;
  flex-wrap: wrap; gap: 12px;
}
.demo-banner-links { display: flex; gap: 20px; flex-wrap: wrap; }
.demo-banner a {
  color: rgba(247, 243, 236, 0.8); padding: 4px 0;
  border-bottom: 1px solid transparent; transition: all 0.2s;
}
.demo-banner a:hover { color: var(--paper); }
.demo-banner a.active { color: var(--paper); border-bottom-color: var(--accent-soft); }
.demo-banner-back { color: var(--accent-soft) !important; font-weight: 500; }

@media (max-width: 780px) {
  .demo-detail-row { grid-template-columns: 1fr !important; }
}
`);

write('src/styles/demo-essentiel.css', `
.demo-essentiel-root { font-family: 'Inter', sans-serif; color: #2c3a30; background: #fbf8f2; }

.de-header {
  padding: 24px 0; border-bottom: 1px solid rgba(44,58,48,0.08);
  position: sticky; top: 0;
  background: rgba(251,248,242,0.95);
  backdrop-filter: blur(8px); z-index: 20;
}
.de-header-inner {
  max-width: 1100px; margin: 0 auto; padding: 0 24px;
  display: flex; justify-content: space-between; align-items: center;
}
.de-logo { font-size: 18px; font-weight: 700; color: #2c3a30; }
.de-phone-btn {
  background: #4a6b5c; color: #fff;
  padding: 10px 18px; border-radius: 999px;
  font-size: 14px; font-weight: 500;
  display: inline-flex; align-items: center; gap: 6px;
}
.de-phone-btn:hover { background: #3a5a4c; }

.de-hero { padding: 80px 24px 60px; max-width: 1100px; margin: 0 auto; text-align: center; }
.de-hero h1 {
  font-size: clamp(30px, 5vw, 48px); font-weight: 700;
  letter-spacing: -0.02em; margin-bottom: 16px; color: #1e2b23;
}
.de-hero p { font-size: 18px; color: #5a6a60; max-width: 560px; margin: 0 auto 32px; }
.de-hero-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.de-btn {
  padding: 14px 26px; border-radius: 8px; font-weight: 500; font-size: 15px;
  display: inline-flex; align-items: center; gap: 8px;
}
.de-btn-primary { background: #4a6b5c; color: #fff; }
.de-btn-primary:hover { background: #3a5a4c; }
.de-btn-outline { background: #fff; border: 1px solid #c9d4cc; color: #2c3a30; }
.de-btn-outline:hover { border-color: #4a6b5c; }

.de-section { padding: 72px 24px; }
.de-section-alt { background: #fff; }
.de-inner { max-width: 1100px; margin: 0 auto; }
.de-section h2 { font-size: clamp(24px, 3.5vw, 34px); margin-bottom: 16px; letter-spacing: -0.015em; }
.de-section-lead { font-size: 17px; color: #5a6a60; max-width: 600px; margin-bottom: 40px; }

.de-services { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
.de-service { padding: 28px; background: #fff; border: 1px solid #e5e5df; border-radius: 12px; }
.de-section-alt .de-service { background: #fbf8f2; border-color: #ecebe5; }
.de-service h3 { font-size: 17px; margin-bottom: 8px; color: #1e2b23; }
.de-service p { font-size: 14.5px; color: #5a6a60; }

.de-projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
.de-project {
  aspect-ratio: 4/3; border-radius: 12px;
  background: linear-gradient(135deg, #d4dcd2, #b8c4b8);
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 20px; color: #fff; position: relative; overflow: hidden;
}
.de-project::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%);
}
.de-project > * { position: relative; z-index: 2; }
.de-project h4 { font-size: 16px; margin-bottom: 2px; }
.de-project p { font-size: 13px; opacity: 0.9; }

.de-testimonials { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
.de-testimonial { padding: 28px; background: #fff; border-radius: 12px; border: 1px solid #e5e5df; }
.de-testimonial p { font-style: italic; color: #3a4a40; margin-bottom: 16px; }
.de-testimonial cite { font-style: normal; font-size: 14px; font-weight: 600; color: #4a6b5c; }

.de-areas { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.de-area-tag {
  padding: 6px 14px; background: #e8efe9; color: #4a6b5c;
  border-radius: 999px; font-size: 13.5px; font-weight: 500;
}

.de-contact { background: #4a6b5c; color: #fff; padding: 72px 24px; text-align: center; }
.de-contact h2 { color: #fff; margin-bottom: 16px; }
.de-contact p { color: rgba(255,255,255,0.85); max-width: 520px; margin: 0 auto 32px; font-size: 17px; }
.de-contact .de-btn-primary { background: #fff; color: #4a6b5c; }
.de-contact .de-btn-primary:hover { background: #f0f0ec; }

.de-footer { text-align: center; padding: 32px 24px; font-size: 13px; color: #8a958c; background: #fbf8f2; }

.de-mobile-phone {
  display: none; position: fixed; bottom: 16px; left: 16px; right: 16px; z-index: 30;
}
.de-mobile-phone .de-phone-btn { width: 100%; justify-content: center; padding: 16px; font-size: 16px; }

@media (max-width: 720px) {
  .de-mobile-phone { display: block; }
  .de-hero { padding: 56px 24px 40px; }
  .de-section { padding: 56px 24px; }
}
`);

write('src/styles/demo-plus.css', `
.demo-plus-root {
  font-family: 'Inter', sans-serif;
  color: #2b2620;
  background: #faf7f2;
  --dp-accent: #b8744a;
  --dp-dark: #2b2620;
  --dp-line: rgba(43,38,32,0.12);
}

.dp-nav { padding: 28px 0; border-bottom: 1px solid var(--dp-line); }
.dp-nav-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 32px;
  display: flex; justify-content: space-between; align-items: center;
}
.dp-brand { font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
.dp-nav-links { display: flex; gap: 32px; font-size: 15px; }
.dp-nav-links a { color: #2b2620; transition: color 0.2s; }
.dp-nav-links a:hover { color: var(--dp-accent); }

.dp-hero { padding: 100px 32px 80px; max-width: 1200px; margin: 0 auto; }
.dp-hero h1 {
  font-size: clamp(40px, 7vw, 88px); font-weight: 700;
  letter-spacing: -0.035em; line-height: 1.02;
  max-width: 900px; margin-bottom: 32px;
}
.dp-hero h1 em {
  font-style: italic; font-family: 'Georgia', serif;
  color: var(--dp-accent); font-weight: 400;
}
.dp-hero-lead {
  font-size: 20px; color: #6a6259;
  max-width: 560px; margin-bottom: 40px; line-height: 1.6;
}

.dp-cta-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
.dp-btn {
  padding: 16px 30px; font-size: 15px; font-weight: 500;
  border-radius: 999px; transition: all 0.25s;
  display: inline-flex; align-items: center; gap: 8px;
}
.dp-btn-primary { background: var(--dp-dark); color: #faf7f2; }
.dp-btn-primary:hover { background: #1a1612; transform: translateY(-2px); }
.dp-btn-ghost {
  color: var(--dp-dark); border-bottom: 1px solid var(--dp-dark);
  padding: 6px 0; border-radius: 0;
}
.dp-btn-ghost:hover { color: var(--dp-accent); border-color: var(--dp-accent); }

.dp-hero-meta {
  margin-top: 72px; padding-top: 40px;
  border-top: 1px solid var(--dp-line);
  display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
}
.dp-hero-meta-item strong {
  display: block; font-size: 28px; letter-spacing: -0.02em;
  margin-bottom: 4px; color: var(--dp-dark);
}
.dp-hero-meta-item span { font-size: 14px; color: #8a8279; }

.dp-section { padding: 96px 32px; }
.dp-inner { max-width: 1200px; margin: 0 auto; }
.dp-eyebrow {
  font-size: 12px; text-transform: uppercase;
  letter-spacing: 0.18em; color: var(--dp-accent);
  font-weight: 600; margin-bottom: 20px;
}
.dp-section h2 {
  font-size: clamp(28px, 4vw, 48px);
  letter-spacing: -0.025em; margin-bottom: 24px;
  max-width: 720px; line-height: 1.1;
}
.dp-section h2 em {
  font-style: italic; font-family: 'Georgia', serif;
  color: var(--dp-accent); font-weight: 400;
}

.dp-services-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px; margin-top: 56px;
}
.dp-service {
  padding: 36px 32px; background: #fff;
  border-radius: 4px; border: 1px solid var(--dp-line);
  transition: all 0.25s;
}
.dp-service:hover { border-color: var(--dp-accent); transform: translateY(-3px); }
.dp-service-num {
  font-size: 13px; color: var(--dp-accent);
  font-weight: 600; margin-bottom: 20px; letter-spacing: 0.1em;
}
.dp-service h3 { font-size: 22px; margin-bottom: 12px; letter-spacing: -0.015em; }
.dp-service p { font-size: 15.5px; color: #6a6259; line-height: 1.65; }

.dp-portfolio {
  display: grid; grid-template-columns: repeat(12, 1fr);
  gap: 16px; margin-top: 56px;
}
.dp-portfolio-item {
  grid-column: span 6; aspect-ratio: 4/3;
  border-radius: 6px; overflow: hidden; position: relative;
  background: linear-gradient(135deg, #c98d63, #8a5a3a);
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 28px; color: #fff; cursor: pointer;
  transition: transform 0.4s ease;
}
.dp-portfolio-item:nth-child(1) { grid-column: span 8; aspect-ratio: 16/10; }
.dp-portfolio-item:nth-child(4) { grid-column: span 8; aspect-ratio: 16/10; }
.dp-portfolio-item::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65), transparent 55%);
}
.dp-portfolio-item > * { position: relative; z-index: 2; }
.dp-portfolio-item:hover { transform: scale(1.015); }
.dp-portfolio-item h4 { font-size: 22px; margin-bottom: 4px; letter-spacing: -0.015em; }
.dp-portfolio-item span { font-size: 14px; opacity: 0.85; }

@media (max-width: 720px) {
  .dp-portfolio-item { grid-column: span 12 !important; aspect-ratio: 4/3 !important; }
}

.dp-story { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.dp-story-text p { font-size: 17px; line-height: 1.75; color: #4a423a; margin-bottom: 20px; }
.dp-story-visual {
  aspect-ratio: 4/5; border-radius: 6px;
  background: linear-gradient(135deg, #a67b5b, #6a4a30);
  position: relative;
}
.dp-story-visual::after {
  content: 'Atelier'; position: absolute;
  bottom: 24px; left: 24px; color: #fff;
  font-family: 'Georgia', serif; font-style: italic; font-size: 22px;
}
@media (max-width: 820px) { .dp-story { grid-template-columns: 1fr; gap: 40px; } }

.dp-testimonials {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px; margin-top: 48px;
}
.dp-testimonial {
  padding: 36px 32px; background: #fff;
  border-radius: 4px; border-left: 3px solid var(--dp-accent);
}
.dp-testimonial p {
  font-family: 'Georgia', serif; font-style: italic;
  font-size: 17px; line-height: 1.7; color: #3a332d;
  margin-bottom: 24px;
}
.dp-testimonial cite {
  font-style: normal; font-size: 14px;
  font-weight: 600; color: var(--dp-accent); letter-spacing: 0.02em;
}

.dp-cta { background: var(--dp-dark); color: #faf7f2; padding: 96px 32px; }
.dp-cta h2 { color: #faf7f2; max-width: 720px; }
.dp-cta p { color: rgba(250,247,242,0.7); font-size: 18px; max-width: 560px; margin-bottom: 40px; }
.dp-cta .dp-btn-primary { background: var(--dp-accent); }
.dp-cta .dp-btn-primary:hover { background: #9a5f3a; }

.dp-footer {
  padding: 48px 32px; text-align: center;
  font-size: 14px; color: #8a8279;
  background: #faf7f2; border-top: 1px solid var(--dp-line);
}

@media (max-width: 720px) {
  .dp-hero { padding: 64px 24px 48px; }
  .dp-section { padding: 64px 24px; }
  .dp-nav-links { display: none; }
}
`);

write('src/styles/demo-pro.css', `
.demo-pro-root {
  font-family: 'Inter', sans-serif;
  background: #0e0d0b;
  color: #f5f1ea;
  --dpr-accent: #d4a574;
  --dpr-line: rgba(245,241,234,0.1);
}

.dpr-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 20px 32px;
  display: flex; justify-content: space-between; align-items: center;
  mix-blend-mode: difference;
}
.dpr-brand {
  font-size: 15px; font-weight: 600;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: #f5f1ea;
}
.dpr-menu-btn {
  color: #f5f1ea; font-size: 13px;
  letter-spacing: 0.15em; text-transform: uppercase;
  padding: 8px 0; border-bottom: 1px solid currentColor;
}

.dpr-hero {
  min-height: 100vh; padding: 140px 48px 80px;
  display: flex; flex-direction: column; justify-content: center;
  position: relative; overflow: hidden;
}
.dpr-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(212,165,116,0.15), transparent 60%),
    radial-gradient(ellipse at 80% 80%, rgba(212,165,116,0.08), transparent 50%);
  pointer-events: none;
}
.dpr-hero-inner { max-width: 1400px; margin: 0 auto; width: 100%; position: relative; }
.dpr-hero-eyebrow {
  font-size: 12px; text-transform: uppercase; letter-spacing: 0.3em;
  color: var(--dpr-accent); margin-bottom: 40px;
  display: flex; align-items: center; gap: 16px;
}
.dpr-hero-eyebrow::before { content: ''; width: 40px; height: 1px; background: var(--dpr-accent); }
.dpr-hero h1 {
  font-size: clamp(44px, 9vw, 128px);
  font-weight: 500; letter-spacing: -0.045em;
  line-height: 0.98; margin-bottom: 48px; max-width: 1200px;
}
.dpr-hero h1 em {
  font-family: 'Georgia', serif; font-style: italic;
  font-weight: 400; color: var(--dpr-accent);
}
.dpr-hero-lead {
  font-size: clamp(16px, 1.5vw, 20px);
  color: rgba(245,241,234,0.65);
  max-width: 520px; line-height: 1.6; margin-bottom: 56px;
}
.dpr-cta {
  display: inline-flex; align-items: center; gap: 12px;
  color: var(--dpr-accent); font-size: 14px;
  letter-spacing: 0.15em; text-transform: uppercase;
  padding-bottom: 6px; border-bottom: 1px solid var(--dpr-accent);
  transition: all 0.3s; width: fit-content;
}
.dpr-cta:hover { gap: 20px; }
.dpr-cta::after { content: '→'; }

.dpr-scroll-hint {
  position: absolute; bottom: 40px; left: 50%;
  transform: translateX(-50%);
  font-size: 11px; letter-spacing: 0.3em;
  text-transform: uppercase; color: rgba(245,241,234,0.4);
  animation: pulse 2.5s ease-in-out infinite;
}
@keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }

.dpr-section { padding: 140px 48px; position: relative; }
.dpr-inner { max-width: 1400px; margin: 0 auto; }

.dpr-section-head {
  display: flex; gap: 40px; align-items: baseline;
  margin-bottom: 80px; padding-bottom: 32px;
  border-bottom: 1px solid var(--dpr-line);
}
.dpr-num {
  font-family: 'Georgia', serif; font-size: 14px;
  font-style: italic; color: var(--dpr-accent); min-width: 40px;
}
.dpr-section-title {
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 500; letter-spacing: -0.03em;
  line-height: 1.05; max-width: 900px;
}
.dpr-section-title em {
  font-family: 'Georgia', serif; font-style: italic;
  font-weight: 400; color: var(--dpr-accent);
}

.dpr-services {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2px; background: var(--dpr-line);
}
.dpr-service {
  padding: 48px 40px; background: #0e0d0b;
  transition: background 0.4s; cursor: default;
}
.dpr-service:hover { background: #171513; }
.dpr-service-num {
  font-family: 'Georgia', serif; font-style: italic;
  color: var(--dpr-accent); font-size: 13px; margin-bottom: 32px;
}
.dpr-service h3 { font-size: 26px; font-weight: 500; margin-bottom: 16px; letter-spacing: -0.02em; }
.dpr-service p { font-size: 15px; line-height: 1.7; color: rgba(245,241,234,0.6); }

.dpr-projects { display: grid; gap: 40px; }
.dpr-project {
  display: grid; grid-template-columns: 60px 1fr 1fr;
  gap: 48px; align-items: center;
  padding: 48px 0; border-bottom: 1px solid var(--dpr-line);
  cursor: pointer; transition: all 0.4s;
}
.dpr-project:hover { padding-left: 24px; border-color: var(--dpr-accent); }
.dpr-project-num {
  font-family: 'Georgia', serif; font-style: italic;
  color: var(--dpr-accent); font-size: 15px;
}
.dpr-project h3 {
  font-size: clamp(24px, 3vw, 40px);
  font-weight: 500; letter-spacing: -0.025em; margin-bottom: 8px;
}
.dpr-project-meta { font-size: 14px; color: rgba(245,241,234,0.5); letter-spacing: 0.05em; }
.dpr-project-visual {
  aspect-ratio: 4/3; border-radius: 2px;
  background: linear-gradient(135deg, #3a2c22, #1a1410);
  transition: transform 0.5s;
}
.dpr-project:hover .dpr-project-visual { transform: scale(1.03); }

@media (max-width: 820px) {
  .dpr-project { grid-template-columns: 1fr; gap: 24px; padding: 32px 0; }
}

.dpr-ba { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: var(--dpr-line); }
.dpr-ba-item {
  aspect-ratio: 1; background: linear-gradient(135deg, #4a3828, #2a1e14);
  display: flex; align-items: flex-end; padding: 40px; position: relative;
}
.dpr-ba-item:nth-child(2) { background: linear-gradient(135deg, #a67b5b, #6a4a30); }
.dpr-ba-item span {
  font-family: 'Georgia', serif; font-style: italic;
  font-size: 28px; color: var(--dpr-accent);
}
@media (max-width: 620px) { .dpr-ba { grid-template-columns: 1fr; } }

.dpr-estimator {
  background: #171513; padding: 80px 48px;
  border: 1px solid var(--dpr-line);
}
.dpr-estimator-inner { max-width: 900px; margin: 0 auto; }
.dpr-estimator h3 {
  font-size: clamp(28px, 4vw, 44px); font-weight: 500;
  letter-spacing: -0.025em; margin-bottom: 40px;
}
.dpr-estimator-options { display: grid; gap: 12px; margin-bottom: 40px; }
.dpr-estimator-option {
  padding: 20px 24px; border: 1px solid var(--dpr-line);
  background: transparent; color: inherit; text-align: left;
  cursor: pointer; transition: all 0.25s; font-size: 16px;
  display: flex; justify-content: space-between;
}
.dpr-estimator-option:hover,
.dpr-estimator-option.active {
  border-color: var(--dpr-accent);
  background: rgba(212,165,116,0.05);
}
.dpr-estimator-result {
  padding-top: 32px; border-top: 1px solid var(--dpr-line);
  font-size: 15px; color: rgba(245,241,234,0.7);
}
.dpr-estimator-result strong {
  display: block; font-size: 32px; font-weight: 500;
  color: var(--dpr-accent); margin-top: 8px; letter-spacing: -0.02em;
}

.dpr-final {
  padding: 180px 48px; text-align: center;
  background: radial-gradient(ellipse at center, rgba(212,165,116,0.1), transparent 70%);
}
.dpr-final h2 {
  font-size: clamp(40px, 7vw, 96px); font-weight: 500;
  letter-spacing: -0.04em; line-height: 1; margin-bottom: 40px;
}
.dpr-final h2 em {
  font-family: 'Georgia', serif; font-style: italic;
  color: var(--dpr-accent); font-weight: 400;
}
.dpr-final .dpr-cta { margin: 0 auto; font-size: 15px; }

.dpr-footer {
  padding: 48px; border-top: 1px solid var(--dpr-line);
  font-size: 13px; color: rgba(245,241,234,0.4);
  text-align: center; letter-spacing: 0.05em;
}

@media (max-width: 720px) {
  .dpr-hero { padding: 120px 24px 60px; }
  .dpr-section { padding: 80px 24px; }
  .dpr-section-head { flex-direction: column; gap: 12px; margin-bottom: 48px; }
  .dpr-estimator { padding: 48px 24px; }
  .dpr-final { padding: 100px 24px; }
}
`);

/* ============================================================
   COMPOSANTS
   ============================================================ */

write('src/components/Header.jsx', `
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="brand" onClick={close}>
          {siteConfig.brand.name}
        </Link>
        <button
          className="menu-toggle"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav className={\`site-nav \${open ? 'open' : ''}\`}>
          <Link to="/" onClick={close}>Accueil</Link>
          <Link to="/#offres" onClick={close}>Offres</Link>
          <Link to="/demos" onClick={close}>Démos</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
          <Link to="/contact" className="btn btn-primary" onClick={close}>
            Demander un devis
          </Link>
        </nav>
      </div>
    </header>
  );
}
`);

write('src/components/Footer.jsx', `
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">{siteConfig.brand.name}</div>
            <p style={{ maxWidth: 340, fontSize: 15 }}>{siteConfig.brand.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/">Accueil</Link>
            <Link to="/#offres">Offres</Link>
            <Link to="/demos">Démonstrations</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={\`mailto:\${siteConfig.contact.email}\`}>{siteConfig.contact.email}</a>
            <a href={\`tel:\${siteConfig.contact.phone.replace(/\\s/g, '')}\`}>
              {siteConfig.contact.phoneDisplay}
            </a>
            <p>Interventions dans l'{siteConfig.area.mainDepartment} et à distance</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {siteConfig.brand.name}. Tous droits réservés.</span>
          <span>Site réalisé avec soin.</span>
        </div>
      </div>
    </footer>
  );
}
`);

write('src/components/OfferCard.jsx', `
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig.js';

export default function OfferCard({ offer }) {
  const showPrice = siteConfig.showPrices && offer.showPrice;
  return (
    <article className={\`offer-card \${offer.highlighted ? 'highlighted' : ''}\`}>
      {offer.highlighted && <div className="offer-badge">Recommandé</div>}
      <h3 className="offer-name">{offer.name}</h3>
      <p className="offer-subtitle">{offer.subtitle}</p>
      <p className="offer-desc">{offer.description}</p>

      {showPrice && (
        <div className="offer-price">
          <span className="offer-price-suffix">{offer.priceSuffix}</span>
          <div className="offer-price-value">
            {offer.price} € <span style={{ fontSize: 15, fontWeight: 400, color: 'var(--muted)' }}>HT</span>
          </div>
          {offer.maintenancePrice && (
            <p className="offer-maintenance">
              Maintenance : {offer.maintenancePrice} € {offer.maintenanceUnit} — optionnel
            </p>
          )}
        </div>
      )}

      <ul className="offer-features">
        {offer.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="offer-actions">
        <Link to={offer.demoUrl} className="btn btn-primary">{offer.ctaLabel}</Link>
        <Link to="/contact" state={{ offer: offer.name }} className="btn btn-outline">
          Me renseigner
        </Link>
      </div>
    </article>
  );
}
`);

write('src/components/FaqItem.jsx', `
import { useState } from 'react';

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={\`faq-item \${open ? 'open' : ''}\`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
}
`);

write('src/components/ContactForm.jsx', `
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig.js';

export default function ContactForm() {
  const { state } = useLocation();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    activity: '',
    city: '',
    phone: '',
    email: '',
    currentSite: '',
    offer: state?.offer || '',
    message: '',
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <strong>Merci, votre demande est bien notée.</strong>
        <p style={{ marginTop: 8 }}>
          Je vous réponds personnellement sous 24 à 48h. En attendant, vous pouvez
          m'appeler directement au {siteConfig.contact.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Prénom et nom *</label>
          <input id="name" required value={form.name} onChange={update('name')} />
        </div>
        <div className="form-field">
          <label htmlFor="company">Entreprise</label>
          <input id="company" value={form.company} onChange={update('company')} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="activity">Votre métier</label>
          <select id="activity" value={form.activity} onChange={update('activity')}>
            <option value="">— Sélectionnez —</option>
            <option>Plombier</option>
            <option>Électricien</option>
            <option>Peintre</option>
            <option>Menuisier</option>
            <option>Couvreur</option>
            <option>Maçon</option>
            <option>Paysagiste / Jardinier</option>
            <option>Garage / Auto</option>
            <option>Professionnel du bien-être</option>
            <option>Métier de bouche</option>
            <option>Créateur / Artisan d'art</option>
            <option>Autre</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="city">Ville</label>
          <input id="city" value={form.city} onChange={update('city')} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phone">Téléphone *</label>
          <input id="phone" type="tel" required value={form.phone} onChange={update('phone')} />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" required value={form.email} onChange={update('email')} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="currentSite">Site actuel (si vous en avez un)</label>
          <input id="currentSite" value={form.currentSite} onChange={update('currentSite')} />
        </div>
        <div className="form-field">
          <label htmlFor="offer">Offre envisagée</label>
          <select id="offer" value={form.offer} onChange={update('offer')}>
            <option value="">— Je ne sais pas encore —</option>
            {siteConfig.offers.map((o) => (
              <option key={o.id} value={o.name}>{o.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">Parlez-moi de votre projet *</label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={update('message')}
          placeholder="Votre activité, ce que vous attendez d'un site, vos envies…"
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
        Envoyer ma demande
      </button>
      <p style={{ fontSize: 13, color: 'var(--muted)', textAlign: 'center' }}>
        Vos informations restent confidentielles. Aucun engagement.
      </p>
    </form>
  );
}
`);

write('src/components/DemoNavigation.jsx', `
import { Link, useLocation } from 'react-router-dom';

export default function DemoNavigation() {
  const { pathname } = useLocation();
  const is = (p) => pathname === p ? 'active' : '';
  return (
    <div className="demo-banner">
      <Link to="/" className="demo-banner-back">← Retour au site</Link>
      <div className="demo-banner-links">
        <Link to="/demo/essentiel" className={is('/demo/essentiel')}>Essentiel</Link>
        <Link to="/demo/plus" className={is('/demo/plus')}>Plus</Link>
        <Link to="/demo/pro" className={is('/demo/pro')}>Pro</Link>
      </div>
    </div>
  );
}
`);

/* ============================================================
   PAGES COMMERCIALES
   ============================================================ */

write('src/pages/Home.jsx', `
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import OfferCard from '../components/OfferCard.jsx';
import FaqItem from '../components/FaqItem.jsx';
import { siteConfig } from '../config/siteConfig.js';
import '../styles/commercial.css';

export default function Home() {
  const problems = [
    { t: "Pas de site, ou un site qui date", d: "Vos clients vous cherchent en ligne et ne trouvent rien — ou tombent sur une page qui ne vous ressemble pas." },
    { t: "Présent uniquement sur Facebook", d: "Les réseaux sociaux, c'est bien. Mais ça ne remplace pas un site à vous, qui vous appartient." },
    { t: "Difficile à trouver sur Google", d: "Sans site structuré, votre métier et votre ville sont invisibles pour les recherches locales." },
    { t: "Réalisations mal mises en valeur", d: "Vos plus beaux chantiers méritent mieux que quelques photos perdues dans un fil." },
    { t: "Clients obligés d'appeler pour tout", d: "Horaires, zone d'intervention, devis : tout doit être lisible en 30 secondes." },
    { t: "Illisible sur téléphone", d: "La majorité de vos clients vous consultent depuis leur mobile. Si c'est compliqué, ils partent." },
  ];

  const solutions = [
    { t: "Professionnel", d: "Un site qui inspire confiance dès la première seconde." },
    { t: "Pensé mobile", d: "Parfait sur téléphone, tablette et ordinateur." },
    { t: "Clair et rapide", d: "Vos informations essentielles accessibles en un coup d'œil." },
    { t: "Adapté à votre métier", d: "Chaque section reflète votre activité, pas un modèle générique." },
    { t: "Orienté contact", d: "Pensé pour générer des appels et des demandes de devis." },
    { t: "Simple à gérer", d: "Vous n'avez rien à installer. Je m'occupe de tout." },
  ];

  const why = [
    { t: "Interlocutrice unique", d: "Vous parlez toujours à la même personne, du premier échange à la mise en ligne." },
    { t: "Proximité", d: "Je démarre mon activité dans l'Oise, avec une vraie approche locale." },
    { t: "Compréhension du besoin", d: "Un artisan n'est pas un dossier anonyme. Je prends le temps de comprendre votre métier." },
    { t: "Tarifs transparents", d: "Pas de surprise. Tout est annoncé, tout est clair." },
    { t: "Pas de jargon", d: "Vous n'entendrez pas de mots compliqués. Juste des solutions concrètes." },
    { t: "Accompagnement humain", d: "Vous n'êtes pas à l'aise avec l'informatique ? C'est prévu. Je vous guide." },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Création de sites internet · {siteConfig.area.mainDepartment}</p>
            <h1>Votre savoir-faire mérite un site qui travaille pour vous.</h1>
            <p className="hero-lead">
              Je crée des sites internet modernes, professionnels et simples pour les
              artisans et petites entreprises locales. Pensés pour être trouvés,
              compris, et contactés.
            </p>
            <div className="hero-cta">
              <a href="#offres" className="btn btn-primary">Découvrir les offres</a>
              <Link to="/demos" className="btn btn-outline">Voir les démonstrations</Link>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <strong>3 niveaux</strong>
                <span>Du plus simple au plus immersif</span>
              </div>
              <div className="hero-meta-item">
                <strong>100% mobile</strong>
                <span>Tous les sites sont pensés pour le téléphone</span>
              </div>
              <div className="hero-meta-item">
                <strong>Accompagnement</strong>
                <span>Une seule interlocutrice, du début à la fin</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="container">
            <p className="eyebrow">Ce que je vois souvent</p>
            <h2 className="section-title">
              Votre métier est excellent.<br />Votre présence en ligne, parfois moins.
            </h2>
            <p className="section-lead">
              Rien de grave. La plupart des artisans que je rencontre ont simplement
              autre chose à faire que de s'occuper d'un site internet. Voici ce qu'on
              peut améliorer ensemble.
            </p>
            <div className="problems-grid">
              {problems.map((p) => (
                <div key={p.t} className="problem-card">
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section solution">
          <div className="container">
            <p className="eyebrow">Ce que je propose</p>
            <h2 className="section-title">
              Un site clair, professionnel, pensé pour votre métier.
            </h2>
            <p className="section-lead" style={{ color: 'rgba(247,243,236,0.7)' }}>
              Pas de site générique. Chaque projet est construit autour de votre
              activité, de vos clients et de votre façon de travailler.
            </p>
            <div className="solution-grid">
              {solutions.map((s) => (
                <div key={s.t} className="solution-item">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="offres">
          <div className="container">
            <p className="eyebrow">Les offres</p>
            <h2 className="section-title">Trois niveaux, une même exigence.</h2>
            <p className="section-lead">
              Chaque niveau correspond à un besoin différent. Vous pouvez voir
              exactement à quoi ressemble chaque formule grâce aux démonstrations
              interactives.
            </p>
            <div className="offers-grid">
              {siteConfig.offers.map((o) => (
                <OfferCard key={o.id} offer={o} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="container">
            <p className="eyebrow">Démonstrations</p>
            <h2 className="section-title">Voyez la différence par vous-même.</h2>
            <p className="section-lead">
              Chaque démo présente le même artisan fictif — un plombier de
              {' '}{siteConfig.area.launchCity} — mais dans les trois niveaux. C'est
              la meilleure façon de comprendre immédiatement la progression.
            </p>
            <div className="demos-teaser">
              <Link to="/demo/essentiel" className="demo-teaser-card demo-essentiel">
                <div>
                  <h3>Essentiel</h3>
                  <p>Simple, direct, rassurant</p>
                </div>
              </Link>
              <Link to="/demo/plus" className="demo-teaser-card demo-plus">
                <div>
                  <h3>Plus</h3>
                  <p>Éditorial, complet, professionnel</p>
                </div>
              </Link>
              <Link to="/demo/pro" className="demo-teaser-card demo-pro">
                <div>
                  <h3>Pro</h3>
                  <p>Immersif, premium, mémorable</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Ma façon de travailler</p>
            <h2 className="section-title">Simple, du premier échange à la mise en ligne.</h2>
            <p className="section-lead">
              Vous n'avez pas besoin d'être à l'aise avec l'informatique. Je vous
              accompagne à chaque étape, sans jargon.
            </p>
            <div className="process-list">
              {siteConfig.process.map((p) => (
                <div key={p.step} className="process-item">
                  <div className="process-step">{p.step}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="container">
            <p className="eyebrow">Pourquoi travailler avec moi</p>
            <h2 className="section-title">Une approche humaine et personnalisée.</h2>
            <p className="section-lead">
              Je démarre mon activité. Je ne vous promettrai pas des centaines de
              clients satisfaits. En revanche, je m'engage sur une chose : un
              accompagnement sérieux, une écoute réelle, et un site dont vous serez fier.
            </p>
            <div className="why-grid">
              {why.map((w) => (
                <div key={w.t} className="why-item">
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow text-center">Questions fréquentes</p>
            <h2 className="section-title mx-auto text-center">
              Tout ce que vous vous demandez peut-être.
            </h2>
            <div className="faq-list" style={{ marginTop: 48 }}>
              {siteConfig.faq.map((f) => (
                <FaqItem key={f.q} question={f.q} answer={f.a} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
          <div className="container text-center">
            <h2 className="section-title mx-auto" style={{ color: 'var(--paper)' }}>
              Parlons de votre projet.
            </h2>
            <p className="section-lead mx-auto" style={{ color: 'rgba(247,243,236,0.7)' }}>
              Un échange simple, sans engagement, pour voir ce qui serait le plus
              adapté à votre activité.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              <Link to="/contact" className="btn btn-accent">Demander un devis</Link>
              <a href={\`tel:\${siteConfig.contact.phone.replace(/\\s/g, '')}\`} className="btn btn-outline" style={{ borderColor: 'var(--paper)', color: 'var(--paper)' }}>
                Appeler maintenant
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
`);

write('src/pages/Demos.jsx', `
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { siteConfig } from '../config/siteConfig.js';
import '../styles/commercial.css';

export default function Demos() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <p className="eyebrow">Démonstrations</p>
            <h1 className="section-title">Trois niveaux. Trois expériences vraiment différentes.</h1>
            <p className="section-lead">
              Pour vous aider à choisir, j'ai créé trois sites de démonstration
              complets autour du même artisan fictif. Vous pouvez naviguer dans
              chacun comme un vrai client.
            </p>

            <div style={{ display: 'grid', gap: 32, marginTop: 48 }}>
              {siteConfig.offers.map((o, i) => (
                <div
                  key={o.id}
                  className="demo-detail-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.3fr',
                    gap: 48,
                    alignItems: 'center',
                    padding: 40,
                    background: '#fff',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--line)',
                  }}
                >
                  <div>
                    <p className="eyebrow">Niveau {i + 1}</p>
                    <h2 style={{ fontSize: 32, marginBottom: 12 }}>{o.name}</h2>
                    <p style={{ color: 'var(--accent)', marginBottom: 16 }}>{o.subtitle}</p>
                    <p style={{ color: 'var(--muted)', marginBottom: 24 }}>{o.description}</p>
                    <p style={{ fontSize: 14, marginBottom: 24 }}>
                      <strong>Pour qui :</strong> {o.audience}
                    </p>
                    <Link to={o.demoUrl} className="btn btn-primary">
                      Voir la démonstration {o.name}
                    </Link>
                  </div>
                  <div
                    className={\`demo-teaser-card demo-\${o.id}\`}
                    style={{ aspectRatio: '4 / 3', minHeight: 240 }}
                  >
                    <div>
                      <h3 style={{ fontSize: 28 }}>{o.name}</h3>
                      <p>Aperçu interactif</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
`);

write('src/pages/Contact.jsx', `
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { siteConfig } from '../config/siteConfig.js';
import '../styles/commercial.css';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Parlons de votre projet.</h1>
          <p className="section-lead">
            Remplissez ce formulaire ou appelez-moi directement. Je vous réponds
            personnellement sous 24 à 48h.
          </p>

          <div className="contact-grid" style={{ marginTop: 48 }}>
            <div>
              <h3 style={{ fontSize: 20, marginBottom: 20 }}>Mes coordonnées</h3>
              <p style={{ marginBottom: 8, fontSize: 15 }}>
                <strong>Email</strong><br />
                <a href={\`mailto:\${siteConfig.contact.email}\`}>{siteConfig.contact.email}</a>
              </p>
              <p style={{ marginBottom: 8, fontSize: 15 }}>
                <strong>Téléphone</strong><br />
                <a href={\`tel:\${siteConfig.contact.phone.replace(/\\s/g, '')}\`}>{siteConfig.contact.phoneDisplay}</a>
              </p>
              <p style={{ marginBottom: 24, fontSize: 15 }}>
                <strong>Zone d'intervention</strong><br />
                {siteConfig.area.mainDepartment} ({siteConfig.area.mainDepartmentCode}) — et à distance partout en France
              </p>
              <p style={{ fontSize: 14, color: 'var(--muted)' }}>
                Je suis une personne seule derrière ce projet. Vos messages
                arrivent directement chez moi, pas dans un service client anonyme.
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`);

/* ============================================================
   PAGES DÉMOS
   ============================================================ */

write('src/pages/demos/Essentiel.jsx', `
import DemoNavigation from '../../components/DemoNavigation.jsx';
import { demoArtisan as a } from '../../data/demoArtisan.js';
import '../../styles/demo-essentiel.css';

export default function Essentiel() {
  return (
    <div className="demo-essentiel-root">
      <DemoNavigation />

      <header className="de-header">
        <div className="de-header-inner">
          <div className="de-logo">{a.businessName}</div>
          <a href={\`tel:\${a.phone.replace(/\\s/g, '')}\`} className="de-phone-btn">
            📞 {a.phoneDisplay}
          </a>
        </div>
      </header>

      <section className="de-hero">
        <h1>{a.tagline}</h1>
        <p>{a.shortIntro}</p>
        <div className="de-hero-cta">
          <a href="#contact" className="de-btn de-btn-primary">Demander un devis</a>
          <a href={\`tel:\${a.phone.replace(/\\s/g, '')}\`} className="de-btn de-btn-outline">
            Appeler maintenant
          </a>
        </div>
      </section>

      <section className="de-section de-section-alt">
        <div className="de-inner">
          <h2>Bonjour, je suis {a.ownerName}.</h2>
          <p className="de-section-lead">{a.longStory}</p>
        </div>
      </section>

      <section className="de-section">
        <div className="de-inner">
          <h2>Mes prestations</h2>
          <p className="de-section-lead">Tout ce dont vous avez besoin, au même endroit.</p>
          <div className="de-services">
            {a.services.map((s) => (
              <div key={s.title} className="de-service">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="de-section de-section-alt">
        <div className="de-inner">
          <h2>Quelques réalisations</h2>
          <p className="de-section-lead">Un aperçu de mes derniers chantiers.</p>
          <div className="de-projects">
            {a.projects.slice(0, 4).map((p) => (
              <div key={p.title} className="de-project">
                <h4>{p.title}</h4>
                <p>{p.place} · {p.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="de-section">
        <div className="de-inner">
          <h2>Ce que disent mes clients</h2>
          <div className="de-testimonials" style={{ marginTop: 32 }}>
            {a.testimonials.map((t) => (
              <blockquote key={t.name} className="de-testimonial">
                <p>« {t.text} »</p>
                <cite>{t.name} — {t.city}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="de-section de-section-alt">
        <div className="de-inner">
          <h2>Où j'interviens</h2>
          <p className="de-section-lead">
            J'interviens principalement dans le secteur de {a.city} et alentours.
          </p>
          <div className="de-areas">
            {a.areas.map((area) => (
              <span key={area} className="de-area-tag">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="de-contact" id="contact">
        <h2>Besoin d'un devis ?</h2>
        <p>Appelez-moi ou envoyez un message. Je vous réponds rapidement.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={\`tel:\${a.phone.replace(/\\s/g, '')}\`} className="de-btn de-btn-primary">
            📞 {a.phoneDisplay}
          </a>
          <a href={\`mailto:\${a.email}\`} className="de-btn de-btn-outline" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}>
            ✉️ Envoyer un message
          </a>
        </div>
        <p style={{ marginTop: 24, fontSize: 14, opacity: 0.8 }}>{a.hours}</p>
      </section>

      <footer className="de-footer">
        {a.businessName} — {a.address} — Site de démonstration
      </footer>

      <div className="de-mobile-phone">
        <a href={\`tel:\${a.phone.replace(/\\s/g, '')}\`} className="de-phone-btn">
          📞 Appeler {a.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
`);

write('src/pages/demos/Plus.jsx', `
import DemoNavigation from '../../components/DemoNavigation.jsx';
import { demoArtisan as a } from '../../data/demoArtisan.js';
import '../../styles/demo-plus.css';

export default function Plus() {
  return (
    <div className="demo-plus-root">
      <DemoNavigation />

      <nav className="dp-nav">
        <div className="dp-nav-inner">
          <div className="dp-brand">{a.businessName}</div>
          <div className="dp-nav-links">
            <a href="#services">Services</a>
            <a href="#realisations">Réalisations</a>
            <a href="#atelier">L'atelier</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="dp-hero">
        <h1>
          Le savoir-faire d'un artisan,<br />
          <em>au service de votre confort.</em>
        </h1>
        <p className="dp-hero-lead">{a.shortIntro}</p>
        <div className="dp-cta-row">
          <a href="#contact" className="dp-btn dp-btn-primary">Demander un devis</a>
          <a href="#realisations" className="dp-btn dp-btn-ghost">Voir les réalisations →</a>
        </div>
        <div className="dp-hero-meta">
          <div className="dp-hero-meta-item">
            <strong>{new Date().getFullYear() - a.since}</strong>
            <span>années d'expérience</span>
          </div>
          <div className="dp-hero-meta-item">
            <strong>7j/7</strong>
            <span>disponibilité dépannage</span>
          </div>
          <div className="dp-hero-meta-item">
            <strong>{a.department}</strong>
            <span>zone d'intervention</span>
          </div>
          <div className="dp-hero-meta-item">
            <strong>Artisan</strong>
            <span>travail soigné & garanti</span>
          </div>
        </div>
      </section>

      <section className="dp-section" style={{ background: '#fff' }} id="services">
        <div className="dp-inner">
          <p className="dp-eyebrow">Prestations</p>
          <h2>Des interventions <em>complètes</em>, du dépannage à la rénovation.</h2>
          <div className="dp-services-grid">
            {a.services.map((s, i) => (
              <div key={s.title} className="dp-service">
                <div className="dp-service-num">0{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-section" id="realisations">
        <div className="dp-inner">
          <p className="dp-eyebrow">Réalisations</p>
          <h2>Quelques projets <em>récents</em>.</h2>
          <div className="dp-portfolio">
            {a.projects.slice(0, 6).map((p) => (
              <div key={p.title} className="dp-portfolio-item">
                <h4>{p.title}</h4>
                <span>{p.place} · {p.year} · {p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-section" id="atelier" style={{ background: '#fff' }}>
        <div className="dp-inner">
          <div className="dp-story">
            <div className="dp-story-text">
              <p className="dp-eyebrow">L'atelier</p>
              <h2 style={{ marginBottom: 32 }}>Une histoire <em>d'artisan</em>.</h2>
              <p>{a.longStory}</p>
              <p>
                Chaque chantier est l'occasion de faire les choses bien : un travail
                propre, des explications claires, un espace laissé impeccable en
                partant. C'est comme ça que la confiance se construit, chantier après
                chantier.
              </p>
            </div>
            <div className="dp-story-visual" />
          </div>
        </div>
      </section>

      <section className="dp-section">
        <div className="dp-inner">
          <p className="dp-eyebrow">Témoignages</p>
          <h2>Ce que disent <em>mes clients</em>.</h2>
          <div className="dp-testimonials">
            {a.testimonials.map((t) => (
              <blockquote key={t.name} className="dp-testimonial">
                <p>« {t.text} »</p>
                <cite>{t.name} — {t.city}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-cta" id="contact">
        <div className="dp-inner">
          <h2>Un projet en tête ? <em style={{ color: 'var(--dp-accent)' }}>Parlons-en.</em></h2>
          <p>Devis gratuit, déplacement compris dans toute la zone d'intervention.</p>
          <div className="dp-cta-row">
            <a href={\`tel:\${a.phone.replace(/\\s/g, '')}\`} className="dp-btn dp-btn-primary">
              📞 {a.phoneDisplay}
            </a>
            <a href={\`mailto:\${a.email}\`} className="dp-btn dp-btn-ghost" style={{ color: '#faf7f2', borderColor: '#faf7f2' }}>
              Envoyer un email →
            </a>
          </div>
        </div>
      </section>

      <footer className="dp-footer">
        {a.businessName} — {a.address} — Site de démonstration Plus
      </footer>
    </div>
  );
}
`);

write('src/pages/demos/Pro.jsx', `
import { useState } from 'react';
import DemoNavigation from '../../components/DemoNavigation.jsx';
import { demoArtisan as a } from '../../data/demoArtisan.js';
import '../../styles/demo-pro.css';

export default function Pro() {
  const [estimate, setEstimate] = useState(null);
  const options = [
    { id: 'depannage', label: 'Dépannage ou petite réparation', price: 'À partir de 90 €' },
    { id: 'sdb', label: 'Rénovation de salle de bain', price: 'À partir de 3 500 €' },
    { id: 'chauffage', label: 'Installation ou remplacement de chaudière', price: 'À partir de 2 800 €' },
    { id: 'complet', label: 'Projet complet (plomberie + chauffage)', price: 'Sur devis personnalisé' },
  ];

  return (
    <div className="demo-pro-root">
      <DemoNavigation />

      <nav className="dpr-nav">
        <div className="dpr-brand">{a.businessName}</div>
        <button className="dpr-menu-btn">Menu</button>
      </nav>

      <section className="dpr-hero">
        <div className="dpr-hero-inner">
          <p className="dpr-hero-eyebrow">Artisan plombier · {a.city} · depuis {a.since}</p>
          <h1>
            La précision<br />
            d'un <em>geste</em>,<br />
            la durée d'un ouvrage.
          </h1>
          <p className="dpr-hero-lead">
            Chaque intervention est pensée comme un ouvrage : propre, précis,
            fait pour durer. Depuis {a.since}, au service des habitants de l'{a.department}.
          </p>
          <a href="#contact" className="dpr-cta">Démarrer un projet</a>
        </div>
        <div className="dpr-scroll-hint">Scroll</div>
      </section>

      <section className="dpr-section">
        <div className="dpr-inner">
          <div className="dpr-section-head">
            <span className="dpr-num">01</span>
            <h2 className="dpr-section-title">
              Prestations <em>soignées</em>, du dépannage au grand œuvre.
            </h2>
          </div>
          <div className="dpr-services">
            {a.services.map((s, i) => (
              <div key={s.title} className="dpr-service">
                <div className="dpr-service-num">0{i + 1} —</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dpr-section">
        <div className="dpr-inner">
          <div className="dpr-section-head">
            <span className="dpr-num">02</span>
            <h2 className="dpr-section-title">
              Projets <em>réalisés</em>, histoires terminées.
            </h2>
          </div>
          <div className="dpr-projects">
            {a.projects.slice(0, 5).map((p, i) => (
              <article key={p.title} className="dpr-project">
                <div className="dpr-project-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{p.title}</h3>
                  <div className="dpr-project-meta">{p.place} · {p.year} · {p.tag}</div>
                </div>
                <div className="dpr-project-visual" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dpr-section">
        <div className="dpr-inner">
          <div className="dpr-section-head">
            <span className="dpr-num">03</span>
            <h2 className="dpr-section-title">Ce qui <em>change</em>.</h2>
          </div>
          <div className="dpr-ba">
            <div className="dpr-ba-item"><span>Avant</span></div>
            <div className="dpr-ba-item"><span>Après</span></div>
          </div>
        </div>
      </section>

      <section className="dpr-section">
        <div className="dpr-inner">
          <div className="dpr-section-head">
            <span className="dpr-num">04</span>
            <h2 className="dpr-section-title">Estimez votre <em>projet</em>.</h2>
          </div>
          <div className="dpr-estimator">
            <div className="dpr-estimator-inner">
              <h3>Sélectionnez ce qui correspond à votre besoin.</h3>
              <div className="dpr-estimator-options">
                {options.map((o) => (
                  <button
                    key={o.id}
                    className={\`dpr-estimator-option \${estimate === o.id ? 'active' : ''}\`}
                    onClick={() => setEstimate(o.id)}
                  >
                    <span>{o.label}</span>
                    <span style={{ color: 'var(--dpr-accent)' }}>→</span>
                  </button>
                ))}
              </div>
              {estimate && (
                <div className="dpr-estimator-result">
                  Estimation indicative
                  <strong>{options.find((o) => o.id === estimate).price}</strong>
                  <span style={{ fontSize: 13, opacity: 0.6, marginTop: 8, display: 'block' }}>
                    Un devis précis sera établi après visite.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="dpr-final" id="contact">
        <h2>
          Un projet mérite<br />
          <em>d'être bien fait.</em>
        </h2>
        <a href={\`tel:\${a.phone.replace(/\\s/g, '')}\`} className="dpr-cta">
          Prendre rendez-vous · {a.phoneDisplay}
        </a>
      </section>

      <footer className="dpr-footer">
        {a.businessName} — Site de démonstration Pro — {a.address}
      </footer>
    </div>
  );
}
`);

/* ============================================================
   FIN
   ============================================================ */

console.log('\n✅ Projet créé dans ./artisan-sites\n');
console.log('👉 Étapes suivantes :');
console.log('   cd artisan-sites');
console.log('   npm install');
console.log('   npm run dev\n');