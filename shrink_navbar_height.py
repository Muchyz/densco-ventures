path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

old = '''.navbar__inner {
  padding: 14px 20px;
}
.navbar__brand {
  gap: 16px;
}
.navbar__logo {
  width: 78px;
  height: 78px;
  min-width: 78px;'''

new = '''.navbar__inner {
  padding: 8px 20px;
}
.navbar__brand {
  gap: 12px;
}
.navbar__logo {
  width: 56px;
  height: 56px;
  min-width: 56px;'''

if old not in content:
    raise SystemExit("NOT FOUND — navbar inner/logo block doesn't match, check current CSS")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("Navbar height reduced — smaller logo and padding.")
