/* ─────────────────────────────────────────────────
   useScrollReveal.ts — Hook personnalisé
   Ajoute une classe CSS quand l'élément entre
   dans le viewport (IntersectionObserver).
   L'élément doit démarrer avec opacity-0.
───────────────────────────────────────────────── */

import { useEffect, type RefObject } from 'react';

export function useScrollReveal(
  ref: RefObject<Element | null>,
  animClass: string,
  delayMs = 0,
  threshold = 0.12,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setTimeout(() => {
          el.classList.remove('opacity-0');
          el.classList.add(animClass);
        }, delayMs);

        observer.unobserve(el);
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, animClass, delayMs, threshold]);
}
