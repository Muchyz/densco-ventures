export default function Personnel() {
  return (
    <section className="section section--alt">
      <div className="container personnel">
        <div className="personnel__img">
          <img
            src="/team/formation.jpg"
            alt="Vetted Densco Ventures personnel lined up for inspection"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '16px' }}
          />
        </div>
        <div>
          <span className="section-eyebrow">Trained &amp; Disciplined</span>
          <h2 className="section-heading">Our Personnel</h2>
          <p className="section-intro">
            Our security guards are carefully vetted and professionally trained. Most of
            our officers are former National Youth Service (NYS) personnel with
            paramilitary training, discipline, and strong work ethics. This ensures they
            are capable of handling security responsibilities with professionalism and
            efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
