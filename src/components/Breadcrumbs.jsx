import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => {
  return (
    <div className={styles.breadcrumbs}>
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && <ChevronRight size={14} className={styles.separator} />}
          {item.path ? (
            <Link to={item.path} className={styles.breadcrumbLink}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.activeLabel}>{item.label}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
