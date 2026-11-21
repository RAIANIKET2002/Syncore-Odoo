import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';
import odooLogo from '../assets/odoo_logo.png';
import syncoreLogo from "../assets/Syncore_Infotech_Solutions.webp";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <img src={syncoreLogo} alt="Syncore Infotech Solutions Logo" className={styles.logoImg} />
              <span className={styles.companyName}>Syncore Infotech Solutions</span>
            </div>
            <p className={styles.tagline}>
              Technology that connects. Solutions that scale.
            </p>
            <div className={styles.description} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
              <img src={odooLogo} alt="Odoo Logo" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
              <span>Official Odoo Implementation Partner helping businesses transform operations with reliable software solutions.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link to="/about" className={styles.link}>About Us</Link></li>
              <li><Link to="/services" className={styles.link}>Services</Link></li>
              <li><Link to="/solutions" className={styles.link}>Odoo Solutions</Link></li>
              <li><Link to="/industries" className={styles.link}>Industries</Link></li>
              <li><Link to="/modules" className={styles.link}>Odoo Modules</Link></li>
              <li><Link to="/portfolio" className={styles.link}>Portfolio</Link></li>
              <li><Link to="/resources" className={styles.link}>Resources</Link></li>
              <li><Link to="/contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.linkList}>
              <li><Link to="/services/implementation" className={styles.link}>Odoo Implementation</Link></li>
              <li><Link to="/services/custom-development" className={styles.link}>Custom Development</Link></li>
              <li><Link to="/services/integration" className={styles.link}>Odoo Integration</Link></li>
              <li><Link to="/services/migration" className={styles.link}>Data Migration</Link></li>
              <li><Link to="/services/support-amc" className={styles.link}>Support &amp; AMC</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.heading}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>Office No 7, 15th Floor, Aurora Waterfront, Sector V, Bidhannagar, Kolkata, West Bengal</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <a href="tel:+919051666623" className={styles.contactLink}>+91 9051666623</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Syncore Infotech Solutions. All rights reserved.</p>
          <p className={styles.copyrightSub}>Innovate • Integrate • Accelerate | Odoo Implementation Partner | ERP Consulting | Digital Transformation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
