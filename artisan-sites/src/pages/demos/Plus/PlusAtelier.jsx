import { demoArtisan as a } from '../../../data/demoArtisan.js';
import { demoImages } from '../../../data/demoImages.js';

export default function PlusAtelier() {
  return (
    <section className="dp-section" style={{ background: '#fff' }}>
      <div className="dp-inner">
        <div className="dp-story">
          <div className="dp-story-text">
            <p className="dp-eyebrow">L'atelier</p>
            <h2 style={{ marginBottom: 32 }}>Une histoire <em>d'artisan</em>.</h2>
            <p>{a.longStory}</p>
            <p>
              Chaque chantier est l'occasion de faire les choses bien : un travail
              propre, des explications claires, un espace laissé impeccable en
              partant. C'est comme ça que la confiance se construit, chantier après
              chantier.
            </p>
          </div>
          <div
            className="dp-story-visual"
            style={{
              backgroundImage: `url(${demoImages.plusAtelier})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
}
