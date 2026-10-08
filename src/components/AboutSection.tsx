"use client";
import React, { useEffect, useState } from 'react';
import styles from './AboutSection.module.css';
import Image from 'next/image';

export default function AboutSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="sobre" className={styles.aboutSection}>
      
      <div className={styles.container}>
        {/* Left Column - Text */}
        <div className={styles.textColumn}>
          <span className={styles.subtitle}>Sobre a Óticas Candiani</span>
          <h2 className={styles.title}>
            Seu olhar <br />
            Seu estilo <br />
            Sua melhor versão
          </h2>
          <div className={styles.description}>
            <p className={styles.leadText}>
              <strong>Somos apaixonados por cuidar da sua visão.</strong> Somos uma ótica em Itupeva que valoriza o atendimento próximo, a qualidade e o cuidado em cada detalhe.
            </p>
            <p>
              Queremos conhecer suas necessidades, entender sua rotina e ajudar você a escolher com tranquilidade e confiança. Aqui, você encontra óculos de grau, óculos de sol, lentes de contato e armações femininas, masculinas e infantis, além de diferentes opções de lentes para cada necessidade.
            </p>
            <p>
              Nosso atendimento personalizado une orientação, atenção e respeito ao seu estilo. Para nós, cada pessoa merece tempo para experimentar, esclarecer dúvidas e encontrar uma escolha que faça sentido para sua vida. Queremos que você se sinta acolhido durante o atendimento e confortável com os óculos que vai levar.
            </p>
            <p>
              Venha conhecer a Óticas Candiani e descubra um cuidado que começa na sua visão e se estende a você.
            </p>
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
            <video ref={el => { if(el){ el.defaultMuted = true; el.muted = true; el.play().catch(()=>{}); } }} src="/videos/New - candiani.mp4" autoPlay loop muted playsInline className={styles.image} />
          </div>
          
        </div>

      </div>
    </section>
  );
}
