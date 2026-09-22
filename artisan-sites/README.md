# Sites pour artisans

Site commercial + 3 démonstrations (Essentiel / Plus / Pro) pour une activité de création de sites internet destinée aux artisans et petites entreprises locales.

## Installation

```bash
npm install
npm run dev
```

Le site est accessible sur http://localhost:5173

## Build

```bash
npm run build
```

Génère un dossier `dist/` prêt à déployer sur Netlify, Vercel ou GitHub Pages.

## Structure

- `src/config/siteConfig.js` — **configuration centrale** (nom, contact, offres, tarifs, SEO, zone géographique)
- `src/data/demoArtisan.js` — artisan fictif utilisé dans les 3 démos
- `src/pages/` — pages du site commercial
- `src/pages/demos/` — les 3 démos (Essentiel / Plus / Pro)

## Personnalisation

Modifier `src/config/siteConfig.js` pour :
- changer le nom commercial
- ajuster les tarifs ou les masquer (`showPrices: false`)
- adapter la zone géographique
- modifier les contenus des offres
