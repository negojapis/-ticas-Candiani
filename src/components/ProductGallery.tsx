'use client';

import { useState, MouseEvent } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  blend: boolean;
}

export default function ProductGallery({ images, blend }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState<{ backgroundPosition?: string }>({});
  const [isZooming, setIsZooming] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Main Image with Zoom */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          height: '450px', 
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          backgroundColor: blend ? 'var(--color-primary)' : '#f9f9f9',
          cursor: 'zoom-in',
        }}
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: isZooming ? '200%' : 'cover',
            backgroundPosition: isZooming ? zoomStyle.backgroundPosition || 'center' : 'center',
            backgroundBlendMode: blend ? 'multiply' : 'normal',
            transition: isZooming ? 'none' : 'background-size 0.3s ease-out, background-position 0.3s ease-out',
          }}
        />

        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 10
              }}
            >
              &#10094;
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 10
              }}
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
          {images.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '8px',
                border: currentIndex === idx ? '3px solid var(--color-primary)' : '2px solid transparent',
                backgroundImage: `url(${img})`,
                backgroundColor: blend ? 'var(--color-primary)' : '#f9f9f9',
                backgroundBlendMode: blend ? 'multiply' : 'normal',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: currentIndex === idx ? 1 : 0.6
              }}
            />
          ))}
        </div>
      )}
      
      {/* Zoom Hint */}
      <div style={{textAlign: 'center', fontSize: '0.85rem', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
        Passe o mouse sobre a imagem para ver os detalhes
      </div>
    </div>
  );
}
