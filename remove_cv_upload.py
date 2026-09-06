path = "src/pages/Careers.jsx"
with open(path, "r") as f:
    content = f.read()

old = '''                <div className="careers-file-field">
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

new = '''                {error && <p className="careers-error">{error}</p>}'''

if old not in content:
    raise SystemExit("NOT FOUND — CV upload block doesn't match, check file")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("CV upload field removed from Careers.jsx.")
