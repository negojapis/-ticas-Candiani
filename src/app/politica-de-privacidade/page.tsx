import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidade | Óticas Candiani',
  description: 'Política de privacidade da Óticas Candiani.',
};

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page" style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: '#ffffff', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>
            &larr; Voltar para o Início
          </Link>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>Política de Privacidade</h1>
        
        <div style={{ lineHeight: '1.8', color: '#444' }}>
          <p>A Óticas Candiani ("nós", "nosso") valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos as suas informações quando você utiliza nosso site e nossos serviços.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>1. Informações que Coletamos</h2>
          <p>Ao interagir com nosso site (por exemplo, através do nosso popup de atendimento ou botão do WhatsApp), podemos coletar as seguintes informações:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Nome completo (se fornecido no contato);</li>
            <li>Número de telefone / WhatsApp;</li>
            <li>Endereço de e-mail (se fornecido).</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>2. Como Usamos Suas Informações</h2>
          <p>As informações coletadas são utilizadas exclusivamente para:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Fornecer atendimento personalizado e tirar dúvidas sobre armações, lentes e consultas;</li>
            <li>Entrar em contato após uma solicitação de atendimento;</li>
            <li>Melhorar a experiência de navegação no nosso site.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>3. Compartilhamento de Dados</h2>
          <p>Nós <strong>não</strong> vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. Suas informações são tratadas de forma confidencial e são acessadas apenas por nossa equipe interna para os fins descritos acima.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>4. Segurança dos Dados</h2>
          <p>Adotamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, lembre-se de que nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>5. Seus Direitos</h2>
          <p>Você tem o direito de solicitar a qualquer momento a visualização, alteração ou exclusão dos seus dados pessoais dos nossos registros. Para isso, basta entrar em contato conosco através dos canais de atendimento informados abaixo.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>6. Contato</h2>
          <p>Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato:</p>
          <p>
            <strong>WhatsApp:</strong> (11) 5038-0927<br />
            <strong>E-mail:</strong> oticascandiani@gmail.com<br />
            <strong>Endereço:</strong> Av. Brasil, 209 - Centro, Itupeva - SP
          </p>

          <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </main>
  );
}
