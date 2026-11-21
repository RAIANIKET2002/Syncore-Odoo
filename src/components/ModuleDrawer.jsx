import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from '../styles/ModuleDrawer.module.css';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';
import ModuleFAQ from './ModuleFAQ';
import RelatedModules from './RelatedModules';

const ModuleDrawer = ({ isOpen, onClose, moduleData, onSelectModule }) => {
  const closeBtnRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  // Prevent body scroll and handle Escape key dismissal & focus management
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape' || e.keyCode === 27) {
          e.preventDefault();
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown, true);

      // Focus the close button for accessibility
      setTimeout(() => {
        if (closeBtnRef.current) {
          closeBtnRef.current.focus();
        }
      }, 50);

      return () => {
        window.removeEventListener('keydown', handleKeyDown, true);
        document.body.style.overflow = 'auto';
        if (previouslyFocusedElement.current && previouslyFocusedElement.current.focus) {
          previouslyFocusedElement.current.focus();
        }
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  if (!moduleData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className={styles.drawerOverlay} 
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${moduleData.name} details`}
        >
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={styles.drawerContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={styles.drawerHeader}>
              <div className={styles.headerLeft}>
                <div 
                  className={styles.iconWrapper} 
                  style={{ backgroundColor: `#${moduleData.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <img src={moduleData.icon} alt={moduleData.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                </div>
                <div className={styles.moduleInfo}>
                  <h2>{moduleData.name}</h2>
                  <div className={styles.moduleCategory}>{moduleData.category}</div>
                </div>
              </div>
              <button 
                ref={closeBtnRef}
                className={styles.closeButton} 
                onClick={onClose} 
                aria-label="Close drawer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className={styles.drawerContent}>
              {/* Overview & Description */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Overview</h3>
                <p className={styles.overviewText}>{moduleData.overview}</p>
                <p className={styles.descriptionText}>{moduleData.description}</p>
              </div>

              {/* Key Features */}
              {moduleData.features && moduleData.features.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Key Features</h3>
                  <div className={styles.featuresGrid}>
                    {moduleData.features.map((feature, i) => (
                      <div key={i} className={styles.featureItem}>
                        <CheckCircle2 size={18} className={styles.featureIcon} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Benefits */}
              {moduleData.benefits && moduleData.benefits.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Business Benefits</h3>
                  <div className={styles.featuresGrid}>
                    {moduleData.benefits.map((benefit, i) => (
                      <div key={i} className={styles.benefitItem}>
                        <CheckCircle2 size={18} style={{ color: 'var(--color-green)' }} className={styles.featureIcon} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Screenshots */}
              {moduleData.screenshots && moduleData.screenshots.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Screenshots & Workflow</h3>
                  <div>
                    {moduleData.screenshots.map((shot, i) => (
                      <ScreenshotPlaceholder key={i} title={shot.title} image={shot.image} />
                    ))}
                  </div>
                </div>
              )}

              {/* Industries Using This Module */}
              {moduleData.industries && moduleData.industries.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Industries Using {moduleData.name}</h3>
                  <div className={styles.industriesList}>
                    {moduleData.industries.map((ind, i) => (
                      <div key={i} className={styles.industryTag}>
                        <CheckCircle2 size={16} /> {ind}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              {moduleData.faqs && moduleData.faqs.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Frequently Asked Questions</h3>
                  <ModuleFAQ faqs={moduleData.faqs} />
                </div>
              )}

              {/* Related Modules */}
              {moduleData.relatedModules && moduleData.relatedModules.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Related Modules</h3>
                  <RelatedModules 
                    relatedNames={moduleData.relatedModules} 
                    onSelectModule={(mod) => {
                      // Smooth scroll to top of drawer when navigating to related module
                      const scrollContainer = document.querySelector(`.${styles.drawerContent}`);
                      if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
                      onSelectModule(mod);
                    }} 
                  />
                </div>
              )}

              {/* CTA Block */}
              <div className={styles.ctaBlock}>
                <div className={styles.ctaBg}></div>
                <h3 className={styles.ctaTitle}>Need Help Implementing {moduleData.name}?</h3>
                <p className={styles.ctaDesc}>Syncore Infotech Solutions can help you customize, deploy, and scale Odoo to perfectly fit your business needs.</p>
                <div className={styles.ctaButtons}>
                  <Link to="/contact" className="btn btn-accent" onClick={onClose}>Book Consultation</Link>
                  <Link to="/contact" className="btn btn-outline-white" onClick={onClose} style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }}>Request Demo</Link>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModuleDrawer;
