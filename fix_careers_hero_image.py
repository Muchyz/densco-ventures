path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

old = "url('/gallery/team-photo.jpg');"
new = "url('/team/guard-van.jpg');"

count = content.count(old)
if count == 0:
    raise SystemExit("NOT FOUND — check the CSS wasn't already changed")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print(f"Updated {count} occurrence(s) to use guard-van.jpg.")
