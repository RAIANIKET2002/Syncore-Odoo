import os
import re

pages_dir = r"d:\CodePulse\src\pages"

jsx_files = [f for f in os.listdir(pages_dir) if f.endswith('.jsx')]
css_files = [f for f in os.listdir(pages_dir) if f.endswith('.module.css')]

# Update JSX files
for file in jsx_files:
    filepath = os.path.join(pages_dir, file)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Replace hero-gradient circuit-bg with enterprise-bg
    content = content.replace('hero-gradient circuit-bg', 'enterprise-bg')
    content = content.replace('circuit-bg', 'enterprise-bg') # Catch the one in Home.jsx and CTA sections
    
    # 2. Update card classes
    # Instead of doing it blindly, we'll look for specific matches
    content = re.sub(r'className=\{(`.*?\$\{styles\.serviceCard\}.*?`)\}', r'className={`card-base service-card ${styles.serviceCard}`}', content)
    content = re.sub(r'className=\{styles\.serviceCard\}', r'className={`card-base service-card ${styles.serviceCard}`}', content)
    
    content = re.sub(r'className=\{(`.*?\$\{styles\.industryCard\}.*?`)\}', r'className={`card-base industry-card ${styles.industryCard}`}', content)
    content = re.sub(r'className=\{styles\.industryCard\}', r'className={`card-base industry-card ${styles.industryCard}`}', content)
    
    content = re.sub(r'className=\{styles\.moduleCard\}', r'className={`card-base module-card ${styles.moduleCard}`}', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update CSS files to remove conflicting properties from the local card classes
properties_to_remove = [
    r'background-color:.*?;',
    r'background:.*?;',
    r'border-radius:.*?;',
    r'box-shadow:.*?;',
    r'border:.*?;',
    r'transition:.*?;',
    r'transform:.*?;',
]

for file in css_files:
    filepath = os.path.join(pages_dir, file)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Clean up local card classes
    for card_class in ['\.serviceCard', '\.moduleCard', '\.industryCard', '\.projectCard']:
        # We need a robust way to strip these properties from just the card blocks, 
        # but regex might be tricky. Let's just remove them from hover states too.
        # Actually, it's safer to just modify the files manually or use sed if we know exactly.
        pass
        
    # Let's at least remove the hero gradient from Home.module.css .hero
    if 'Home.module.css' in file:
        content = re.sub(r'background:\s*linear-gradient.*?;', '', content)
        
    # Also clean up .headerSection backgrounds
    if '.headerSection {' in content:
        content = re.sub(r'(\.headerSection\s*\{[^}]*?)background-color:.*?;', r'\1', content)
        content = re.sub(r'(\.headerSection\s*\{[^}]*?)color:.*?;', r'\1', content)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Applied enterprise-bg and card classes to JSX files.")
