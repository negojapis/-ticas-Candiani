'use client';
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { MaleOval, MaleRound, MaleSquare, MaleRectangle, MaleHeart, MaleDiamond, FemaleOval, FemaleRound, FemaleSquare, FemaleRectangle, FemaleHeart, FemaleDiamond } from './FaceShapesIcons';

type Answers = {
  gender: string;
  type: string;
  faceShape: string;
  designs: string[];
  materials: string[];
  colors: string[];
};

// --- SVG Icons Components ---
const IconMale = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M20 54v-4a12 12 0 0 1 12-12h0a12 12 0 0 1 12 12v4" />
    <circle cx="32" cy="24" r="10" />
    <path d="M28 15s-2-6-8-6-8 4-8 4" />
  </svg>
);

const IconFemale = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M20 54v-4a12 12 0 0 1 12-12h0a12 12 0 0 1 12 12v4" />
    <circle cx="32" cy="24" r="10" />
    <path d="M25 15s-5-6-11-2c-4 3-2 15-2 15" />
    <path d="M39 15s5-6 11-2c4 3 2 15 2 15" />
  </svg>
);

const IconSun = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full text-gray-800">
    <path d="M12 28h16a4 4 0 0 1 4 4v2a12 12 0 0 1-24 0v-2a4 4 0 0 1 4-4z" />
    <path d="M36 28h16a4 4 0 0 1 4 4v2a12 12 0 0 1-24 0v-2a4 4 0 0 1 4-4z" />
    <path d="M28 32h8" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const IconPrescription = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
    <path d="M12 28h16a4 4 0 0 1 4 4v2a12 12 0 0 1-24 0v-2a4 4 0 0 1 4-4z" />
    <path d="M36 28h16a4 4 0 0 1 4 4v2a12 12 0 0 1-24 0v-2a4 4 0 0 1 4-4z" />
    <path d="M28 32h8" />
  </svg>
);

const IconBoth = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    {/* Sun */}
    <g transform="translate(-6, -6)">
      <path d="M12 28h16a4 4 0 0 1 4 4v2a12 12 0 0 1-24 0v-2a4 4 0 0 1 4-4z" fill="#444" />
      <path d="M36 28h16a4 4 0 0 1 4 4v2a12 12 0 0 1-24 0v-2a4 4 0 0 1 4-4z" fill="#444" />
      <path d="M28 32h8" stroke="#444" strokeWidth="4" />
    </g>
    {/* Prescription */}
    <g transform="translate(6, 6)">
      <path d="M12 28h16a4 4 0 0 1 4 4v2a12 12 0 0 1-24 0v-2a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="3" />
      <path d="M36 28h16a4 4 0 0 1 4 4v2a12 12 0 0 1-24 0v-2a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="3" />
      <path d="M28 32h8" stroke="currentColor" strokeWidth="3" />
    </g>
  </svg>
);

const IconFaceNarrow = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <ellipse cx="32" cy="32" rx="14" ry="22" />
    <path d="M32 36v4" />
    <path d="M28 46h8" />
  </svg>
);

const IconFaceMedium = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <ellipse cx="32" cy="32" rx="18" ry="22" />
    <path d="M32 36v4" />
    <path d="M27 46h10" />
  </svg>
);

const IconFaceWide = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <ellipse cx="32" cy="32" rx="22" ry="22" />
    <path d="M32 36v4" />
    <path d="M25 46h14" />
  </svg>
);

// Frame Designs
const IconFrameSquare = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
    <rect x="10" y="24" width="18" height="14" rx="2" />
    <rect x="36" y="24" width="18" height="14" rx="2" />
    <path d="M28 28h8" />
  </svg>
);

const IconFrameRound = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
    <circle cx="19" cy="31" r="9" />
    <circle cx="45" cy="31" r="9" />
    <path d="M28 31h8" />
  </svg>
);

const IconFrameCat = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
    <path d="M10 24l8-4 10 6v6c0 5-4 9-9 9s-9-4-9-9v-8z" />
    <path d="M36 26l10-6 8 4v8c0 5-4 9-9 9s-9-4-9-9v-6z" />
    <path d="M28 30h8" />
  </svg>
);

const IconFrameHex = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
    <polygon points="12,28 16,22 24,22 28,28 24,36 16,36" />
    <polygon points="36,28 40,22 48,22 52,28 48,36 40,36" />
    <path d="M28 29h8" />
  </svg>
);

