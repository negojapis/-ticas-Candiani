import Link from 'next/link';

// Mock data para visualização antes de integrarmos com o banco de dados
const mockProducts = [
  { id: 1, name: 'Armação Gatinho Elegance', price: 299.90, category: 'Feminino', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 2, name: 'Óculos de Sol Aviador', price: 189.00, category: 'Unissex', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 3, name: 'Armação Redonda Classic', price: 249.50, category: 'Masculino', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 4, name: 'Armação Retangular Office', price: 210.00, category: 'Unissex', image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 5, name: 'Óculos Infantil Flex', price: 150.00, category: 'Infantil', image: 'https://images.unsplash.com/photo-1589254394627-1aa33a6b328a?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 6, name: 'Solar Premium Dourado', price: 350.00, category: 'Feminino', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400&h=300' }, // repeated img for mock
];

export default function Catalogo() {
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
            <Link href="/catalogo" style={{color: 'var(--color-primary)'}}>Catálogo</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/#contato">Contato</Link>
          </nav>
        </div>
      </header>

      <main className="section bg-light" style={{minHeight: '80vh'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Nosso Catálogo</h1>
            <p style={{color: 'var(--color-text-light)'}}>Explore nossas coleções e encontre a armação perfeita para o seu estilo.</p>
          </div>

          {/* Filtros básicos visuais */}
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem'}}>
            <button className="btn btn-primary">Todos</button>
            <button className="btn btn-secondary">Feminino</button>
            <button className="btn btn-secondary">Masculino</button>
            <button className="btn btn-secondary">Óculos de Sol</button>
            <button className="btn btn-secondary">Infantil</button>
          </div>

          <div className="features-grid">
            {mockProducts.map((product) => (
              <div key={product.id} className="feature-card" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
                <div style={{
                  height: '200px', 
                  backgroundImage: `url(${product.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center'
                }}></div>
                <div style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                  <span style={{fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase'}}>{product.category}</span>
                  <h3 style={{margin: '0.5rem 0', fontSize: '1.2rem', color: 'var(--color-text)'}}>{product.name}</h3>
                  <p style={{fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--color-primary)', marginTop: 'auto', marginBottom: '1rem'}}>
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </p>
                  <Link href={`/catalogo/${product.id}`} className="btn btn-primary" style={{width: '100%'}}>
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
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
