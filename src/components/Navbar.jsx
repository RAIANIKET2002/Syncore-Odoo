import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import syncoreLogo from "../assets/Syncore_Infotech_Solutions.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevLocationKey, setPrevLocationKey] = useState(location.key);
  if (location.key !== prevLocationKey) {
    setPrevLocationKey(location.key);
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Odoo Modules', path: '/modules' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* GROUP A: Brand */}
        <Link to="/" className={styles.brandGroup}>
          <img src={syncoreLogo} alt="Syncore Infotech Solutions" className={styles.logoImg} />
          <span className={`${styles.companyName} ${scrolled ? styles.companyNameScrolled : ''}`}>Syncore Infotech</span>
        </Link>

        {/* GROUP B: Navigation Links (Desktop) */}
        <nav className={styles.navLinksGroup} aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.activeLink : ''} ${scrolled ? styles.navLinkScrolled : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* GROUP C: Actions (CTA & Mobile Toggle) */}
        <div className={styles.actionsGroup}>
          <Link to="/contact" className={`btn btn-accent ${styles.bookBtn}`}>
            Book Consultation
          </Link>
          <button
            className={`${styles.mobileToggle} ${scrolled ? styles.mobileToggleScrolled : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} className={styles.mobileToggleDark} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
          <div className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.mobileNavActive : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
