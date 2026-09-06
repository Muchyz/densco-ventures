path = "src/data/content.js"
with open(path, "r") as f:
    content = f.read()

marker = "export const protectedProperties = ["
if marker not in content:
    raise SystemExit("NOT FOUND — protectedProperties marker missing")

careers_block = '''export const careerRoles = [
  {
    id: 'security-officer',
    title: 'Security Officer',
    summary: 'General guarding duties at client sites, gatehouses, and patrols.',
    requirements: [
      'At least KCSE (D Plain) or its equivalent',
      'Age between 25 and 40 years',
      'Minimum height of 5\\'4"',
      'Clean record of good conduct',
      'Physically and medically fit',
      'Ability to speak and write English and Kiswahili',
      'Official black shoes / safety boots',
      'Clean shaven head and beards (plaited hair)',
    ],
  },
  {
    id: 'guard-guardess',
    title: 'Guard / Guardess',
    summary: 'Uniformed guarding roles for male and female applicants.',
    requirements: [
      'Age 24-42 years (men), 23-35 years (ladies)',
      'Minimum height 5\\'8" (men), 5\\'6" (ladies)',
      'Minimum Form 4 education',
      'Certificational certificates',
      'Letter from area chief',
      'Letter/testimonials from previous employer',
      'NSSF, KRA and SHA registration',
      'Physically and mentally fit',
      'Proficiency in English and Kiswahili (oral and written)',
    ],
  },
  {
    id: 'k9-handler',
    title: 'K9 Handler',
    summary: 'Trained dog handlers for perimeter and patrol surveillance.',
    requirements: [
      'Prior experience handling working dogs preferred',
      'Physically fit and comfortable working outdoors',
      'Good conduct certificate',
      'Ability to work night shifts and patrols',
    ],
  },
  {
    id: 'supervisor',
    title: 'Site Supervisor',
    summary: 'Oversees guard teams, shift changes, and client liaison at assigned sites.',
    requirements: [
      'Prior security industry experience',
      'Strong communication and reporting skills',
      'Good conduct certificate',
      'Ability to manage and motivate a team',
    ],
  },
];

'''

content = content.replace(marker, careers_block + marker)

with open(path, "w") as f:
    f.write(content)

print("careerRoles added to content.js.")
