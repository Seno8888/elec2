/* ─────────────────────────────────────────────────
   Hero.tsx — Section d'accueil minimaliste
   - Photo de fond + overlay sombre
   - Pill de crédibilité au-dessus du titre
   - Titre + sous-titre + CTA unique
   - Trois signaux de confiance en bas
───────────────────────────────────────────────── */

const TRUST_ITEMS = [
  'Intervention sous 30 minutes',
  'Devis gratuit & sans engagement',
  'Certifié QUALIFELEC',
];

/* Icône check SVG */
function IconCheck() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col items-center justify-center px-[5%] relative overflow-hidden"
      style={{
        background:
          "url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80&auto=format&fit=crop') center/cover no-repeat",
      }}
    >
      {/* Overlay sombre dégradé */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(9,15,29,.82) 0%, rgba(9,15,29,.75) 60%, rgba(9,15,29,.88) 100%)' }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-[740px] mx-auto pt-28 pb-20">

        {/* Titre principal */}
        <h1 className="hero-d0 text-[clamp(2.6rem,5.5vw,4.5rem)] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
          Électricien certifié<br />en Île-de-France
        </h1>

        {/* Sous-titre — une seule phrase */}
        <p className="hero-d1 text-white/65 text-[clamp(.95rem,1.5vw,1.1rem)] leading-relaxed mb-10 max-w-[520px] mx-auto">
          Installation, rénovation et dépannage d'urgence. Intervention sous 30 minutes, 7j/7.
        </p>

        {/* CTA unique */}
        <div className="hero-d2">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-indigo-600 text-white
              px-10 py-4 rounded-xl font-bold text-[15px] cursor-pointer
              hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300
              shadow-[0_8px_32px_rgba(79,70,229,.4)]"
          >
            Demander un devis gratuit
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Trois signaux de confiance */}
        <div className="hero-d3 flex items-center justify-center flex-wrap gap-5 mt-12">
          {TRUST_ITEMS.map(item => (
            <span key={item} className="flex items-center gap-2 text-white/65 text-[13px]">
              <IconCheck />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Vague de transition vers blanc */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        fill="white"
      >
        <path d="M0,72 C480,8 960,56 1440,20 L1440,72 Z" />
      </svg>
    </section>
  );
}
