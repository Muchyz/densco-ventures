import { director } from '../data/content.js';

export default function DirectorMessage() {
  const [lead, ...rest] = director.message;

  return (
    <section className="section director-section" id="director-message">
      <span className="director__watermark" aria-hidden="true">&ldquo;</span>
      <div className="container director">
        <div className="director__photo">
          <div className="director__photo-frame">
            <img
              src={director.photo}
              alt={`Portrait of ${director.name}, ${director.title}`}
              className="director__photo-img"
            />
          </div>
          <div className="director__signature">
            <h3 className="director__name">{director.name}</h3>
            <span className="director__rule" />
            <p className="director__title">{director.title}</p>
          </div>
        </div>
        <div className="director__content">
          <span className="section-eyebrow">Director's Message</span>
          <p className="director__lead">{lead}</p>
          <div className="director__message">
            {rest.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
