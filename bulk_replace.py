import os
import re

replacements = {
    r"CodePulse": "Inficode",
    r"Codepulse": "Inficode",
    r"info@codepulse\.com": "info@inficode.tech",
    r"www\.codepulse\.com": "www.inficode.tech",
}

def process_file(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        new_content = content
        for pattern, repl in replacements.items():
            new_content = re.sub(pattern, repl, new_content)
            
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print("Updated", filepath)
    except Exception as e:
        print("Error processing", filepath, str(e))

for root, dirs, files in os.walk("src"):
    for file in files:
        if file.endswith(".jsx") or file.endswith(".js"):
            process_file(os.path.join(root, file))
