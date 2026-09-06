import SEO from '../components/SEO.jsx';
import Gallery from '../components/Gallery.jsx';

export default function GalleryPage() {
  return (
    <main>
      <SEO
        title="Gallery | Densco Ventures Limited Security Services"
        description="View photos of our trained security officers on duty, in formation, and protecting client sites across Kitui, Kenya."
        path="/gallery"
      />
      <Gallery />
    </main>
  );
}
