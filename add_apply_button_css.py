path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

marker = ".page-hero--about {"
if marker not in content:
    raise SystemExit("NOT FOUND — page-hero--about marker missing")

btn_css = '''.careers-role-card__apply-btn {
  margin-top: 22px;
  width: 100%;
  padding: 11px 18px;
  border-radius: 8px;
  border: 1.5px solid var(--navy);
  background: transparent;
  color: var(--navy);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.careers-role-card__apply-btn:hover {
  background: var(--navy);
  color: var(--white);
  transform: translateY(-2px);
}

'''

content = content.replace(marker, btn_css + marker)

with open(path, "w") as f:
    f.write(content)

print("Apply button CSS added.")
