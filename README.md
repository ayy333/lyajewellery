# Lya Jewellery — Boutique de Bijoux Artisanaux Marocains

Site e-commerce pour **Lya Jewellery**, une boutique spécialisée dans les colliers artisanaux inspirés du patrimoine culturel marocain.

## Technologies

- **Framework**: [TanStack Start](https://tanstack.com/start) (React + Vite)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + typographies Google Fonts (Playfair Display, Cormorant Garamond, Raleway)
- **Déploiement**: [Netlify](https://netlify.com)
- **Routing**: TanStack Router (type-safe)

## Fonctionnalités

- Page d'accueil avec hero section et catalogue de 6 colliers artisanaux
- Pages produit individuelles avec description détaillée
- Logo parasol en dentelle SVG (beige foncé) — identité visuelle Lya Jewellery
- Commande via WhatsApp et Instagram (pas de paiement en ligne intégré)
- Design élégant aux couleurs beige, or et brun marocain
- Responsive mobile/desktop

## Lancer en local

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Personnalisation

- **Produits**: modifier `src/data/products.ts`
- **Couleurs**: variables CSS dans `src/styles.css`
- **Logo**: composant SVG dans `src/components/LyaLogo.tsx`
- **Contact WhatsApp**: remplacer `212600000000` par le vrai numéro dans `src/routes/index.tsx` et `src/routes/products/$productId.tsx`