const IconFrameSemi = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
    <path d="M10 24h18" />
    <path d="M10 24v4c0 5 4 9 9 9s9-4 9-9v-4" strokeWidth="2"/>
    <path d="M36 24h18" />
    <path d="M36 24v4c0 5 4 9 9 9s9-4 9-9v-4" strokeWidth="2"/>
    <path d="M28 24h8" />
  </svg>
);

// Materials
const IconAcetato = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="6" className="w-full h-full">
    <circle cx="19" cy="31" r="9" />
    <circle cx="45" cy="31" r="9" />
    <path d="M28 31h8" strokeWidth="6" />
  </svg>
);

const IconMetal = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <circle cx="19" cy="31" r="10" />
    <circle cx="45" cy="31" r="10" />
    <path d="M29 31h6" />
    <path d="M27 31a4 4 0 0 1 10 0" strokeWidth="1" /> {/* Nose pads detail */}
  </svg>
);

const IconTR90 = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" className="w-full h-full">
    <path d="M12 26 C 12 22, 28 22, 28 26 L 25 36 C 23 40, 15 40, 12 36 Z" />
    <path d="M52 26 C 52 22, 36 22, 36 26 L 39 36 C 41 40, 49 40, 52 36 Z" />
    <path d="M28 26 C 30 24, 34 24, 36 26" />
  </svg>
);

// --- Component ---

