export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  images: string[];
  blend: boolean;
};

export const products: Product[] = [
  // Feminino
  {
    id: 1,
    name: 'Gatinho Rose Gold',
    price: 299.90,
    category: 'Feminino',
    description: 'Uma releitura sofisticada do clássico cat-eye. Feita em liga metálica super leve com acabamento em ouro rosé, esta armação eleva qualquer look. Ideal para rostos ovais e triangulares, destacando o olhar com um toque de elegância inconfundível.',
    image: '/images/gatinho_rose_gold.png',
    images: ['/images/gatinho_rose_gold.png'],
    blend: false
  },
  {
    id: 2,
    name: 'Quadrado Oversized Bordeaux',
    price: 349.00,
    category: 'Feminino',
    description: 'O glamour do oversized em um tom profundo de Bordeaux (Vinho). Desenhado para mulheres empoderadas que não têm medo de marcar presença. O acetato polido à mão garante brilho intenso e durabilidade extrema.',
    image: '/images/cat_fem_2.jpg',
    images: ['/images/cat_fem_2.jpg'],
    blend: false
  },
  {
    id: 3,
    name: 'Hexagonal Slim Gold',
    price: 279.50,
    category: 'Feminino',
    description: 'Minimalismo geométrico. A estrutura fina em tom dourado suave é perfeita para quem busca um design moderno e quase invisível no rosto. Acompanha plaquetas ajustáveis em silicone premium para conforto o dia todo.',
    image: '/images/cat_fem_3.jpg',
    images: ['/images/cat_fem_3.jpg'],
    blend: false
  },
  
  // Masculino
  {
    id: 4,
    name: 'Classic Square Black',
    price: 249.90,
    category: 'Masculino',
    description: 'O clássico absoluto reinventado. Acetato negro fosco com hastes texturizadas para máxima aderência. Um modelo versátil que transita perfeitamente da reunião de negócios para o happy hour.',
    image: '/images/cat_masc_1.jpg',
    images: ['/images/cat_masc_1.jpg'],
    blend: false
  },
  {
    id: 5,
    name: 'Round Vintage Havana',
    price: 289.00,
    category: 'Masculino',
    description: 'Estilo retrô intelectual. A padronagem Havana (Tartaruga) traz personalidade única a cada peça. Aro redondo em acetato premium tartaruga, inspirado no design vintage europeu dos anos 50.',
    image: '/images/round_vintage_havana.png',
    images: ['/images/round_vintage_havana.png'],
    blend: false
  },
  {
    id: 6,
    name: 'Acetato Crystal Clear',
    price: 219.90,
    category: 'Masculino',
    description: 'O ápice do design contemporâneo. Armação 100% transparente em acetato italiano. Discreta, moderna e incrivelmente adaptável a qualquer tom de pele e formato de rosto.',
    image: '/images/cat_masc_3.jpg',
    images: ['/images/cat_masc_3.jpg'],
    blend: false
  },
  
  // Infantil
  {
    id: 7,
    name: 'Flex Kids Azul',
    price: 159.90,
    category: 'Infantil',
    description: 'Feito com material emborrachado super flexível e livre de BPA. Resiste a torções, quedas e brincadeiras intensas. Acompanha tira elástica de segurança para manter o óculos firme durante as atividades.',
    image: '/images/flex_kids_azul.png',
    images: ['/images/flex_kids_azul.png'],
    blend: false
  },
  {
    id: 8,
    name: 'Flex Kids Rosa',
    price: 159.90,
    category: 'Infantil',
    description: 'Conforto e segurança para os pequenos. Armação levíssima com lentes bloqueadoras de luz azul, construída com tecnologia de memória de forma que sempre volta à estrutura original.',
    image: '/images/flex_kids_rosa.png',
    images: ['/images/flex_kids_rosa.png'],
    blend: false
  },
  {
    id: 9,
    name: 'Kids Sport Tech',
    price: 169.90,
    category: 'Infantil',
    description: 'Design aerodinâmico para os pequenos esportistas. Hastes com tecnologia antiderrapante que garantem estabilidade total. Resistência e proteção para explorar o mundo sem preocupações.',
    image: '/images/kids_sport_tech.png',
    images: ['/images/kids_sport_tech.png'],
    blend: false
  },
  
  // Óculos de Sol
  {
    id: 10,
    name: 'Solar Aviador Luxe',
    price: 450.00,
    category: 'Óculos de Sol',
    description: 'O design mais icônico de todos os tempos. Lentes de cristal polarizado com proteção 100% UV, montadas sobre uma fina estrutura de metal dourado banhado a ouro 18k.',
    image: '/images/solar_aviador_luxe.png',
    images: ['/images/solar_aviador_luxe.png'],
    blend: false
  },
  {
    id: 11,
    name: 'Solar Wayfarer Classic',
    price: 390.00,
    category: 'Óculos de Sol',
    description: 'Robustez e muito estilo. O clássico formato quadrado ganha lentes G-15 escuras que reduzem o cansaço visual e bloqueiam o brilho excessivo. Um ícone de rebeldia elegante.',
    image: '/images/solar_wayfarer_classic.png',
    images: ['/images/solar_wayfarer_classic.png'],
    blend: false
  },
  {
    id: 12,
    name: 'Solar Retangular Sharp',
    price: 410.00,
    category: 'Óculos de Sol',
    description: 'Formato angular extremamente moderno. Lentes pretas sólidas e armação fosca criam um visual "all black" impecável. Feito em acetato injetado leve e altamente resistente.',
    image: '/images/solar_retangular_sharp.png',
    images: ['/images/solar_retangular_sharp.png'],
    blend: false
  },
  
  // Acessórios
  {
    id: 13,
    name: 'Estojo Premium Couro',
    price: 89.90,
    category: 'Acessórios',
    description: 'Estojo rígido com revestimento em couro sintético de alta durabilidade. Interior aveludado para proteger suas lentes contra riscos. Fecho magnético e design minimalista e elegante para carregar seus óculos com segurança.',
    image: '/images/estojo_premium_couro.png',
    images: ['/images/estojo_premium_couro.png'],
    blend: false
  },
  
  // Lentes de Contato
  {
    id: 14,
    name: 'Lentes Acuvue Oasys',
    price: 149.90,
    category: 'Lentes de Contato',
    description: 'Lentes de contato de descarte quinzenal com tecnologia Hydraclear Plus. Conforto imbatível até mesmo em ambientes com ar condicionado ou uso prolongado de telas digitais.',
    image: '/images/lentes_acuvue_oasys.png',
    images: ['/images/lentes_acuvue_oasys.png'],
    blend: false
  }
];
