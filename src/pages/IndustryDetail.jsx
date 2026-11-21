import { useState, useEffect, Fragment } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { industryData } from '../data/industryData';
import { odooModulesData } from '../data/odooModulesData';
import styles from './IndustryDetail.module.css';
import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder';
import ModuleFAQ from '../components/ModuleFAQ';
import ModuleCard from '../components/ModuleCard';
import ModuleDrawer from '../components/ModuleDrawer';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const IndustryDetail = () => {
  const { slug } = useParams();
  const data = industryData[slug];
  
  const [selectedModule, setSelectedModule] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (data) {
      document.title = data.seoTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', data.seoDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = data.seoDescription;
        document.head.appendChild(meta);
      }
    }
  }, [data]);

  if (!data) {
    return <Navigate to="/industries" replace />;
  }

  const handleModuleClick = (fullMod) => {
    setSelectedModule(fullMod);
    setIsDrawerOpen(true);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} enterprise-bg`}>
        <div className={styles.heroBg}></div>
        <div className="container relative z-10">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Industries', path: '/industries' },
            { label: data.name }
          ]} />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroTitle}
          >
            {data.name} ERP Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.heroSubtitle}
          >
            {data.seoDescription}
          </motion.p>
        </div>
      </section>

      <div className="container">
        {/* KPIs */}
        <section className={styles.contentSection}>
          <div className={styles.kpiGrid}>
            {data.kpis.map((kpi, idx) => (
              <div key={idx} className={styles.kpiCard}>
                {kpi}
              </div>
            ))}
          </div>

          <div className={styles.twoColLayout}>
            {/* Overview */}
            <div>
              <h2 className={styles.sectionTitle}>Industry Overview</h2>
              <p className={styles.overviewText}>{data.overview}</p>
            </div>

            {/* Challenges */}
            <div>
              <h2 className={styles.sectionTitle}>Key Challenges</h2>
              <div className={styles.challengesList}>
                {data.challenges.map((challenge, idx) => (
                  <div key={idx} className={styles.challengeItem}>
                    <AlertTriangle size={20} style={{ color: 'var(--color-error)', flexShrink: 0, marginTop: '2px' }} />
                    <span className={styles.challengeText}>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Modules */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle} style={{ justifyContent: 'center' }}>Recommended Odoo Modules</h2>
          <div className={styles.modulesGrid}>
            <AnimatePresence>
              {data.recommendedModules.map((mod, idx) => {
                const fullMod = odooModulesData.find(m => m.name === mod.name);
                if (!fullMod) return null;
                // Override the description with the industry-specific reason
                const cardMod = { ...fullMod, desc: mod.reason };
                return (
                  <ModuleCard 
                    key={idx} 
                    mod={cardMod} 
                    index={idx} 
                    onClick={() => handleModuleClick(fullMod)} 
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* Solution Architecture / Workflow */}
        <section className={styles.workflowContainer}>
          <h2 className={styles.workflowTitle}>Solution Workflow Architecture</h2>
          <div className={styles.workflowSteps}>
            {data.workflow.map((step, idx) => (
              <Fragment key={idx}>
                <div className={styles.workflowStep}>{step}</div>
                {idx < data.workflow.length - 1 && (
                  <div className={styles.workflowArrow}>
                    {/* Render right arrow on desktop, down arrow on mobile, simplified with Right arrow for now */}
                    <ArrowRight size={24} className="hidden md:block" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </section>

        {/* Business Benefits */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Business Benefits</h2>
          <div className={styles.benefitsList}>
            {data.benefits.map((benefit, idx) => {
              const [title, desc] = benefit.split(': ');
              return (
                <div key={idx} className={styles.benefitItem}>
                  <CheckCircle2 size={24} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                  <div className={styles.benefitText}>
                    <strong>{title}: </strong> {desc || ''}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Screenshots */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Platform Previews</h2>
          <div className={styles.screenshotsGrid}>
            {data.screenshots.map((shot, idx) => (
              <ScreenshotPlaceholder key={idx} title={shot} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <ModuleFAQ faqs={data.faqs} />
        </section>

        {/* Internal Linking */}
        <section className={styles.relatedSection}>
          <div className={styles.twoColLayout}>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Related Industries</h3>
              <div className={styles.tagsWrapper}>
                {data.relatedIndustries.map((relSlug, idx) => {
                  const relData = industryData[relSlug];
                  if (!relData) return null;
                  return (
                    <Link key={idx} to={`/industries/${relSlug}`} className={styles.tagLink}>
                      {relData.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Related Odoo Modules</h3>
              <div className={styles.tagsWrapper}>
                {data.relatedModules.map((modName, idx) => (
                  <Link key={idx} to="/modules" className={styles.tagLink}>
                    {modName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <div className="bg-primary text-center" style={{ borderRadius: 'var(--radius-2xl)', padding: '4rem 2rem' }}>
            <h2 className="heading-md text-white mb-4">Need an ERP solution tailored for {data.name}?</h2>
            <p className="text-gray-300 mb-8" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Book a Free Consultation with Syncore Infotech Solutions. We analyze your requirements and propose the optimal Odoo implementation strategy.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/contact" className="btn btn-accent">Book Consultation</Link>
              <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>Request Demo</Link>
            </div>
          </div>
        </div>

      </div>

      <ModuleDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        moduleData={selectedModule} 
        onSelectModule={handleModuleClick}
      />
    </div>
  );
};

export default IndustryDetail;
