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
            <Link href="/#sobre">Sobre</Link>
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/guia-de-rostos">Guia de Rostos</Link>
            <Link href="/#contato">Contato</Link>
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
          <div className="container text-center animate-fade-in" style={{ opacity: 0, marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)' }}>O Nosso Jeito de Cuidar da Sua Visão</h2>
          </div>
          <div className="container-large features-grid">
            <div className="feature-card animate-slide-up" style={{ opacity: 0 }}>
              <div className="feature-icon">🔬</div>
              <h3>Lentes de Alta Tecnologia</h3>
              <p>Trabalhamos com os melhores laboratórios do mercado, como Essilor, Zeiss e Hoya, para garantir precisão absoluta. Seja visão simples, multifocal ou tratamento antirreflexo, sua visão merece o que há de melhor.</p>
            </div>
            <div className="feature-card animate-slide-up delay-1" style={{ opacity: 0 }}>
              <div className="feature-icon">✨</div>
              <h3>Armações Premium e Exclusivas</h3>
              <p>Modelos selecionados a dedo das principais grifes nacionais e internacionais. Garantimos design sofisticado, conforto incomparável, extrema durabilidade e aquela estética refinada que valoriza o seu rosto.</p>
            </div>
            <div className="feature-card animate-slide-up delay-2" style={{ opacity: 0 }}>
              <div className="feature-icon">🤝</div>
              <h3>O Melhor Atendimento de Itupeva</h3>
              <p>Uma experiência de compra única na cidade. Nossa equipe de especialistas realiza consultoria visagista para te ajudar a escolher a armação perfeita que harmoniza com seu formato de rosto e estilo pessoal.</p>
            </div>
            <div className="feature-card animate-slide-up delay-3" style={{ opacity: 0 }}>
              <div className="feature-icon">🛠️</div>
              <h3>Garantia e Ajustes Gratuitos</h3>
              <p>Nosso compromisso não termina na entrega. Oferecemos ajustes, limpeza ultrassônica e manutenção preventiva gratuitos para que seus óculos estejam sempre perfeitos e confortáveis no seu rosto.</p>
            </div>
          </div>
        </section>

        <section className="brands-section bg-light">
          <div className="container text-center animate-fade-in" style={{ opacity: 0 }}>
            <h2 className="brands-title">Marcas que Trabalhamos</h2>
            <p className="brands-subtitle">As melhores grifes do mundo, agora pertinho de você em Itupeva-SP.</p>
          </div>
          
          <div className="brands-marquee-container animate-slide-up delay-1" style={{ opacity: 0 }}>
            <div className="brands-marquee">
              <span className="brand-item">Reebok</span>
              <span className="brand-item">Fox</span>
              <span className="brand-item">Next</span>
              <span className="brand-item">Sestini</span>
              <span className="brand-item">Pierre Cardin</span>
              <span className="brand-item">Cavalera</span>
              <span className="brand-item">Bulget</span>
              <span className="brand-item">Oakley</span>
              <span className="brand-item">Sabrina Sato</span>
              <span className="brand-item">Ana Hickmann</span>
              <span className="brand-item">Carmen Vitti</span>
              <span className="brand-item">Juliana Paes</span>
              <span className="brand-item">Morena Rosa</span>
              <span className="brand-item">John John</span>
              <span className="brand-item">Vizzano</span>
              <span className="brand-item">Colcci</span>
              <span className="brand-item">HB</span>
              <span className="brand-item">Polaroid</span>
              <span className="brand-item">Evoke</span>
              <span className="brand-item">Candiani</span>
              <span className="brand-item">Lunna</span>
              <span className="brand-item">Candy Kids</span>
              {/* Duplicate for infinite effect */}
              <span className="brand-item">Reebok</span>
              <span className="brand-item">Fox</span>
              <span className="brand-item">Next</span>
              <span className="brand-item">Sestini</span>
              <span className="brand-item">Pierre Cardin</span>
              <span className="brand-item">Cavalera</span>
              <span className="brand-item">Bulget</span>
              <span className="brand-item">Oakley</span>
              <span className="brand-item">Sabrina Sato</span>
              <span className="brand-item">Ana Hickmann</span>
              <span className="brand-item">Carmen Vitti</span>
              <span className="brand-item">Juliana Paes</span>
              <span className="brand-item">Morena Rosa</span>
              <span className="brand-item">John John</span>
              <span className="brand-item">Vizzano</span>
              <span className="brand-item">Colcci</span>
              <span className="brand-item">HB</span>
              <span className="brand-item">Polaroid</span>
              <span className="brand-item">Evoke</span>
              <span className="brand-item">Candiani</span>
              <span className="brand-item">Lunna</span>
              <span className="brand-item">Candy Kids</span>
            </div>
          </div>
        </section>
        
        {/* Seção de Localização com Mapa */}
        <section className="section bg-light location-section" id="contato">
          <div className="container location-grid animate-fade-in" style={{ opacity: 0, animationDelay: '0.3s' }}>
            <div className="location-text">
              <h2>Visite a Óticas Candiani</h2>
              <p>
                Venha tomar um café conosco e experimentar nossos modelos pessoalmente. Nossa equipe está pronta para te receber e oferecer a melhor consultoria visagista de Itupeva.
              </p>
              
              <div className="location-info">
                <div className="info-item">
                  <span className="icon">📍</span>
                  <div>
                    <strong>Endereço</strong>
                    <span>Av. Brasil, 209 - Centro, Itupeva - SP, 13295-000</span>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">🕒</span>
                  <div>
                    <strong>Horário de Funcionamento</strong>
                    <span>Segunda a Sexta: 09h às 18h<br/>Sábado: 09h às 13h</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Av.+Brasil,+209+-+Centro,+Itupeva+-+SP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ display: 'inline-block', borderRadius: '50px', padding: '1rem 2.5rem', fontWeight: 600, marginTop: '1rem' }}
              >
                Traçar Rota
              </a>
            </div>
            
            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.856053351221!2d-47.0594326!3d-23.1583307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf31ab3d360983%3A0xb35a0ce8f04172f3!2sAv.%20Brasil%2C%20209%20-%20Centro%2C%20Itupeva%20-%20SP%2C%2013295-000!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
                allowFullScreen={true} 
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
