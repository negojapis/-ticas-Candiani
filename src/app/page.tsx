import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-content">
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
            <h1>Enxergue o mundo com mais estilo e precisão.</h1>
            <p>Armações exclusivas, lentes de alta tecnologia e atendimento personalizado em Itupeva.</p>
            <Link href="/catalogo" className="btn btn-primary">
              Ver Coleção
            </Link>
          </div>
        </section>

        <section id="sobre" className="about section">
          <div className="container">
            <h2>Sobre a Óticas Candiani</h2>
            <p>
              Somos apaixonados por cuidar da sua visão, oferecendo os melhores produtos com um toque premium. 
              Nossa missão é trazer clareza e estilo para o seu dia a dia.
            </p>
          </div>
        </section>

        <section className="features section bg-light">
          <div className="container features-grid">
            <div className="feature-card">
              <h3>Lentes de Alta Tecnologia</h3>
              <p>Trabalhamos com os melhores laboratórios para garantir visão perfeita.</p>
            </div>
            <div className="feature-card">
              <h3>Armações Premium</h3>
              <p>Modelos selecionados para garantir conforto, durabilidade e estética refinada.</p>
            </div>
            <div className="feature-card">
              <h3>Atendimento Personalizado</h3>
              <p>Nossa equipe te ajuda a escolher a armação ideal para o seu formato de rosto.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="footer">
        <div className="container footer-grid">
          <div>
            <h3>Óticas Candiani</h3>
            <p>Enxergue além do comum.</p>
          </div>
          <div>
            <h3>Contato</h3>
            <p>Telefone: (11) 5038-0927</p>
            <p>Avenida Brasil, nº 209</p>
            <p>Centro, Itupeva - SP</p>
            <p>CEP: 13295-152</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Óticas Candiani. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
