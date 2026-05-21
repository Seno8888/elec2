'use client'
/* ─────────────────────────────────────────────────
   Navbar.tsx — Pill flottant, fond blanc
   - Scroll shadow
   - Lien actif par section visible (IntersectionObserver)
   - Burger menu mobile (icônes SVG — zéro emoji)
───────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { href: '#accueil',  label: 'Accueil'  },
  { href: '#services', label: 'Services' },
  { href: '#apropos',  label: 'À propos' },
  { href: '#avis',     label: 'Avis'     },
  { href: '#contact',  label: 'Contact'  },
];

/* Icône hamburger SVG */
function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

/* Icône fermer SVG */
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled,       setScrolled]    = useState(false);
  const [menuOpen,       setMenuOpen]    = useState(false);
  const [activeSection,  setActive]      = useState('accueil');
  const obsRef = useRef<IntersectionObserver | null>(null);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Section active via IntersectionObserver */
  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.href.slice(1));
    obsRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obsRef.current?.observe(el);
    });
    return () => obsRef.current?.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-[1100px] transition-all duration-300">

      {/* Pill principal */}
      <div
        className={`bg-white/92 backdrop-blur-md rounded-2xl border border-slate-200/80
          px-4 h-16 flex items-center justify-between transition-shadow duration-300
          ${scrolled ? 'shadow-[0_4px_28px_rgba(0,0,0,.16)]' : 'shadow-[0_2px_18px_rgba(0,0,0,.10)]'}`}
      >
        {/* Logo */}
        <a href="#accueil" className="font-extrabold text-[18px] text-slate-900 tracking-tight">
          Volt<span className="text-indigo-600">Pro</span>
        </a>

        {/* Liens desktop */}
        <ul className="hidden md:flex gap-8 list-none items-center m-0 p-0">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link font-medium text-[14px] transition-colors duration-200
                  ${activeSection === href.slice(1)
                    ? 'active text-indigo-600'
                    : 'text-slate-600 hover:text-slate-900'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA téléphone */}
        <a
          href="tel:+33600000000"
          className="hidden md:flex items-center gap-2 bg-indigo-600 text-white
            px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer
            hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          06 00 00 00 00
        </a>

        {/* Burger mobile */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden text-slate-700 bg-transparent border-none cursor-pointer p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="mt-2 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.12)]
          border border-slate-200 px-5 pb-5 pt-3 anim-fade-up">
          {NAV_ITEMS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="flex items-center py-3 font-medium text-slate-700
                border-b border-slate-100 hover:text-indigo-600 transition-colors last:border-b-0"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+33600000000"
            onClick={closeMenu}
            className="mt-4 bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-sm
              text-center block hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            06 00 00 00 00
          </a>
        </div>
      )}
    </nav>
  );
}
