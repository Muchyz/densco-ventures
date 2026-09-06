path = "src/pages/Careers.jsx"
with open(path, "r") as f:
    content = f.read()

old = '''              <div className="careers-role-card" key={role.id}>
                <div className="careers-role-card__icon">
                  <Briefcase size={22} />
                </div>
                <h3>{role.title}</h3>
                <p className="careers-role-card__summary">{role.summary}</p>'''

new = '''              <div className="careers-role-card" key={role.id}>
                <div className="careers-role-card__header">
                  <div className="careers-role-card__icon">
                    <Briefcase size={22} />
                  </div>
                  <h3>{role.title}</h3>
                </div>
                <p className="careers-role-card__summary">{role.summary}</p>'''

if old not in content:
    raise SystemExit("NOT FOUND — Careers.jsx card markup doesn't match")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("Icon + title layout updated in Careers.jsx.")
