import { useState } from 'react';
import { ShieldCheck, BadgeCheck, PartyPopper, Clock, Camera } from 'lucide-react';
import { faqs } from '../data/content.js';

const icons = [ShieldCheck, BadgeCheck, PartyPopper, Clock, Camera];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i));

  return (
    <section className="section" id="faq">
      <div className="container">
        <span className="section-eyebrow">Common Questions</span>
        <h2 className="section-heading" style={{ marginBottom: '30px' }}>
          Frequently Asked Questions
        </h2>

        <div className="accordion">
          {faqs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div className={`accordion-item${openIndex === i ? ' open' : ''}`} key={item.q}>
                <button
                  className="accordion-item__q"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="accordion-item__q-icon">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <span className="accordion-item__q-text">{item.q}</span>
                  <span className="icon">
                    <span className="icon__line icon__line--v" />
                    <span className="icon__line icon__line--h" />
                  </span>
                </button>
                <div className="accordion-item__a">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
