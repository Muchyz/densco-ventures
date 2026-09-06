path = "src/data/content.js"
with open(path, "r") as f:
    content = f.read()

old = "  { id: 19, src: '/gallery/control-room-monitoring.jpg', caption: '24/7 monitoring and control room support' },\n];"
new = ("  { id: 19, src: '/gallery/control-room-monitoring.jpg', caption: '24/7 monitoring and control room support' },\n"
       "  { id: 20, src: '/gallery/team-photo.jpg', caption: 'Densco Ventures management and staff team' },\n];")

if old not in content:
    raise SystemExit("NOT FOUND — check the file hasn't changed")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("Gallery entry added.")
