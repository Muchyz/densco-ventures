path = "src/data/content.js"
with open(path, "r") as f:
    content = f.read()

old = "  { id: 29, src: '/gallery/k9-airstrip.jpg', caption: 'K9 unit and handler on duty at Ithookwe Airstrip' },\n];"
new = ("  { id: 29, src: '/gallery/k9-airstrip.jpg', caption: 'K9 unit and handler on duty at Ithookwe Airstrip' },\n"
       "  { id: 30, src: '/gallery/guards-on-duty.jpg', caption: 'Densco Ventures security officers on duty at a client site' },\n"
       "  { id: 31, src: '/gallery/cctv-control-room.jpg', caption: 'CCTV control room with live monitoring of client premises' },\n"
       "  { id: 32, src: '/gallery/cctv-control-room-2.jpg', caption: 'CCTV monitoring station showing multi-camera surveillance feed' },\n];")

if old not in content:
    raise SystemExit("NOT FOUND — last gallery entry doesn't match, paste the grep output so I can fix the script")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("3 gallery entries added.")
