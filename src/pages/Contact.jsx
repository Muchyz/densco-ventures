import ContactSection from '../components/ContactSection.jsx';

export default function ContactPage() {
  return (
    <main>
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
