import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const ScreenshotPlaceholder = ({ title, image }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h4 style={{ 
        fontSize: '1rem', 
        fontWeight: '600', 
        color: 'var(--color-gray-800)',
        marginBottom: '0.75rem' 
      }}>
        Screenshot: {title}
      </h4>
      {image ? (
        <>
          <div 
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsLightboxOpen(true);
            }}
            style={{
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--color-gray-200)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={image} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <ImageLightbox 
            images={[image]} 
            isOpen={isLightboxOpen} 
            onClose={() => setIsLightboxOpen(false)} 
          />
        </>
      ) : (
        <div style={{
          width: '100%',
          aspectRatio: '16/9',
          border: '2px dashed var(--color-gray-300)',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--color-gray-50)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-gray-400)',
          transition: 'all 0.2s ease',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-primary)';
          e.currentTarget.style.backgroundColor = 'rgba(7, 29, 73, 0.02)';
          e.currentTarget.style.color = 'var(--color-primary)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-gray-300)';
          e.currentTarget.style.backgroundColor = 'var(--color-gray-50)';
          e.currentTarget.style.color = 'var(--color-gray-400)';
        }}>
          <ImageIcon size={48} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
          <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>[ Screenshot Placeholder Box ]</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.25rem' }}>Click to upload {title} image</span>
        </div>
      )}
    </div>
  );
};

export default ScreenshotPlaceholder;
