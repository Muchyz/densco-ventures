import { ShieldCheck } from 'lucide-react';
import { protectedProperties } from '../data/content.js';

export default function ProtectedProperties() {
  return (
    <section className="section section--tight protected-section">
      <div className="container">
        <span className="section-eyebrow protected-eyebrow">Trusted To Protect</span>
        <h2 className="section-heading protected-heading">
          Properties We Protect
        </h2>
        <p className="protected-sub">
          A selection of the institutions, businesses and premises under our security coverage
        </p>
        <div className="protected-grid">
          {protectedProperties.map((name) => (
            <div className="protected-pill" key={name}>
              <ShieldCheck size={16} strokeWidth={2} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
