import re

path = "src/data/content.js"
with open(path, "r") as f:
    content = f.read()

# 1. Add new image imports after the last existing image import
content = content.replace(
    "import consultancyImg from '../assets/images/consultancy.jpg';",
    "import consultancyImg from '../assets/images/consultancy.jpg';\n"
    "import metalDetectorImg from '../assets/images/metal-detector.jpg';\n"
    "import baggageScannerImg from '../assets/images/baggage-scanner.jpg';\n"
    "import backgroundCheckImg from '../assets/images/background-check.jpg';\n"
    "import automaticGateImg from '../assets/images/automatic-gate.jpg';\n"
    "import fireAlarmImg from '../assets/images/fire-alarm.jpg';\n"
    "import dog1Img from '../assets/images/dog-1.jpg';\n"
    "import dog2Img from '../assets/images/dog-2.jpg';"
)

# 2. Swap single-image placeholders
replacements = {
    "image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Fire+Alarm',": "image: fireAlarmImg,",
    "image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Baggage+Scanners',": "image: baggageScannerImg,",
    "image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Automatic+Gates',": "image: automaticGateImg,",
    "image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Background+Checks',": "image: backgroundCheckImg,",
    "image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=Metal+Detectors',": "image: metalDetectorImg,",
    # Dog card gets an images array instead
    "image: 'https://placehold.co/600x400/1B3A5C/FFFFFF?text=K9+Unit',": "images: [dog1Img, dog2Img],",
}
for old, new in replacements.items():
    if old not in content:
        raise SystemExit(f"NOT FOUND: {old}")
    content = content.replace(old, new)

with open(path, "w") as f:
    f.write(content)

print("content.js updated.")
