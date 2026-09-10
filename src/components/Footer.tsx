import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-advanced">
      <div className="container footer-advanced-grid">
        {/* Coluna 1: Logo e Redes */}
        <div className="footer-col brand-col">
          <Link href="/">
            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.8rem', display: 'block', marginBottom: '1rem' }}>Óticas Candiani</span>
          </Link>
          <p className="footer-desc">
            Cuidado com a sua visão em cada detalhe. Tradição, tecnologia e atendimento especializado.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/oticascandiani/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2: Ajuda e Suporte */}
        <div className="footer-col">
          <h4 className="footer-title">AJUDA & SUPORTE</h4>
          <ul className="footer-links">
            <li><Link href="/">Central de Relacionamento</Link></li>
            <li><Link href="/">Devoluções e Garantias</Link></li>
            <li><Link href="/">Reembolso e Cancelamento</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Institucional */}
        <div className="footer-col">
          <h4 className="footer-title">INSTITUCIONAL</h4>
          <ul className="footer-links">
            <li><Link href="/#sobre">Quem Somos</Link></li>
            <li><Link href="/">Seja um Franqueado</Link></li>
            <li><Link href="/">Política de Privacidade</Link></li>
            <li><Link href="/">Termos de Uso</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Atendimento */}
        <div className="footer-col">
          <h4 className="footer-title">ATENDIMENTO</h4>
          
          <div className="contact-info">
            <p className="contact-label">WHATSAPP</p>
            <a href="https://wa.me/551150380927" target="_blank" rel="noopener noreferrer" className="contact-value highlight">
              <Phone size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              (11) 5038-0927
            </a>
            <p className="contact-hours">Segunda a Sexta: 9h às 18h<br/>Sábado: 9h às 13h</p>
          </div>

          <div className="contact-info" style={{ marginTop: '1.5rem' }}>
            <p className="contact-label">E-MAIL</p>
            <a href="mailto:oticascandiani@gmail.com" className="contact-value">
              <Mail size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              oticascandiani@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 5%', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Óticas Candiani. Todos os direitos reservados.</p>
        <p style={{ margin: 0 }}>Desenvolvido por Grace Code Systems</p>
      </div>
    </footer>
  );
}
