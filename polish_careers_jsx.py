path = "src/pages/Careers.jsx"
with open(path, "r") as f:
    content = f.read()

old = '''                <p className="careers-role-card__summary">{role.summary}</p>
                <ul className="careers-role-card__list">'''

new = '''                <p className="careers-role-card__summary">{role.summary}</p>
                <span className="careers-role-card__label">Requirements</span>
                <ul className="careers-role-card__list">'''

if old not in content:
    raise SystemExit("NOT FOUND — summary/list block doesn't match")
content = content.replace(old, new)

old2 = '''            <span className="section-eyebrow careers-eyebrow">Take The Next Step</span>
            <h2 className="section-heading" style={{ marginBottom: '10px' }}>Apply Now</h2>'''

new2 = '''            <div className="careers-apply-card__header">
              <div className="careers-apply-card__icon">
                <FileText size={22} />
              </div>
              <div>
                <span className="section-eyebrow careers-eyebrow">Take The Next Step</span>
                <h2 className="section-heading" style={{ marginBottom: '10px' }}>Apply Now</h2>
              </div>
            </div>'''

if old2 not in content:
    raise SystemExit("NOT FOUND — apply card header block doesn't match")
content = content.replace(old2, new2)

with open(path, "w") as f:
    f.write(content)

print("Careers.jsx polished.")
