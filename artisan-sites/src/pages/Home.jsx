import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import OfferCard from '../components/OfferCard.jsx';
import FaqItem from '../components/FaqItem.jsx';
import { siteConfig } from '../config/siteConfig.js';
import '../styles/commercial.css';

export default function Home() {
  const problems = [
    { t: "Pas de site, ou un site qui date", d: "Vos clients vous cherchent en ligne et ne trouvent rien — ou tombent sur une page qui ne vous ressemble pas." },
    { t: "Présent uniquement sur Facebook", d: "Les réseaux sociaux, c'est bien. Mais ça ne remplace pas un site à vous, qui vous appartient." },
    { t: "Difficile à trouver sur Google", d: "Sans site structuré, votre métier et votre ville sont invisibles pour les recherches locales." },
    { t: "Réalisations mal mises en valeur", d: "Vos plus beaux chantiers méritent mieux que quelques photos perdues dans un fil." },
    { t: "Clients obligés d'appeler pour tout", d: "Horaires, zone d'intervention, devis : tout doit être lisible en 30 secondes." },
    { t: "Illisible sur téléphone", d: "La majorité de vos clients vous consultent depuis leur mobile. Si c'est compliqué, ils partent." },
  ];

  const solutions = [
    { t: "Professionnel", d: "Un site qui inspire confiance dès la première seconde." },
    { t: "Pensé mobile", d: "Parfait sur téléphone, tablette et ordinateur." },
    { t: "Clair et rapide", d: "Vos informations essentielles accessibles en un coup d'œil." },
    { t: "Adapté à votre métier", d: "Chaque section reflète votre activité, pas un modèle générique." },
    { t: "Orienté contact", d: "Pensé pour générer des appels et des demandes de devis." },
    { t: "Simple à gérer", d: "Vous n'avez rien à installer. Je m'occupe de tout." },
  ];

  const why = [
    { t: "Interlocutrice unique", d: "Vous parlez toujours à la même personne, du premier échange à la mise en ligne." },
    { t: "Proximité", d: "Je démarre mon activité dans l'Oise, avec une vraie approche locale." },
    { t: "Compréhension du besoin", d: "Un artisan n'est pas un dossier anonyme. Je prends le temps de comprendre votre métier." },
    { t: "Tarifs transparents", d: "Pas de surprise. Tout est annoncé, tout est clair." },
    { t: "Pas de jargon", d: "Vous n'entendrez pas de mots compliqués. Juste des solutions concrètes." },
    { t: "Accompagnement humain", d: "Vous n'êtes pas à l'aise avec l'informatique ? C'est prévu. Je vous guide." },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Création de sites internet · {siteConfig.area.mainDepartment}</p>
            <h1>Votre savoir-faire mérite un site qui travaille pour vous.</h1>
            <p className="hero-lead">
              Je crée des sites internet modernes, professionnels et simples pour les
              artisans et petites entreprises locales. Pensés pour être trouvés,
              compris, et contactés.
            </p>
            <div className="hero-cta">
              <a href="#offres" className="btn btn-primary">Découvrir les offres</a>
              <Link to="/demos" className="btn btn-outline">Voir les démonstrations</Link>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <strong>3 niveaux</strong>
                <span>Du plus simple au plus immersif</span>
              </div>
              <div className="hero-meta-item">
                <strong>100% mobile</strong>
                <span>Tous les sites sont pensés pour le téléphone</span>
              </div>
              <div className="hero-meta-item">
                <strong>Accompagnement</strong>
                <span>Une seule interlocutrice, du début à la fin</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="container">
            <p className="eyebrow">Ce que je vois souvent</p>
            <h2 className="section-title">
              Votre métier est excellent.<br />Votre présence en ligne, parfois moins.
            </h2>
            <p className="section-lead">
              Rien de grave. La plupart des artisans que je rencontre ont simplement
              autre chose à faire que de s'occuper d'un site internet. Voici ce qu'on
              peut améliorer ensemble.
            </p>
            <div className="problems-grid">
              {problems.map((p) => (
                <div key={p.t} className="problem-card">
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section solution">
          <div className="container">
            <p className="eyebrow">Ce que je propose</p>
            <h2 className="section-title">
              Un site clair, professionnel, pensé pour votre métier.
            </h2>
            <p className="section-lead" style={{ color: 'rgba(247,243,236,0.7)' }}>
              Pas de site générique. Chaque projet est construit autour de votre
              activité, de vos clients et de votre façon de travailler.
            </p>
            <div className="solution-grid">
              {solutions.map((s) => (
                <div key={s.t} className="solution-item">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="offres">
          <div className="container">
            <p className="eyebrow">Les offres</p>
            <h2 className="section-title">Trois niveaux, une même exigence.</h2>
            <p className="section-lead">
              Chaque niveau correspond à un besoin différent. Vous pouvez voir
              exactement à quoi ressemble chaque formule grâce aux démonstrations
              interactives.
            </p>
            <div className="offers-grid">
              {siteConfig.offers.map((o) => (
                <OfferCard key={o.id} offer={o} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="container">
            <p className="eyebrow">Démonstrations</p>
            <h2 className="section-title">Voyez la différence par vous-même.</h2>
            <p className="section-lead">
              Chaque démo présente le même artisan fictif — un plombier de
              {' '}{siteConfig.area.launchCity} — mais dans les trois niveaux. C'est
              la meilleure façon de comprendre immédiatement la progression.
            </p>
            <div className="demos-teaser">
              <Link to="/demo/essentiel" className="demo-teaser-card demo-essentiel">
                <div>
                  <h3>Essentiel</h3>
                  <p>Simple, direct, rassurant</p>
                </div>
              </Link>
              <Link to="/demo/plus" className="demo-teaser-card demo-plus">
                <div>
                  <h3>Plus</h3>
                  <p>Éditorial, complet, professionnel</p>
                </div>
              </Link>
              <Link to="/demo/pro" className="demo-teaser-card demo-pro">
                <div>
                  <h3>Pro</h3>
                  <p>Immersif, premium, mémorable</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Ma façon de travailler</p>
            <h2 className="section-title">Simple, du premier échange à la mise en ligne.</h2>
            <p className="section-lead">
              Vous n'avez pas besoin d'être à l'aise avec l'informatique. Je vous
              accompagne à chaque étape, sans jargon.
            </p>
            <div className="process-list">
              {siteConfig.process.map((p) => (
                <div key={p.step} className="process-item">
                  <div className="process-step">{p.step}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="container">
            <p className="eyebrow">Pourquoi travailler avec moi</p>
            <h2 className="section-title">Une approche humaine et personnalisée.</h2>
            <p className="section-lead">
              Je démarre mon activité. Je ne vous promettrai pas des centaines de
              clients satisfaits. En revanche, je m'engage sur une chose : un
              accompagnement sérieux, une écoute réelle, et un site dont vous serez fier.
            </p>
            <div className="why-grid">
              {why.map((w) => (
                <div key={w.t} className="why-item">
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow text-center">Questions fréquentes</p>
            <h2 className="section-title mx-auto text-center">
              Tout ce que vous vous demandez peut-être.
            </h2>
            <div className="faq-list" style={{ marginTop: 48 }}>
              {siteConfig.faq.map((f) => (
                <FaqItem key={f.q} question={f.q} answer={f.a} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
          <div className="container text-center">
            <h2 className="section-title mx-auto" style={{ color: 'var(--paper)' }}>
              Parlons de votre projet.
            </h2>
            <p className="section-lead mx-auto" style={{ color: 'rgba(247,243,236,0.7)' }}>
              Un échange simple, sans engagement, pour voir ce qui serait le plus
              adapté à votre activité.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              <Link to="/contact" className="btn btn-accent">Demander un devis</Link>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="btn btn-outline" style={{ borderColor: 'var(--paper)', color: 'var(--paper)' }}>
                Appeler maintenant
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
