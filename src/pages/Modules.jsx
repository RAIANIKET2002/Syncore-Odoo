import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import styles from './Modules.module.css';
import { odooModulesData, categories } from '../data/odooModulesData';
import ModuleCard from '../components/ModuleCard';
import ModuleDrawer from '../components/ModuleDrawer';
import Breadcrumbs from '../components/Breadcrumbs';

const Modules = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedModule, setSelectedModule] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    document.title = '30+ Enterprise Ready Odoo Modules | Syncore Infotech Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse Syncore comprehensive catalog of 30+ enterprise-ready Odoo modules across Sales, Operations, Services, and Human Resources.');
    }
  }, []);

  // Filter modules based on search and category
  const filteredModules = odooModulesData.filter(mod => {
    const matchesSearch = mod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          mod.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || mod.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleModuleClick = (mod) => {
    setSelectedModule(mod);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    // Optional: wait for animation before clearing data
    // setTimeout(() => setSelectedModule(null), 300);
  };

  return (
    <div className={styles.pageWrapper}>
      <section className={`${styles.headerSection} enterprise-bg`}>
        <div className="container text-center">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Breadcrumbs items={[
              { label: 'Home', path: '/' },
              { label: 'Modules' }
            ]} />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-4"
          >
            Core <span className="text-accent">Modules</span>
          </motion.h1>
          <p className={styles.headerSubtitle} style={{ marginBottom: '2rem' }}>
            Explore the comprehensive suite of Odoo applications designed to meet all your business needs.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '600px', margin: '0 auto 2rem auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gray-400)' }}>
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search modules... (e.g. Inventory)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                color: 'var(--color-gray-900)'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '0.5rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                  color: selectedCategory === cat ? 'var(--color-white)' : 'var(--color-gray-200)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        {filteredModules.length > 0 ? (
          <div className={styles.modulesGrid}>
            <AnimatePresence>
              {filteredModules.map((mod, i) => (
                <ModuleCard 
                  key={mod.id} 
                  mod={mod} 
                  index={i} 
                  onClick={handleModuleClick} 
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-gray-500)' }}>
            <Search size={48} style={{ opacity: 0.2, margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-gray-700)', marginBottom: '0.5rem' }}>No modules found</h3>
            <p>Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="btn btn-outline"
              style={{ marginTop: '1rem' }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <ModuleDrawer 
        isOpen={isDrawerOpen} 
        onClose={handleCloseDrawer} 
        moduleData={selectedModule} 
        onSelectModule={handleModuleClick}
      />
    </div>
  );
};

export default Modules;
