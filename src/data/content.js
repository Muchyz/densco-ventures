import consultancyImg from '../assets/images/consultancy.jpg';
import eventsSecurityImg from '../assets/images/events-security.jpg';
import crowdControlImg from '../assets/images/crowd-control.jpg';
import assetsRecoveryImg from '../assets/images/assets-recovery.jpg';
import securityTrainingImg from '../assets/images/security-training.jpg';
import piBadge from '../assets/badges/private-investigator-badge.jpg';
import metalDetectorImg from '../assets/images/metal-detector.jpg';
import baggageScannerImg from '../assets/images/baggage-scanner.jpg';
import backgroundCheckImg from '../assets/images/background-check.jpg';
import automaticGateImg from '../assets/images/automatic-gate.jpg';
import fireAlarmImg from '../assets/images/fire-alarm.jpg';
import dog1Img from '../assets/images/dog-1.jpg';
import dog2Img from '../assets/images/dog-2.jpg';
import perimeterImg from '../assets/images/perimeter.jpg';
import accessControlImg from '../assets/images/access-control.jpg';
import alarmImg from '../assets/images/alarm.jpg';
import cctvImg from '../assets/images/cctv.jpg';
import guardingImg from '../assets/images/guarding.jpg';
import { Shield, Tent, Camera, Search, GraduationCap, PackageSearch, Users, Bell, Fingerprint, Zap, ClipboardCheck, Check, Flame, Luggage, DoorOpen, UserCheck, ScanSearch, PawPrint } from 'lucide-react';

// Central place for all copy + placeholder data.
// Swap placeholder image URLs for real photos whenever you're ready —
// nothing else in the components needs to change.

export const company = {
  name: 'DENSCO VENTURES LIMITED',
  tagline: 'YOUR PROTECTION OUR PRIORITY',
  hashtag: '#DenscoVentures',
  phones: ['0702 976 287', '0745 979 476', '0796 410 971', '0708 177 714', '0746 078 455'],
  email: 'Infodenscoventures2@gmail.com',
  poBox: '',
  headOffice: 'Densco Ventures Limited, Along Kitui Bypass, Kitui',
  branchOffice: 'Regional offices in Mutomo, Mwingi, Zombe, Matuu, Wote and Nairobi',
  domain: '',
};

export const logoPlaceholder =
  'https://placehold.co/120x120/1B3A5C/D4A017?text=DVL&font=oswald';

export const coreServices = [
  { icon: Shield, title: 'Security Guarding', id: 'guarding' },
  { icon: Tent, title: 'Events Security', id: 'events-security' },
  { icon: Camera, title: 'CCTV Installations', id: 'cctv' },
  { icon: Search, title: 'Private Investigations', id: 'private-investigations' },
  { icon: GraduationCap, title: 'Security & Safety Trainings', id: 'security-training' },
  { icon: PackageSearch, title: 'Assets Recovery', id: 'assets-recovery' },
  { icon: Users, title: 'Crowd Control', id: 'crowd-control' },
  { icon: Flame, title: 'Fire Alarm Systems', id: 'fire-alarm' },
  { icon: Luggage, title: 'Luggage & Baggage Scanners', id: 'baggage-scanners' },
  { icon: DoorOpen, title: 'Automatic Gates', id: 'automatic-gates' },
  { icon: UserCheck, title: 'Background Checks', id: 'background-checks' },
  { icon: ScanSearch, title: 'Walkthrough Metal Detectors', id: 'metal-detectors' },
  { icon: PawPrint, title: 'Dog Surveillance Services', id: 'dog-surveillance' },
];

