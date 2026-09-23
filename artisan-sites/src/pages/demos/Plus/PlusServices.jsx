import { Link } from 'react-router-dom';
import { demoArtisan as a } from '../../../data/demoArtisan.js';

export default function PlusServices() {
  return (
    <section className="dp-section" style={{ background: '#fff' }}>
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
        <div style={{ marginTop: 56 }}>
          <Link to="/demo/plus/contact" className="dp-btn dp-btn-primary">
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
