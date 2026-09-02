import { useEffect, useState } from 'react';
import { testimonials } from '../data/content.js';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const goTo = (i) => setIndex(i);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="section section--alt testimonials-section" id="testimonials">
      <div className="container">
        <span className="section-eyebrow" style={{ textAlign: 'center', display: 'block' }}>
          Client Feedback
        </span>
        <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '40px' }}>
          What Our Clients Say
        </h2>

        <div className="testimonial-slider">
          <span className="testimonial-quote-icon" aria-hidden="true">&ldquo;</span>

          <div className="testimonial-card" key={index}>
            <div className="testimonial-card__avatar-wrap">
              <img
                className="testimonial-card__avatar"
                src={current.avatar}
                alt={`Photo of ${current.name}`}
              />
            </div>
            <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p className="testimonial-card__quote">&ldquo;{current.quote}&rdquo;</p>
            <div className="testimonial-card__name">{current.name}</div>
            <div className="testimonial-card__role">{current.role}</div>

            <div className="testimonial-card__progress" key={`progress-${index}`}>
              <span></span>
            </div>
          </div>

          <div className="slider-controls">
            <button className="slider-arrow" onClick={prev} aria-label="Previous testimonial">‹</button>
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? 'active' : ''}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                ></button>
              ))}
            </div>
            <button className="slider-arrow" onClick={next} aria-label="Next testimonial">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
