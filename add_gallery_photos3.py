path = "src/data/content.js"
with open(path, "r") as f:
    content = f.read()

old = "  { id: 26, src: '/gallery/supervisor-briefing.jpg', caption: 'Supervisor briefing a uniformed guard team' },\n];"
new = ("  { id: 26, src: '/gallery/supervisor-briefing.jpg', caption: 'Supervisor briefing a uniformed guard team' },\n"
       "  { id: 27, src: '/gallery/vehicle-inspection-yard.jpg', caption: 'Guards conducting vehicle inspection at a client yard' },\n"
       "  { id: 28, src: '/gallery/vehicle-inspection.jpg', caption: 'Guard performing a vehicle inspection at a checkpoint' },\n"
       "  { id: 29, src: '/gallery/k9-airstrip.jpg', caption: 'K9 unit and handler on duty at Ithookwe Airstrip' },\n];")

if old not in content:
    raise SystemExit("NOT FOUND — supervisor-briefing entry missing, run the previous script first")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("3 gallery entries added.")
