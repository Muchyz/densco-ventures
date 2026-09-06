import SEO from '../components/SEO.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function ContactPage() {
  return (
    <main>
      <SEO
        title="Contact Us | Densco Ventures Limited - Kitui, Kenya"
        description="Get in touch with Densco Ventures Limited for a free security consultation. Available 24/7 in Kitui, Mutomo, Mwingi, Zombe, Matuu, Wote, and Nairobi."
        path="/contact"
      />
      <div className="page-hero page-hero--contact">
        <div className="container">
          <span className="section-eyebrow">We're Here To Help</span>
          <h1>Contact Us</h1>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
