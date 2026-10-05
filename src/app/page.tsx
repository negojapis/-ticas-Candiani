import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { Microscope, Gem, HeartHandshake, ShieldCheck, MapPin, Clock } from 'lucide-react';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-content animate-fade-in">
          <div className="logo">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', height: '45px' }}>
                <Image src="/images/logo-oticas-candiani-site-200x200.png" alt="Óticas Candiani" width={180} height={180} style={{ margin: '-65px -35px' }} />
              </div>
              <span className="logo-text">Para enxergar sempre o lado bom da vida</span>
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
        <section className="hero-banner" style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'block', width: '100%', position: 'relative' }}>
            <Image 
              src="/images/candiani-hero-1920x1080.png" 
              alt="Óticas Candiani" 
              width={1920} 
              height={1080} 
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
              priority
            />
            {/* Texto elegante sobreposto na hero com animações de entrada */}
            <div className="interactive-text" style={{
              position: 'absolute',
              top: '38%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '100%',
              padding: '0 1rem',
              pointerEvents: 'auto'
            }}>
              <span className="animate-slide-up" style={{
                opacity: 0,
                display: 'block',
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                fontWeight: 500,
                letterSpacing: '0.4em',
                color: '#666',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
                textShadow: '0px 2px 10px rgba(255,255,255,0.8)'
              }}>
                Óticas
              </span>
              <h1 className="animate-slide-up delay-1" style={{
                opacity: 0,
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                fontWeight: 800,
                color: '#1a1a1a',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                margin: 0,
                textShadow: '0px 4px 20px rgba(255,255,255,0.8)'
              }}>
                Candiani
              </h1>
            </div>

            {/* Gradiente para suavizar e esconder o recorte inferior da foto */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '12vw',
              minHeight: '100px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
              pointerEvents: 'none'
            }} />
          </div>
        </section>

        <AboutSection />

        <section className="features section bg-light" style={{position: 'relative', overflow: 'hidden', paddingTop: '15vw'}}>
          {/* Watermark */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            textAlign: 'center',
            fontSize: '15vw',
            fontWeight: 900,
            color: 'rgba(0,0,0,0.05)',
            zIndex: 0,
            pointerEvents: 'none',
            fontFamily: 'var(--font-montserrat)',
            letterSpacing: '1vw',
            userSelect: 'none',
            lineHeight: 1
          }}>PREMIUM</div>

          <div className="container text-center animate-fade-in" style={{ opacity: 0, marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)' }}>O Nosso Jeito de Cuidar da Sua Visão</h2>
          </div>
          <div className="container-large features-grid" style={{position: 'relative', zIndex: 2}}>
            <div className="feature-card animate-slide-up" style={{ opacity: 0 }}>
              <div className="feature-icon">
                <Microscope size={56} strokeWidth={1.5} color="var(--color-primary)" />
              </div>
              <h3>Lentes de Alta Tecnologia</h3>
              <p>Trabalhamos com os melhores laboratórios do mercado, como Essilor, Zeiss e Hoya, para garantir precisão absoluta. Seja visão simples, multifocal ou tratamento antirreflexo, sua visão merece o que há de melhor.</p>
            </div>
            <div className="feature-card animate-slide-up delay-1" style={{ opacity: 0 }}>
              <div className="feature-icon">
                <Gem size={56} strokeWidth={1.5} color="var(--color-primary)" />
              </div>
              <h3>Armações Premium e Exclusivas</h3>
              <p>Modelos selecionados a dedo das principais grifes nacionais e internacionais. Garantimos design sofisticado, conforto incomparável, extrema durabilidade e aquela estética refinada que valoriza o seu rosto.</p>
            </div>
            <div className="feature-card animate-slide-up delay-2" style={{ opacity: 0 }}>
              <div className="feature-icon">
                <HeartHandshake size={56} strokeWidth={1.5} color="var(--color-primary)" />
              </div>
              <h3>O Melhor Atendimento de Itupeva</h3>
              <p>Uma experiência de compra única na cidade. Nossa equipe de especialistas realiza consultoria visagista para te ajudar a escolher a armação perfeita que harmoniza com seu formato de rosto e estilo pessoal.</p>
            </div>
            <div className="feature-card animate-slide-up delay-3" style={{ opacity: 0 }}>
              <div className="feature-icon">
                <ShieldCheck size={56} strokeWidth={1.5} color="var(--color-primary)" />
              </div>
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
        <section className="section bg-light location-section" id="contato" style={{position: 'relative', overflow: 'hidden', paddingTop: '18vw'}}>
          {/* Watermark */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            textAlign: 'center',
            fontSize: '11vw',
            fontWeight: 900,
            color: 'rgba(0,0,0,0.05)',
            zIndex: 0,
            pointerEvents: 'none',
            fontFamily: 'var(--font-montserrat)',
            letterSpacing: '0.2vw',
            userSelect: 'none',
            lineHeight: 1
          }}>ATENDIMENTO</div>

          <div className="container location-grid animate-fade-in" style={{ opacity: 0, animationDelay: '0.3s', position: 'relative', zIndex: 2 }}>
            <div className="location-text">
              <h2>Visite a Óticas Candiani</h2>
              <p>
                Venha tomar um café conosco e experimentar nossos modelos pessoalmente. Nossa equipe está pronta para te receber e oferecer a melhor consultoria visagista de Itupeva.
              </p>
              
              <div className="location-info">
                <div className="info-item">
                  <span className="icon"><MapPin size={28} color="var(--color-primary)" /></span>
                  <div>
                    <strong>Endereço</strong>
                    <span>Av. Brasil, 209 - Centro, Itupeva - SP, 13295-000</span>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon"><Clock size={28} color="var(--color-primary)" /></span>
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
