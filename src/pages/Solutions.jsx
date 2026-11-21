import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Factory, 
  ShoppingCart, 
  Truck, 
  Wheat, 
  HeartPulse, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  GitMerge, 
  Zap, 
  BarChart3, 
  Settings2, 
  ShieldCheck 
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { industryData } from '../data/industryData';
import styles from './Solutions.module.css';

// Industry Watermark Images (Optimized WebP)
import indImgManufacturing from '../assets/industry_1.webp';
import indImgRetail from '../assets/industry_2.webp';
import indImgDistribution from '../assets/industry_3.webp';
import indImgAgriculture from '../assets/industry_4.webp';
import indImgHealthcare from '../assets/industry_5.webp';
import indImgServices from '../assets/industry_6.webp';

// Implementation Step Watermark Images (High-Resolution Enterprise Odoo Assets)
import stepImgDiscovery from '../assets/Forecast CRM.png';
import stepImgProcessMapping from '../assets/CRMPipeline.png';
import stepImgArchitecture from '../assets/PlanningDashboard.png';
import stepImgDev from '../assets/ProjectDashboard.png';
import stepImgMigration from '../assets/DocumentDashboard.png';
import stepImgValidation from '../assets/Validation.png';
import stepImgTraining from '../assets/EmployeeDashboard.png';
import stepImgSupport from '../assets/DiscussDashboard.png';

const industryImages = {
  manufacturing: indImgManufacturing,
  'retail-pos': indImgRetail,
  'trading-distribution': indImgDistribution,
  agriculture: indImgAgriculture,
  healthcare: indImgHealthcare,
  'professional-services': indImgServices
};

const industryIcons = {
  manufacturing: Factory,
  'retail-pos': ShoppingCart,
  'trading-distribution': Truck,
  agriculture: Wheat,
  healthcare: HeartPulse,
  'professional-services': Briefcase
};

const odooCapabilities = [
  {
    icon: BarChart3,
    title: 'CRM & Pipeline Automation',
    desc: 'Track leads, streamline follow-ups, and automate customer journey workflows seamlessly.'
  },
  {
    icon: ShoppingCart,
    title: 'Sales & Invoicing',
    desc: 'Accelerate quote-to-cash cycles with integrated digital signatures and online payments.'
  },
  {
    icon: Layers,
    title: 'Real-Time Inventory & WMS',
    desc: 'Multi-warehouse stock valuation, automated replenishment, barcodes, and serial/lot traceability.'
  },
  {
    icon: Factory,
    title: 'MRP & Shop Floor Operations',
    desc: 'Multi-level BOMs, work orders, capacity planning, and live machine maintenance tracking.'
  },
  {
    icon: Settings2,
    title: 'Financial Accounting & Reporting',
    desc: 'Automated bank reconciliations, multi-currency ledgers, dynamic balance sheets, and tax compliance.'
  },
  {
    icon: ShieldCheck,
    title: 'HR, Payroll & Timesheets',
    desc: 'Centralized personnel profiles, attendance, leaves, payroll rules, and department hierarchy.'
  }
];

const implementationSteps = [
  { 
    step: '01', 
    title: 'Business Discovery', 
    desc: 'In-depth assessment of your workflows, bottleneck identification, and roadmap definition.',
    image: stepImgDiscovery
  },
  { 
    step: '02', 
    title: 'Process Mapping', 
    desc: 'Aligning operational requirements with standard and custom Odoo business logic.',
    image: stepImgProcessMapping
  },
  { 
    step: '03', 
    title: 'System Architecture', 
    desc: 'Configuring modules, user access roles, and database architecture for scale.',
    image: stepImgArchitecture
  },
  { 
    step: '04', 
    title: 'Configuration & Dev', 
    desc: 'Tailored module customization, integration points, and UI refinements.',
    image: stepImgDev
  },
  { 
    step: '05', 
    title: 'Data Migration', 
    desc: 'Secure data extraction, cleanup, mapping, and loading of historical records.',
    image: stepImgMigration
  },
  { 
    step: '06', 
    title: 'Validation & Testing', 
    desc: 'Rigorous end-to-end user acceptance testing across edge-case scenarios.',
    image: stepImgValidation
  },
  { 
    step: '07', 
    title: 'Staff Training', 
    desc: 'Hands-on role-specific training sessions to ensure team adoption.',
    image: stepImgTraining
  },
  { 
    step: '08', 
    title: 'Go-Live & Support', 
    desc: 'Cutover execution followed by dedicated hypercare and ongoing AMC support.',
    image: stepImgSupport
  }
];

