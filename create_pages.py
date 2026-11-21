import os

pages = ['Home', 'About', 'Services', 'Solutions', 'Industries', 'Modules', 'Portfolio', 'Resources', 'Contact']
os.makedirs('src/pages', exist_ok=True)

template = """import React from 'react';
import { motion } from 'framer-motion';

const {name} = () => {{
  return (
    <div className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="heading-xl mb-6">{name}</h1>
        <p className="text-gray text-lg">Welcome to the {name} page.</p>
      </motion.div>
    </div>
  );
}};

export default {name};
"""

for page in pages:
    content = template.replace('{name}', page)
    with open(f'src/pages/{page}.jsx', 'w') as f:
        f.write(content)

print("Pages created successfully.")
