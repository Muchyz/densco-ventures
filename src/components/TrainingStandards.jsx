import { trainingStandards } from '../data/content.js';

export default function TrainingStandards() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">Consistently Prepared</span>
        <h2 className="section-heading">Security Training Standards</h2>
        <p className="section-intro" style={{ marginBottom: '40px' }}>
          Densco Ventures Limited maintains strict training standards to ensure
          all security personnel are competent, disciplined, and capable of handling
          modern security challenges. Our guards undergo training in the following areas:
        </p>
        <div className="timeline">
          {trainingStandards.map((item, i) => (
            <div className="timeline__step" key={item.label}>
              <div className="timeline__marker">{i + 1}</div>
              <div className="timeline__content">
                <b>{item.label}</b>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
