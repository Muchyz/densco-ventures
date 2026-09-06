path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

marker = ".page-hero--about {"
if marker not in content:
    raise SystemExit("NOT FOUND — page-hero--about marker missing")

careers_css = '''.page-hero--careers {
  position: relative;
  min-height: 340px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 46px !important;
  background:
    linear-gradient(180deg, rgba(11,29,51,0.25) 0%, rgba(11,29,51,0.55) 55%, rgba(8,20,36,0.92) 100%),
    url('/gallery/team-photo.jpg');
  background-size: cover;
  background-position: center;
}
.page-hero--careers::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--red) 0%, var(--gold) 100%);
}
.page-hero--careers .section-eyebrow {
  color: var(--gold);
  font-size: 0.8rem;
  letter-spacing: 0.16em;
}
.page-hero--careers h1 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  text-transform: none;
  font-size: clamp(2.1rem, 6vw, 3.2rem);
  color: var(--white);
}

'''

content = content.replace(marker, careers_css + marker)

with open(path, "w") as f:
    f.write(content)

print("page-hero--careers CSS added.")
