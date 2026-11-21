import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ModuleFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            style={{ 
              border: '1px solid var(--color-gray-200)', 
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden'
            }}
          >
            <button 
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: isOpen ? 'var(--color-gray-50)' : 'var(--color-white)',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--color-gray-900)'
              }}
            >
              {faq.q}
              <ChevronDown 
                size={20} 
                style={{ 
                  color: 'var(--color-gray-500)', 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }} 
              />
            </button>
            {isOpen && (
              <div style={{ padding: '0 1rem 1rem 1rem', color: 'var(--color-gray-600)', backgroundColor: 'var(--color-gray-50)' }}>
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ModuleFAQ;
