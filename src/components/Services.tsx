/* ─────────────────────────────────────────────────
   Services.tsx — Cartes 2x2, image à gauche + checklist droite
───────────────────────────────────────────────── */

import { useRef } from 'react';
import { SERVICES } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ServiceCard({ service, delay }: { service: typeof SERVICES[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, 'anim-fade-up', delay);

  return (
    <div ref={ref} className="opacity-0 bg-white border border-slate-200 rounded-2xl flex flex-col
      transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(79,70,229,.12)]
      hover:border-indigo-300 overflow-hidden">

      {/* Haut — texte */}
      <div className="p-7 flex-1">
        <span className="text-[11px] font-bold tracking-[.1em] uppercase text-indigo-600 mb-3 block">
          {service.label}
        </span>
        <h3 className="font-extrabold text-[20px] text-slate-900 leading-snug mb-3">
          {service.title}
        </h3>
        <p className="text-slate-500 text-[14px] leading-[1.75]">
          {service.desc}
        </p>
      </div>

      {/* Bas — image + checklist */}
      <div className="border-t border-slate-100 bg-slate-50 flex" style={{ minHeight: 140 }}>

        {/* Image */}
        <div className="flex-1 border-r border-slate-100 overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Checklist */}
        <div className="flex-1 p-5 flex flex-col justify-center gap-2">
          {service.items.map(item => (
            <div key={item} className="flex items-center gap-2.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <rect width="14" height="14" rx="4" fill="#eef2ff" />
                <path d="M3.5 7l2.5 2.5 4.5-5" stroke="#4f46e5" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[13px] text-slate-600 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef, 'anim-fade-up');

  return (
    <section id="services" className="py-14 sm:py-[90px] px-[5%] bg-white">
      <div className="max-w-[1100px] mx-auto">

        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-slate-900 leading-tight">
            Ce que nous faisons
          </h2>
          <p className="text-slate-500 text-base max-w-[480px] mx-auto mt-4">
            Des prestations claires, réalisées dans les règles de l'art, pour particuliers et professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
