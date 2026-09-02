import { useState } from 'react';
import { User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — this just confirms the UI works.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card" style={{ padding: '30px' }}>
        <h3 style={{ marginBottom: '8px' }}>Thank you!</h3>
        <p style={{ margin: 0 }}>
          Your message has been noted. Our team will get back to you shortly. In the
          meantime, feel free to call us directly for urgent matters.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <User className="contact-form__icon" size={18} />
        <input type="text" name="name" placeholder="Your Name" required />
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
        <MapPin className="contact-form__icon" size={18} />
        <select name="county" defaultValue="" required>
          <option value="" disabled>Select Your County</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kwale">Kwale</option>
          <option value="Kilifi">Kilifi</option>
          <option value="Tana River">Tana River</option>
          <option value="Lamu">Lamu</option>
          <option value="Taita-Taveta">Taita-Taveta</option>
          <option value="Garissa">Garissa</option>
          <option value="Wajir">Wajir</option>
          <option value="Mandera">Mandera</option>
          <option value="Marsabit">Marsabit</option>
          <option value="Isiolo">Isiolo</option>
          <option value="Meru">Meru</option>
          <option value="Tharaka-Nithi">Tharaka-Nithi</option>
          <option value="Embu">Embu</option>
          <option value="Kitui">Kitui</option>
          <option value="Machakos">Machakos</option>
          <option value="Makueni">Makueni</option>
          <option value="Nyandarua">Nyandarua</option>
          <option value="Nyeri">Nyeri</option>
          <option value="Kirinyaga">Kirinyaga</option>
          <option value="Murang'a">Murang'a</option>
          <option value="Kiambu">Kiambu</option>
          <option value="Turkana">Turkana</option>
          <option value="West Pokot">West Pokot</option>
          <option value="Samburu">Samburu</option>
          <option value="Trans Nzoia">Trans Nzoia</option>
          <option value="Uasin Gishu">Uasin Gishu</option>
          <option value="Elgeyo-Marakwet">Elgeyo-Marakwet</option>
          <option value="Nandi">Nandi</option>
          <option value="Baringo">Baringo</option>
          <option value="Laikipia">Laikipia</option>
          <option value="Nakuru">Nakuru</option>
          <option value="Narok">Narok</option>
          <option value="Kajiado">Kajiado</option>
          <option value="Kericho">Kericho</option>
          <option value="Bomet">Bomet</option>
          <option value="Kakamega">Kakamega</option>
          <option value="Vihiga">Vihiga</option>
          <option value="Bungoma">Bungoma</option>
          <option value="Busia">Busia</option>
          <option value="Siaya">Siaya</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Homa Bay">Homa Bay</option>
          <option value="Migori">Migori</option>
          <option value="Kisii">Kisii</option>
          <option value="Nyamira">Nyamira</option>
          <option value="Nairobi">Nairobi</option>
        </select>
      </div>

      <div className="contact-form__field contact-form__field--textarea">
        <MessageSquare className="contact-form__icon" size={18} />
        <textarea name="message" placeholder="Tell us about your security needs..." required />
      </div>

      <button type="submit" className="btn btn--red">
        Submit
      </button>
    </form>
  );
}
