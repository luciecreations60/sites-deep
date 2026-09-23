import { demoArtisan as a } from '../../../data/demoArtisan.js';

export default function PlusContact() {
  return (
    <section className="dp-section">
      <div className="dp-inner">
        <p className="dp-eyebrow">Contact</p>
        <h2>Un projet en tête ? <em>Parlons-en.</em></h2>
        <p style={{ fontSize: 17, color: '#6a6259', maxWidth: 560, marginBottom: 40 }}>
          Devis gratuit, déplacement compris dans toute la zone d'intervention.
        </p>
        <div className="dp-cta-row">
          <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="dp-btn dp-btn-primary">
            📞 {a.phoneDisplay}
          </a>
          <a href={`mailto:${a.email}`} className="dp-btn dp-btn-ghost">
            Envoyer un email →
          </a>
        </div>
        <div style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--dp-line)' }}>
          <p style={{ fontSize: 14, color: '#8a8279' }}>
            <strong>Adresse :</strong> {a.address}<br />
            <strong>Horaires :</strong> {a.hours}
          </p>
        </div>
      </div>
    </section>
  );
}
