import { Telescope } from 'lucide-react';

export default function Vision() {
  return (
    <div className="manifesto-panel manifesto-panel--light">
      <Telescope className="manifesto-panel__watermark" strokeWidth={1} />
      <span className="manifesto-panel__quote">&ldquo;</span>
      <span className="manifesto-panel__label">Our Vision</span>
      <p className="manifesto-panel__text">
        To be among the top ranked in the security market offering a vast array
        of products and services that are able to create value to our clients
        through a highly motivated staff who are performance driven.
      </p>
    </div>
  );
}
