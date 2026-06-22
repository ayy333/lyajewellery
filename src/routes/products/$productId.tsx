import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { LyaLogo } from '@/components/LyaLogo'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Produit introuvable')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-80 transition-opacity"
        style={{ color: '#A07850', fontFamily: 'Raleway, sans-serif', letterSpacing: '0.05em' }}
      >
        ← Retour à la collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div className="py-4">
          <div
            className="text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: '#C9A96E', fontFamily: 'Raleway, sans-serif' }}
          >
            Lya Jewellery · Pièce Unique Faite à la Main
          </div>

          {product.material && (
            <span
              className="badge-artisan inline-block text-white px-3 py-1 rounded-full mb-4 text-xs"
            >
              {product.material}
            </span>
          )}

          <h1
            className="text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#5C3D2E' }}
          >
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div
              className="text-3xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#5C3D2E' }}
            >
              {product.price.toLocaleString('fr-MA')}
              <span className="text-xl font-normal ml-1" style={{ color: '#A07850' }}>MAD</span>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(201,169,110,0.3)' }} />
            <LyaLogo size={20} />
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(201,169,110,0.3)' }} />
          </div>

          <p
            className="leading-relaxed mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#5C3D2E', fontSize: '1.1rem', lineHeight: '1.8' }}
          >
            {product.description}
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a
              href="https://wa.me/212663451532"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-sm font-semibold tracking-widest uppercase btn-gold"
              style={{ color: '#2C1810' }}
            >
              <span>💬</span> Commander sur WhatsApp
            </a>
            <a
              href="https://instagram.com/lya_jewellery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-sm font-semibold tracking-widest uppercase"
              style={{
                color: '#5C3D2E',
                border: '1.5px solid #C9A96E',
                fontFamily: 'Raleway, sans-serif',
              }}
            >
              <span>📸</span> Voir sur Instagram
            </a>
          </div>

          {/* Guarantees */}
          <div
            className="mt-8 p-5 rounded-2xl"
            style={{ backgroundColor: '#F5EDD6', border: '1px solid rgba(201,169,110,0.25)' }}
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { icon: '✦', text: 'Fait à la main' },
                { icon: '⬡', text: 'Matériaux premium' },
                { icon: '✿', text: 'Livraison Maroc' },
                { icon: '❋', text: 'Pièce unique' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span style={{ color: '#C9A96E' }}>{item.icon}</span>
                  <span
                    className="text-xs"
                    style={{ color: '#6B5040', fontFamily: 'Raleway, sans-serif' }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products preview */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <div
            className="text-xs tracking-[0.4em] uppercase mb-2"
            style={{ color: '#C9A96E', fontFamily: 'Raleway, sans-serif' }}
          >
            Vous aimerez aussi
          </div>
          <h3
            className="text-2xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif', color: '#5C3D2E' }}
          >
            Autres Créations
          </h3>
        </div>
        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase btn-gold"
            style={{ color: '#2C1810' }}
          >
            Voir Toute la Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
