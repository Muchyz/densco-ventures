path = "src/pages/Careers.jsx"
with open(path, "r") as f:
    content = f.read()

old = '''    const form = e.target;
    const data = new FormData(form);

    const cvFile = form.elements['cv']?.files?.[0];
    if (cvFile && cvFile.size > 5 * 1024 * 1024) {
      setError('Your CV file is larger than 5MB. Please upload a smaller file.');
      setSubmitting(false);
      return;
    }

    try {'''

new = '''    const form = e.target;
    const data = new FormData(form);

    try {'''

if old not in content:
    raise SystemExit("NOT FOUND — handleSubmit body doesn't match")

content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("CV size check removed.")