export default function FaceGuideQuiz() {
  const [step, setStep] = useState(0);
  const totalSteps = 6;
  const [answers, setAnswers] = useState<Answers>({
    gender: '',
    type: '',
    faceShape: '',
    designs: [],
    materials: [],
    colors: []
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const finishQuiz = () => {
    const text = `Olá! Acabei de fazer o Guia de Rostos no site.\n\n*Meu Perfil:*\n- Gênero: ${answers.gender}\n- Tipo: ${answers.type}\n- Formato do Rosto: ${answers.faceShape}\n- Formatos: ${answers.designs.join(', ')}\n- Materiais: ${answers.materials.join(', ')}\n- Cores: ${answers.colors.join(', ')}\n\nGostaria de ver as melhores opções para mim!`;
    const whatsappUrl = `https://wa.me/551150380927?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setStep(7);
  };

  const toggleSelection = (category: 'designs' | 'colors' | 'materials', value: string) => {
    setAnswers(prev => {
      const current = prev[category];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(item => item !== value) };
      }
      return { ...prev, [category]: [...current, value] };
    });
  };

  const calculateProgress = () => {
    if (step === 0 || step > totalSteps) return 0;
    return (step / totalSteps) * 100;
  };

  return (
    <div className="quiz-container" style={{ background: '#ffffff', border: '1px solid #eee' }}>
      {/* Progress Bar */}
      {step > 0 && step <= totalSteps && (
        <div className="quiz-progress-wrapper">
          {step > 1 && (
            <button className="quiz-back-btn" onClick={handlePrev} aria-label="Voltar">
              <ArrowLeft size={20} />
            </button>
          )}
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${calculateProgress()}%` }}></div>
          </div>
        </div>
      )}

      {/* Step 0: Welcome */}
      {step === 0 && (
        <div className="quiz-step animate-slide-left quiz-welcome">
          <div className="quiz-welcome-icon" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))', fontSize: '6rem' }}>💎</div>
          <h1 className="quiz-title-main">Guia de Rostos</h1>
          <p className="quiz-desc-main">
            Uma consultoria virtual exclusiva. Encontre a armação perfeita que harmoniza com seu rosto e estilo em poucos passos.
          </p>
          <button className="quiz-btn-primary mt-4" onClick={handleNext} style={{ padding: '1.2rem 3rem', fontSize: '1.3rem', boxShadow: '0 8px 25px rgba(246,196,14,0.4)' }}>
            Iniciar Consultoria <ArrowRight size={24} />
          </button>
        </div>
      )}

      {/* Step 1: Gender */}
      {step === 1 && (
        <div className="quiz-step animate-slide-left">
          <h2 className="quiz-question">O que você está procurando?</h2>
          <p className="quiz-subquestion">Escolha uma das opções para começarmos</p>
          
          <div className="quiz-grid quiz-grid-2">
            <button className={`quiz-card ${answers.gender === 'Masculino' ? 'selected' : ''}`} onClick={() => { setAnswers({...answers, gender: 'Masculino'}); handleNext(); }}>
              <div className="quiz-icon-large" style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1rem', border: '4px solid #fff', boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}>
                <img src="/images/quiz_gender_male.jpg" alt="Homem" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="quiz-label">Homem</span>
            </button>
            <button className={`quiz-card ${answers.gender === 'Feminino' ? 'selected' : ''}`} onClick={() => { setAnswers({...answers, gender: 'Feminino'}); handleNext(); }}>
              <div className="quiz-icon-large" style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1rem', border: '4px solid #fff', boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}>
                <img src="/images/quiz_gender_female.jpg" alt="Mulher" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="quiz-label">Mulher</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Type (Sun/Prescription) */}
      {step === 2 && (
        <div className="quiz-step animate-slide-left">
          <h2 className="quiz-question">Qual seu óculos favorito?</h2>
          <p className="quiz-subquestion">Qual o objetivo do seu novo óculos?</p>
          
          <div className="quiz-grid quiz-grid-3">
            <button className={`quiz-card ${answers.type === 'Sol' ? 'selected' : ''}`} onClick={() => { setAnswers({...answers, type: 'Sol'}); handleNext(); }}>
              <div className="quiz-icon-large" style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                <img src="/images/quiz_type_sun.jpg" alt="Óculos de Sol" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="quiz-label">Só de sol</span>
            </button>
            <button className={`quiz-card ${answers.type === 'Ambos' ? 'selected' : ''}`} onClick={() => { setAnswers({...answers, type: 'Ambos'}); handleNext(); }}>
              <div className="quiz-icon-large" style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                <img src="/images/quiz_type_both.jpg" alt="Ambos" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="quiz-label">Quero ver os dois</span>
            </button>
            <button className={`quiz-card ${answers.type === 'Grau' ? 'selected' : ''}`} onClick={() => { setAnswers({...answers, type: 'Grau'}); handleNext(); }}>
              <div className="quiz-icon-large" style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                <img src="/images/quiz_type_prescription.jpg" alt="Óculos de Grau" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="quiz-label">Só de grau</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Face Shape */}
      {step === 3 && (
        <div className="quiz-step animate-slide-left">
          <h2 className="quiz-question">Qual o formato do seu rosto?</h2>
          <p className="quiz-subquestion">Selecione o que mais se parece com você</p>
          
          <div className="quiz-grid quiz-grid-3">
            {[
              { id: 'Oval', male: <MaleOval/>, female: <FemaleOval/> },
              { id: 'Redondo', male: <MaleRound/>, female: <FemaleRound/> },
              { id: 'Quadrado', male: <MaleSquare/>, female: <FemaleSquare/> },
              { id: 'Retangular', male: <MaleRectangle/>, female: <FemaleRectangle/> },
              { id: 'Coração', male: <MaleHeart/>, female: <FemaleHeart/> },
              { id: 'Diamante', male: <MaleDiamond/>, female: <FemaleDiamond/> }
            ].map(shape => (
              <button 
                key={shape.id}
                className={`quiz-card ${answers.faceShape === shape.id ? 'selected' : ''}`} 
                onClick={() => { setAnswers({...answers, faceShape: shape.id}); handleNext(); }}
              >
                <div className="quiz-icon-large" style={{ color: 'var(--color-primary)' }}>
                  {answers.gender === 'Feminino' ? shape.female : shape.male}
                </div>
                <span className="quiz-label">{shape.id}</span>
              </button>
            ))}
          </div>
          <button className="quiz-btn-secondary mt-4" onClick={() => { setAnswers({...answers, faceShape: 'Não sabe'}); handleNext(); }}>
            Não tenho certeza. Pular.
          </button>
        </div>
      )}

      {/* Step 4: Designs */}
      {step === 4 && (
        <div className="quiz-step animate-slide-left">
          <h2 className="quiz-question">Qual design é a sua cara?</h2>
          <p className="quiz-subquestion">Pode selecionar mais de uma opção</p>
          
          <div className="quiz-grid quiz-grid-5">
            {[
              { id: 'Quadrado', icon: <IconFrameSquare /> },
              { id: 'Redondo', icon: <IconFrameRound /> },
              { id: 'Gatinho', icon: <IconFrameCat /> },
              { id: 'Hexagonal', icon: <IconFrameHex /> },
              { id: 'Semi-redondo', icon: <IconFrameSemi /> }
            ].map(item => (
              <button 
                key={item.id}
                className={`quiz-card quiz-card-small ${answers.designs.includes(item.id) ? 'selected' : ''}`} 
                onClick={() => toggleSelection('designs', item.id)}
              >
                {answers.designs.includes(item.id) && <div className="quiz-check"><Check size={14}/></div>}
                <div className="quiz-icon-medium">{item.icon}</div>
                <span className="quiz-label">{item.id}</span>
              </button>
            ))}
          </div>
          <button 
            className="quiz-btn-primary mt-4" 
            onClick={handleNext}
            disabled={answers.designs.length === 0}
          >
            Continuar
          </button>
        </div>
      )}

      {/* Step 5: Materials */}
      {step === 5 && (
        <div className="quiz-step animate-slide-left">
          <h2 className="quiz-question">Quais materiais você prefere?</h2>
          <p className="quiz-subquestion">Pode selecionar mais de uma opção</p>
          
          <div className="quiz-grid quiz-grid-3">
            {[
              { id: 'Acetato', icon: <IconAcetato /> },
              { id: 'Metal', icon: <IconMetal /> },
              { id: 'TR-90', icon: <IconTR90 /> }
            ].map(item => (
              <button 
                key={item.id}
                className={`quiz-card ${answers.materials.includes(item.id) ? 'selected' : ''}`} 
                onClick={() => toggleSelection('materials', item.id)}
              >
                {answers.materials.includes(item.id) && <div className="quiz-check"><Check size={14}/></div>}
                <div className="quiz-icon-large">{item.icon}</div>
                <span className="quiz-label">{item.id}</span>
              </button>
            ))}
          </div>
          <button 
            className="quiz-btn-primary mt-4" 
            onClick={handleNext}
            disabled={answers.materials.length === 0}
          >
            Continuar
          </button>
        </div>
      )}

      {/* Step 6: Colors */}
      {step === 6 && (
        <div className="quiz-step animate-slide-left">
          <h2 className="quiz-question">Quais são suas cores favoritas?</h2>
          <p className="quiz-subquestion">Pode selecionar mais de uma opção</p>
          
          <div className="quiz-grid quiz-grid-6">
            {[
              { id: 'Cores', bg: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)' },
              { id: 'Neutro', bg: '#d0d0d0' },
              { id: 'Preto', bg: '#111' },
              { id: 'Tartaruga', bg: 'repeating-radial-gradient(circle, #4a2511 0%, #4a2511 10px, #8b5a2b 10px, #8b5a2b 20px)' },
              { id: 'Cristal', bg: 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)', border: '1px solid #ddd' },
              { id: 'Dois tons', bg: 'linear-gradient(to bottom, #111 50%, #f0f0f0 50%)', border: '1px solid #ddd' }
            ].map(item => (
              <button 
                key={item.id}
                className={`quiz-card quiz-card-small ${answers.colors.includes(item.id) ? 'selected' : ''}`} 
                onClick={() => toggleSelection('colors', item.id)}
              >
                {answers.colors.includes(item.id) && <div className="quiz-check"><Check size={14}/></div>}
                <div className="quiz-color-swatch" style={{ background: item.bg, border: item.border || 'none' }}></div>
                <span className="quiz-label">{item.id}</span>
              </button>
            ))}
          </div>
          <button 
            className="quiz-btn-primary mt-4" 
            onClick={finishQuiz}
            disabled={answers.colors.length === 0}
          >
            Ver Resultados
          </button>
        </div>
      )}

      {/* Step 7: Finish */}
      {step === 7 && (
        <div className="quiz-step animate-slide-left">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h2 className="quiz-question">Consultoria Concluída!</h2>
          <p className="quiz-subquestion" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Suas preferências foram registradas. Nossa equipe já vai te responder no WhatsApp com as melhores opções da loja especialmente separadas para você.
          </p>
          <button className="quiz-btn-secondary mt-4" onClick={() => setStep(0)}>
            Refazer a Consultoria
          </button>
        </div>
      )}
    </div>
  );
}
