import { useState } from 'react';
import { galleryImages } from '../data/content.js';

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <span className="section-eyebrow gallery-eyebrow">See Us In Action</span>
        <h2 className="section-heading gallery-heading">Our Gallery</h2>
        <p className="section-intro" style={{ marginBottom: '26px' }}>
          Take a look at our guards, equipment, and operations in action.
        </p>

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <button
              key={item.id}
              className="gallery-item"
              onClick={() => setActive(item)}
              aria-label={item.type === 'video' ? `Play video: ${item.caption}` : `Enlarge image: ${item.caption}`}
            >
              {item.type === 'video' ? (
                <>
                  <video src={item.src} muted playsInline preload="metadata" />
                  <span className="gallery-item__play-icon" aria-hidden="true">▶</span>
                </>
              ) : (
                <img src={item.src} alt={item.caption} loading="lazy" />
              )}
              <span className="gallery-item__overlay">
                <span className="gallery-item__caption">{item.caption}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            className="lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ✕
          </button>
          {active.type === 'video' ? (
            <video
              src={active.src}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img src={active.src} alt={active.caption} onClick={(e) => e.stopPropagation()} />
          )}
        </div>
      )}
    </section>
  );
}
