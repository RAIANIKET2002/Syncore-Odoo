import re

with open('src/data/odooModulesData.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_imports = """import appraisalIcon from '../assets/Appraisal.png';
import employeesIcon from '../assets/Employees.png';
import fieldServiceIcon from '../assets/Field Services.png';
import maintenanceIcon from '../assets/Maintanace.png';
import rentalIcon from '../assets/Renting.png';
import spreadsheetIcon from '../assets/Spreadsheet.webp';
import studioIcon from '../assets/Studio.png';
"""

content = content.replace('export const categories = [', new_imports + '\nexport const categories = [')

def replace_icon(module_id, old_icon, new_icon, text):
    pattern = r'(id:\s*"' + module_id + r'"[\s\S]*?)icon:\s*' + old_icon
    return re.sub(pattern, r'\g<1>icon: ' + new_icon, text, count=1)

content = replace_icon('employees', 'hrIcon', 'employeesIcon', content)
content = replace_icon('appraisals', 'hrIcon', 'appraisalIcon', content)
content = replace_icon('fieldservice', 'helpdeskIcon', 'fieldServiceIcon', content)
content = replace_icon('maintenance', 'manufacturingIcon', 'maintenanceIcon', content)
content = replace_icon('rental', 'salesIcon', 'rentalIcon', content)
content = replace_icon('spreadsheet', 'accountingIcon', 'spreadsheetIcon', content)
content = replace_icon('studio', 'documentsIcon', 'studioIcon', content)

with open('src/data/odooModulesData.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
