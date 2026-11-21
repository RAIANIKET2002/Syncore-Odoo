import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './Industries.module.css';

import industryImg1 from '../assets/industry_1.jpg';
import industryImg2 from '../assets/industry_2.jpg';
import industryImg3 from '../assets/industry_3.jpg';
import industryImg4 from '../assets/industry_4.jpg';
import industryImg5 from '../assets/industry_5.jpg';
import industryImg6 from '../assets/industry_6.jpg';

const Industries = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Industry Solutions — Syncore Infotech Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore specialized Odoo ERP architecture for Manufacturing, Retail, Distribution, Agriculture, Healthcare, and Professional Services.');
    }
  }, []);
  
  const industries = [
    { name: 'Manufacturing', img: industryImg1, slug: 'manufacturing' },
    { name: 'Retail & POS', img: industryImg2, slug: 'retail-pos' },
    { name: 'Trading & Distribution', img: industryImg3, slug: 'trading-distribution' },
    { name: 'Agriculture', img: industryImg4, slug: 'agriculture' },
    { name: 'Healthcare', img: industryImg5, slug: 'healthcare' },
    { name: 'Professional Services', img: industryImg6, slug: 'professional-services' },
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={`${styles.headerSection} enterprise-bg`}>
        <div className="container text-center">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Breadcrumbs items={[
              { label: 'Home', path: '/' },
              { label: 'Industries' }
            ]} />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-4"
          >
            Industries We <span className="text-accent">Serve</span>
          </motion.h1>
          <p className={styles.headerSubtitle}>
            Tailored Odoo solutions for diverse business sectors. We understand your industry-specific challenges.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.industriesGrid}>
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card-base industry-card ${styles.industryCard}`}
              onClick={() => navigate(`/industries/${ind.slug}`)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={ind.img} 
                alt={ind.name} 
                className={styles.industryImage}
              />
              <div className={styles.industryOverlay}></div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{ind.name}</h3>
                <div className={styles.cardHoverContent}>
                  <p className={styles.cardText}>Discover how our customized Odoo implementations drive growth in the {ind.name} sector.</p>
                  <button className={styles.cardBtn} onClick={(e) => { e.stopPropagation(); navigate(`/industries/${ind.slug}`); }}>View Solutions</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Industries;
