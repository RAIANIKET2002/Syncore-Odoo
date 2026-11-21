import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { odooModulesData } from '../data/odooModulesData';
import odooLogo from '../assets/odoo_logo.png';
import odoodashboard from '../assets/Odoo Dashboard.png';
import sale1 from '../assets/Sale Dashboard.png';
import purchase1 from '../assets/Purchase Dashboard.png';
import accounting1 from '../assets/Accounting Dashboard.png';
import inventory1 from '../assets/Inventory Dashboard.png';
import ModuleCard from '../components/ModuleCard';
import ModuleDrawer from '../components/ModuleDrawer';
import ImageLightbox from '../components/ImageLightbox';
import ContactForm from '../components/ContactForm';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const heroSlides = [odoodashboard, sale1, purchase1, accounting1, inventory1];

const Home = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    document.title = 'Syncore Infotech Solutions — Innovate • Integrate • Accelerate';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Syncore Infotech Solutions — Technology that connects. Solutions that scale. Official Odoo Implementation Partner helping businesses transform operations.');
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleModuleClick = (mod) => {
    setSelectedModule(mod);
    setIsDrawerOpen(true);
  };

  const featuredModulesNames = ['Sales', 'Inventory', 'Accounts', 'Manufacturing', 'CRM', 'Website'];
  const featuredModules = featuredModulesNames.map(name => 
    odooModulesData.find(mod => mod.name === name)
  ).filter(Boolean);

  return (
    <div>
      {/* HERO SECTION */}
      <section className={`${styles.hero} enterprise-bg`}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroGrid}`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
            }}
            className={styles.heroContent}
          >
            <motion.div variants={fadeIn} className={styles.heroBadge} style={{ flexDirection: 'column', alignItems: 'flex-start', borderRadius: '1rem', padding: '0.85rem 1.1rem' }}>
              <img src={odooLogo} alt="Odoo Logo" style={{ height: '30px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.15)' }} />
              <span>Official Odoo Implementation Partner</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className={`heading-xl ${styles.heroTitle}`}>
              Reliable Software<br />
              <span className="text-accent">Solutions</span>
            </motion.h1>
            <motion.p variants={fadeIn} className={styles.heroSubtitle}>
              Technology that connects. Solutions that scale. We build, customize and scale Odoo ERP solutions that accelerate real business growth.
            </motion.p>
            <motion.ul variants={fadeIn} className={styles.featureList}>
              {['Business Websites & Apps', 'ERP & Admin Systems', 'Workflow Automation', 'Odoo Implementation', 'Customization', 'Support & AMC'].map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <CheckCircle2 className={styles.featureIcon} size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeIn} className={styles.heroBtns}>
              <Link to="/modules" className={`btn btn-accent ${styles.heroBtn}`}>
                Explore Odoo Modules <ArrowRight size={18} />
              </Link>
              <Link to="/services" className={`btn btn-outline ${styles.heroBtn}`}>
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Right Side - Odoo Dashboard Screenshot */}
          <div className={styles.heroImageWrapper}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <div className={styles.imageGlow}></div>
              <div className={styles.imageFrame} style={{ position: 'relative' }}>
              <div className={styles.frameDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
                <span className={styles.frameTitle}>Odoo ERP Platform</span>
              </div>
              <div 
                style={{ display: 'grid', width: '100%', aspectRatio: '1912/900', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
                onClick={() => setIsLightboxOpen(true)}
              >
                <AnimatePresence>
                  <motion.img
                    key={currentSlideIndex}
                    src={heroSlides[currentSlideIndex]}
                    alt="Odoo ERP Dashboard"
                    className={styles.dashboardImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ gridArea: '1 / 1', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top left' }}
                  />
                </AnimatePresence>

                {/* Overlay Navigation Arrows */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
                  }}
                  style={{
                    position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.2)', border: 'none', color: 'white',
                    padding: '8px', borderRadius: '50%', cursor: 'pointer', zIndex: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
                >
                  <ChevronLeft size={24} />
                </button>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
                  }}
                  style={{
                    position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.2)', border: 'none', color: 'white',
                    padding: '8px', borderRadius: '50%', cursor: 'pointer', zIndex: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <ImageLightbox 
              images={heroSlides} 
              initialIndex={currentSlideIndex} 
              isOpen={isLightboxOpen} 
              onClose={() => setIsLightboxOpen(false)} 
            />

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.9, delay: 0.5 }}
               style={{ marginTop: '2rem', position: 'relative', zIndex: 10 }}
            >
              <ContactForm />
            </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className={styles.statsBanner}>
        <div className={`container ${styles.statsContainer}`}>
          {[
            { number: '15+ Years', label: 'Combined ERP Expertise' },
            { number: '30+ Modules', label: 'Implementation Ready' },
            { number: '100%', label: 'Customizable Solutions' },
            { number: '24/7', label: 'Support & Consultation' },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={styles.aboutSection}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className={styles.aboutGrid}
          >
            <div className={styles.aboutContent}>
              <p className={styles.aboutEyebrow}>WHO WE ARE</p>
              <h2 className="heading-lg">Transform Your Operations With <span className="text-royal">Syncore</span></h2>
              <p className={styles.aboutText}>
                Syncore Infotech Solutions is an enterprise Odoo consulting and engineering company helping businesses transform operations, automate workflows, and make data-driven decisions.
              </p>
              <p className={styles.aboutText}>
                We believe in delivering robust, scalable, and premium solutions tailored to your unique operational and digital transformation needs.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us <ArrowRight size={18} /></Link>
            </div>
            <div className={styles.aboutImgWrapper}>
              <div className={styles.aboutImg}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="Syncore Infotech Solutions Team Collaboration"
                  className={styles.teamPhoto}
                />
              </div>
{/*               <div className={styles.aboutBadge}> */}
{/*                 <div className={styles.badgeNumber}>50+</div> */}
{/*                 <div className={styles.badgeText}>Projects Delivered</div> */}
{/*               </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE MODULES */}
      <section className={`section ${styles.modulesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>ODOO PLATFORM</p>
            <h2 className="heading-lg">Powerful <span className="text-accent">Odoo Modules</span></h2>
            <p className={styles.sectionDesc}>Everything you need to run your business smoothly, integrated into one single platform.</p>
          </div>

          <div className={styles.modulesGrid}>
            <AnimatePresence>
              {featuredModules.map((mod, i) => (
                <ModuleCard 
                  key={mod.id} 
                  mod={mod} 
                  index={i} 
                  onClick={handleModuleClick} 
                />
              ))}
            </AnimatePresence>
          </div>

          <div className={styles.modulesBtnWrapper}>
            <Link to="/modules" className="btn btn-primary">View All Modules</Link>
          </div>
        </div>
      </section>

      <ModuleDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        moduleData={selectedModule} 
        onSelectModule={handleModuleClick}
      />

      {/* CTA SECTION */}
      <section className={`${styles.ctaSection} enterprise-bg`}>
        <div className={`container ${styles.ctaContainer}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`heading-lg ${styles.ctaTitle}`}>Ready to Transform Your Business?</h2>
            <p className={styles.ctaDesc}>
              Book a free consultation today and discover how our Odoo ERP solutions can streamline your operations and drive growth.
            </p>
            <Link to="/contact" className="btn btn-accent">Let's Talk Business <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
