path = "src/pages/Careers.jsx"
with open(path, "r") as f:
    content = f.read()

old = '''  return (
    <section className="section" id="careers">
      <div className="container">
        <span className="section-eyebrow">Join Our Team</span>
        <h1 className="section-heading">Careers at Densco Ventures</h1>
        <p className="section-intro" style={{ marginBottom: '30px' }}>
          We are always looking for disciplined, reliable individuals to join our security team.
          Browse open roles below and submit your application.
        </p>
'''

new = '''  return (
    <main>
      <div className="page-hero page-hero--careers">
        <div className="container">
          <span className="section-eyebrow">Join Our Team</span>
          <h1>Careers at Densco Ventures</h1>
        </div>
      </div>

      <section className="section" id="careers">
      <div className="container">
        <p className="section-intro" style={{ marginBottom: '30px' }}>
          We are always looking for disciplined, reliable individuals to join our security team.
          Browse open roles below and submit your application.
        </p>
'''

if old not in content:
    raise SystemExit("NOT FOUND — Careers.jsx opening block doesn't match, check file")

content = content.replace(old, new)

# Close the extra <main> wrapper we opened
content = content.replace(
    '''      </div>
    </section>
  );
}''',
    '''      </div>
      </section>
    </main>
  );
}'''
)

with open(path, "w") as f:
    f.write(content)

print("Hero added to Careers.jsx.")
