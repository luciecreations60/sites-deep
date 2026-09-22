import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig.js';

export default function ContactForm() {
  const { state } = useLocation();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    activity: '',
    city: '',
    phone: '',
    email: '',
    currentSite: '',
    offer: state?.offer || '',
    message: '',
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <strong>Merci, votre demande est bien notée.</strong>
        <p style={{ marginTop: 8 }}>
          Je vous réponds personnellement sous 24 à 48h. En attendant, vous pouvez
          m'appeler directement au {siteConfig.contact.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Prénom et nom *</label>
          <input id="name" required value={form.name} onChange={update('name')} />
        </div>
        <div className="form-field">
          <label htmlFor="company">Entreprise</label>
          <input id="company" value={form.company} onChange={update('company')} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="activity">Votre métier</label>
          <select id="activity" value={form.activity} onChange={update('activity')}>
            <option value="">— Sélectionnez —</option>
            <option>Plombier</option>
            <option>Électricien</option>
            <option>Peintre</option>
            <option>Menuisier</option>
            <option>Couvreur</option>
            <option>Maçon</option>
            <option>Paysagiste / Jardinier</option>
            <option>Garage / Auto</option>
            <option>Professionnel du bien-être</option>
            <option>Métier de bouche</option>
            <option>Créateur / Artisan d'art</option>
            <option>Autre</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="city">Ville</label>
          <input id="city" value={form.city} onChange={update('city')} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phone">Téléphone *</label>
          <input id="phone" type="tel" required value={form.phone} onChange={update('phone')} />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" required value={form.email} onChange={update('email')} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="currentSite">Site actuel (si vous en avez un)</label>
          <input id="currentSite" value={form.currentSite} onChange={update('currentSite')} />
        </div>
        <div className="form-field">
          <label htmlFor="offer">Offre envisagée</label>
          <select id="offer" value={form.offer} onChange={update('offer')}>
            <option value="">— Je ne sais pas encore —</option>
            {siteConfig.offers.map((o) => (
              <option key={o.id} value={o.name}>{o.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">Parlez-moi de votre projet *</label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={update('message')}
          placeholder="Votre activité, ce que vous attendez d'un site, vos envies…"
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
        Envoyer ma demande
      </button>
      <p style={{ fontSize: 13, color: 'var(--muted)', textAlign: 'center' }}>
        Vos informations restent confidentielles. Aucun engagement.
      </p>
    </form>
  );
}
