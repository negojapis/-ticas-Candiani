import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-advanced">
      <div className="container footer-advanced-grid">
        {/* Coluna 1: Logo e Redes */}
        <div className="footer-col brand-col">
          <Link href="/">
            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <span style={{fontSize: '2rem'}}>🌻</span> Óticas Candiani
            </span>
          </Link>
          <p className="footer-desc">
            Cuidado com a sua visão em cada detalhe. Tradição, tecnologia e atendimento especializado.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/oticascandiani/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/551150380927" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
            <a href="mailto:oticascandiani@gmail.com" aria-label="E-mail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-col">
          <h4 className="footer-title">NAVEGAÇÃO</h4>
          <ul className="footer-links">
            <li><Link href="/">Início</Link></li>
            <li><Link href="/catalogo">Catálogo de Armações</Link></li>
            <li><Link href="#sobre">Nossa História</Link></li>
            <li><Link href="#contato">Localização</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Serviços */}
        <div className="footer-col">
          <h4 className="footer-title">SERVIÇOS</h4>
          <ul className="footer-links">
            <li><Link href="#">Consultoria Visagista</Link></li>
            <li><Link href="#">Lentes Premium</Link></li>
            <li><Link href="#">Ajustes e Manutenção</Link></li>
            <li><Link href="#">Garantia Candiani</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Instagram */}
        <div className="footer-col">
          <h4 className="footer-title">INSTAGRAM</h4>
          <a href="https://www.instagram.com/oticascandiani/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', position: 'relative' }}>
            <div className="insta-grid">
              <img src="/images/round_black_glasses_new_1789055635143.jpg" alt="Insta 1" />
              <img src="/images/clear_glasses_1789072643803.jpg" alt="Insta 2" />
              <img src="/images/square_blue_glasses_1789054658916.jpg" alt="Insta 3" />
              <img src="/images/aviator_gold_glasses_1789054614994.jpg" alt="Insta 4" />
              <img src="/images/tortoise_glasses_1789072392246.jpg" alt="Insta 5" />
              <img src="/images/cateye_red_glasses_1789054604186.jpg" alt="Insta 6" />
              
              <div className="insta-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                SEGUIR
              </div>
            </div>
          </a>
        </div>

      </div>
      <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 5%', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Óticas Candiani. Todos os direitos reservados.</p>
          <Link href="/politica-de-privacidade" style={{ color: '#888', textDecoration: 'underline', fontSize: '0.9rem' }}>
            Política de Privacidade
          </Link>
        </div>
        <p style={{ margin: 0 }}>Desenvolvido por Grace Code Systems</p>
      </div>
    </footer>
  );
}
