path = "src/data/content.js"
content = open(path).read()

old = "  { id: 34, src: '/gallery/office-desk.jpg', caption: 'Densco Ventures office team member handling a client call' },\n];"
new = ("  { id: 34, src: '/gallery/office-desk.jpg', caption: 'Densco Ventures office team member handling a client call' },\n"
       "  { id: 35, src: '/gallery/guards-patrol-vehicle.jpg', caption: 'Densco guards in uniform and reflective vests beside the patrol vehicle' },\n];")

if old not in content:
    raise SystemExit("NOT FOUND, paste: tail -5 src/data/content.js")

open(path, "w").write(content.replace(old, new))
print("1 gallery entry added.")
