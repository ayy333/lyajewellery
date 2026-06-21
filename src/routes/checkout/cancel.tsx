import { Link, createFileRoute } from '@tanstack/react-router'
import { LyaLogo } from '@/components/LyaLogo'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-5">
      <div
        className="rounded-2xl p-12 text-center max-w-lg"
        style={{ backgroundColor: '#FEFAF3', border: '1px solid rgba(201,169,110,0.3)' }}
      >
        <div className="text-5xl mb-6" style={{ color: '#A07850' }}>✕</div>
        <LyaLogo size={50} className="mx-auto mb-4" />
        <h1
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: 'Playfair Display, serif', color: '#5C3D2E' }}
        >
          Commande Annulée
        </h1>
        <p
          className="mb-8 leading-relaxed"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: '#6B5040', fontSize: '1.1rem' }}
        >
          Votre commande a été annulée. Aucun paiement n'a été effectué. N'hésitez pas à parcourir notre collection.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase btn-gold"
          style={{ color: '#2C1810' }}
        >
          Retour à la boutique
        </Link>
      </div>
    </div>
  )
}
