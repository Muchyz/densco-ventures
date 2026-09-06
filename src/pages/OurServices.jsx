import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Services from '../components/Services.jsx';

export default function OurServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [location]);

  return (
    <main>
      <SEO
        title="Our Security Services | Densco Ventures Limited - Kitui, Kenya"
        description="Explore our full range of security services: guarding, CCTV surveillance, alarm systems, access control, and private investigations across Kitui and surrounding regions."
        path="/our-services"
      />
      {/* detailed=true renders the full write-up for each service */}
      <div className="our-services-page">
        <Services detailed={true} />
      </div>
    </main>
  );
}
