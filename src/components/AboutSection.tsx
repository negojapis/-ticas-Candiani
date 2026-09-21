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
          <div className={styles.description}>
            <p>A Óticas Candiani é uma empresa que já faz parte de Itupeva e que tem como propósito cuidar de algo muito importante: a visão das pessoas.</p>
            <p>Mas, quando você conhece a Candiani de perto, percebe que vai muito além de escolher um óculos. Existe todo um cuidado para entender o que cada cliente procura, seja por necessidade, conforto ou até mesmo para encontrar uma armação que tenha tudo a ver com o seu estilo.</p>
            <p>A ideia é que cada pessoa se sinta bem atendida e segura na hora de fazer sua escolha, encontrando aquilo que realmente combina com ela.</p>
            <p>É uma ótica que une cuidado, atendimento próximo e estilo, tornando a experiência de escolher um novo óculos mais leve e personalizada.</p>
            <p className={styles.signature}>Óticas Candiani</p>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className={styles.imageColumn}>
          <div className={`${styles.imageWrapper} ${styles.image1}`}>
            <video ref={el => { if(el){ el.defaultMuted = true; el.muted = true; el.play().catch(()=>{}); } }} src="/videos/loja-candiani.mp4" autoPlay loop muted playsInline className={styles.image} />
          </div>
          <div className={`${styles.imageWrapper} ${styles.image2}`}>
            <video ref={el => { if(el){ el.defaultMuted = true; el.muted = true; el.play().catch(()=>{}); } }} src="/videos/modelos-candiani.mp4" autoPlay loop muted playsInline className={styles.image} />
          </div>
          <div className={`${styles.imageWrapper} ${styles.image3}`}>
            <video ref={el => { if(el){ el.defaultMuted = true; el.muted = true; el.play().catch(()=>{}); } }} src="/videos/outro-candiani.mp4" autoPlay loop muted playsInline className={styles.image} />
          </div>
          
        </div>

      </div>
    </section>
  );
}
