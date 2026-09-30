path = "src/data/content.js"
with open(path, "r") as f:
    content = f.read()

old = "  { id: 32, src: '/gallery/cctv-control-room-2.jpg', caption: 'CCTV monitoring station showing multi-camera surveillance feed' },\n];"
new = ("  { id: 32, src: '/gallery/cctv-control-room-2.jpg', caption: 'CCTV monitoring station showing multi-camera surveillance feed' },\n"
       "  { id: 33, src: '/gallery/foot-patrol.jpg', caption: 'Guard on foot patrol in a client parking area' },\n];")

if old not in content:
    raise SystemExit("NOT FOUND — run the previous script first, or paste grep output so I can fix this")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("1 gallery entry added.")
