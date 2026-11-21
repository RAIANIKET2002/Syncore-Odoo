import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ModuleCard = ({ mod, index, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => onClick(mod)}
      className="card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1.75rem',
        border: '1px solid rgba(8, 27, 58, 0.08)',
        borderRadius: 'var(--radius-2xl)', /* 18px */
        backgroundColor: 'var(--color-white)',
        boxShadow: 'var(--shadow-md)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 200, 240, 0.5)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
        e.currentTarget.style.transform = 'translateY(-5px)';
        const link = e.currentTarget.querySelector('.moduleLinkExplore');
        if (link) {
          link.style.color = 'var(--color-royal-blue)';
          link.style.gap = '0.75rem';
        }
        const bgIcon = e.currentTarget.querySelector('.bgIconImage');
        if (bgIcon) {
          bgIcon.style.opacity = '0.2';
          bgIcon.style.transform = 'scale(1.08)';
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = 'rgba(8, 27, 58, 0.08)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(0)';
        const link = e.currentTarget.querySelector('.moduleLinkExplore');
        if (link) {
          link.style.color = 'var(--color-royal-blue)';
          link.style.gap = '0.5rem';
        }
        const bgIcon = e.currentTarget.querySelector('.bgIconImage');
        if (bgIcon) {
          bgIcon.style.opacity = '0.05';
          bgIcon.style.transform = 'scale(1)';
        }
      }}
    >
      <div 
        className="bgIconImage"
        style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '1rem',
        opacity: 0.05,
        pointerEvents: 'none',
        transition: 'all 0.3s ease'
      }}>
        <img src={mod.icon} alt="" style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
      </div>
      
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{
          width: '4rem',
          height: '4rem',
          marginBottom: '1.25rem',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: `#${mod.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}>
          <img src={mod.icon} alt={mod.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        </div>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          marginBottom: '0.5rem',
          color: 'var(--color-gray-900)'
        }}>{mod.name}</h3>
        <p style={{
          color: 'var(--color-gray-600)',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          flexGrow: 1,
          marginBottom: '1rem'
        }}>
          {mod.desc}
        </p>
        
        <div 
          className="moduleLinkExplore"
          style={{
            color: 'var(--color-primary)',
            fontWeight: '600',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            marginTop: 'auto'
          }}
        >
          Explore Module <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
