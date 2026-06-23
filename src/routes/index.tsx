import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'
import { LyaLogo } from '@/components/LyaLogo'

export const Route = createFileRoute('/')({
  component: ProductsIndex,
})

function ProductsIndex() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative moroccan-pattern py-24 px-4 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3D2317 0%, #5C3D2E 50%, #3D2317 100%)' }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C9A96E, transparent)', transform: 'translate(-30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C9A96E, transparent)', transform: 'translate(30%, 30%)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src="/mini_logo.png"
              alt="Lya Jewellery"
              className="h-32 w-32 rounded-full object-cover shadow-2xl"
              style={{ border: '2px solid rgba(201,169,110,0.5)' }}
            />
          </div>
          <div
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: '#C9A96E', fontFamily: 'Raleway, sans-serif' }}
          >
            Colliers Faits à la Main
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#F5EDD6' }}
          >
            L'Art du Bijou
            <br />
            <em className="font-normal" style={{ color: '#C9A96E' }}>Artisanal</em>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#E8D9B8', fontSize: '1.2rem' }}
          >
            Chaque collier Lya Jewellery est une pièce unique, façonnée à la main avec soin. Je travaille seule — chaque création est irremplaçable.
          </p>
          <a
            href="#collection"
            className="inline-block px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase btn-gold"
            style={{ color: '#2C1810', fontFamily: 'Raleway, sans-serif' }}
          >
            Découvrir la Collection
          </a>
        </div>
      </section>

      <div className="lace-divider" />

      {/* Trust badges */}
      <section style={{ backgroundColor: '#F5EDD6' }}>
        <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: '✦', label: 'Fait à la Main', sub: '100% artisanal' },
            { icon: '✿', label: 'Livraison Maroc', sub: 'Partout au Maroc' },
            { icon: '❋', label: 'Pièces Uniques', sub: 'Quantité limitée' },
          ].map((item) => (
            <div key={item.label} className="py-4">
              <div
                className="text-2xl mb-2"
                style={{ color: '#C9A96E' }}
              >
                {item.icon}
              </div>
              <div
                className="font-semibold text-sm tracking-wide"
                style={{ fontFamily: 'Playfair Display, serif', color: '#5C3D2E' }}
              >
                {item.label}
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: '#A07850', fontFamily: 'Raleway, sans-serif' }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="lace-divider" />

      {/* Products Grid */}
      <section id="collection" className="py-20 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: '#C9A96E', fontFamily: 'Raleway, sans-serif' }}
            >
              Nos Créations
            </div>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#5C3D2E' }}
            >
              Nos Colliers
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16" style={{ backgroundColor: '#C9A96E' }} />
              <LyaLogo size={24} />
              <div className="h-px w-16" style={{ backgroundColor: '#C9A96E' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to="/products/$productId"
                params={{ productId: product.id.toString() }}
                className="block group product-card rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#FEFAF3', border: '1px solid rgba(201,169,110,0.2)' }}
              >
                {/* Image */}
                <div className="img-overlay aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  {product.material && (
                    <span
                      className="badge-artisan inline-block text-white px-3 py-1 rounded-full mb-3"
                    >
                      {product.material}
                    </span>
                  )}
                  <h3
                    className="text-xl font-bold mb-2 group-hover:opacity-80 transition-opacity"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#5C3D2E' }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4 line-clamp-2"
                    style={{ color: '#6B5040', fontFamily: 'Raleway, sans-serif' }}
                  >
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <div
                      className="text-2xl font-bold"
                      style={{ fontFamily: 'Playfair Display, serif', color: '#5C3D2E' }}
                    >
                      {product.price.toLocaleString('fr-MA')} <span className="text-lg font-normal" style={{ color: '#A07850' }}>MAD</span>
                    </div>
                    <span
                      className="text-xs uppercase tracking-widest px-4 py-2 rounded-full"
                      style={{
                        fontFamily: 'Raleway, sans-serif',
                        color: '#5C3D2E',
                        border: '1px solid #C9A96E',
                      }}
                    >
                      Voir →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section
        className="py-20 px-4 text-center moroccan-pattern"
        style={{ background: 'linear-gradient(135deg, #5C3D2E, #3D2317)' }}
      >
        <div className="max-w-2xl mx-auto">
          <LyaLogo size={60} className="mx-auto mb-6" />
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#F5EDD6' }}
          >
            Commandez Votre Bijou
          </h2>
          <p
            className="mb-8 leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C9A96E', fontSize: '1.15rem' }}
          >
            Contactez-moi sur WhatsApp ou Instagram pour passer votre commande ou demander une création personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212663451532"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase btn-gold"
              style={{ color: '#2C1810' }}
            >
              <span>💬</span> WhatsApp
            </a>
            <a
              href="https://instagram.com/lya_jewellery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase"
              style={{
                color: '#F5EDD6',
                border: '1px solid #C9A96E',
                fontFamily: 'Raleway, sans-serif',
              }}
            >
              <span>📸</span> Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
