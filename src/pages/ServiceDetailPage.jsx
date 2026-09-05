import { useParams, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, ChevronRight } from 'lucide-react';
import { serviceDetails, company } from '../data/content.js';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails.find((s) => s.id === id);

  if (!service) {
    return (
      <main className="section">
        <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
          <h2 className="section-heading section-heading--navy">Service not found</h2>
          <Link to="/our-services" className="btn btn--primary" style={{ marginTop: '20px', display: 'inline-block' }}>
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const others = serviceDetails.filter((s) => s.id !== id).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <div className="service-page__hero">
        <img
          src={service.images ? service.images[0] : service.image}
          alt={service.alt}
          className="service-page__hero-img"
        />
        <div className="service-page__hero-overlay" />
        <div className="container service-page__hero-content">
          <button onClick={() => navigate('/our-services')} className="service-page__back">
            <ArrowLeft size={16} /> Back to Services
          </button>
          {service.badge && <span className="service-page__badge">{service.badge}</span>}
          <div className="service-page__hero-heading">
            <div className="service-page__hero-icon">
              <service.icon size={28} strokeWidth={2} />
            </div>
            <h1 className="service-page__title">{service.title}</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="section">
        <div className="container service-page__grid">
          <div>
            <span className="section-eyebrow">Overview</span>
            <h2 className="section-heading section-heading--navy" style={{ marginBottom: '18px' }}>
              About This Service
            </h2>
            {service.paragraphs.map((p, i) => (
              <p key={i} className="service-page__paragraph">{p}</p>
            ))}

            {service.highlights && (
              <ul className="service-detail__checklist" style={{ marginTop: '24px' }}>
                {service.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}

            {service.bullets && (
              <ul className="service-detail__bullets" style={{ marginTop: '24px' }}>
                {service.bullets.map((b) => (
                  <li key={b}>
                    <span className="service-detail__bullet-icon">
                      <CheckCircle style={{ width: '11px', height: '11px', color: '#fff' }} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {service.images && (
              <div className="service-page__gallery">
                {service.images.map((src, i) => (
                  <img key={i} src={src} alt={service.alt} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <div>
            <div className="service-page__cta">
              <h3>Ready to get started?</h3>
              <p>Our team will assess your needs and provide a custom quote.</p>
              <Link to="/contact" className="btn btn--primary service-page__cta-btn">
                Request a Quote
              </Link>
              <a href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="btn btn--primary service-page__cta-btn" style={{ marginTop: '10px', background: '#1B3A5C' }}>
                Call {company.phones[0]}
              </a>
            </div>

            <div className="control-room-strip">
              <div className="control-room-strip__header">
                <span>Control Room</span>
                <span className="control-room-strip__live">
                  <span className="control-room-strip__dot" />
                  Active 24/7
                </span>
              </div>
              <div className="control-room-strip__grid">
                <a href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="control-room-strip__item">
                  <span className="control-room-strip__label">Emergency</span>
                  <span className="control-room-strip__number">{company.phones[0]}</span>
                </a>
                <a href={`tel:${company.phones[1].replace(/\s/g, '')}`} className="control-room-strip__item">
                  <span className="control-room-strip__label">Office</span>
                  <span className="control-room-strip__number">{company.phones[1]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-heading section-heading--navy" style={{ marginBottom: '24px' }}>
            Other Services
          </h2>
          <div className="other-services-grid">
            {others.map((s) => (
              <Link to={`/services/${s.id}`} key={s.id} className="other-service-card">
                <div className="other-service-card__img">
                  <img src={s.images ? s.images[0] : s.image} alt={s.alt} />
                  <div className="other-service-card__icon">
                    <s.icon size={20} strokeWidth={2} />
                  </div>
                </div>
                <div className="other-service-card__body">
                  <h3>{s.title}</h3>
                  {s.paragraphs?.[0] && (
                    <p>{s.paragraphs[0].slice(0, 90)}{s.paragraphs[0].length > 90 ? '…' : ''}</p>
                  )}
                  <span className="other-service-card__link">
                    View service <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
