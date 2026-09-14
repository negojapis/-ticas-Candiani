'use client';

import React, { useState, useEffect } from 'react';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      // Trigger if mouse goes to the top (towards browser tabs)
      if (e.clientY < 50 && e.relatedTarget === null) {
        if (!hasShown) {
          setIsOpen(true);
          setHasShown(true);
        }
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    
    // Add a mobile fallback (show after 60 seconds if no exit intent triggered)
    const mobileFallback = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 60000);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
      clearTimeout(mobileFallback);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    // Redirect to whatsapp with pre-filled message
    const message = `Olá! Estava navegando no site da Óticas Candiani e gostaria de atendimento. Meu número é ${phone}.`;
    const whatsappUrl = `https://wa.me/551150380927?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="exit-overlay" onClick={() => setIsOpen(false)}>
      <div className="exit-modal" onClick={e => e.stopPropagation()}>
        <button className="exit-close" onClick={() => setIsOpen(false)} aria-label="Fechar">
          &times;
        </button>
        <div className="exit-content">
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🌻</span>
          <h2 className="exit-title">Já vai?</h2>
          <p className="exit-desc">
            Deixe seu WhatsApp com a gente! Nossa equipe de especialistas vai entrar em contato para ajudar você a encontrar os óculos perfeitos, sem compromisso.
          </p>
          <form onSubmit={handleSubmit} className="exit-form">
            <input 
              type="tel" 
              placeholder="Qual o seu WhatsApp? (ex: 11 99999-9999)" 
              className="exit-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button type="submit" className="exit-submit">
              Quero Atendimento Especializado
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
