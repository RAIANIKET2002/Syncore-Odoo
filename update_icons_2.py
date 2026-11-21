import re

with open('src/data/odooModulesData.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace fleetIcon
if "import fleetIcon" not in content:
    content = content.replace('export const categories = [', "import fleetIcon from '../assets/Fleet.png';\nexport const categories = [")

# subcontracting uses purchaseIcon, change to manufacturingIcon
content = re.sub(r'(id:\s*"subcontracting"[\s\S]*?)icon:\s*purchaseIcon', r'\g<1>icon: manufacturingIcon', content)

# fleet uses inventoryIcon, change to fleetIcon
content = re.sub(r'(id:\s*"fleet"[\s\S]*?)icon:\s*inventoryIcon', r'\g<1>icon: fleetIcon', content)


with open('src/data/odooModulesData.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
