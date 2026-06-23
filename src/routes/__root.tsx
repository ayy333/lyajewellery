import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { LyaLogo } from '@/components/LyaLogo'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Lya Jewellery — Colliers Faits à la Main' },
      { name: 'description', content: 'Colliers artisanaux faits à la main, chaque pièce est unique. Livraison partout au Maroc.' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-cream)' }}>
      {/* Header */}
      <header className="site-header sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center group">
            <img
              src="/mini_logo.png"
              alt="Lya Jewellery"
              className="h-14 w-auto rounded-full group-hover:scale-105 transition-transform duration-300"
              style={{ filter: 'drop-shadow(0 2px 6px rgba(201,169,110,0.3))' }}
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
              style={{ color: '#F5EDD6', fontFamily: 'Raleway, sans-serif', letterSpacing: '0.15em' }}
            >
              Collections
            </a>
            <a
              href="#about"
              className="text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
              style={{ color: '#F5EDD6', fontFamily: 'Raleway, sans-serif', letterSpacing: '0.15em' }}
            >
              À Propos
            </a>
            <a
              href="#contact"
              className="text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
              style={{ color: '#F5EDD6', fontFamily: 'Raleway, sans-serif', letterSpacing: '0.15em' }}
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu icon */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5" style={{ backgroundColor: '#C9A96E' }} />
            <span className="block w-5 h-0.5" style={{ backgroundColor: '#C9A96E' }} />
            <span className="block w-5 h-0.5" style={{ backgroundColor: '#C9A96E' }} />
          </button>
        </div>

        {/* Lace decoration */}
        <div className="lace-divider" />
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-light)' }}>
        <div className="lace-divider" style={{ transform: 'scaleY(-1)' }} />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" id="contact">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/mini_logo.png" alt="Lya Jewellery" className="h-10 w-10 rounded-full object-cover" />
                  className="text-xl font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#F5EDD6' }}
                >
                  Lya Jewellery
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#C9A96E', fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}
              >
                Chaque bijou est une création unique, façonnée à la main avec soin et passion.
              </p>
            </div>

            <div id="about">
              <h4
                className="text-sm font-semibold mb-4 tracking-widest uppercase"
                style={{ color: '#C9A96E' }}
              >
                À Propos
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#F5EDD6', fontFamily: 'Raleway, sans-serif', opacity: 0.8 }}
              >
                Lya Jewellery crée des colliers artisanaux uniques, façonnés à la main pièce par pièce. Je travaille seule, chaque création est irremplaçable.
              </p>
            </div>

            <div>
              <h4
                className="text-sm font-semibold mb-4 tracking-widest uppercase"
                style={{ color: '#C9A96E' }}
              >
                Nous Contacter
              </h4>
              <div className="space-y-2 text-sm" style={{ color: '#F5EDD6', opacity: 0.8 }}>
                <p>📍 Livraison partout au Maroc</p>
                <p>📱 Commandes via WhatsApp</p>
                <p>✉️ Instagram: @lya_jewellery</p>
              </div>
            </div>
          </div>

          <div
            className="border-t pt-6 text-center text-xs tracking-widest"
            style={{ borderColor: 'rgba(201,169,110,0.3)', color: '#C9A96E' }}
          >
            © 2026 Lya Jewellery · Fait à la Main · Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
