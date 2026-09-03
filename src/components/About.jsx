import { Link } from 'react-router-dom';

export default function About({ preview = false }) {
  return (
    <section className="section about-section" id="about">
      <div className={preview ? "container about-split about-split--preview" : "container split about-split"}>
        <div>
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="section-heading about-heading">About Us</h2>
{preview ? (
            <>
              <p className="section-intro about-intro">
            DENSCO VENTURES LIMITED is a security company located at Target House,
            Kilungya Street, Kitui Township, established in 2020 as a security
            consultancy firm to address the rising need for intelligent security
            solutions. We have since diversified into a full range of security
            products and services, including manned guarding, CCTV installation,
            electric fencing, security training, and the supply of security
            accessories.
          </p>
              <Link to="/about" className="btn btn--primary about-learnmore">
                Learn More About Us
              </Link>
            </>
          ) : (
            <>
          <p className="section-intro about-intro">
            DENSCO VENTURES LIMITED is a security company located at Target House,
            Kilungya Street, Kitui Township, established in 2020 as a security
            consultancy firm to address the rising need for intelligent security
            solutions. We have since diversified into a full range of security
            products and services, including manned guarding, CCTV installation,
            electric fencing, security training, and the supply of security
            accessories.
          </p>
          <p className="section-intro about-intro">
            Over the years, Densco has developed a credible reputation as a leading
            provider of security solutions across the East Africa region, with a
            presence in Kenya, Uganda, and Tanzania. We recognize the fast-changing
            pace of security requirements and have uniquely positioned ourselves as
            a dependable answer to modern security demands, incorporating the latest
            technology through partnerships with world-leading manufacturers of
            security products and equipment.
          </p>
          <p className="section-intro about-intro">
            We serve a wide client base including companies, parastatals, county
            government, banks, and both residential and business premises in urban
            and rural areas, always offering customized solutions designed around
            each client's specific needs. The company has also diversified into
            non-banking financial services, including insurance broking, home
            loans, personal loans, business loans, short-term loans, and debt
            collection services.
          </p>
            </>
          )}
        </div>
        <div className="about-photo">
          <div className="about-photo__frame">
            <img
              src="/team/formation.jpg"
              alt="Densco Ventures guards standing in formation outside the head office"
              className="about-photo__img"
            />
          </div>
          <span className="about-photo__badge">Est. Kitui, Kenya</span>
        </div>
      </div>
    </section>
  );
}
