path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

marker = ".page-hero--about {"
if marker not in content:
    raise SystemExit("NOT FOUND — page-hero--about marker missing")

careers_styles = '''.careers-eyebrow {
  display: block;
  margin-bottom: 8px;
}

.careers-roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 56px;
}

.careers-role-card {
  background: linear-gradient(160deg, #ffffff 0%, #f8f6f1 100%);
  border: 1px solid rgba(212, 160, 23, 0.25);
  border-radius: 14px;
  padding: 32px 28px;
  box-shadow: 0 4px 18px rgba(11, 29, 51, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  overflow: hidden;
}

.careers-role-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--red) 0%, var(--gold) 100%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.careers-role-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 32px rgba(11, 29, 51, 0.14);
  border-color: rgba(212, 160, 23, 0.55);
}

.careers-role-card:hover::before {
  opacity: 1;
}

.careers-role-card__icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--navy) 0%, #1B3A5C 100%);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.careers-role-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  color: var(--navy);
  margin-bottom: 8px;
}

.careers-role-card__summary {
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 18px;
  line-height: 1.5;
}

.careers-role-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.careers-role-card__list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.9rem;
  color: #444;
  line-height: 1.4;
}

.careers-role-card__check {
  color: var(--gold);
  flex-shrink: 0;
  margin-top: 2px;
}

.careers-apply-card {
  background: linear-gradient(160deg, #0B1D33 0%, #14263f 100%);
  border-radius: 18px;
  padding: 48px clamp(24px, 5vw, 56px);
  box-shadow: 0 20px 50px rgba(11, 29, 51, 0.25);
  position: relative;
  overflow: hidden;
}

.careers-apply-card::before {
  content: "";
  position: absolute;
  top: -40%;
  right: -10%;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(212, 160, 23, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.careers-apply-card .section-eyebrow,
.careers-apply-card .section-heading {
  color: var(--white);
}

.careers-apply-card .section-eyebrow {
  color: var(--gold);
}

.careers-apply-card .section-intro {
  color: rgba(255, 255, 255, 0.75);
}

.careers-apply-card .contact-form__field {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.careers-apply-card .contact-form__field input,
.careers-apply-card .contact-form__field select,
.careers-apply-card .contact-form__field textarea {
  color: var(--white);
  background: transparent;
}

.careers-apply-card .contact-form__field input::placeholder,
.careers-apply-card .contact-form__field textarea::placeholder {
  color: rgba(255, 255, 255, 0.45);
}

.careers-apply-card .contact-form__icon {
  color: var(--gold);
}

.careers-success {
  text-align: center;
  padding: 24px 0;
}

.careers-success__icon {
  color: var(--gold);
  margin-bottom: 14px;
}

.careers-success h3 {
  color: var(--white);
  margin-bottom: 8px;
  font-family: 'Playfair Display', serif;
}

.careers-success p {
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

.careers-error {
  color: #ff8a8a;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

@media (max-width: 640px) {
  .careers-apply-card { padding: 36px 22px; border-radius: 14px; }
  .careers-role-card { padding: 26px 22px; }
}

'''

content = content.replace(marker, careers_styles + marker)

with open(path, "w") as f:
    f.write(content)

print("Careers premium styling added.")
