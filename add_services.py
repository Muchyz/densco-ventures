import re

path = "src/data/content.js"
with open(path, "r") as f:
    content = f.read()

# 1. Add new icons to the lucide-react import
content = content.replace(
    "import { Shield, Tent, Camera, Search, GraduationCap, PackageSearch, Users, Bell, Fingerprint, Zap, ClipboardCheck, Check } from 'lucide-react';",
    "import { Shield, Tent, Camera, Search, GraduationCap, PackageSearch, Users, Bell, Fingerprint, Zap, ClipboardCheck, Check, Flame, Luggage, DoorOpen, UserCheck, ScanSearch, PawPrint } from 'lucide-react';"
)

# 2. Add short cards to coreServices (before its closing "];")
new_core_cards = """  { icon: Flame, title: 'Fire Alarm Systems' },
  { icon: Luggage, title: 'Luggage & Baggage Scanners' },
  { icon: DoorOpen, title: 'Automatic Gates' },
  { icon: UserCheck, title: 'Background Checks' },
  { icon: ScanSearch, title: 'Walkthrough Metal Detectors' },
  { icon: PawPrint, title: 'Dog Surveillance Services' },
];

export const serviceDetails = ["""
content = content.replace(
    "];\n\nexport const serviceDetails = [",
    new_core_cards,
    1
)

# 3. Add full detailed entries to serviceDetails (before its closing "];")
new_detail_entries = """  {
    id: 'fire-alarm',
    icon: Flame,
    title: 'Fire Alarm Systems',
    image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Fire+Alarm',
    highlights: [
      'Early smoke and heat detection',
      'Automatic alarm triggering',
      'Reduces response time in emergencies',
      'Suited for homes, offices and industrial sites',
    ],
    alt: 'Fire alarm detector mounted on a ceiling',
    paragraphs: [
      "We install electronic detectors that sense the presence of fire or smoke and immediately trigger an alarm to alert occupants and our response team. Early detection is critical in limiting damage and protecting lives, and our systems are designed to integrate with your existing security setup for a coordinated response.",
    ],
  },
  {
    id: 'baggage-scanners',
    icon: Luggage,
    title: 'Luggage & Baggage Scanners',
    image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Baggage+Scanners',
    highlights: [
      'Non-intrusive X-ray inspection',
      'Detects prohibited or suspicious items',
      'Ideal for events, offices and institutions',
      'Operated by trained personnel',
    ],
    alt: 'X-ray baggage scanner at a security checkpoint',
    paragraphs: [
      "We undertake X-ray scanning that allows for non-intrusive inspection of luggage and packages, helping identify suspicious or forbidden objects before they enter a premises. This service is commonly deployed at events, corporate offices and institutions that require an added layer of screening at entry points.",
    ],
  },
  {
    id: 'automatic-gates',
    icon: DoorOpen,
    title: 'Automatic Gates',
    image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Automatic+Gates',
    highlights: [
      'Remote-controlled entry',
      'Restricts access to intended persons',
      'Can be operated from a remote location',
      'Pairs well with access control systems',
    ],
    alt: 'Automatic security gate at a property entrance',
    paragraphs: [
      "We install gates that can be controlled remotely, ensuring only intended persons are admitted onto the premises. Gates can also be opened from a remote location, giving property owners and managers flexible control over who enters and when.",
    ],
  },
  {
    id: 'background-checks',
    icon: UserCheck,
    title: 'Background Checks',
    image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Background+Checks',
    highlights: [
      'Employment history verification',
      'Character reference checks',
      'Academic verification',
      'Identification authentication',
    ],
    alt: 'Background verification documents being reviewed',
    paragraphs: [
      "We diligently carry out employment history searches, character reference checks, academic verification, credit status reviews and identification authentication. These checks help our clients make informed decisions when hiring staff or engaging new partners.",
    ],
  },
  {
    id: 'metal-detectors',
    icon: ScanSearch,
    title: 'Walkthrough / Metal Detectors',
    image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Metal+Detectors',
    highlights: [
      'Screens all persons entering a premises',
      'Detects concealed metallic objects',
      'Fast, non-invasive process',
      'Suited for events and secure facilities',
    ],
    alt: 'Walkthrough metal detector at a building entrance',
    paragraphs: [
      "This entails screening of any person entering the premises to certify that they are not carrying unsafe or prohibited items. Walkthrough and handheld metal detectors are deployed at entry points for events, offices and secure facilities to give an added layer of assurance.",
    ],
  },
  {
    id: 'dog-surveillance',
    icon: PawPrint,
    title: 'Dog Surveillance Services',
    image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=K9+Unit',
    highlights: [
      'Trained K9 units with handlers',
      'Enhanced perimeter and patrol surveillance',
      'Added deterrent for intruders',
      'Deployed alongside guard teams',
    ],
    alt: 'K9 unit with handler on patrol',
    paragraphs: [
      "Our trained dog units work alongside our guard teams to provide an added layer of surveillance and deterrence, particularly for perimeter patrols and high-risk sites. Handlers are experienced in managing K9 units safely alongside the public and site staff.",
    ],
  },
];"""
content = content.replace(
    '  },\n];\n\nexport const trainingStandards = [',
    '  },\n' + new_detail_entries + '\n\nexport const trainingStandards = [',
    1
)

with open(path, "w") as f:
    f.write(content)

print("Done.")
