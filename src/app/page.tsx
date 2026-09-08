import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-content animate-fade-in">
          <div className="logo">
            <Link href="/">
              <span style={{color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.5rem'}}>Óticas Candiani</span>
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
        <section className="hero">
          <div className="container hero-content">
            <h1 className="animate-slide-up" style={{ opacity: 0 }}>Enxergue o mundo com mais estilo e precisão.</h1>
            <p className="animate-slide-up delay-1" style={{ opacity: 0 }}>Armações exclusivas, lentes de alta tecnologia e atendimento personalizado em Itupeva.</p>
            <div className="animate-slide-up delay-2" style={{ opacity: 0 }}>
              <Link href="/catalogo" className="btn btn-primary">
                Ver Coleção
              </Link>
            </div>
          </div>
        </section>

        <section id="sobre" className="about section">
          <div className="container animate-slide-up delay-1" style={{ opacity: 0 }}>
            <h2>Sobre a Óticas Candiani</h2>
            <p style={{ maxWidth: '800px', marginTop: '1rem', color: 'var(--color-text-light)' }}>
              Somos apaixonados por cuidar da sua visão, oferecendo os melhores produtos com um toque premium. 
              Nossa missão é trazer clareza e estilo para o seu dia a dia, com armações que expressam a sua personalidade.
            </p>
          </div>
        </section>

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

      <footer id="contato" className="footer">
        <div className="container footer-grid">
          <div>
            <h3 style={{ color: 'var(--color-primary)' }}>Óticas Candiani</h3>
            <p style={{ marginTop: '1rem', color: '#ccc' }}>Enxergue além do comum.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--color-primary)' }}>Contato</h3>
            <ul style={{ listStyle: 'none', marginTop: '1rem', color: '#ccc', lineHeight: '2' }}>
              <li><strong>Telefone:</strong> (11) 5038-0927</li>
              <li><strong>Endereço:</strong> Avenida Brasil, nº 209</li>
              <li>Centro, Itupeva - SP</li>
              <li>CEP: 13295-152</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Óticas Candiani. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
