import { demoArtisan as a } from '../../../data/demoArtisan.js';
import { demoImages } from '../../../data/demoImages.js';

export default function PlusRealisations() {
  const portfolioImages = [
    demoImages.plusPortfolio1,
    demoImages.plusPortfolio2,
    demoImages.plusPortfolio3,
    demoImages.plusPortfolio4,
    demoImages.plusPortfolio5,
    demoImages.plusPortfolio6,
  ];

  return (
    <section className="dp-section">
      <div className="dp-inner">
        <p className="dp-eyebrow">Réalisations</p>
        <h2>Quelques projets <em>récents</em>.</h2>
        <div className="dp-portfolio">
          {a.projects.slice(0, 6).map((p, i) => (
            <div
              key={p.title}
              className="dp-portfolio-item"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65), transparent 55%), url(${portfolioImages[i]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h4>{p.title}</h4>
              <span>{p.place} · {p.year} · {p.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
