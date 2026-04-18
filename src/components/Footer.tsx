/* ─────────────────────────────────────────────────
   Footer.tsx — Fond blanc, liens de navigation
───────────────────────────────────────────────── */

const SERVICES_LINKS = [
  'Dépannage urgence',
  'Installation',
  'Rénovation',
  'Tableau électrique',
  'Domotique',
  'Borne IRVE',
];

const NAV_LINKS = [
  { href: '#accueil',  label: 'Accueil'   },
  { href: '#services', label: 'Services'  },
  { href: '#apropos',  label: 'À propos'  },
  { href: '#avis',     label: 'Avis'      },
  { href: '#contact',  label: 'Contact'   },
];

const ZONES = [
  'Paris intramuros', 'Seine-Saint-Denis', 'Hauts-de-Seine',
  'Val-de-Marne', 'Val-d\'Oise', 'Essonne',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 px-[5%] pt-[52px] pb-[28px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex gap-10 flex-wrap mb-10">

          {/* Identité + zones */}
          <div className="flex-[2_1_240px]">
            <a href="#accueil"
              className="font-extrabold text-[18px] text-slate-900 tracking-tight mb-4 block">
              Volt<span className="text-indigo-600">Pro</span>
            </a>
            <p className="text-sm leading-[1.7] max-w-[260px] mb-5">
              Électricien certifié depuis 2009. Qualité, réactivité et transparence pour tous vos travaux.
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2.5">
              Zones d'intervention
            </p>
            <div className="flex flex-wrap gap-1.5">
              {ZONES.map(z => (
                <span key={z} className="text-[11.5px] bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md">
                  {z}
                </span>
              ))}
            </div>
          </div>

          {/* Prestations */}
          <div className="flex-[1_1_140px]">
            <h4 className="text-slate-900 font-semibold text-[14px] mb-4">Prestations</h4>
            {SERVICES_LINKS.map(s => (
              <a key={s} href="#services"
                className="block mb-2.5 text-sm hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
                {s}
              </a>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex-[1_1_140px]">
            <h4 className="text-slate-900 font-semibold text-[14px] mb-4">Navigation</h4>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}
                className="block mb-2.5 text-sm hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
                {l.label}
              </a>
            ))}
          </div>

          {/* Urgence */}
          <div className="flex-[1_1_180px]">
            <h4 className="text-slate-900 font-semibold text-[14px] mb-4">Urgence ?</h4>
            <a
              href="tel:+33600000000"
              className="flex items-center justify-center gap-2 bg-indigo-600 text-white
                px-5 py-3.5 rounded-xl font-bold text-[14px] mb-3 cursor-pointer
                hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              06 00 00 00 00
            </a>
            <p className="text-[12px] text-center">Disponible 24h/24 · 7j/7</p>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-slate-200 pt-5 flex justify-between flex-wrap gap-3 text-[12px]">
          <span>© {year} VoltPro. Tous droits réservés.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-900 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Confidentialité</a>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-5">
          Fait par <strong className="text-slate-500">SenoDev</strong>
        </p>
      </div>
    </footer>
  );
}
