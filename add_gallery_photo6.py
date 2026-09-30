path = "src/data/content.js"
content = open(path).read()

old = "  { id: 33, src: '/gallery/foot-patrol.jpg', caption: 'Guard on foot patrol in a client parking area' },\n];"
new = ("  { id: 33, src: '/gallery/foot-patrol.jpg', caption: 'Guard on foot patrol in a client parking area' },\n"
       "  { id: 34, src: '/gallery/office-desk.jpg', caption: 'Densco Ventures office team member handling a client call' },\n];")

if old not in content:
    raise SystemExit("NOT FOUND, paste: tail -5 src/data/content.js")

open(path, "w").write(content.replace(old, new))
print("1 gallery entry added.")
