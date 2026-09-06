path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

marker = ".page-hero--about {"
if marker not in content:
    raise SystemExit("NOT FOUND — page-hero--about marker missing")

cv_css = '''.careers-file-field {
  margin-bottom: 16px;
}

.careers-file-field__label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 8px;
}

.careers-file-field__label .contact-form__icon {
  color: var(--gold);
}

.careers-file-field__input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.88rem;
}

.careers-file-field__input::file-selector-button {
  margin-right: 12px;
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  background: var(--gold);
  color: var(--navy);
  font-weight: 600;
  cursor: pointer;
}

'''

content = content.replace(marker, cv_css + marker)

with open(path, "w") as f:
    f.write(content)

print("CV field CSS added.")
