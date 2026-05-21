'use client'
/* ─────────────────────────────────────────────────
   Engagements.tsx — 4 blocs rassurants
   Fond slate-50, hover léger sur chaque item
───────────────────────────────────────────────── */

import { useRef } from 'react';
import { ENGAGEMENTS, type Engagement } from '../data';
import SectionTag from './SectionTag';
import { useScrollReveal } from '../hooks/useScrollReveal';

function EngItem({ eng, delay }: { eng: Engagement; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, 'anim-fade-up', delay);

  return (
    <div ref={ref} className="eng-item opacity-0">
      <div>
        <h3 className="font-bold text-[15px] text-slate-900 mb-1.5">{eng.title}</h3>
        <p className="text-slate-500 text-[14px] leading-[1.65]">{eng.desc}</p>
      </div>
    </div>
  );
}

export default function Engagements() {
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef, 'anim-fade-up');

  return (
    <section id="engagements" className="py-14 sm:py-[90px] px-[5%] bg-slate-50">
      <div className="max-w-[1100px] mx-auto">

        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <SectionTag>Nos engagements</SectionTag>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-slate-900 leading-tight">
            Pourquoi nous choisir
          </h2>
          <p className="text-slate-500 text-base max-w-[460px] mx-auto mt-4">
            Chaque intervention est réalisée selon des standards stricts de qualité et de sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ENGAGEMENTS.map((e, i) => (
            <EngItem key={e.title} eng={e} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
