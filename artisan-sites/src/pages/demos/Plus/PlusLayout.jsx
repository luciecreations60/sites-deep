import { NavLink, Outlet, Link } from 'react-router-dom';
import DemoNavigation from '../../../components/DemoNavigation.jsx';
import { demoArtisan as a } from '../../../data/demoArtisan.js';
import '../../../styles/demo-plus.css';

export default function PlusLayout() {
  return (
    <div className="demo-plus-root">
      <DemoNavigation />

      <nav className="dp-nav">
        <div className="dp-nav-inner">
          <Link to="/demo/plus" className="dp-brand">{a.businessName}</Link>
          <div className="dp-nav-links">
            <NavLink
              to="/demo/plus/services"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Services
            </NavLink>
            <NavLink
              to="/demo/plus/realisations"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Réalisations
            </NavLink>
            <NavLink
              to="/demo/plus/atelier"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              L'atelier
            </NavLink>
            <NavLink
              to="/demo/plus/contact"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="dp-footer">
        {a.businessName} — {a.address} — Site de démonstration Plus
      </footer>
    </div>
  );
}
