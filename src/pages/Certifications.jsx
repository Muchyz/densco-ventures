import { useState, useRef, useEffect } from 'react';
import { FileBadge, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    id: 'incorporation',
    title: 'Certificate of Incorporation',
    issuer: 'Registrar of Companies, Republic of Kenya',
    refLabel: 'Certificate No.',
    ref: 'PVT-Q7U957K8',
    detail: 'Densco Ventures Limited is duly incorporated as a Private Limited Company under the Companies Act, 2015 (incorporated 30 October 2019).',
    img: '/assets/certifications/incorporation.jpg',
  },
  {
    id: 'psra',
    title: 'PSRA Registration Certificate',
    issuer: 'Private Security Regulatory Authority, Office of the President',
    refLabel: 'Registration No.',
    ref: 'PSRA/BSSL/19/69',
    detail: 'Registered as a Corporate Private Security Service Provider under Section 28 of the Private Security Regulation Act No. 13 of 2016.',
    img: '/assets/certifications/psra.jpg',
  },
  {
    id: 'kra-pin',
    title: 'KRA PIN Certificate',
    issuer: 'Kenya Revenue Authority',
    refLabel: 'PIN',
    ref: 'P052375882S',
    detail: 'Registered taxpayer with active VAT and Company Income Tax obligations.',
    img: '/assets/certifications/kra-pin.jpg',
  },
  {
    id: 'kra-tcc',
    title: 'Tax Compliance Certificate',
    issuer: 'Kenya Revenue Authority',
    refLabel: 'Certificate No.',
    ref: 'KRAEON1441816824',
    detail: 'Confirms that all relevant tax returns have been filed and taxes due have been paid as provided by law.',
    img: '/assets/certifications/kra-tcc.jpg',
  },
  {
    id: 'business-permit',
    title: 'Unified Business Permit (Trade Licence)',
    issuer: 'Nairobi City County',
    refLabel: 'Licence No.',
    ref: 'UBP124342',
    detail: 'Trade licence covering Security Guard Services, valid within Nairobi City County.',
    img: '/assets/certifications/business-permit.jpg',
  },
];

export default function CertificationsPage() {
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-10% 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="page-hero page-hero--certifications">
        <div className="container">
          <span className="section-eyebrow">Fully Licensed &amp; Compliant</span>
          <h1>Certifications &amp; Licensing</h1>
        </div>
      </div>

      <section className="section" id="certifications">
        <div className="container">
          <h2 className="section-heading section-heading--with-icon">
            <span className="section-heading__icon-wrap">
              <FileBadge className="section-heading__icon" />
            </span>
            <span className="section-heading__text">
              Registered, <span className="accent">Licensed</span> &amp; Compliant
            </span>
          </h2>
          <span className="section-eyebrow section-eyebrow--plain">Verified Credentials</span>
          <p className="section-intro" style={{ marginBottom: '30px' }}>
            Densco Ventures Limited operates as a fully registered corporate
            private security provider in Kenya. Tap any certificate below to view it
            in full.
          </p>

          <div className={`cert-grid${visible ? ' cert-grid--visible' : ''}`} ref={gridRef}>
            {certifications.map((cert) => (
              <button
                key={cert.id}
                className="cert-card"
                onClick={() => setActive(cert)}
                aria-label={`View ${cert.title}`}
              >
                <div className="cert-card__thumb">
                  <img src={cert.img} alt={cert.title} loading="lazy" />
                  <span className="cert-card__badge">
                    <ShieldCheck size={16} />
                  </span>
                </div>
                <div className="cert-card__body">
                  <h3>{cert.title}</h3>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <p className="cert-card__ref">{cert.refLabel}: {cert.ref}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            className="lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="cert-lightbox__panel" onClick={(e) => e.stopPropagation()}>
            <img src={active.img} alt={active.title} />
            <div className="cert-lightbox__caption">
              <h3>{active.title}</h3>
              <p>{active.issuer}</p>
              <p>{active.refLabel}: {active.ref}</p>
              <p className="cert-lightbox__detail">{active.detail}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
