import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">{siteConfig.brand.name}</div>
            <p style={{ maxWidth: 340, fontSize: 15 }}>{siteConfig.brand.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/">Accueil</Link>
            <Link to="/#offres">Offres</Link>
            <Link to="/demos">Démonstrations</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}>
              {siteConfig.contact.phoneDisplay}
            </a>
            <p>Interventions dans l'{siteConfig.area.mainDepartment} et à distance</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {siteConfig.brand.name}. Tous droits réservés.</span>
          <span>Site réalisé avec soin.</span>
        </div>
      </div>
    </footer>
  );
}
