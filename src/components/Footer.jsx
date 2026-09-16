import { Link } from 'react-router-dom';
import { company } from '../data/content.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-accent" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/logo.png"
              alt="Densco Ventures Limited circular badge logo"
            />
            <p className="footer-brand-text">
              Protecting people, property, and assets countrywide with
              trained, disciplined, and fully vetted security personnel.
            </p>
            <span className="footer-badge">Countrywide Coverage</span>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/our-services">Our Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Reach Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="footer-contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <span>{company.phones[0]}</span>
              </li>
              <li>
                <span className="footer-contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" opacity="0"/>
                    <path d="M22 6c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6z"/>
                    <path d="m22 6-10 7L2 6"/>
                  </svg>
                </span>
                <span>{company.email}</span>
              </li>
              <li>
                <span className="footer-contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span>{company.poBox}</span>
              </li>
            </ul>
          </div>
        </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", padding: "1.5rem 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p style={{ color: "#8a8a8a", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Crafted with ♥ by</p>
            <a
              href="https://muchyz.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textDecoration: "none",
                transition: "all 0.3s",
                background: "linear-gradient(90deg, #0E2A47, #1e4976, #0E2A47)",
                border: "1px solid rgba(56,189,248,0.5)",
                color: "#38BDF8",
                boxShadow: "0 0 16px rgba(56,189,248,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#38BDF8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Muchyz Digital Agency
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "9999px",
                  pointerEvents: "none",
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                  animation: "shimmer 3s infinite"
                }}
              />
            </a>
          </div>

        <div className="footer-bottom">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <span className="footer-hashtag">{company.hashtag}</span>
        </div>
      </div>
    </footer>
  );
}
