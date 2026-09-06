path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

old = '''.careers-role-card {
  background: linear-gradient(160deg, #ffffff 0%, #f8f6f1 100%);
  border: 1px solid rgba(212, 160, 23, 0.25);
  border-radius: 14px;
  padding: 32px 28px;
  box-shadow: 0 4px 18px rgba(11, 29, 51, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  overflow: hidden;
}'''

new = '''.careers-role-card {
  background: linear-gradient(160deg, #ffffff 0%, #f8f6f1 100%);
  border: none;
  border-radius: 18px;
  padding: 32px 28px;
  box-shadow: 0 16px 40px rgba(11, 29, 51, 0.14), 0 4px 10px rgba(11, 29, 51, 0.06);
  transform: translateY(-4px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}'''

if old not in content:
    raise SystemExit("NOT FOUND — careers-role-card base block doesn't match")
content = content.replace(old, new)

old2 = '''.careers-role-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 32px rgba(11, 29, 51, 0.14);
  border-color: rgba(212, 160, 23, 0.55);
}

.careers-role-card:hover::before {
  opacity: 1;
}'''

new2 = '''.careers-role-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 26px 55px rgba(11, 29, 51, 0.2), 0 8px 16px rgba(11, 29, 51, 0.08);
}

.careers-role-card:hover::before {
  opacity: 1;
}'''

if old2 not in content:
    raise SystemExit("NOT FOUND — careers-role-card hover block doesn't match")
content = content.replace(old2, new2)

with open(path, "w") as f:
    f.write(content)

print("Careers cards now have a floating look.")
