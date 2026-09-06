path = "src/App.jsx"
with open(path, "r") as f:
    content = f.read()

content = content.replace(
    "import CertificationsPage from './pages/Certifications.jsx';",
    "import CertificationsPage from './pages/Certifications.jsx';\nimport CareersPage from './pages/Careers.jsx';"
)

content = content.replace(
    "<Route path=\"/certifications\" element={<CertificationsPage />} />",
    "<Route path=\"/certifications\" element={<CertificationsPage />} />\n        <Route path=\"/careers\" element={<CareersPage />} />"
)

with open(path, "w") as f:
    f.write(content)

print("Careers route added to App.jsx.")
