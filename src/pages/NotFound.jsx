import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={`container ${styles.notFoundContainer}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.notFoundContent}
        >
          <div className={styles.badge}>ERROR 404</div>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.desc}>
            The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
          </p>
          <div className={styles.btnGroup}>
            <Link to="/" className="btn btn-accent">
              <Home size={18} /> Return to Homepage
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
