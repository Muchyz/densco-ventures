path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

replacements = [
    (
        '''.careers-apply-card {
  background: linear-gradient(160deg, #0B1D33 0%, #14263f 100%);
  border-radius: 18px;
  padding: 48px clamp(24px, 5vw, 56px);
  box-shadow: 0 20px 50px rgba(11, 29, 51, 0.25);
  position: relative;
  overflow: hidden;
}''',
        '''.careers-apply-card {
  background: linear-gradient(160deg, #0B2447 0%, #163a68 100%);
  border-radius: 18px;
  padding: 48px clamp(24px, 5vw, 56px);
  box-shadow: 0 20px 50px rgba(11, 36, 71, 0.3);
  position: relative;
  overflow: hidden;
}'''
    ),
    (
        '''.careers-apply-card::before {
  content: "";
  position: absolute;
  top: -40%;
  right: -10%;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(212, 160, 23, 0.15) 0%, transparent 70%);
  pointer-events: none;
}''',
        '''.careers-apply-card::before {
  content: "";
  position: absolute;
  top: -40%;
  right: -10%;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  pointer-events: none;
}'''
    ),
    (
        '''.careers-apply-card .section-eyebrow {
  color: var(--gold);
}''',
        '''.careers-apply-card .section-eyebrow {
  color: #60A5FA;
}'''
    ),
    (
        '''.careers-apply-card .contact-form__field {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}''',
        '''.careers-apply-card .contact-form__field {
  background: rgba(96, 165, 250, 0.08);
  border: 1px solid rgba(96, 165, 250, 0.2);
}'''
    ),
    (
        '''.careers-apply-card .contact-form__icon {
  color: var(--gold);
}''',
        '''.careers-apply-card .contact-form__icon {
  color: #60A5FA;
}'''
    ),
    (
        '''.careers-apply-card__icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(212, 160, 23, 0.12);
  border: 1px solid rgba(212, 160, 23, 0.35);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
}''',
        '''.careers-apply-card__icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(96, 165, 250, 0.4);
  color: #60A5FA;
  display: flex;
  align-items: center;
  justify-content: center;
}'''
    ),
    (
        '''.careers-success__icon {
  color: var(--gold);
  margin-bottom: 14px;
}''',
        '''.careers-success__icon {
  color: #60A5FA;
  margin-bottom: 14px;
}'''
    ),
]

missing = []
for old, new in replacements:
    if old not in content:
        missing.append(old[:50])
    else:
        content = content.replace(old, new)

if missing:
    print("WARNING — some blocks not found, skipped:")
    for m in missing:
        print(" -", m)

with open(path, "w") as f:
    f.write(content)

print("Blue theme applied to careers apply card.")
