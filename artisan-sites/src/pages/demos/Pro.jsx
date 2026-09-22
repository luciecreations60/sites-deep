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
                    className={`dpr-estimator-option ${estimate === o.id ? 'active' : ''}`}
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
        <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="dpr-cta">
          Prendre rendez-vous · {a.phoneDisplay}
        </a>
      </section>

      <footer className="dpr-footer">
        {a.businessName} — Site de démonstration Pro — {a.address}
      </footer>
    </div>
  );
}
