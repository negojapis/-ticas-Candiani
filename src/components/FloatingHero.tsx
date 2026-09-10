import React from 'react';
import styles from './FloatingHero.module.css';
import Link from 'next/link';

interface FloatingImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

export interface FloatingHeroProps {
  title: string;
  description: string;
  images: FloatingImageProps[];
  ctaText?: string;
  ctaLink?: string;
}

const Swirls = () => (
  <>
    <svg
      className={styles.swirlTop}
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M515.266 181.33C377.943 51.564 128.537 136.256 50.8123 293.565C-26.9127 450.874 125.728 600 125.728 600"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
    <svg
      className={styles.swirlBottom}
      width="700"
      height="700"
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M26.8838 528.274C193.934 689.816 480.051 637.218 594.397 451.983C708.742 266.748 543.953 2.22235 543.953 2.22235"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </>
);

export function FloatingHero({ title, description, images, ctaText, ctaLink }: FloatingHeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.swirlContainer}>
        <Swirls />
      </div>
      
      <div className={styles.imagesContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={styles.floatingImage}
            style={{ 
              ...image.style,
              animationDelay: `${index * 800}ms`
            }}
          />
        ))}
      </div>

      <div className={styles.textContent}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <p className={styles.description}>
          {description}
        </p>
        {ctaText && ctaLink && (
          <Link href={ctaLink} className={styles.ctaButton}>
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
