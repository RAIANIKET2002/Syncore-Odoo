import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Code, Zap, RefreshCw, Headphones, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './Services.module.css';

const Services = () => {
  useEffect(() => {
    document.title = 'Comprehensive Odoo ERP Services | Syncore Infotech Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Syncore enterprise Odoo services: Implementation, Custom Development, Third-Party Integration, Migration, AMC Support, and Training.');
    }
  }, []);
  const services = [
    { slug: 'implementation', title: 'Odoo ERP Implementation', desc: 'End-to-end deployment of Odoo tailored to your business workflows.', icon: Settings },
    { slug: 'custom-development', title: 'Odoo Custom Development', desc: 'Building custom modules and apps to extend Odoo functionality.', icon: Code },
    { slug: 'integration', title: 'Odoo Integration', desc: 'Seamlessly connect Odoo with your existing third-party systems via APIs.', icon: Zap },
    { slug: 'migration', title: 'Odoo Migration', desc: 'Upgrade to the latest Odoo version safely without data loss.', icon: RefreshCw },
    { slug: 'support-amc', title: 'Odoo Support & AMC', desc: '24/7 technical support and maintenance to keep your systems running.', icon: Headphones },
    { slug: 'training', title: 'Odoo Training', desc: 'Comprehensive training programs to ensure user adoption.', icon: BookOpen },
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={`${styles.headerSection} enterprise-bg`}>
        <div className="container text-center">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Breadcrumbs items={[
              { label: 'Home', path: '/' },
              { label: 'Services' }
            ]} />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-4"
          >
            Our <span className="text-accent">Services</span>
          </motion.h1>
          <p className={styles.headerSubtitle}>
            Comprehensive Odoo ERP services from strategy to execution and beyond.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.servicesGrid}>
          {services.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card-base service-card ${styles.serviceCard}`}
            >
              <div className={styles.serviceIcon}>
                <srv.icon size={28} />
              </div>
              <h3 className={styles.serviceTitle}>{srv.title}</h3>
              <p className={styles.serviceDesc}>{srv.desc}</p>
              <Link to={`/services/${srv.slug}`} className={styles.serviceBtn}>
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Implementation Process Timeline */}
      <section className={`container ${styles.processSection}`}>
        <div className={styles.sectionHeader}>
          <h2 className="heading-lg">Implementation <span className="text-accent">Process</span></h2>
          <p className={styles.sectionDesc}>Our structured 7-step approach to successful ERP deployment.</p>
        </div>

        <div className={styles.processContainer}>
          {['01 Discovery', '02 Analysis', '03 Design', '04 Development', '05 Testing', '06 Go Live', '07 Support'].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.processStep}
            >
              {step}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
