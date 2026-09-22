import { Link, useLocation } from 'react-router-dom';

export default function DemoNavigation() {
  const { pathname } = useLocation();
  const is = (p) => pathname === p ? 'active' : '';
  return (
    <div className="demo-banner">
      <Link to="/" className="demo-banner-back">← Retour au site</Link>
      <div className="demo-banner-links">
        <Link to="/demo/essentiel" className={is('/demo/essentiel')}>Essentiel</Link>
        <Link to="/demo/plus" className={is('/demo/plus')}>Plus</Link>
        <Link to="/demo/pro" className={is('/demo/pro')}>Pro</Link>
      </div>
    </div>
  );
}
