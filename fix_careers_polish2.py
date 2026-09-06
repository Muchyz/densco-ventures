path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

old = ".careers-file-field__input {\n  width: 100%;\n  padding: 12px 14px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.88rem;\n}"

new = """.careers-file-field__input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.88rem;
  color-scheme: dark;
}"""

if old not in content:
    raise SystemExit("NOT FOUND — careers-file-field__input block doesn't match")
content = content.replace(old, new)

# Fix select text truncation site-wide within the apply card
marker = ".careers-apply-card .contact-form__icon {\n  color: var(--gold);\n}"
if marker not in content:
    raise SystemExit("NOT FOUND — contact-form__icon marker missing")

select_fix = """.careers-apply-card .contact-form__icon {
  color: var(--gold);
}

.careers-apply-card .contact-form__field select {
  text-overflow: ellipsis;
  padding-right: 8px;
}

.careers-apply-card .contact-form__field select option {
  color: #111;
  background: #fff;
}"""

content = content.replace(marker, select_fix)

with open(path, "w") as f:
    f.write(content)

print("Careers styling fixes applied.")
