import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import { products } from '@/data/products';

export default async function ProdutoDetalhe({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.id === parseInt(resolvedParams.id)) || products[0];
  
  // O número do WhatsApp será preenchido posteriormente, usando um genérico provisório
  const whatsappNumber = "551150380927"; // O número que temos de contato fixo temporário
  const message = `Olá! Gostei muito do modelo ${product.name} (Ref: ${product.id}) que vi no site. Podem me ajudar?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <header className="header">
        <div className="header-content">
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

      <main className="section bg-light">
        <div className="container">
          <Link href="/catalogo" style={{display: 'inline-block', marginBottom: '2rem', color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none', transition: 'opacity 0.2s'}} className="hover-opacity">
            &larr; Voltar para o catálogo
          </Link>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'start'}}>
            {/* Componente de Galeria de Imagens Premium */}
            <ProductGallery images={product.images} blend={product.blend} />

            {/* Detalhes do Produto */}
            <div style={{ padding: '1rem 0' }}>
              <span style={{color: 'var(--color-accent)', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '2px', fontSize: '0.9rem'}}>{product.category}</span>
              <h1 style={{fontSize: '3.2rem', margin: '1rem 0', color: 'var(--color-text)', lineHeight: '1.1', fontWeight: '800'}}>{product.name}</h1>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '2rem'}}>
                Consultoria e Venda Exclusiva via WhatsApp
              </p>
              
              <div style={{backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #f0f0f0', marginBottom: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)'}}>
                <h3 style={{marginBottom: '1rem', color: 'var(--color-text)', fontSize: '1.3rem'}}>Sobre a peça</h3>
                <p style={{color: 'var(--color-text-light)', fontSize: '1.1rem', lineHeight: '1.7'}}>{product.description}</p>
                
                <ul style={{marginTop: '1.5rem', listStyle: 'none', padding: 0, color: 'var(--color-text-light)'}}>
                  <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Acompanha estojo premium
                  </li>
                  <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Garantia de 1 ano
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Limpa-lentes especial incluso
                  </li>
                </ul>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-scale" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', padding: '1.2rem', borderRadius: '50px', transition: 'transform 0.3s ease, background-color 0.3s ease'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Falar com um Consultor
              </a>
              <p style={{textAlign: 'center', fontSize: '0.9rem', color: '#888', marginTop: '1.2rem'}}>
                Você será redirecionado para o WhatsApp com o produto selecionado.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
