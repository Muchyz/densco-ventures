import { CheckCircle } from 'lucide-react';
import { whyChooseUs } from '../data/content.js';

export default function WhyChooseUs() {
  return (
    <section className="section section--alt" id="why-choose-us">
      <div className="container">
        <span className="section-eyebrow">The Densco Difference</span>
        <h2 className="section-heading" style={{ marginBottom: '30px' }}>
          Why Choose Us?
        </h2>
        <div className="why-grid">
          {whyChooseUs.map((point) => (
            <div className="why-card" key={point}>
              <div className="why-card__icon">
                <CheckCircle size={22} strokeWidth={2.5} />
              </div>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