export const serviceDetails = [
  {
    id: 'guarding',
    icon: Shield,
    title: 'Guarding Services',
    image: guardingImg,
    badge: 'Most Popular',
    highlights: [
      'Uniformed & fully equipped officers',
      'Intensive vetting and training',
      'Shift changes at 6AM and 6PM daily',
      '24/7 emergency response with Police liaison',
    ],
    alt: 'Uniformed Densco Ventures guard on duty at a gatehouse',
    paragraphs: [
      "We have a stringent process of vetting and training our guards. We offer an intensive training program that covers: Protection and Preservation of assets, Incident Management, Counter Terrorism and customer Care Skills. Our guards are skilled on handling gatehouse duties, front office duties, Vehicle Inspection, Personal Searches, Perimeter and Car Park Controls and monitoring of CCTV. They are uniformed and fully equipped with Baton, LED Torch, and Whistle during their shifts.",
      "The guards change shifts at 6:00PM and 6:00AM. In case the guard does not report the same guard on duty will inform the office and hold fort until a reliever is sent. Clients' calls are attended 24/7 and in case of any emergency, we work closely with the Police to arrest the situation. Our guards are covered under the Workmen Compensation Act for all injuries sustained.",
    ],
  },
  {
    id: 'cctv',
    icon: Camera,
    title: 'CCTV Cameras',
    image: cctvImg,
    highlights: [
      'Analogue and IP camera options',
      'Tailored to your budget and preference',
      'Professional installation and setup',
      'Ongoing maintenance support',
    ],
    alt: 'CCTV camera installation on an exterior wall',
    paragraphs: [
      "We install and maintain Affordable and High-quality CCTV systems whether for your home or business. We offer both analogue and Internet protocol Cameras based on the client's preference. However, we will not hesitate to advice you on the best and latest technology. Our technical engineers recognize the importance of outlook of installation and therefore ensure absolute coverage for your security. We use recognized brands that are effective and user-friendly.",
    ],
  },
  {
    id: 'alarm',
    icon: Bell,
    title: 'Intruder Alarm System',
    image: alarmImg,
    highlights: [
      'Instant intrusion alerts',
      'Automatic or manual control',
      'Quality, durable components',
      'Linked to rapid response team',
    ],
    alt: 'Intruder alarm control panel mounted on a wall',
    paragraphs: [
      "In a world of increasing insecurity at homes and offices, it's now important to install an Intruder Alarm System. The Intruder Alarm System units are available from 8 to 128 zones. State of the art equipment can be installed to meet every need and budget, from basic window and door sensors all the way to motion detectors.",
    ],
  },
  {
    id: 'access-control',
    icon: Fingerprint,
    title: 'Access Control',
    image: accessControlImg,
    highlights: [
      'Biometric and card-based options',
      'Time and attendance tracking',
      'Restrict entry by zone or level',
      'Reduces theft and unauthorized access',
    ],
    alt: 'Biometric access control reader at an office entrance',
    paragraphs: [
      "We acknowledge every organization's need to manage access to their premise, information, equipment as well as the security of their employees and visitors. It is essential to manage and monitor who has access to what office, records, entry and exit. With these systems, you are able to restrict entrance to places and hence able to determine who is where and when. This minimizes dangerous incidents, frauds or theft from occurring. If you are looking for any system from biometric time and attendance systems, computerized time recording solutions for flexi time workers or simply a traditional time recording machine, then we have the answers for you!!",
    ],
  },
  {
    id: 'perimeter',
    icon: Zap,
    title: 'Perimeter Security (Electric & Razor Wire)',
    image: perimeterImg,
    highlights: [
      'Electric and razor wire fencing',
      'High quality standard materials',
      'Automatic or manual barriers',
      'Resistant to forceful access',
    ],
    alt: 'Electric perimeter fence along a property boundary',
    paragraphs: [
      'Protecting of the perimeter fence is the first line of defense in asset and lives security. We undertake installation of electric and razor fences while maintaining high quality standard materials. Security barriers can be automatic or manual and equipped with booms which are resistant to FORCEFUL ACCESS.',
    ],
  },
  {
    id: 'consultancy',
    icon: ClipboardCheck,
    title: 'Security Consultancy',
    image: consultancyImg,
    highlights: [
      'Independent security audits',
      'Clear, comprehensive reports',
      'Covers homes, offices, and institutions',
      'Actionable next-step recommendations',
    ],
    alt: 'Security consultant reviewing a site audit report',
    paragraphs: [
      "Even if you have had security measures in place for many years and believe you've covered all the bases, it pays to have an independent security audit. From commercial buildings to shopping malls, offices and factories to hotels and private homes, we compile comprehensive, clear reports that will leave you free to decide on your next steps. We will:",
    ],
    bullets: [
      'Identify weaknesses in your physical and procedural security systems',
      'Review access controls and CCTV measures',
      'Examine accident prevention measures',
      'Trace flaws in your Information Technology network',
      'Look at the safety of staff, visitors and clients',
      'Assess and act to protect assets both tangible and intangible',
    ],
  },
  {
    id: 'fire-alarm',
    icon: Flame,
    title: 'Fire Alarm Systems',
    image: fireAlarmImg,
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
    image: baggageScannerImg,
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
    image: automaticGateImg,
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
    image: backgroundCheckImg,
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
    image: metalDetectorImg,
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
    images: [dog1Img, dog2Img],
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
  {
    id: 'events-security',
    icon: Tent,
    title: 'Events Security',
    image: eventsSecurityImg,
    highlights: [
      'Ushering and access screening',
      'VIP and dignitary protection',
      'Crowd flow and entry management',
      'Scalable teams for any event size',
    ],
    alt: 'Security officers managing entry at an event',
    paragraphs: [
      "We provide dedicated security teams for events of all sizes, from corporate functions to large public gatherings. Our officers handle access screening, ushering, VIP protection, and coordination with event organizers to ensure a safe and orderly experience for every guest.",
    ],
  },
  {
    id: 'private-investigations',
    icon: Search,
    title: 'Private Investigations',
    image: piBadge,
    highlights: [
      'Discreet, professional investigators',
      'Fraud and theft investigations',
      'Surveillance and evidence gathering',
      'Confidential reporting to clients',
    ],
    alt: 'Private investigator reviewing case documents',
    paragraphs: [
      "Our investigations team handles sensitive matters such as fraud, theft, and workplace misconduct with discretion and professionalism. We gather evidence through surveillance and diligent fact-finding, providing clients with clear, confidential reports to support their decision-making.",
    ],
  },
  {
    id: 'security-training',
    icon: GraduationCap,
    title: 'Security & Safety Trainings',
    image: securityTrainingImg,
    highlights: [
      'Foot drills and patrol skills',
      'First aid and fire fighting',
      'Search, arrest and self-defense skills',
      'Available for staff, households and groups',
    ],
    alt: 'Security guards during a training drill',
    paragraphs: [
      "We consult in building security literacy and awareness for groups, companies, and families, enhancing individual alertness and preparedness. Our training covers foot drills, first aid, fire fighting, patrol skills, search and arrest techniques, and self-defense, delivered to both company employees and individual households.",
    ],
  },
  {
    id: 'assets-recovery',
    icon: PackageSearch,
    title: 'Assets Recovery',
    image: assetsRecoveryImg,
    highlights: [
      'Tracks and recovers lost or stolen assets',
      'Handles fraud and corruption cases',
      'Uses modern tracking technology',
      'Supports both companies and individuals',
    ],
    alt: 'Asset tracking and recovery operation',
    paragraphs: [
      "We provide asset tracking and recovery services in cases of fraud, corruption, and general theft, embracing the latest technology to trace and recover assets efficiently on behalf of our clients.",
    ],
  },
  {
    id: 'crowd-control',
    icon: Users,
    title: 'Crowd Control',
    image: crowdControlImg,
    highlights: [
      'Organized, disciplined crowd management',
      'Suited for large public gatherings',
      'Reduces risk of incidents and disorder',
      'Coordinated with event organizers and police',
    ],
    alt: 'Guards managing crowd control at a public event',
    paragraphs: [
      "We manage large crowds at events and public gatherings with a calm, organized approach, minimizing the risk of disorder and ensuring the safety of attendees. Our teams coordinate closely with event organizers and, where required, local police.",
    ],
  },
];

export const trainingStandards = [
  { label: 'Access Control Procedures', desc: 'Proper screening of visitors, vehicles, and deliveries.' },
  { label: 'Emergency Response', desc: 'Handling fire outbreaks, medical emergencies, alarms, and security incidents.' },
  { label: 'Customer Care and Communication Skills', desc: 'Professional interaction with residents, staff, and visitors.' },
  { label: 'Patrolling and Surveillance Techniques', desc: 'Effective monitoring and reporting of suspicious activities.' },
  { label: 'Incident Reporting and Documentation', desc: 'Accurate recording of daily occurrences and security incidents.' },
  { label: 'First Aid and Basic Safety Procedures', desc: 'Basic lifesaving skills and safety awareness.' },
  { label: 'Discipline and Professional Conduct', desc: 'Upholding integrity, confidentiality, and professionalism at all times.' },
];

export const coreValues = ['Innovative', 'Integrity', 'Customer relation', 'Discipline'];

export const whyChooseUs = [
  'Highly trained and vetted security personnel',
  'Professional and disciplined guards',
  'Reliable and responsive service',
  'Customized security solutions',
  'Use of modern security technology',
  'Commitment to quality service delivery',
];

export const galleryImages = [
  { id: 1, src: '/gallery/certificates.jpg', caption: 'Guards displaying their training and vetting certificates' },
  { id: 2, src: '/gallery/client-site.jpg', caption: 'Guard team on assignment at a client site' },
  { id: 3, src: '/gallery/salute-parade.jpg', caption: 'Officers saluting during parade drill' },
  { id: 4, src: '/gallery/school-gate.jpg', caption: 'Guard detail posted at a school gate' },
  { id: 5, src: '/gallery/k9-unit.jpg', caption: 'K9 unit with handlers on patrol' },
  { id: 6, src: '/gallery/toyota-outlet.jpg', caption: 'Guard team posted at a client automotive outlet' },
  { id: 7, src: '/gallery/exhibition-booth.jpg', caption: 'Densco Ventures team at a trade exhibition booth' },
  { id: 8, src: '/gallery/stadium-formation.jpg', caption: 'Guards in formation during an event security detail' },
  { id: 9, src: '/gallery/radio-duty.jpg', caption: 'Officers on radio communication duty at the gate' },
  { id: 10, src: '/gallery/field-briefing.jpg', caption: 'Guards assembled for a field briefing' },
  { id: 11, src: '/gallery/client-guard-dog.jpg', caption: 'A client\'s trained security dog' },
  { id: 12, src: '/gallery/ceremony-salute.jpg', caption: 'Officers saluting during a ceremony' },
  { id: 13, src: '/gallery/airstrip-duty.jpg', caption: 'Guard on duty at Ithookwe Airstrip' },
  { id: 14, src: '/gallery/parade-lineup.jpg', caption: 'Guard team in parade formation' },
  { id: 15, src: '/gallery/office-desk.jpg', caption: 'Operations staff monitoring radio communications at the office' },
  { id: 16, src: '/gallery/toyota-outlet-2.jpg', caption: 'Guards posted at a client automotive outlet' },
  { id: 17, src: '/gallery/k9-team.mp4', type: 'video', caption: 'K9 unit on duty with handlers' },
  { id: 18, src: '/gallery/k9-gate-duty.mp4', type: 'video', caption: 'K9 unit and guards on duty at a client gate' },
  { id: 19, src: '/gallery/control-room-monitoring.jpg', caption: '24/7 monitoring and control room support' },
];

export const testimonials = [
  {
    name: 'Grace Wanjiru',
    role: 'Property Manager, Greenview Apartments',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=GW',
    quote: 'Densco Ventures has been guarding our estate for over a year. Their guards are punctual, disciplined, and always alert. We rarely worry about security anymore. (Placeholder testimonial)',
  },
  {
    name: 'Daniel Kimani',
    role: 'Operations Manager, Kimani & Sons Hardware',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=DK',
    quote: 'What stands out is how quickly they respond when something comes up. One call and a supervisor is on site within minutes. Very professional team. (Placeholder testimonial)',
  },
  {
    name: 'Fatuma Ali',
    role: 'Administrator, Riverside Primary School',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=FA',
    quote: 'The guards assigned to our school are courteous with parents and firm at the gate. It gives every parent real peace of mind dropping off their children. (Placeholder testimonial)',
  },
  {
    name: 'Peter Mwangi',
    role: 'Facilities Lead, Mwangi Logistics Ltd',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=PM',
    quote: 'PLACEHOLDER — replace with a real client testimonial.',
  },
  {
    name: 'Esther Njoki',
    role: 'Events Coordinator, Njoki Events Co.',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=EN',
    quote: 'They handled crowd control for a 500-guest event flawlessly, calm, organized, and professional from setup to close. We will be booking them again. (Placeholder testimonial)',
  },
];

export const faqs = [
  {
    q: 'Do you offer 24/7 security services?',
    a: 'Yes. Our guards work in 12-hour shifts changing at 6:00AM and 6:00PM, and our office attends to client calls around the clock, every day of the year.',
  },
  {
    q: 'Are your guards licensed and insured?',
    a: 'Yes. All our officers are vetted, trained, and covered under the Workmen Compensation Act for any injuries sustained while on duty.',
  },
  {
    q: 'Can you provide security for a one-day event?',
    a: 'Yes. We provide short-term deployments for events of any size, including crowd control, access screening, and VIP protection.',
  },
  {
    q: 'How quickly can you deploy guards to a new site?',
    a: 'In most cases we can deploy vetted, uniformed guards within 24-48 hours of confirming your requirements, faster for urgent cases.',
  },
  {
    q: 'Do you offer both CCTV and manned guarding together?',
    a: 'Yes. We design combined solutions that pair trained guards with CCTV, alarm, and access control systems for layered protection.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We operate from our Head Office along Kitui Bypass, Kitui, with regional offices in Mutomo, Mwingi, Zombe, Matuu, Wote and Nairobi.',
  },
];

export const director = {
  name: 'Gideon Musembi Mulevu',
  title: 'Founder & Managing Director, Densco Ventures Limited',
  photo: '/team/director.jpg',
  message: [
    'At Densco Ventures Limited, we believe that effective security is built on professionalism, integrity, preparedness and trust.',
    'With over 10 years of experience in the private security sector, I have risen through the ranks, gaining extensive hands-on experience in security operations, risk management, personnel management and the delivery of professional security solutions.',
    "I hold a Bachelor's Degree and a Master's Degree in Criminology and Security Studies, which, together with my practical industry experience, has shaped my approach to modern security management.",
    'At Densco Ventures, our commitment is to provide reliable, professional and client-focused security solutions that protect people, property and businesses. We continuously invest in our personnel, training, technology and operational systems to ensure that we remain responsive to the evolving security needs of our clients.',
    'Our vision is not simply to provide security guards, but to build a professional security company founded on excellence, accountability and lasting partnerships.',
    'I thank our clients, employees and partners for their continued trust and support as we work together to create safer homes, workplaces and communities.',
  ],
};

export const clientLogos = [
  { id: 'hikvision', src: '/assets/clients/hikvision.png', alt: 'Hikvision' },
  { id: 'suprema', src: '/assets/clients/suprema.png', alt: 'Suprema' },
  { id: 'risco', src: '/assets/clients/risco.png', alt: 'Risco Group' },
  { id: 'dlink', src: '/assets/clients/dlink.png', alt: 'D-Link' },
  { id: 'sherlotronics', src: '/assets/clients/sherlotronics.png', alt: 'Sherlotronics' },
  { id: 'zkteco', src: '/assets/clients/zkteco.png', alt: 'ZKTeco' },
  { id: 'garrett', src: '/assets/clients/garrett.png', alt: 'Garrett Metal Detectors' },
  { id: 'secolink', src: '/assets/clients/secolink.png', alt: 'Secolink' },
];

export const protectedProperties = [
  'Kitui Hospital Maternity and Nursing Homes',
  'Neema Hospital Limited',
  'Green Acres Garden',
  'Kitui County Probation Office',
  'Azusa Community Church',
  'Toyota Kenya Kitui',
  'Port County Hotel Kabati',
  'Bishop Dunne School Kabati',
  'Machakos Hardware Kitui',
  'Jika Kitui',
];