const Solutions = () => {
  useEffect(() => {
    document.title = 'Odoo ERP Industry Solutions | Syncore Infotech Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore tailored Odoo ERP solutions across Manufacturing, Retail, Distribution, Agriculture, Healthcare, and Professional Services with Syncore.');
    }
  }, []);

  const industries = Object.entries(industryData);

  return (
    <div className={styles.solutionsPage}>
      {/* SECTION A: HERO */}
      <section className={`${styles.heroSection} enterprise-bg`}>
        <div className="container">
          <div className={styles.heroBreadcrumbsWrapper}>
            <Breadcrumbs items={[
              { label: 'Home', path: '/' },
              { label: 'Solutions' }
            ]} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <span className={styles.heroEyebrow}>ENTERPRISE ODOO ERP SOLUTIONS</span>
            <h1 className={styles.heroTitle}>
              Odoo ERP Solutions Built Around <span className="text-accent">Your Industry</span>
            </h1>
            <p className={styles.heroDesc}>
              Discover how Syncore helps businesses streamline operations, integrate departments, and gain better control through tailored Odoo ERP implementations.
            </p>
            <div className={styles.heroBtns}>
              <a href="#industry-solutions" className="btn btn-accent">
                Explore Industry Solutions <ArrowRight size={18} />
              </a>
              <Link to="/contact" className="btn btn-outline">
                Book an Odoo Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION B: INDUSTRY SPECIFIC ODOO SOLUTIONS */}
      <section id="industry-solutions" className={styles.industrySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>TAILORED ERP ARCHITECTURE</span>
            <h2 className={styles.sectionTitle}>
              Industry-Specific <span className="text-royal">Odoo Solutions</span>
            </h2>
            <p className={styles.sectionDesc}>
              Every sector requires specialized operational logic. Here is how Syncore architects Odoo ERP for our core business verticals.
            </p>
          </div>

          <div className={styles.industryGrid}>
            {industries.map(([slug, ind], i) => {
              const Icon = industryIcons[slug] || Factory;
              const bgImg = industryImages[slug];
              return (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={styles.solutionCard}
                >
                  {/* Dedicated Photographic Background Image Layer */}
                  {bgImg && (
                    <div 
                      className={styles.cardWatermark} 
                      style={{ backgroundImage: `url(${bgImg})` }}
                      aria-hidden="true"
                    />
                  )}
                  <div className={styles.cardOverlay} aria-hidden="true" />

                  {/* Card Content Layer */}
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIconWrapper}>
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className={styles.cardTitle}>{ind.name}</h3>
                        <span className={styles.cardMeta}>Tailored Odoo Suite</span>
                      </div>
                    </div>

                    <p className={styles.cardOverview}>{ind.overview}</p>

                    <div className={styles.cardSection}>
                      <h4 className={styles.subHeading}>Common Operational Challenges:</h4>
                      <ul className={styles.challengeList}>
                        {ind.challenges.slice(0, 3).map((ch, idx) => (
                          <li key={idx} className={styles.challengeItem}>
                            <span className={styles.bulletRed}>•</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.cardSection}>
                      <h4 className={styles.subHeading}>Key Recommended Modules:</h4>
                      <div className={styles.moduleTagGroup}>
                        {ind.recommendedModules.map((m, idx) => (
                          <span key={idx} className={styles.moduleTag}>{m.name}</span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <Link to={`/industries/${slug}`} className={styles.exploreLink}>
                        View Detailed {ind.name} Solution <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION C: ODOO ERP CORE CAPABILITIES */}
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>CONNECTED ENTERPRISE SUITE</span>
            <h2 className={styles.sectionTitle}>
              End-to-End <span className="text-royal">Odoo Capabilities</span>
            </h2>
            <p className={styles.sectionDesc}>
              Modular, scalable, and connected software architecture that integrates every facet of your organization.
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {odooCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className={styles.capabilityCard}>
                  <div className={styles.capabilityIconWrapper}>
                    <Icon size={24} color="var(--color-royal-blue)" />
                  </div>
                  <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                  <p className={styles.capabilityDesc}>{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION D: IMPLEMENTATION APPROACH */}
      <section className={styles.implementationSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>PROVEN METHODOLOGY</span>
            <h2 className={styles.sectionTitle}>
              Structured Implementation <span className="text-royal">Approach</span>
            </h2>
            <p className={styles.sectionDesc}>
              A rigorous 8-step deployment methodology engineered to reduce operational friction, ensure data accuracy, and secure high adoption.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {implementationSteps.map((s, idx) => (
              <div key={idx} className={styles.stepCard}>
                {/* Step Background Watermark */}
                {s.image && (
                  <div 
                    className={styles.stepWatermark} 
                    style={{ backgroundImage: `url(${s.image})` }}
                    aria-hidden="true"
                  />
                )}
                <div className={styles.stepOverlay} aria-hidden="true" />

                <div className={styles.stepContent}>
                  <div className={styles.stepNumber}>{s.step}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: MODULE INTEGRATION ARCHITECTURE */}
      <section className={styles.integrationSection}>
        <div className="container text-center">
          <span className={styles.heroEyebrow}>SEAMLESS INTEROPERABILITY</span>
          <h2 className={styles.integrationTitle}>
            Unified Departmental <span className="text-cyan">Integration</span>
          </h2>
          <p className={styles.integrationDesc}>
            Unlike fragmented point solutions that rely on fragile third-party connectors, Odoo apps communicate natively. Sales trigger MRP orders, MRP triggers inventory allocation, and deliveries automatically generate reconciled accounts.
          </p>
          <div className={styles.integrationBadges}>
            <div className={styles.badgeItem}>
              <GitMerge size={22} className="text-cyan" />
              <span>Single Source of Truth</span>
            </div>
            <div className={styles.badgeItem}>
              <Zap size={22} className="text-cyan" />
              <span>Zero Redundant Data Entry</span>
            </div>
            <div className={styles.badgeItem}>
              <CheckCircle2 size={22} className="text-cyan" />
              <span>Real-Time Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: CONSULTATION CTA */}
      <section className={`${styles.ctaSection} enterprise-bg`}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>
            Let's Find the Right Odoo Solution for Your Business
          </h2>
          <p className={styles.ctaDesc}>
            Schedule an exploratory consultation with our certified Odoo technical architects to review your workflows and map your digital transformation.
          </p>
          <div className={styles.ctaButtonWrapper}>
            <Link to="/contact" className={`btn btn-accent ${styles.ctaButton}`}>
              Book an Odoo Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
