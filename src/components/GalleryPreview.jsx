import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { galleryImages } from '../data/content.js';

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 4);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <span className="section-eyebrow">See Us In Action</span>
        <h2 className="section-heading">Our Gallery</h2>
        <p className="section-intro" style={{ marginBottom: '26px' }}>
          Take a look at our guards, equipment, and operations in action.
        </p>

        <div className="gallery-preview-grid">
          {preview.map((img) => (
            <div key={img.id} className="gallery-preview-item">
              <img src={img.src} alt={img.caption} loading="lazy" />
            </div>
          ))}
        </div>

        <Link to="/gallery" className="btn btn--red gallery-preview-cta">
          <Camera size={18} strokeWidth={2.2} />
          View Photo Gallery
        </Link>
      </div>
    </section>
  );
}
