path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

replacements = [
    # Card base — white floating card, subtle shadow, cleaner border
    (
        '''.careers-role-card {
  background: linear-gradient(160deg, #ffffff 0%, #f8f6f1 100%);
  border: 1px solid rgba(212, 160, 23, 0.25);
  border-radius: 14px;
  padding: 32px 28px;
  box-shadow: 0 4px 18px rgba(11, 29, 51, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  overflow: hidden;
}''',
        '''.careers-role-card {
  background: #ffffff;
  border: 1px solid rgba(11, 29, 51, 0.08);
  border-radius: 16px;
  padding: 32px 28px;
  box-shadow: 0 8px 24px rgba(11, 29, 51, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  overflow: hidden;
}'''
    ),
    # Top accent line — blue to red instead of red to gold
    (
        '''.careers-role-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--red) 0%, var(--gold) 100%);
  opacity: 0;
  transition: opacity 0.25s ease;
}''',
        '''.careers-role-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #1D4ED8 0%, var(--red) 100%);
  opacity: 1;
}'''
    ),
    # Hover — more lift, blue-tinted shadow, blue border
    (
        '''.careers-role-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 32px rgba(11, 29, 51, 0.14);
  border-color: rgba(212, 160, 23, 0.55);
}

.careers-role-card:hover::before {
  opacity: 1;
}''',
        '''.careers-role-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(29, 78, 216, 0.16);
  border-color: rgba(29, 78, 216, 0.3);
}'''
    ),
    # Icon box — blue gradient instead of navy/gold
    (
        '''.careers-role-card__icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--navy) 0%, #1B3A5C 100%);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
}''',
        '''.careers-role-card__icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}'''
    ),
    # Requirements label — blue instead of gold
    (
        '''.careers-role-card__label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 10px;
  padding-top: 14px;
  border-top: 1px solid rgba(212, 160, 23, 0.2);
}''',
        '''.careers-role-card__label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2563EB;
  margin-bottom: 10px;
  padding-top: 14px;
  border-top: 1px solid rgba(11, 29, 51, 0.1);
}'''
    ),
    # Checkmarks — red instead of gold, for the blue/red combo
    (
        '''.careers-role-card__check {
  color: var(--gold);
  flex-shrink: 0;
  margin-top: 2px;
}''',
        '''.careers-role-card__check {
  color: var(--red);
  flex-shrink: 0;
  margin-top: 2px;
}'''
    ),
    # Icon hover animation — blue glow instead of gold
    (
        '''.careers-role-card:hover .careers-role-card__icon {
  transform: scale(1.08) rotate(-4deg);
  box-shadow: 0 8px 18px rgba(212, 160, 23, 0.25);
}''',
        '''.careers-role-card:hover .careers-role-card__icon {
  transform: scale(1.08) rotate(-4deg);
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.3);
}'''
    ),
    # Corner bracket decoration — blue instead of gold
    (
        '''.careers-role-card::after {
  content: "";
  position: absolute;
  top: 18px;
  right: 18px;
  width: 34px;
  height: 34px;
  border-top: 2px solid rgba(212, 160, 23, 0.35);
  border-right: 2px solid rgba(212, 160, 23, 0.35);
  border-top-right-radius: 8px;
  opacity: 0;
  transition: opacity 0.25s ease;
}''',
        '''.careers-role-card::after {
  content: "";
  position: absolute;
  top: 18px;
  right: 18px;
  width: 34px;
  height: 34px;
  border-top: 2px solid rgba(37, 99, 235, 0.3);
  border-right: 2px solid rgba(37, 99, 235, 0.3);
  border-top-right-radius: 8px;
  opacity: 0;
  transition: opacity 0.25s ease;
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

print("Professional white/blue/red theme applied to role cards.")
