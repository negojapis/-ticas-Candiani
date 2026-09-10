import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import heroBg from './IMG-Hero.png';
import { FloatingHero } from '@/components/FloatingHero';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-content animate-fade-in">
          <div className="logo">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '2.5rem', lineHeight: 0 }}>🌻</span>
              <span style={{color: '#000000', fontWeight: 'normal', fontSize: '1.5rem'}}>Para enxergar sempre o lado bom da vida</span>
            </Link>
          </div>
          <nav className="nav">
            <Link href="/">Início</Link>
            <Link href="/catalogo">Catálogo</Link>
            <Link href="#sobre">Sobre</Link>
            <Link href="#contato">Contato</Link>
          </nav>
        </div>
      </header>

      <main>
        <FloatingHero 
          title="Óticas Candiani"
          description="Armações exclusivas, lentes de alta tecnologia e atendimento personalizado em Itupeva."
          ctaText="Ver Coleção"
          ctaLink="/catalogo"
          images={[
            {
              src: "/images/round_black_glasses_new_1789055635143.jpg",
              alt: "Óculos Preto Redondo",
              style: { width: '280px', top: '2%', left: '12%', transform: 'rotate(-10deg)' }
            },
            {
              src: "/images/clear_glasses_1789072643803.jpg",
              alt: "Óculos Transparente",
              style: { width: '250px', top: '30%', left: '2%', transform: 'rotate(15deg)' }
            },
            {
              src: "/images/square_blue_glasses_1789054658916.jpg",
              alt: "Óculos Azul Quadrado",
              style: { width: '300px', bottom: '2%', left: '15%', transform: 'rotate(-20deg)' }
            },
            {
              src: "/images/aviator_gold_glasses_1789054614994.jpg",
              alt: "Óculos Aviador Dourado",
              style: { width: '270px', top: '2%', right: '15%', transform: 'rotate(20deg)' }
            },
            {
              src: "/images/tortoise_glasses_1789072392246.jpg",
              alt: "Óculos Tartaruga",
              style: { width: '310px', top: '30%', right: '2%', transform: 'rotate(-10deg)' }
            },
            {
              src: "/images/cateye_red_glasses_1789054604186.jpg",
              alt: "Óculos Vermelho Cat-eye",
              style: { width: '290px', bottom: '2%', right: '12%', transform: 'rotate(12deg)' }
            }
          ]}
        />

        <AboutSection />

        <section className="features section bg-light">
          <div className="container features-grid">
            <div className="feature-card animate-slide-up" style={{ opacity: 0 }}>
              <h3>Lentes de Alta Tecnologia</h3>
              <p>Trabalhamos com os melhores laboratórios para garantir visão perfeita.</p>
            </div>
            <div className="feature-card animate-slide-up delay-1" style={{ opacity: 0 }}>
              <h3>Armações Premium</h3>
              <p>Modelos selecionados para garantir conforto, durabilidade e estética refinada.</p>
            </div>
            <div className="feature-card animate-slide-up delay-2" style={{ opacity: 0 }}>
              <h3>Atendimento Personalizado</h3>
              <p>Nossa equipe te ajuda a escolher a armação ideal para o seu formato de rosto.</p>
            </div>
          </div>
        </section>
        
        {/* Nova seção de Localização com Mapa */}
        <section className="section" style={{ paddingBottom: '2rem' }}>
          <div className="container animate-fade-in" style={{ opacity: 0, animationDelay: '0.3s' }}>
            <h2>Nossa Localização</h2>
            <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
              Venha tomar um café conosco e experimentar nossos modelos pessoalmente.
            </p>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.856053351221!2d-47.0594326!3d-23.1583307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf31ab3d360983%3A0xb35a0ce8f04172f3!2sAv.%20Brasil%2C%20209%20-%20Centro%2C%20Itupeva%20-%20SP%2C%2013295-000!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
