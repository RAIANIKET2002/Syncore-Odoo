import { odooModulesData } from '../data/odooModulesData';
import { ArrowRight } from 'lucide-react';

const RelatedModules = ({ relatedNames, onSelectModule }) => {
  if (!relatedNames || relatedNames.length === 0) return null;

  const relatedModules = relatedNames
    .map(name => odooModulesData.find(m => m.name === name))
    .filter(Boolean);

  if (relatedModules.length === 0) return null;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem'
    }}>
      {relatedModules.map((mod) => (
        <div 
          key={mod.id}
          onClick={() => onSelectModule(mod)}
          style={{
            border: '1px solid var(--color-gray-200)',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: 'var(--color-white)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-primary)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-gray-200)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{
            backgroundColor: `#${mod.color}15`,
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img src={mod.icon} alt={mod.name} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
          </div>
          <div style={{ flexGrow: 1 }}>
            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-gray-900)' }}>
              {mod.name}
            </div>
          </div>
          <ArrowRight size={16} style={{ color: 'var(--color-gray-400)' }} />
        </div>
      ))}
    </div>
  );
};

export default RelatedModules;
