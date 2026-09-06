path = "src/data/content.js"
with open(path, "r") as f:
    content = f.read()

old = "  { id: 20, src: '/gallery/team-photo.jpg', caption: 'Densco Ventures management and staff team' },\n];"
new = ("  { id: 20, src: '/gallery/team-photo.jpg', caption: 'Densco Ventures management and staff team' },\n"
       "  { id: 21, src: '/gallery/aircraft-duty.jpg', caption: 'Guard on duty at an airstrip' },\n"
       "  { id: 22, src: '/gallery/guard-uniform.jpg', caption: 'Densco guard uniform with baton and duty belt' },\n"
       "  { id: 23, src: '/gallery/salute-drill.jpg', caption: 'Trainee guards saluting during a drill' },\n"
       "  { id: 24, src: '/gallery/salute-drill-2.jpg', caption: 'Guards in formation saluting during training' },\n"
       "  { id: 25, src: '/gallery/drill-march.jpg', caption: 'Guards marching during a foot drill' },\n"
       "  { id: 26, src: '/gallery/supervisor-briefing.jpg', caption: 'Supervisor briefing a uniformed guard team' },\n];")

if old not in content:
    raise SystemExit("NOT FOUND — team-photo entry missing, run the previous script first")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("6 gallery entries added.")
