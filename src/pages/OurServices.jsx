import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
      {/* detailed=true renders the full write-up for each service */}
      <div className="our-services-page">
        <Services detailed={true} />
      </div>
    </main>
  );
}
