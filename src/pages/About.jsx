import SEO from '../components/SEO.jsx';
import About from '../components/About.jsx';
import Mission from '../components/Mission.jsx';
import Vision from '../components/Vision.jsx';
import CoreValues from '../components/CoreValues.jsx';
import Personnel from '../components/Personnel.jsx';
import TrainingStandards from '../components/TrainingStandards.jsx';
import Divider from '../components/Divider.jsx';

export default function AboutPage() {
  return (
    <main>
      <SEO
        title="About Densco Ventures Limited | Security Company in Kitui, Kenya"
        description="Learn about Densco Ventures Limited, a professional security company based in Kitui, Kenya. Discover our mission, vision, core values, and trained personnel."
        path="/about"
      />
      <div className="page-hero page-hero--about">
        <div className="container">
          <span className="section-eyebrow">Get To Know Us</span>
          <h1>About Densco Ventures</h1>
        </div>
      </div>

      <About />
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
    </main>
  );
}
