import { useState } from 'react';
import { Briefcase, User, Mail, Phone, FileText, CheckCircle2 } from 'lucide-react';
import { careerRoles } from '../data/content.js';

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <div className="page-hero page-hero--careers">
        <div className="container">
          <span className="section-eyebrow">Join Our Team</span>
          <h1>Careers at Densco Ventures</h1>
        </div>
      </div>

      <section className="section" id="careers">
        <div className="container">
          <span className="section-eyebrow careers-eyebrow">Open Positions</span>
          <h2 className="section-heading">Current Opportunities</h2>
          <p className="section-intro" style={{ marginBottom: '40px' }}>
            We are always looking for disciplined, reliable individuals to join our security
            team. Browse open roles below and submit your application.
          </p>

          <div className="careers-roles-grid">
            {careerRoles.map((role) => (
              <div className="careers-role-card" key={role.id}>
                <div className="careers-role-card__header">
                  <div className="careers-role-card__icon">
                    <Briefcase size={22} />
                  </div>
                  <h3>{role.title}</h3>
                </div>
                <p className="careers-role-card__summary">{role.summary}</p>
                <span className="careers-role-card__label">Requirements</span>
                <ul className="careers-role-card__list">
                  {role.requirements.map((req, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="careers-role-card__check" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="careers-apply-card">
            <div className="careers-apply-card__header">
              <div className="careers-apply-card__icon">
                <FileText size={22} />
              </div>
              <div>
                <span className="section-eyebrow careers-eyebrow">Take The Next Step</span>
                <h2 className="section-heading" style={{ marginBottom: '10px' }}>Apply Now</h2>
              </div>
            </div>
            <p className="section-intro" style={{ marginBottom: '30px' }}>
              Fill in your details below and our HR team will review your application.
            </p>

            {submitted ? (
              <div className="careers-success">
                <CheckCircle2 size={40} className="careers-success__icon" />
                <h3>Thank you for applying!</h3>
                <p>
                  We have received your application. Our HR team will contact you if you are
                  shortlisted.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__field">
                  <User className="contact-form__icon" size={18} />
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>

                <div className="contact-form__field">
                  <Mail className="contact-form__icon" size={18} />
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>

                <div className="contact-form__field">
                  <Phone className="contact-form__icon" size={18} />
                  <input type="tel" name="phone" placeholder="Your Phone Number" required />
                </div>

                <div className="contact-form__field">
                  <Briefcase className="contact-form__icon" size={18} />
                  <select name="role" defaultValue="" required>
                    <option value="" disabled>Select Role You're Applying For</option>
                    {careerRoles.map((role) => (
                      <option key={role.id} value={role.title}>{role.title}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-form__field contact-form__field--textarea">
                  <FileText className="contact-form__icon" size={18} />
                  <textarea
                    name="message"
                    placeholder="Tell us about your experience, qualifications, and why you'd like to join Densco Ventures..."
                    required
                  />
                </div>

                {error && <p className="careers-error">{error}</p>}

                <button type="submit" className="btn btn--red" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
