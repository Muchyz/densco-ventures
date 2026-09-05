import { useParams, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, ChevronRight, Send, Phone, Radio } from 'lucide-react';
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
      <div
        className="page-hero--service"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8,22,39,0.65) 0%, rgba(11,29,51,0.45) 45%, rgba(8,22,39,0.8) 100%), url(${service.images ? service.images[0] : service.image})`,
        }}
      >
        <div className="container">
          {service.badgeImage && (
            <img src={service.badgeImage} alt={`${service.title} badge`} className="service-page__hero-badge-img" />
          )}
          {service.badge && <span className="service-page__badge">{service.badge}</span>}
          <span className="section-eyebrow">Our Services</span>
          <h1>{service.title}</h1>
        </div>
      </div>

      {/* Back bar */}
      <div className="service-page__back-bar">
        <div className="container">
          <button onClick={() => navigate('/our-services')} className="service-page__back service-page__back--light">
            <ArrowLeft size={16} /> Back to Services
          </button>
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
              <div className="service-page__cta-icon">
                <Send size={22} strokeWidth={2} />
              </div>
              <h3>Ready to get started?</h3>
              <p>Our team will assess your needs and provide a custom quote.</p>
              <Link to="/contact" className="service-page__cta-btn service-page__cta-btn--primary">
                <Send size={16} /> Request a Quote
              </Link>
              <a href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="service-page__cta-btn service-page__cta-btn--outline">
                <Phone size={16} /> Call {company.phones[0]}
              </a>
            </div>

            <div className="control-room-strip">
              <div className="control-room-strip__header">
                <span className="control-room-strip__title">
                  <Radio size={15} /> Control Room
                </span>
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
