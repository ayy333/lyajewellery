export function LyaLogo({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lya Jewellery logo - parasol en dentelle"
    >
      {/* Handle du parasol */}
      <line x1="50" y1="72" x2="55" y2="95" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="55" y1="95" x2="62" y2="90" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" />

      {/* Dôme principal du parasol */}
      <path
        d="M10 52 Q10 20 50 18 Q90 20 90 52 Z"
        fill="#5C3D2E"
        stroke="#C9A96E"
        strokeWidth="1"
      />

      {/* Côtes du parasol */}
      <line x1="50" y1="18" x2="50" y2="52" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.6" />
      <line x1="50" y1="18" x2="20" y2="50" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.6" />
      <line x1="50" y1="18" x2="80" y2="50" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.6" />
      <line x1="50" y1="18" x2="35" y2="51" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="50" y1="18" x2="65" y2="51" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* Bord dentelé - scallops */}
      <path
        d="M10 52
           Q13 57 16 52 Q19 57 22 52 Q25 57 28 52 Q31 57 34 52
           Q37 57 40 52 Q43 57 46 52 Q49 57 52 52 Q55 57 58 52
           Q61 57 64 52 Q67 57 70 52 Q73 57 76 52 Q79 57 82 52
           Q85 57 88 52 Q89 57 90 52"
        fill="#5C3D2E"
        stroke="#C9A96E"
        strokeWidth="1.2"
      />

      {/* Dentelle - motifs sur le bord */}
      <g fill="none" stroke="#C9A96E" strokeWidth="0.7" strokeOpacity="0.7">
        <circle cx="16" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="22" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="28" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="34" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="40" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="46" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="52" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="58" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="64" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="70" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="76" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
        <circle cx="82" cy="54" r="1.5" fill="#C9A96E" fillOpacity="0.5" />
      </g>

      {/* Motifs dentelle intérieure */}
      <g fill="#C9A96E" fillOpacity="0.25">
        <path d="M30 45 Q35 38 40 45 Q35 48 30 45 Z" />
        <path d="M45 38 Q50 31 55 38 Q50 41 45 38 Z" />
        <path d="M60 45 Q65 38 70 45 Q65 48 60 45 Z" />
        <path d="M22 48 Q27 43 32 48 Q27 50 22 48 Z" />
        <path d="M68 48 Q73 43 78 48 Q73 50 68 48 Z" />
      </g>

      {/* Pointe du parasol */}
      <circle cx="50" cy="18" r="3" fill="#C9A96E" />
      <circle cx="50" cy="18" r="1.5" fill="#FEFAF3" />

      {/* Poignée stylisée */}
      <circle cx="50" cy="72" r="3" fill="none" stroke="#C9A96E" strokeWidth="1.5" />
    </svg>
  )
}
