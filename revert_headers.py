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
    
    # Replace className={`${styles.headerSection} geometry-bg-light`} 
    # back to just using styles.headerSection but add hero-gradient and circuit-bg
    content = content.replace('className={`${styles.headerSection} geometry-bg-light`}', 'className={`${styles.headerSection} hero-gradient circuit-bg`}')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update CSS files
for file in css_files:
    filepath = os.path.join(pages_dir, file)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to change .headerSection transparent background back to empty, and primary color back to white
    if '.headerSection {' in content:
        pattern = r'(\.headerSection\s*\{[^}]*?)background-color:\s*transparent;'
        content = re.sub(pattern, r'\1', content) # We don't need background-color since we use .hero-gradient class
        
        pattern = r'(\.headerSection\s*\{[^}]*?)color:\s*var\(--color-primary\);'
        content = re.sub(pattern, r'\1color: var(--color-white);', content)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Headers reverted successfully!")
