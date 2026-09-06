path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

old = '''.navbar__logo {
  width: 56px;
  height: 56px;
  min-width: 56px;'''

new = '''.navbar {
  overflow: visible;
}
.navbar__inner {
  overflow: visible;
}
.navbar__logo {
  width: 76px;
  height: 76px;
  min-width: 76px;
  margin: -10px 0;
  position: relative;
  z-index: 2;'''

if old not in content:
    raise SystemExit("NOT FOUND — navbar__logo block doesn't match, check current CSS")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("Logo enlarged slightly, navbar height kept the same via overflow.")
