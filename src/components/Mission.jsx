import { Target } from 'lucide-react';

export default function Mission() {
  return (
    <div className="manifesto-panel manifesto-panel--dark">
      <Target className="manifesto-panel__watermark" strokeWidth={1} />
      <span className="manifesto-panel__quote">&ldquo;</span>
      <span className="manifesto-panel__label">Our Mission</span>
      <p className="manifesto-panel__text">
        To provide dependable and professional security services that guarantee safety,
        peace of mind, and protection of our clients&apos; property and assets.
      </p>
    </div>
  );
}
