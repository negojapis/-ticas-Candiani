import Link from 'next/link';

// Usaremos os mesmos mock data provisórios
const mockProducts = [
  { id: 1, name: 'Armação Gatinho Elegance', price: 299.90, category: 'Feminino', description: 'Armação super leve com design moderno gatinho, perfeita para o dia a dia e ocasiões especiais.', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800&h=600' },
  { id: 2, name: 'Óculos de Sol Aviador', price: 189.00, category: 'Unissex', description: 'O clássico que nunca sai de moda. Proteção UV400 completa.', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800&h=600' },
  { id: 3, name: 'Armação Redonda Classic', price: 249.50, category: 'Masculino', description: 'Estilo vintage em metal de alta qualidade. Traz personalidade ao seu visual.', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800&h=600' },
  { id: 4, name: 'Armação Retangular Office', price: 210.00, category: 'Unissex', description: 'Design clean e profissional. Material resistente em acetato.', image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800&h=600' },
  { id: 5, name: 'Óculos Infantil Flex', price: 150.00, category: 'Infantil', description: 'Armação super flexível e inquebrável, ideal para crianças agitadas.', image: 'https://images.unsplash.com/photo-1589254394627-1aa33a6b328a?auto=format&fit=crop&q=80&w=800&h=600' },
  { id: 6, name: 'Solar Premium Dourado', price: 350.00, category: 'Feminino', description: 'Sofisticação e luxo com armação dourada e lentes degrade.', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800&h=600' },
];

export default function ProdutoDetalhe({ params }: { params: { id: string } }) {
  const product = mockProducts.find(p => p.id === parseInt(params.id)) || mockProducts[0];
  
  // O número do WhatsApp será preenchido posteriormente, usando um genérico provisório
  const whatsappNumber = "551150380927"; // O número que temos de contato fixo temporário
  const message = `Olá! Gostaria de solicitar um orçamento para o produto: ${product.name} (Ref: ${product.id})`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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
          </nav>
        </div>
      </header>

      <main className="section bg-light">
        <div className="container">
          <Link href="/catalogo" style={{display: 'inline-block', marginBottom: '2rem', color: 'var(--color-primary)', fontWeight: 'bold'}}>
            &larr; Voltar para o catálogo
          </Link>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start'}}>
            {/* Imagem do Produto */}
            <div style={{
              width: '100%', 
              height: '400px', 
              backgroundImage: `url(${product.image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}></div>

            {/* Detalhes do Produto */}
            <div>
              <span style={{color: 'var(--color-accent)', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px'}}>{product.category}</span>
              <h1 style={{fontSize: '2.5rem', margin: '0.5rem 0', color: 'var(--color-text)'}}>{product.name}</h1>
              <p style={{fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '1.5rem'}}>
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>
              
              <div style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #eee', marginBottom: '2rem'}}>
                <h3 style={{marginBottom: '0.5rem'}}>Descrição</h3>
                <p style={{color: 'var(--color-text-light)'}}>{product.description}</p>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', padding: '1rem'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Solicitar Orçamento no WhatsApp
              </a>
              <p style={{textAlign: 'center', fontSize: '0.85rem', color: '#888', marginTop: '1rem'}}>
                Você será redirecionado para o WhatsApp com o produto já selecionado.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
