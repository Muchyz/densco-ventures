import SEO from '../components/SEO.jsx';
import Hero from '../components/Hero.jsx';
import Divider from '../components/Divider.jsx';
import About from '../components/About.jsx';
import Mission from '../components/Mission.jsx';
import Vision from '../components/Vision.jsx';
import CoreValues from '../components/CoreValues.jsx';
import Personnel from '../components/Personnel.jsx';
import TrainingStandards from '../components/TrainingStandards.jsx';
import Services from '../components/Services.jsx';
import GalleryPreview from '../components/GalleryPreview.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Clients from '../components/Clients.jsx';
import ProtectedProperties from '../components/ProtectedProperties.jsx';
import FAQ from '../components/FAQ.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Commitment from '../components/Commitment.jsx';
import DirectorMessage from '../components/DirectorMessage.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function Home() {
  return (
    <main>
      <SEO
        title="Densco Ventures Limited | Professional Security Services in Kitui, Kenya"
        description="Licensed security guarding, CCTV, alarm systems, access control, and private investigations in Kitui, Mutomo, Mwingi, Zombe, Matuu, Wote, and Nairobi. Available 24/7."
        path="/"
      />
      <Hero />
      <Divider />

      <About preview={true} />
      <Divider />

      <section className="section section--alt">
        <div className="container mv-grid">
          <Mission />
          <Vision />
        </div>
      </section>

      <CoreValues />
      <Divider />

      <Personnel />
      <TrainingStandards />
      <Divider />

      {/* Homepage shows the overview cards; full write-up lives on /our-services */}
      <Services detailed={true} />
      <Divider />

      <GalleryPreview />
      <Divider />

      <Testimonials />
      <Clients />
      <ProtectedProperties />
      <Divider />

      <FAQ />
      <Divider />

      <WhyChooseUs />
      <Commitment />
      <Divider />

      <DirectorMessage />
      <Divider />

      <ContactSection />
    </main>
  );
}
