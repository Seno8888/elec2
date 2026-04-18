/* ─────────────────────────────────────────────────
   Avis.tsx — Double marquee d'avis clients
   Deux rangées : gauche et droite
   Pause au survol · Étoiles en SVG (zéro emoji)
───────────────────────────────────────────────── */

import { useRef } from 'react';
import { AVIS, type Avis } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* Étoile SVG — filled ou vide */
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#FBBF24' : 'none'}
      stroke={filled ? '#FBBF24' : '#CBD5E1'} strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

/* Carte d'un avis unique */
function AvisCard({ avis }: { avis: Avis }) {
  return (
    <div
      className="bg-white border border-slate-100 rounded-2xl p-6 flex-shrink-0
        shadow-[0_2px_12px_rgba(0,0,0,.05)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,.09)]"
      style={{ width: 308 }}
    >
      {/* Étoiles SVG */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} filled={i + 1 <= avis.stars} />
        ))}
      </div>

      {/* Texte de l'avis */}
      <p className="text-slate-600 text-sm leading-[1.7] mb-4">"{avis.text}"</p>

      {/* Auteur */}
      <div className="flex items-center gap-3">
        <img
          src={avis.img}
          alt={avis.name}
          className="w-9 h-9 rounded-full object-cover shrink-0"
          loading="lazy"
        />
        <div>
          <div className="font-semibold text-sm text-slate-900">{avis.name}</div>
          <div className="text-slate-400 text-xs">{avis.loc} · {avis.date}</div>
        </div>
      </div>
    </div>
  );
}

/* Rangée défilante */
function MarqueeRow({ items, direction }: { items: Avis[]; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`marquee-track ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}>
        {doubled.map((a, i) => (
          <AvisCard key={`${a.name}-${i}`} avis={a} />
        ))}
      </div>
    </div>
  );
}

export default function Avis() {
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef, 'anim-fade-up');

  const row1 = AVIS.slice(0, 4);
  const row2 = AVIS.slice(4);

  return (
    <section id="avis" className="py-14 sm:py-[90px] bg-white overflow-hidden">

      <div className="max-w-[1100px] mx-auto px-[5%]">
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <span className="inline-block text-[11px] font-bold tracking-[.12em] uppercase
            text-indigo-600 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-slate-900">
            Ce que disent nos clients
          </h2>

          {/* Note globale */}
          <div className="flex items-center justify-center gap-2.5 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} filled />)}
            </div>
            <span className="font-bold text-slate-900">4.9/5</span>
            <span className="text-slate-500 text-sm">· 200+ avis Google vérifiés</span>
          </div>
        </div>
      </div>

      {/* Masque dégradé latéral */}
      <div className="avis-fade flex flex-col gap-5">
        <MarqueeRow items={row1} direction="left"  />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
}
