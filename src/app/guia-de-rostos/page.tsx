import React from 'react';
import FaceGuideQuiz from '@/components/FaceGuideQuiz';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Guia de Rostos | Óticas Candiani',
  description: 'Descubra os óculos perfeitos para o seu tipo de rosto com nosso guia interativo.',
};

export default function FaceGuidePage() {
  return (
    <main 
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#ffffff',
        display: 'flex', 
        flexDirection: 'column' 
      }}
    >
      <div style={{ padding: '2rem' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)', textDecoration: 'none', fontWeight: 'bold', background: 'rgba(255,255,255,0.8)', padding: '0.5rem 1rem', borderRadius: '50px', backdropFilter: 'blur(10px)', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <ArrowLeft size={20} /> Voltar para o Início
        </Link>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem 4rem 1rem' }}>
        <FaceGuideQuiz />
      </div>
    </main>
  );
}
