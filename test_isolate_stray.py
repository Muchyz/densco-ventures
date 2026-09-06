path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

old = """.careers-role-card::after {
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
}"""

new = """.careers-role-card::after {
  display: none;
}"""

if old not in content:
    raise SystemExit("NOT FOUND — corner bracket rule doesn't match")
content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("Corner bracket temporarily disabled for testing.")
