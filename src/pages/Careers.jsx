import { useState } from 'react';
import { Briefcase, User, Mail, Phone, FileText } from 'lucide-react';
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
        <p className="section-intro" style={{ marginBottom: '30px' }}>
          We are always looking for disciplined, reliable individuals to join our security team.
          Browse open roles below and submit your application.
        </p>

        <div className="careers-roles" style={{ marginBottom: '40px' }}>
          {careerRoles.map((role) => (
            <div className="card" key={role.id} style={{ padding: '24px', marginBottom: '20px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={20} /> {role.title}
              </h3>
              <p>{role.summary}</p>
              <ul>
                {role.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: '30px' }}>
          <h2 style={{ marginBottom: '16px' }}>Apply Now</h2>

          {submitted ? (
            <div>
              <h3 style={{ marginBottom: '8px' }}>Thank you for applying!</h3>
              <p style={{ margin: 0 }}>
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

              {error && <p style={{ color: '#c0392b' }}>{error}</p>}

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
