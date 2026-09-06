path = "src/components/Navbar.jsx"
with open(path, "r") as f:
    content = f.read()

content = content.replace(
    "  UserRound,\n  PhoneCall,",
    "  UserRound,\n  Briefcase,\n  PhoneCall,"
)

content = content.replace(
    "  { label: 'Testimonials', to: '/testimonials', icon: MessageSquareQuote },\n];",
    "  { label: 'Testimonials', to: '/testimonials', icon: MessageSquareQuote },\n  { label: 'Careers', to: '/careers', icon: Briefcase },\n];"
)

with open(path, "w") as f:
    f.write(content)

print("Careers nav link added.")
