export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  currency: string
  material?: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Collier Doré Élégance',
    image: '/placeholder.png',
    description:
      'Un collier raffiné aux lignes épurées, fabriqué à la main en plaqué or 18 carats. Les détails finement ciselés lui confèrent un caractère unique. Pièce irremplaçable — une seule disponible. Parfait pour sublimer une tenue du quotidien ou lors d\'une occasion spéciale.',
    shortDescription: 'Collier artisanal plaqué or 18 carats, finition ciselée à la main.',
    price: 850,
    currency: 'MAD',
    material: 'Plaqué Or 18K',
  },
  {
    id: 2,
    name: 'Collier Jasmin',
    image: '/placeholder.png',
    description:
      'Un collier délicat en argent sterling 925 orné d\'un pendentif fleur ciselé à la main. Le pendentif de 2 cm flotte élégamment sur une chaîne fine de 45 cm. Une ode à la féminité et à la douceur, façonnée entièrement à la main.',
    shortDescription: 'Collier en argent 925 avec pendentif fleur ciselé à la main.',
    price: 490,
    currency: 'MAD',
    material: 'Argent 925',
  },
  {
    id: 3,
    name: 'Collier Mosaïque',
    image: '/placeholder.png',
    description:
      'Ce collier unique associe des perles en céramique émaillée de couleurs naturelles, assemblées à la main en un motif harmonieux, mêlé de petites perles dorées. Longueur réglable de 40 à 50 cm. Chaque perle est choisie et placée à la main.',
    shortDescription: 'Collier perles céramique émaillée, assemblé à la main, pièce unique.',
    price: 380,
    currency: 'MAD',
    material: 'Céramique & Or',
  },
  {
    id: 4,
    name: 'Collier Grenat Vintage',
    image: '/placeholder.png',
    description:
      'Une création somptueuse multi-rangs associant des perles de grenat naturel à des ornements en argent gravé à la main. Pièce d\'exception pour les grandes occasions, entièrement réalisée à la main. Un seul exemplaire disponible.',
    shortDescription: 'Collier multi-rangs grenat naturel et argent gravé, pièce unique.',
    price: 1200,
    currency: 'MAD',
    material: 'Grenat & Argent',
  },
  {
    id: 5,
    name: 'Collier Ambre Doré',
    image: '/placeholder.png',
    description:
      'La chaleur de l\'ambre naturelle au cœur d\'un collier en plaqué or. La pierre d\'ambre contraste délicatement avec l\'or brillant pour créer une pièce intemporelle et élégante, travaillée entièrement à la main. Une création unique en son genre.',
    shortDescription: 'Collier plaqué or avec pierre d\'ambre naturelle, finition artisanale.',
    price: 650,
    currency: 'MAD',
    material: 'Plaqué Or & Ambre',
  },
  {
    id: 6,
    name: 'Collier Argent Gravé',
    image: '/placeholder.png',
    description:
      'Un collier robuste et élégant forgé en argent massif. Le médaillon circulaire de 3 cm est gravé à la main avec des motifs géométriques minutieux. Travail artisanal exclusif — une seule pièce. Chaîne ajustable de 42 à 48 cm.',
    shortDescription: 'Collier argent massif, médaillon gravé à la main, pièce unique.',
    price: 720,
    currency: 'MAD',
    material: 'Argent Massif',
  },
]

export default products
