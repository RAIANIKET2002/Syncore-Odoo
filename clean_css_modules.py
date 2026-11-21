import os
import re

pages_dir = r"d:\CodePulse\src\pages"

css_files = [
    "Home.module.css", 
    "Services.module.css", 
    "Industries.module.css", 
    "Modules.module.css",
    "IndustryDetail.module.css",
    "ServiceDetail.module.css"
]

def clean_card_class(content, class_name):
    # Regex to find the block for the class
    pattern = r'(\.' + class_name + r'\s*\{)([^}]*)(\})'
    
    def repl(match):
        start, block, end = match.groups()
        # Remove properties that should be inherited from .card-base
        block = re.sub(r'\s*background(?:-color)?:\s*[^;]+;', '', block)
        block = re.sub(r'\s*padding:\s*[^;]+;', '', block)
        block = re.sub(r'\s*border-radius:\s*[^;]+;', '', block)
        block = re.sub(r'\s*border:\s*[^;]+;', '', block)
        block = re.sub(r'\s*box-shadow:\s*[^;]+;', '', block)
        block = re.sub(r'\s*transition:\s*[^;]+;', '', block)
        block = re.sub(r'\s*display:\s*[^;]+;', '', block)
        block = re.sub(r'\s*flex-direction:\s*[^;]+;', '', block)
        return start + block + end

    content = re.sub(pattern, repl, content)
    
    # Clean up the hover block
    hover_pattern = r'(\.' + class_name + r':hover\s*\{)([^}]*)(\})'
    def hover_repl(match):
        start, block, end = match.groups()
        block = re.sub(r'\s*transform:\s*[^;]+;', '', block)
        block = re.sub(r'\s*box-shadow:\s*[^;]+;', '', block)
        block = re.sub(r'\s*border-color:\s*[^;]+;', '', block)
        # If block is empty after this, we could ideally remove it entirely, 
        # but leaving an empty block is harmless.
        return start + block + end
        
    content = re.sub(hover_pattern, hover_repl, content)
    
    return content


for file in css_files:
    filepath = os.path.join(pages_dir, file)
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Clean specific classes
    for c in ["serviceCard", "moduleCard", "industryCard", "card"]:
        content = clean_card_class(content, c)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("CSS modules cleaned.")
