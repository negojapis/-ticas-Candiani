import { FloatingHero } from './FloatingHero';

export default function UsageExample() {
  return (
    <main>
      <FloatingHero 
        title="Óticas Candiani"
        description="Armações exclusivas, lentes de alta tecnologia e atendimento personalizado em Itupeva."
        ctaText="Ver Coleção"
        ctaLink="/catalogo"
        images={[
          {
            src: "/images/round_black_glasses_new_1789055635143.jpg",
            alt: "Óculos Preto Redondo",
            style: { width: '280px', top: '2%', left: '12%', transform: 'rotate(-10deg)' }
          },
          {
            src: "/images/glasses_pink_round.jpg",
            alt: "Óculos Rosa Redondo",
            style: { width: '250px', top: '30%', left: '2%', transform: 'rotate(15deg)' }
          },
          {
            src: "/images/square_blue_glasses_1789054658916.jpg",
            alt: "Óculos Azul Quadrado",
            style: { width: '300px', bottom: '2%', left: '15%', transform: 'rotate(-20deg)' }
          },
          {
            src: "/images/aviator_gold_glasses_1789054614994.jpg",
            alt: "Óculos Aviador Dourado",
            style: { width: '270px', top: '2%', right: '15%', transform: 'rotate(20deg)' }
          },
          {
            src: "/images/glasses_green_modern.jpg",
            alt: "Óculos Verde Moderno",
            style: { width: '310px', top: '30%', right: '2%', transform: 'rotate(-10deg)' }
          },
          {
            src: "/images/cateye_red_glasses_1789054604186.jpg",
            alt: "Óculos Vermelho Cat-eye",
            style: { width: '290px', bottom: '2%', right: '12%', transform: 'rotate(12deg)' }
          }
        ]}
      />
    </main>
  );
}
