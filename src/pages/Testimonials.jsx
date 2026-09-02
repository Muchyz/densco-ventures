import Testimonials from '../components/Testimonials.jsx';
import { testimonials } from '../data/content.js';

export default function TestimonialsPage() {
  return (
    <main>
      <div className="page-hero page-hero--testimonials"></div>

      <Testimonials />

      {/* Extra detail for the dedicated page: every testimonial listed in full */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-heading section-heading--navy" style={{ textAlign: 'center', marginBottom: '30px' }}>
            All Client Reviews
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card testimonial-card--list" key={t.name}>
                <div className="testimonial-card__avatar-wrap">
                  <img className="testimonial-card__avatar" src={t.avatar} alt={`Photo of ${t.name}`} />
                </div>
                <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-card__name">{t.name}</div>
                <div className="testimonial-card__role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
