import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './Portfolio.module.css';

import portfolioImg1 from '../assets/portfolio_1.webp';
import portfolioImg2 from '../assets/portfolio_2.jpg';
import portfolioImg3 from '../assets/portfolio_3.webp';

const Portfolio = () => {
  useEffect(() => {
    document.title = 'Client Portfolio & Case Studies | Syncore Infotech Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Syncore case studies and real-world ERP implementation deployments across Manufacturing, Retail, and Agriculture.');
    }
  }, []);

  const projects = [
    {
      title: 'Manufacturing ERP Implementation',
      industry: 'Manufacturing',
      modules: 'Manufacturing, Inventory, Accounting',
      results: 'Increased production efficiency by 35% and reduced inventory holding costs by 20%.',
      img: portfolioImg1
    },
    {
      title: 'Retail POS Deployment',
      industry: 'Retail',
      modules: 'POS, Sales, Inventory',
      results: 'Unified 15 store locations with real-time inventory tracking and centralized reporting.',
      img: portfolioImg2
    },
    {
      title: 'Custom Farmer Management System',
      industry: 'Agriculture',
      modules: 'Custom Apps, Accounting, CRM',
      results: 'Automated procurement from 5000+ farmers with direct bank integrations.',
      img: portfolioImg3
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={`${styles.headerSection} enterprise-bg`}>
        <div className="container text-center">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Breadcrumbs items={[
              { label: 'Home', path: '/' },
              { label: 'Portfolio' }
            ]} />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-4"
          >
            Success <span className="text-accent">Stories</span>
          </motion.h1>
          <p className={styles.headerSubtitle}>
            Discover how we have helped businesses across industries scale operations with Odoo.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.portfolioGrid}>
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card ${styles.projectCard}`}
            >
              <div className={styles.imageContainer}>
                <img src={proj.img} alt={proj.title} className={styles.projectImage} />
                <div className={styles.industryBadge}>
                  {proj.industry}
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <div className={styles.dataBlock}>
                  <span className={styles.dataLabel}>Modules Used</span>
                  <span className={styles.dataValue}>{proj.modules}</span>
                </div>
                <div>
                  <span className={styles.dataLabel}>Results Achieved</span>
                  <p className={styles.resultsText}>{proj.results}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '4rem', padding: '3rem 2rem', background: 'var(--color-ice-white)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(8, 27, 58, 0.08)' }}>
          <h2 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--color-navy)' }}>
            Have a Similar Operational Challenge?
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto', color: 'var(--color-muted-slate)' }}>
            Let our enterprise Odoo specialists review your workflows and design a scalable ERP roadmap tailored to your company.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Schedule an Exploratory Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
