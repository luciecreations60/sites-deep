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
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </p>
              <p style={{ marginBottom: 8, fontSize: 15 }}>
                <strong>Téléphone</strong><br />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}>{siteConfig.contact.phoneDisplay}</a>
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
