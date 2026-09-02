import { ShieldCheck, Briefcase, Award, HandHeart, Smile } from 'lucide-react';
import { coreValues } from '../data/content.js';

const icons = [ShieldCheck, Briefcase, Award, HandHeart, Smile];

export default function CoreValues() {
  return (
    <section className="section values-section-v4">
      <div className="container">
        <span className="section-eyebrow">What Guides Us</span>
        <h2 className="section-heading" style={{ marginBottom: '44px' }}>
          Our Core Values
        </h2>
        <div className="values-list-v4">
          {coreValues.map((value, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div className="values-list-v4__row" key={value}>
                <span className="values-list-v4__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="values-list-v4__icon">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <span className="values-list-v4__label">{value}</span>
                <span className="values-list-v4__underline" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
