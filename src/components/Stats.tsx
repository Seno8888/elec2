/* ─────────────────────────────────────────────────
   Stats.tsx — Bande de chiffres clés
   4 métriques sur fond blanc, avec séparateurs
───────────────────────────────────────────────── */

import { useRef } from 'react';
import { STATS } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, 'anim-fade-up');

  return (
    <div className="bg-white border-b border-slate-100 px-[5%] py-12">
      <div ref={ref} className="opacity-0 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-slate-100">
          {STATS.map(s => (
            <div key={s.label} className="text-center px-8 first:pl-0 last:pr-0 py-4">
              <div className="text-[clamp(2rem,3vw,2.6rem)] font-extrabold text-indigo-600 leading-none mb-2"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: '-0.02em' }}>
                {s.value}
              </div>
              <div className="text-slate-500 text-[13px] font-medium tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
