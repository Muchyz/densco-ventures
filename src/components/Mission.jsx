import { Target } from 'lucide-react';

export default function Mission() {
  return (
    <div className="manifesto-panel manifesto-panel--dark">
      <Target className="manifesto-panel__watermark" strokeWidth={1} />
      <span className="manifesto-panel__quote">&ldquo;</span>
      <span className="manifesto-panel__label">Our Mission</span>
      <p className="manifesto-panel__text">
        To establish and maintain a long-term partnership with our clients
        through highly innovative value added solutions that will enable
        them meet their desired objectives in security.
      </p>
    </div>
  );
}
