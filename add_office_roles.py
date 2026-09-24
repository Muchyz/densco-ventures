import re

path = "src/data/content.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

anchor = """      'Ability to manage and motivate a team',
    ],
  },
];"""

new_roles = """      'Ability to manage and motivate a team',
    ],
  },
  {
    id: 'hr-manager',
    title: 'Human Resource Manager',
    summary: 'Oversees recruitment, staff welfare, discipline, and HR compliance.',
    requirements: [
      'Degree/Diploma in Human Resource Management',
      'Minimum 3 years HR experience, security industry preferred',
      'Knowledge of Kenyan labour laws',
      'Strong interpersonal and conflict-resolution skills',
      'Certificate of good conduct',
    ],
  },
  {
    id: 'operations-manager',
    title: 'Operations Manager',
    summary: 'Manages day-to-day field operations, deployments, and site compliance.',
    requirements: [
      'Degree/Diploma in a relevant field',
      'Minimum 5 years in security operations management',
      'Strong leadership and logistics coordination skills',
      'Valid driving licence',
      'Certificate of good conduct',
    ],
  },
  {
    id: 'general-manager',
    title: 'General Manager',
    summary: 'Provides overall strategic and operational leadership across the company.',
    requirements: [
      'Degree in Business Administration or related field',
      'Minimum 7 years senior management experience',
      'Proven track record in leadership and strategic planning',
      'Excellent decision-making and communication skills',
      'Certificate of good conduct',
    ],
  },
  {
    id: 'accounts-manager',
    title: 'Accounts Manager',
    summary: 'Manages accounts payable/receivable, payroll, and financial records.',
    requirements: [
      'Degree/Diploma in Accounting or Finance',
      'CPA (K) or equivalent an added advantage',
      'Minimum 3 years relevant experience',
      'Proficiency in accounting software',
      'High level of integrity',
    ],
  },
  {
    id: 'finance-manager',
    title: 'Finance Manager',
    summary: 'Oversees budgeting, financial planning, and reporting for the company.',
    requirements: [
      'Degree in Finance, Accounting or related field',
      'CPA (K)/ACCA qualification',
      'Minimum 5 years financial management experience',
      'Strong analytical and reporting skills',
      'High level of integrity',
    ],
  },
  {
    id: 'procurement-manager',
    title: 'Procurement Manager',
    summary: 'Handles sourcing, purchasing, and vendor management for company supplies.',
    requirements: [
      'Degree/Diploma in Procurement and Supply Chain Management',
      'Minimum 3 years procurement experience',
      'Negotiation and vendor management skills',
      'Knowledge of procurement regulations',
      'Certificate of good conduct',
    ],
  },
  {
    id: 'sales-manager',
    title: 'Sales Manager',
    summary: 'Drives business growth through client acquisition and account management.',
    requirements: [
      'Degree/Diploma in Sales, Marketing or related field',
      'Minimum 3 years sales experience, B2B preferred',
      'Strong negotiation and networking skills',
      'Valid driving licence an added advantage',
      'Target-driven with excellent communication skills',
    ],
  },
  {
    id: 'control-room-manager',
    title: 'Control Room Manager',
    summary: 'Supervises the control room team, CCTV monitoring, and incident response.',
    requirements: [
      'Diploma in Security Management or related field',
      'Experience in control room / surveillance operations',
      'Strong crisis management and reporting skills',
      'Ability to work shifts, including nights',
      'Certificate of good conduct',
    ],
  },
  {
    id: 'secretary',
    title: 'Secretary',
    summary: 'Provides administrative and clerical support to management.',
    requirements: [
      'Diploma in Secretarial Studies or Business Administration',
      'Proficiency in MS Office',
      'Excellent organizational and communication skills',
      'Discretion and confidentiality',
      'Certificate of good conduct',
    ],
  },
  {
    id: 'receptionist',
    title: 'Receptionist',
    summary: 'Manages front desk operations, calls, and visitor coordination.',
    requirements: [
      'Diploma in Front Office / Business Administration',
      'Good communication and customer service skills',
      'Proficiency in MS Office',
      'Presentable and professional demeanor',
      'Certificate of good conduct',
    ],
  },
];"""

if anchor not in content:
    print("Anchor not found — no changes made. Please check the file manually.")
else:
    content = content.replace(anchor, new_roles, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("New roles added successfully.")
