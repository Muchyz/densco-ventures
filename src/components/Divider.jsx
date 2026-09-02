import { company } from '../data/content.js';

export default function Divider() {
  return (
    <div className="tagline-divider" aria-hidden="true">
      <span>{company.tagline}</span>
    </div>
  );
}
