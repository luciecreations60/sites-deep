import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig.js';

export default function OfferCard({ offer }) {
  const showPrice = siteConfig.showPrices && offer.showPrice;
  return (
    <article className={`offer-card ${offer.highlighted ? 'highlighted' : ''}`}>
      {offer.highlighted && <div className="offer-badge">Recommandé</div>}
      <h3 className="offer-name">{offer.name}</h3>
      <p className="offer-subtitle">{offer.subtitle}</p>
      <p className="offer-desc">{offer.description}</p>

      {showPrice && (
        <div className="offer-price">
          <span className="offer-price-suffix">{offer.priceSuffix}</span>
          <div className="offer-price-value">
            {offer.price} € <span style={{ fontSize: 15, fontWeight: 400, color: 'var(--muted)' }}>HT</span>
          </div>
          {offer.maintenancePrice && (
            <p className="offer-maintenance">
              Maintenance : {offer.maintenancePrice} € {offer.maintenanceUnit} — optionnel
            </p>
          )}
        </div>
      )}

      <ul className="offer-features">
        {offer.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="offer-actions">
<a
  href={`${import.meta.env.BASE_URL}${offer.demoUrl.replace(/^\//, '')}`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  {offer.ctaLabel}
</a>
        <Link to="/contact" state={{ offer: offer.name }} className="btn btn-outline">
          Me renseigner
        </Link>
      </div>
    </article>
  );
}
