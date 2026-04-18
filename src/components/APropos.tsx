/* ─────────────────────────────────────────────────
   APropos.tsx — Présentation + certifications
   Fond sombre, image gauche, texte droit
   Badges de certifications en bas du texte
───────────────────────────────────────────────── */

import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const POINTS = [
  'Intervention garantie en 30 minutes',
  'Devis gratuit et sans engagement',
  'Normes NF C 15-100 respectées',
  'Assurance décennale incluse',
];

const CERTIFICATIONS = [
  'QUALIFELEC',
  'NF C 15-100',
  'CONSUEL',
  'Habilité BR/BC',
  'Garantie décennale',
];

/* Icône bouclier SVG */
function IconShield() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-300 shrink-0">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

export default function APropos() {
  const imgRef  = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useScrollReveal(imgRef,  'anim-fade-left');
  useScrollReveal(textRef, 'anim-fade-right', 120);

  return (
    <section id="apropos" className="py-14 sm:py-[90px] px-[5%]"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #312e81 100%)' }}>
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">

        {/* Grande image */}
        <div ref={imgRef} className="opacity-0 flex-[0_0_44%] w-full">
          <div className="overflow-hidden rounded-2xl aspect-[3/4] shadow-[0_24px_64px_rgba(0,0,0,.4)]">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=90&auto=format&fit=crop"
              alt="Technicien VoltPro au travail"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texte */}
        <div ref={textRef} className="opacity-0 flex-1">

          {/* Marque */}
          <p className="text-indigo-300 text-[11px] font-bold tracking-[.15em] uppercase mb-6">
            VoltPro — Depuis 2009
          </p>

          {/* Titre sobre, couleur unie */}
          <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-extrabold text-white leading-[1.15] mb-6">
            Des techniciens certifiés,<br />une qualité garantie.
          </h2>

          {/* Description */}
          <p className="text-indigo-200 text-[15px] leading-[1.8] mb-8">
            VoltPro est une entreprise familiale basée en Île-de-France. Fondée en 2009, nous avons
            bâti notre réputation sur la qualité de nos interventions, la transparence de nos tarifs
            et la réactivité de notre équipe. Tous nos techniciens sont habilités et certifiés QUALIFELEC.
          </p>

          {/* Engagements */}
          <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase mb-4">
            Nos engagements
          </p>
          <ul className="space-y-3 mb-10">
            {POINTS.map(p => (
              <li key={p} className="flex items-center gap-3 text-white text-[14.5px]">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          {/* Certifications */}
          <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase mb-4">
            Certifications
          </p>
          <div className="flex flex-wrap gap-2.5">
            {CERTIFICATIONS.map(cert => (
              <span key={cert} className="cert-badge cursor-default">
                <IconShield />
                {cert}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
