import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="brand" onClick={close}>
          {siteConfig.brand.name}
        </Link>
        <button
          className="menu-toggle"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav className={`site-nav ${open ? 'open' : ''}`}>
          <Link to="/" onClick={close}>Accueil</Link>
          <Link to="/#offres" onClick={close}>Offres</Link>
          <Link to="/demos" onClick={close}>Démos</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
          <Link to="/contact" className="btn btn-primary" onClick={close}>
            Demander un devis
          </Link>
        </nav>
      </div>
    </header>
  );
}
