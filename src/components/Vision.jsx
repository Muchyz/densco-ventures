import { Telescope } from 'lucide-react';

export default function Vision() {
  return (
    <div className="manifesto-panel manifesto-panel--light">
      <Telescope className="manifesto-panel__watermark" strokeWidth={1} />
      <span className="manifesto-panel__quote">&ldquo;</span>
      <span className="manifesto-panel__label">Our Vision</span>
      <p className="manifesto-panel__text">
        To be a leading security service provider recognized for professionalism,
        reliability, and innovative security solutions.
      </p>
    </div>
  );
}
