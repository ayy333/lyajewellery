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
    name: 'Orage Sun',
    image: '/orange.jpeg',
    description:
      'Un collier Spéciale qui confère un caractère unique à toute tenue. Pièce irremplaçable — une seule disponible. Parfait pour sublimer une tenue du quotidien ou lors d\'une occasion spéciale.',
    shortDescription: 'Collier artisanal, finition ciselée à la main.',
    price: 300,
    currency: 'MAD',
    
  },
]

export default products
