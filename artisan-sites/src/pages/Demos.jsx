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
                    className={`demo-teaser-card demo-${o.id}`}
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
