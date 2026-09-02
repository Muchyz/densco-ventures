import { useEffect, useRef, useState } from 'react';
import { clientLogos } from '../data/content.js';

export default function Clients() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '-15% 0px -15% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section--tight clients-section" ref={sectionRef}>
      <div className="container">
        <span className="section-eyebrow clients-eyebrow">Who We Work With</span>
        <h2 className="section-heading clients-heading">
          Our Trusted Partners
        </h2>
        <p className="clients-sub">
          Authorized dealers and distributors of world-class security equipment brands
        </p>
        <div className={`clients-grid${visible ? ' clients-grid--visible' : ''}`}>
          {clientLogos.map((logo) => (
            <div className="client-tile" key={logo.id}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
