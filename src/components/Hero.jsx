import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, Award, ArrowRight, PhoneCall } from 'lucide-react';
import { company } from '../data/content.js';

const heroImages = [
  { src: '/team/guard-1.jpg', alt: 'Densco Ventures officers on duty' },
  { src: '/team/guard-2.jpg', alt: 'Densco Ventures officers on patrol' },
  { src: '/team/guard-3.jpg', alt: 'Densco Ventures team at client site' },
];

const badges = ['Licensed', 'Fully Insured', '24/7 Available'];

function CountUp({ value }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, '0'));
  const startedRef = useRef(false);

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const duration = 1200;
          const startTime = performance.now();
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const current = Math.floor(progress * target);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplay(value);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__media">
        {heroImages.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`hero__media-slide${i === activeIndex ? ' active' : ''}`}
          />
        ))}
        <div className="hero__scrim" />
      </div>

      <div className="hero__media-dots">
        {heroImages.map((img, i) => (
          <button
            key={img.src}
            className={`hero__media-dot${i === activeIndex ? ' active' : ''}`}
            aria-label={`Show photo ${i + 1}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      <div className="hero__layout container">
        <div className="hero__badges hero__anim hero__anim-1">
          {badges.map((b) => (
            <span key={b} className="hero__badge">✓ {b}</span>
          ))}
        </div>

        <div className="hero__spacer" />

        <div className="hero__center">
          <div className="hero__eyebrow-row hero__anim hero__anim-2">
            <span className="hero__eyebrow-rule" />
            <span className="hero__eyebrow">{company.tagline}</span>
          </div>

          <h1 className="hero__headline hero__anim hero__anim-3">
            Professional Security <span className="hero__headline-accent">Solutions</span> You Can Trust
          </h1>

          <p className="hero__subtext hero__anim hero__anim-4">
            Trained, licensed guards available 24/7 — tailored protection for your home, business, or event.
          </p>

          <div className="hero__actions hero__anim hero__anim-5">
            <Link to="/contact" className="btn btn--red">
              Free Consultation
              <ArrowRight size={17} strokeWidth={2.4} />
            </Link>
            <a href="#services" className="btn btn--outline">
              <PhoneCall size={16} strokeWidth={2.4} />
              Our Services
            </a>
          </div>

          <div className="hero-stats hero__anim hero__anim-6">
            <div className="hero-stats__item">
              <Clock size={16} strokeWidth={2.2} />
              <div>
                <strong><CountUp value="24/7" /></strong>
                <span>Emergency Response</span>
              </div>
            </div>
            <div className="hero-stats__item">
              <ShieldCheck size={16} strokeWidth={2.2} />
              <div>
                <strong><CountUp value="100%" /></strong>
                <span>Licensed &amp; Insured</span>
              </div>
            </div>
            <div className="hero-stats__item">
              <Award size={16} strokeWidth={2.2} />
              <div>
                <strong><CountUp value="10+" /></strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__spacer" />
      </div>
    </section>
  );
}
