import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Clock, 
  ArrowRight, 
  Calendar, 
  Tag, 
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './Resources.module.css';

const resourceCategories = [
  'All',
  'Odoo ERP Guides',
  'ERP Implementation',
  'Business Automation',
  'Custom Software',
  'Cloud Infrastructure'
];

const resourceArticles = [
  {
    id: 1,
    title: 'A Complete Guide to Odoo ERP Implementation for Mid-Sized Enterprises',
    category: 'Odoo ERP Guides',
    excerpt: 'Key strategies, common pitfalls, and data migration roadmaps to ensure seamless Odoo adoption across manufacturing and retail.',
    readTime: '8 min read',
    date: 'Draft Resource Guide',
    featured: true
  },
  {
    id: 2,
    title: 'Migrating Legacy Inventory Systems to Odoo WMS: A Step-by-Step Architecture',
    category: 'ERP Implementation',
    excerpt: 'How real-time double-entry inventory tracking eliminates stock discrepancies, improves valuation accuracy, and automates vendor RFQs.',
    readTime: '6 min read',
    date: 'Technical Architecture Brief',
    featured: false
  },
  {
    id: 3,
    title: 'Automating Cross-Departmental Workflows: From Sales Quotes to Shop Floor MRP',
    category: 'Business Automation',
    excerpt: 'Connecting front-office CRM pipelines with backend manufacturing work centers without brittle third-party integration connectors.',
    readTime: '5 min read',
    date: 'Operational Workflow Guide',
    featured: false
  },
  {
    id: 4,
    title: 'Custom Software vs. Modular ERP: Choosing the Right Digital Strategy',
    category: 'Custom Software',
    excerpt: 'A structured framework comparing fully bespoke engineering against scalable, configurable platforms for fast-growing companies.',
    readTime: '7 min read',
    date: 'Engineering Comparison',
    featured: false
  },
  {
    id: 5,
    title: 'Cloud Infrastructure Best Practices for High-Availability Odoo Deployments',
    category: 'Cloud Infrastructure',
    excerpt: 'PostgreSQL database tuning, automated daily backups, SSL offloading, and worker scaling for enterprise enterprise uptime.',
    readTime: '9 min read',
    date: 'DevOps & Cloud Blueprint',
    featured: false
  },
  {
    id: 6,
    title: 'Understanding Multi-Company and Multi-Currency Accounting in Odoo',
    category: 'Odoo ERP Guides',
    excerpt: 'How to structure unified fiscal charts of accounts across subsidiary operations while maintaining centralized financial consolidation.',
    readTime: '6 min read',
    date: 'Financial Systems Brief',
    featured: false
  }
];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'Technology Insights & Resources | Syncore Infotech Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore guides, technical articles, and implementation resources on Odoo ERP, business process automation, and enterprise engineering from Syncore.');
    }
  }, []);

  const filteredArticles = resourceArticles.filter(art => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.resourcesPage}>
      {/* SECTION A: HERO */}
      <section className={`${styles.heroSection} enterprise-bg`}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Breadcrumbs items={[
              { label: 'Home', path: '/' },
              { label: 'Resources' }
            ]} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <span className={styles.heroEyebrow}>KNOWLEDGE CENTRE &amp; INSIGHTS</span>
            <h1 className="heading-xl">
              Insights, Knowledge and <span className="text-accent">Technology Resources</span>
            </h1>
            <p className={styles.heroDesc}>
              Explore practical guides, technical insights and useful knowledge to help businesses make better technology decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION B: FILTER AND SEARCH */}
      <section className="section container">
        <div className={styles.controlsWrapper}>
          <div className={styles.searchBar}>
            <Search size={18} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search guides, topics, or keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.categoryPills}>
            {resourceCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryPill} ${selectedCategory === cat ? styles.activePill : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION C: RESOURCE LISTING */}
        <div className={styles.resourceGrid}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((art, idx) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className={styles.resourceCard}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.categoryBadge}>
                    <Tag size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {art.category}
                  </span>
                  <span className={styles.readTime}>
                    <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {art.readTime}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{art.title}</h3>
                <p className={styles.cardExcerpt}>{art.excerpt}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.dateInfo}>
                    <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    {art.date}
                  </span>
                  <Link to="/contact" className={styles.readMoreLink}>
                    Enquire on Topic <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No resources found matching your search criteria.</p>
              <button onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="btn btn-outline">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION D: FUTURE KNOWLEDGE TOPICS CALLOUT */}
      <section className={`${styles.roadmapSection} bg-gray-50`}>
        <div className="container text-center">
          <div className={styles.sectionHeader}>
            <Sparkles size={28} color="var(--color-royal-blue)" style={{ margin: '0 auto 0.75rem auto' }} />
            <h2 className="heading-lg">Continuous Technical Documentation</h2>
            <p className={styles.sectionDesc}>
              Our engineering team regularly publishes practical architectural breakdowns, case notes, and Odoo ERP tutorials. Need a specific system guide or consultation?
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn btn-primary">
                Request a Custom ERP Guide <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
