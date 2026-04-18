/* ─────────────────────────────────────────────────
   Process.tsx — Comment ça marche
   3 étapes numérotées avec connexion visuelle
───────────────────────────────────────────────── */

import { useRef } from 'react';
import { PROCESS_STEPS } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Process() {
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef, 'anim-fade-up');

  return (
    <section className="py-14 sm:py-[90px] px-[5%] bg-white">
      <div className="max-w-[1100px] mx-auto">

        {/* En-tête */}
        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <span className="inline-block text-[11px] font-bold tracking-[.12em] uppercase
            text-indigo-600 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full mb-4">
            Processus
          </span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-slate-900 leading-tight">
            Comment ça marche
          </h2>
          <p className="text-slate-500 text-base max-w-[440px] mx-auto mt-4">
            Trois étapes simples pour une intervention rapide et de qualité.
          </p>
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Ligne de connexion — visible uniquement sur desktop */}
          <div className="absolute top-11 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)]
            h-px bg-slate-200 hidden md:block pointer-events-none" />

          {PROCESS_STEPS.map((step, i) => {
            const ref = useRef<HTMLDivElement>(null);
            useScrollReveal(ref, 'anim-fade-up', i * 100);

            return (
              <div ref={ref} key={step.num} className="proc-card opacity-0 relative">

                {/* Numéro */}
                <div className="w-11 h-11 rounded-full bg-indigo-600 flex items-center justify-center
                  text-white font-extrabold text-[14px] mb-6 relative z-10
                  shadow-[0_4px_16px_rgba(79,70,229,.35)]">
                  {step.num}
                </div>

                <h3 className="font-extrabold text-[17px] text-slate-900 mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-slate-500 text-[14px] leading-[1.75]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
