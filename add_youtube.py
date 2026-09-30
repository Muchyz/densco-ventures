import re, sys

# 1. Add YouTubeIcon to SocialIcons.jsx
p = "src/components/SocialIcons.jsx"
s = open(p).read()
if "YouTubeIcon" not in s:
    i = s.find("export function InstagramIcon")
    m = re.search(r"<svg[^>]*>", s[i:])
    if not m:
        sys.exit("Couldn't find svg tag in InstagramIcon")
    tag = m.group(0)
    if 'viewBox="0 0 24 24"' not in tag:
        sys.exit("Different viewBox, paste this so I can adjust:\n" + tag)
    path_d = ("M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z")
    s = s.rstrip("\n") + "\n\nexport function YouTubeIcon(props) {\n  return (\n    " + tag + '\n      <path d="' + path_d + '" />\n    </svg>\n  );\n}\n'
    open(p, "w").write(s)
    print("Icon added.")

# 2. Add link + import to both components
link = '<a href="https://youtube.com/@densco254" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YouTubeIcon /></a>'
for p in ["src/components/ContactSection.jsx", "src/components/Navbar.jsx"]:
    s = open(p).read()
    if "YouTubeIcon" in s:
        print(p, "already done")
        continue
    if "InstagramIcon } from './SocialIcons.jsx'" not in s:
        sys.exit("Import line not found in " + p)
    s = s.replace("InstagramIcon } from './SocialIcons.jsx'", "InstagramIcon, YouTubeIcon } from './SocialIcons.jsx'")
    pat = re.compile(r'^([ \t]*)(<a href="https://www\.instagram\.com[^\n]*<InstagramIcon /></a>)', re.M)
    s, n = pat.subn(lambda m: m.group(1) + m.group(2) + "\n" + m.group(1) + link, s)
    if n != 1:
        sys.exit("Instagram link not matched in " + p)
    open(p, "w").write(s)
    print(p, "updated")
