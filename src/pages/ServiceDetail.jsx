import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, LayoutDashboard, Settings as SettingsIcon, GitMerge, FileText } from 'lucide-react';
import { serviceData } from '../data/serviceData';
import { odooModulesData } from '../data/odooModulesData';
import ModuleCard from '../components/ModuleCard';
import ModuleDrawer from '../components/ModuleDrawer';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './ServiceDetail.module.css';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.faqItem}
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 className={styles.faqQuestion} style={{ margin: 0 }}>{faq.question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight size={20} color="var(--color-primary)" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p className={styles.faqAnswer} style={{ margin: 0 }}>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];
  const [selectedModule, setSelectedModule] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | Syncore Infotech Solutions`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.description || service.heroSubtitle);
      }
    }
  }, [slug, service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const handleModuleClick = (mod) => {
    setSelectedModule(mod);
    setIsDrawerOpen(true);
  };

  const serviceModules = service.modules
    .map(name => odooModulesData.find(mod => mod.name === name))
    .filter(Boolean);

  const relatedServices = service.relatedServices
    .map(relatedSlug => serviceData[relatedSlug])
    .filter(Boolean);

  // Generate FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO SECTION */}
      <section className={`${styles.heroSection} enterprise-bg`}>
        <div className="container">
          <div className={styles.heroContent}>
            {/* Breadcrumbs */}
            <Breadcrumbs items={[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: service.title }
            ]} />

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.heroTitle}
            >
              {service.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={styles.heroSubtitle}
            >
              {service.heroTitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* OVERVIEW & DELIVERABLES */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg">Service <span className="text-accent">Overview</span></h2>
          </div>
          <p className={styles.overviewText}>{service.overview}</p>

          <div className={styles.grid} style={{ marginTop: '3rem' }}>
            {/* Deliverables */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                <CheckCircle2 size={24} />
                What You Receive
              </h3>
              <ul className={styles.list}>
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Benefits */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                <FileText size={24} />
                Key Benefits
              </h3>
              <ul className={styles.list}>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <CheckCircle2 size={18} />
                    <div>
                      <strong>{benefit.title}: </strong>
                      {benefit.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg">Our <span className="text-accent">Methodology</span></h2>
          </div>
          <div className={styles.methodologyGrid}>
            {service.methodology.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={styles.stepCard}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                <h4 className={styles.stepTitle}>{step.name}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES INVOLVED */}
      {serviceModules.length > 0 && (
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className="heading-lg">Modules <span className="text-accent">Covered</span></h2>
            </div>
            <div className={styles.modulesGrid} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
              {serviceModules.map((mod, index) => (
                <ModuleCard 
                  key={mod.name} 
                  mod={mod} 
                  index={index} 
                  onClick={handleModuleClick} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SCREENSHOT PLACEHOLDERS */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg">System <span className="text-accent">Preview</span></h2>
          </div>
          <div className={styles.placeholderGrid}>
            <div className={styles.placeholder}>
              <LayoutDashboard size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <h3>Dashboard Screenshot</h3>
              <p>Placeholder for actual project UI</p>
            </div>
            <div className={styles.placeholder}>
              <SettingsIcon size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <h3>Configuration Screenshot</h3>
              <p>Placeholder for actual project UI</p>
            </div>
            <div className={styles.placeholder}>
              <GitMerge size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <h3>Workflow Screenshot</h3>
              <p>Placeholder for actual project UI</p>
            </div>
            <div className={styles.placeholder}>
              <FileText size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <h3>Reporting Screenshot</h3>
              <p>Placeholder for actual project UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      {service.industries.length > 0 && (
        <section className={styles.contentSection}>
          <div className="container text-center">
            <div className={styles.sectionHeader}>
              <h2 className="heading-lg">Industries <span className="text-accent">We Serve</span></h2>
            </div>
            <div className={styles.industriesList}>
              {service.industries.map((ind, idx) => (
                <Link key={idx} to={`/industries/${ind.slug}`} className={styles.industryTag}>
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA 1 */}
      <section className={`${styles.ctaSection} enterprise-bg`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={`heading-lg ${styles.ctaTitle}`} style={{ color: 'white', marginBottom: '1rem' }}>Ready to transform your business?</h2>
          <p style={{ color: 'var(--color-gray-300)', marginBottom: '2rem', fontSize: '1.125rem' }}>Talk to our Odoo experts and get a free requirement discussion.</p>
          <div className={styles.ctaButtons} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-accent">Book Consultation</Link>
            <Link to="/contact" className="btn btn-outline">Request Demo</Link>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg">Frequently Asked <span className="text-accent">Questions</span></h2>
          </div>
          <div className={styles.faqList}>
            {service.faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className={styles.relatedServices}>
          <div className="container text-center">
            <div className={styles.sectionHeader}>
              <h2 className="heading-lg">Related <span className="text-accent">Services</span></h2>
            </div>
            <div className={styles.industriesList}>
              {relatedServices.map((rel, idx) => (
                <Link key={idx} to={`/services/${rel.slug}`} className={styles.industryTag}>
                  ✓ {rel.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA 2 */}
      <section className={`${styles.ctaSection} enterprise-bg`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={`heading-lg ${styles.ctaTitle}`} style={{ color: 'white', marginBottom: '2rem' }}>Start Your Journey With Syncore</h2>
          <div className={styles.ctaButtons} style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-accent">Talk To Our Odoo Experts</Link>
          </div>
        </div>
      </section>

      {/* Drawer */}
      <AnimatePresence>
        {isDrawerOpen && selectedModule && (
          <ModuleDrawer 
            isOpen={isDrawerOpen} 
            moduleData={selectedModule} 
            onClose={() => setIsDrawerOpen(false)} 
            onSelectModule={handleModuleClick} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceDetail;
