import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import OurServicesPage from './pages/OurServices.jsx';
import GalleryPage from './pages/Gallery.jsx';
import TestimonialsPage from './pages/Testimonials.jsx';
import ContactPage from './pages/Contact.jsx';
import CertificationsPage from './pages/Certifications.jsx';

// Handles anchor-scroll behaviour: if the URL has a #hash, scroll that
// section into view once the new page has rendered. Otherwise scroll to top.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // wait a tick so the target page/section has mounted
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
      <Footer />
    </>
  );
}
