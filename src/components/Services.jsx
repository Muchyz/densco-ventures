import { CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';
import { coreServices, serviceDetails } from '../data/content.js';

// `detailed` controls whether the full sub-sections (Guarding, CCTV, Alarm, etc.)
// render below the overview cards. The homepage shows a shorter version;
// the dedicated /our-services page passes detailed={true} for the full write-up.
export default function Services({ detailed = false }) {
  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <span className="section-eyebrow">What We Offer</span>
        <h2 className="section-heading" style={{ marginBottom: '30px' }}>
          Our Services
        </h2>

        <div className="services-grid">
          {coreServices.map((s) => (
            <div className="card service-card" key={s.title}>
              <div className="service-card__icon"><s.icon size={28} strokeWidth={2} /></div>
              <h3>{s.title}</h3>
            </div>
          ))}
        </div>

        {detailed === false && (
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="/our-services" className="btn btn--primary">
              View All Services
            </Link>
          </div>
        )}

        {detailed && (
          <div style={{ marginTop: '54px' }}>
            {serviceDetails.map((svc) => (
              <div className="service-detail" key={svc.id} id={svc.id}>
                <div className="service-detail__img">
                  {svc.badge && (
                    <span className="service-detail__badge">{svc.badge}</span>
                  )}
                  <img src={svc.image} alt={svc.alt} />
                </div>
                <div className="service-detail__body">
                  <div className="service-detail__title-row">
                    <div className="service-detail__icon">
                      <svc.icon size={24} strokeWidth={2} />
                    </div>
                    <h3 className="section-heading section-heading--navy" style={{ fontSize: '1.35rem', margin: 0 }}>
                      {svc.title}
                    </h3>
                  </div>
                  {svc.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {svc.highlights && (
                    <ul className="service-detail__checklist">
                      {svc.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                  {svc.bullets && (
                    <ul className="service-detail__bullets">
                      {svc.bullets.map((b) => (
                        <li key={b}>
                          <span className="service-detail__bullet-icon">
                            <CheckCircle style={{ width: "11px", height: "11px", color: "#fff" }} strokeWidth={3} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
