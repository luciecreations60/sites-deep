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
          <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="de-phone-btn">
            📞 {a.phoneDisplay}
          </a>
        </div>
      </header>

      <section className="de-hero">
        <h1>{a.tagline}</h1>
        <p>{a.shortIntro}</p>
        <div className="de-hero-cta">
          <a href="#contact" className="de-btn de-btn-primary">Demander un devis</a>
          <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="de-btn de-btn-outline">
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
          <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="de-btn de-btn-primary">
            📞 {a.phoneDisplay}
          </a>
          <a href={`mailto:${a.email}`} className="de-btn de-btn-outline" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}>
            ✉️ Envoyer un message
          </a>
        </div>
        <p style={{ marginTop: 24, fontSize: 14, opacity: 0.8 }}>{a.hours}</p>
      </section>

      <footer className="de-footer">
        {a.businessName} — {a.address} — Site de démonstration
      </footer>

      <div className="de-mobile-phone">
        <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="de-phone-btn">
          📞 Appeler {a.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
