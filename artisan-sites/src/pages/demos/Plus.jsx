import DemoNavigation from '../../components/DemoNavigation.jsx';
import { demoArtisan as a } from '../../data/demoArtisan.js';
import { demoImages } from '../../data/demoImages.js';
import '../../styles/demo-plus.css';

export default function Plus() {
  const portfolioImages = [
    demoImages.plusPortfolio1,
    demoImages.plusPortfolio2,
    demoImages.plusPortfolio3,
    demoImages.plusPortfolio4,
    demoImages.plusPortfolio5,
    demoImages.plusPortfolio6,
  ];

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

      {/* HERO avec image de fond */}
      <section
        className="dp-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(250,247,242,0.88), rgba(250,247,242,0.96)), url(${demoImages.plusHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 12,
          marginTop: 16,
        }}
      >
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

      {/* SERVICES */}
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

      {/* RÉALISATIONS avec images */}
      <section className="dp-section" id="realisations">
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

      {/* ATELIER avec image */}
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
            <div
              className="dp-story-visual"
              style={{
                backgroundImage: `url(${demoImages.plusAtelier})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
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

      {/* CTA CONTACT */}
      <section className="dp-cta" id="contact">
        <div className="dp-inner">
          <h2>Un projet en tête ? <em style={{ color: 'var(--dp-accent)' }}>Parlons-en.</em></h2>
          <p>Devis gratuit, déplacement compris dans toute la zone d'intervention.</p>
          <div className="dp-cta-row">
            <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="dp-btn dp-btn-primary">
              📞 {a.phoneDisplay}
            </a>
            <a href={`mailto:${a.email}`} className="dp-btn dp-btn-ghost" style={{ color: '#faf7f2', borderColor: '#faf7f2' }}>
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
