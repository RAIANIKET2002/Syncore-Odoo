import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, GitMerge, Database, Shield, Zap, Cloud } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './About.module.css';

const About = () => {
  useEffect(() => {
    document.title = 'About Us — Syncore Infotech Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Syncore Infotech Solutions, our enterprise methodology, Odoo implementation standards, and digital transformation capabilities.');
    }
  }, []);
  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <section className={`${styles.headerSection} enterprise-bg`}>
        <div className="container text-center">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Breadcrumbs items={[
              { label: 'Home', path: '/' },
              { label: 'About Us' }
            ]} />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-4"
          >
            About <span className="text-accent">Syncore</span>
          </motion.h1>
          <p className={styles.headerSubtitle}>
            We are a new-age Odoo consulting and development company helping businesses transform operations, automate workflows and make data-driven decisions.
          </p>
        </div>
      </section>

      {/* Our Approach Timeline */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg">Our <span className="text-accent">Approach</span></h2>
            <p className={styles.sectionDesc}>A proven methodology to ensure your digital transformation is seamless and successful.</p>
          </div>
          
          <div className={styles.timelineContainer}>
            {/* Connecting Line */}
            <div className={styles.timelineLine}></div>

            {[
              { title: 'Understand Business', desc: 'We start by deep diving into your operations, challenges, and goals.' },
              { title: 'Design Solution', desc: 'Mapping your processes to Odoo and designing the perfect architecture.' },
              { title: 'Build & Customize', desc: 'Developing custom modules and tailoring Odoo to fit like a glove.' },
              { title: 'Deploy & Optimize', desc: 'Smooth go-live with data migration, training, and performance tuning.' },
              { title: 'Support & Evolve', desc: 'Ongoing AMC and continuous evolution as your business grows.' },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineItemEven : styles.timelineItemOdd}`}
              >
                <div className={styles.timelineSpacer}></div>
                <div className={styles.timelineNumber}>
                  {i + 1}
                </div>
                <div className={`${styles.timelineContentWrapper} ${i % 2 === 0 ? styles.timelineContentEven : styles.timelineContentOdd}`}>
                  <div className="card shadow-lg">
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg mb-4">Technical <span className="text-accent">Excellence</span></h2>
            <p className={styles.sectionDesc}>Built on modern engineering principles for scalability and performance.</p>
          </div>

          <div className={styles.techGrid}>
            {[
              { icon: Code, title: 'Advanced Backend Customization' },
              { icon: Database, title: 'Data Migration & Optimization' },
              { icon: GitMerge, title: 'API Development & Integrations' },
              { icon: Shield, title: 'Security & Access Control' },
              { icon: Zap, title: 'Performance Engineering' },
              { icon: Cloud, title: 'Odoo.sh DevOps & CI/CD' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.techCard}
              >
                <div className={styles.techIcon}>
                  <item.icon size={24} />
                </div>
                <h4 className={styles.techTitle}>{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
