path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

old = '''.careers-role-card__icon {
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
}'''

new = '''.careers-role-card__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.careers-role-card__icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--navy) 0%, #1B3A5C 100%);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
}

.careers-role-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  color: var(--navy);
  margin: 0;
}'''

if old not in content:
    raise SystemExit("NOT FOUND — check the CSS block wasn't already changed")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("Icon + title row CSS updated.")
