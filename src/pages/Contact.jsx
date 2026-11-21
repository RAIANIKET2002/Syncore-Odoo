import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us — Syncore Infotech Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Syncore Infotech Solutions for a free enterprise Odoo ERP and digital transformation consultation.');
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
              { label: 'Contact Us' }
            ]} />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-4"
          >
            Contact <span className="text-accent">Us</span>
          </motion.h1>
          <p className={styles.headerSubtitle}>
            Let's discuss how Syncore Infotech Solutions can transform your business with powerful Odoo ERP solutions.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.gridContainer}>
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.detailsCol}
            >
              <h2 className={styles.detailsTitle}>Get In Touch</h2>
              <p className={styles.detailsSubtitle}>
                Fill in the form and our team will reach out within 24 hours to schedule a free consultation.
              </p>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className={styles.itemTitle}>Corporate Office</h4>
                    <p className={styles.itemText}>
                      Syncore Infotech Solutions<br />
                      Office No 7, 15th Floor, Aurora Waterfront<br />
                      Sector V, Bidhannagar, Kolkata<br />
                      West Bengal
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className={styles.itemTitle}>Phone</h4>
                    <p className={styles.itemText}><a href="tel:+919051666623" style={{ color: 'inherit' }}>+91 9051666623</a></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <ContactForm variant="page" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
