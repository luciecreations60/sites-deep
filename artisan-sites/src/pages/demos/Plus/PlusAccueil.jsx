import { Link } from 'react-router-dom';
import { demoArtisan as a } from '../../../data/demoArtisan.js';
import { demoImages } from '../../../data/demoImages.js';

export default function PlusAccueil() {
  return (
    <>
      {/* HERO avec image */}
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
          <Link to="/demo/plus/contact" className="dp-btn dp-btn-primary">
            Demander un devis
          </Link>
          <Link to="/demo/plus/realisations" className="dp-btn dp-btn-ghost">
            Voir les réalisations →
          </Link>
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

      {/* Aperçu services */}
      <section className="dp-section" style={{ background: '#fff' }}>
        <div className="dp-inner">
          <p className="dp-eyebrow">Prestations</p>
          <h2>Un aperçu de <em>mes services</em>.</h2>
          <div className="dp-services-grid">
            {a.services.slice(0, 3).map((s, i) => (
              <div key={s.title} className="dp-service">
                <div className="dp-service-num">0{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link to="/demo/plus/services" className="dp-btn dp-btn-ghost">
              Voir tous les services →
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
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
    </>
  );
}
