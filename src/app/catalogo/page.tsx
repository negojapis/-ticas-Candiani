'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

export default function Catalogo() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'Todos') return true;
    if (activeFilter === 'Óculos de Sol') return product.name.includes('Sol') || product.name.includes('Solar');
    return product.category === activeFilter || product.category === 'Unissex';
  });

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '2.5rem', lineHeight: 0 }}>🌻</span>
              <span className="logo-text">Para enxergar sempre o lado bom da vida</span>
            </Link>
          </div>
          <nav className="nav">
            <Link href="/">Início</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/catalogo" style={{color: 'var(--color-white)'}}>Catálogo</Link>
            <Link href="/guia-de-rostos">Guia de Rostos</Link>
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

          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem'}}>
            {['Todos', 'Feminino', 'Masculino', 'Óculos de Sol', 'Infantil', 'Acessórios', 'Lentes de Contato'].map((filter) => (
              <button 
                key={filter}
                className={`btn ${activeFilter === filter ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveFilter(filter)}
                style={{minWidth: '120px'}}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="features-grid">
            {filteredProducts.map((product) => (
              <Link href={`/catalogo/${product.id}`} key={product.id} style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
                <div className="feature-card animate-fade-in" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                  <div style={{
                    height: '200px', 
                    backgroundImage: `url(${product.image})`, 
                    backgroundColor: product.blend ? 'var(--color-primary)' : 'transparent',
                    backgroundBlendMode: product.blend ? 'multiply' : 'normal',
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                  }}></div>
                  <div style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                    <span style={{fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase'}}>{product.category}</span>
                    <h3 style={{margin: '0.5rem 0', fontSize: '1.2rem', color: 'var(--color-text)'}}>{product.name}</h3>
                    <p style={{fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--color-primary)', marginTop: 'auto', marginBottom: '1rem'}}>
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </p>
                    <div className="btn btn-primary" style={{width: '100%', textAlign: 'center'}}>
                      Saber mais
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {filteredProducts.length === 0 && (
              <p style={{textAlign: 'center', gridColumn: '1 / -1', padding: '3rem', color: 'var(--color-text-light)'}}>Nenhum produto encontrado nesta categoria.</p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
