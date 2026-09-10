import React from 'react';
import styles from './AboutSection.module.css';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Left Column - Text */}
        <div className={styles.textColumn}>
          <span className={styles.subtitle}>Sobre a Óticas Candiani</span>
          <h2 className={styles.title}>
            Somos apaixonados por cuidar da sua visão com um toque premium.
          </h2>
          <Link href="/catalogo" className={styles.button}>
            Ver Coleção
          </Link>
        </div>

        {/* Right Column - Images */}
        <div className={styles.imageColumn}>
          <div className={`${styles.imageWrapper} ${styles.image1}`}>
            <video src="/videos/loja-candiani.mp4" autoPlay loop muted playsInline className={styles.image} />
          </div>
          <div className={`${styles.imageWrapper} ${styles.image2}`}>
            <video src="/videos/modelos-candiani.mp4" autoPlay loop muted playsInline className={styles.image} />
          </div>
          <div className={`${styles.imageWrapper} ${styles.image3}`}>
            <video src="/videos/outro-candiani.mp4" autoPlay loop muted playsInline className={styles.image} />
          </div>
          
        </div>

      </div>
    </section>
  );
}
