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
    
    # Replace <section className={styles.headerSection}>
    content = content.replace('className={styles.headerSection}', 'className={`${styles.headerSection} geometry-bg-light`}')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update CSS files
for file in css_files:
    filepath = os.path.join(pages_dir, file)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to change .headerSection to have transparent background and primary color
    if '.headerSection {' in content:
        # Regex to replace background-color inside .headerSection
        # Find .headerSection block
        pattern = r'(\.headerSection\s*\{[^}]*?)background-color:\s*var\(--color-primary\);'
        content = re.sub(pattern, r'\1background-color: transparent;', content)
        
        pattern = r'(\.headerSection\s*\{[^}]*?)color:\s*var\(--color-white\);'
        content = re.sub(pattern, r'\1color: var(--color-primary);', content)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Headers updated successfully!")
