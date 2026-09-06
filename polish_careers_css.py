path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

marker = ".page-hero--about {"
if marker not in content:
    raise SystemExit("NOT FOUND — page-hero--about marker missing")

polish_css = '''.careers-role-card {
  position: relative;
}

.careers-role-card::after {
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
}

.careers-role-card:hover::after {
  opacity: 1;
}

.careers-role-card__icon {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.careers-role-card:hover .careers-role-card__icon {
  transform: scale(1.08) rotate(-4deg);
  box-shadow: 0 8px 18px rgba(212, 160, 23, 0.25);
}

.careers-role-card__label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 10px;
  padding-top: 14px;
  border-top: 1px solid rgba(212, 160, 23, 0.2);
}

.careers-apply-card__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}

.careers-apply-card__icon {
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
}

'''

content = content.replace(marker, polish_css + marker)

with open(path, "w") as f:
    f.write(content)

print("Careers polish CSS added.")
