path = "src/pages/Careers.jsx"
with open(path, "r") as f:
    content = f.read()

old = '''                <div className="contact-form__field contact-form__field--textarea">
                  <FileText className="contact-form__icon" size={18} />
                  <textarea
                    name="message"
                    placeholder="Tell us about your experience, qualifications, and why you'd like to join Densco Ventures..."
                    required
                  />
                </div>

                {error && <p className="careers-error">{error}</p>}'''

new = '''                <div className="contact-form__field contact-form__field--textarea">
                  <FileText className="contact-form__icon" size={18} />
                  <textarea
                    name="message"
                    placeholder="Tell us about your experience, qualifications, and why you'd like to join Densco Ventures..."
                    required
                  />
                </div>

                <div className="careers-file-field">
                  <label htmlFor="cv-upload" className="careers-file-field__label">
                    <FileText size={18} className="contact-form__icon" />
                    <span>Upload your CV (PDF or Word, max 5MB)</span>
                  </label>
                  <input
                    id="cv-upload"
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    required
                    className="careers-file-field__input"
                  />
                </div>

                {error && <p className="careers-error">{error}</p>}'''

if old not in content:
    raise SystemExit("NOT FOUND — textarea/error block doesn't match")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("CV upload field added to Careers.jsx.")
