path = "src/index.css"
with open(path, "r") as f:
    content = f.read()

old = "html, body { overflow-x: hidden; }"
new = "html { overflow-x: visible; }\nbody { overflow-x: hidden; position: relative; }"

if old not in content:
    raise SystemExit("NOT FOUND — overflow rule doesn't match, check line 40")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("Fixed html/body overflow rule so navbar sticky works.")
