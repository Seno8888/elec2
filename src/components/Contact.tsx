/* ─────────────────────────────────────────────────
   Contact.tsx — Panneau sombre gauche + formulaire
   Fond sombre dégradé, formulaire blanc à droite
───────────────────────────────────────────────── */

import { useRef, useState, type FormEvent } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICES_OPTIONS = [
  "Dépannage d'urgence",
  'Installation électrique',
  'Rénovation électrique',
  'Tableau électrique / mise aux normes',
  'Domotique & Smart Home',
  'Borne de recharge IRVE',
  'Autre',
];

/* Icône check succès */
function IconCheckCircle() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-5">
      <circle cx="24" cy="24" r="24" fill="#f0fdf4" />
      <polyline points="14 24 21 31 34 17" stroke="#16a34a" strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  useScrollReveal(leftRef,  'anim-fade-left');
  useScrollReveal(rightRef, 'anim-fade-right', 120);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-[90px] px-[5%]"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #312e81 100%)' }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex gap-[56px] flex-wrap">

          {/* ── Panneau infos ── */}
          <div ref={leftRef}
            className="flex-[1_1_280px] text-white rounded-[24px] p-10
              flex flex-col justify-between opacity-0
              bg-white/8 border border-white/12">

            <div>
              <span className="inline-block text-[11px] font-bold tracking-[.12em] uppercase
                text-indigo-300 bg-indigo-900/50 border border-indigo-700/50 px-4 py-1.5 rounded-full mb-6">
                Contact
              </span>
              <h2 className="text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold
                text-white leading-tight mb-5">
                Parlons de<br />votre projet
              </h2>
              <p className="text-indigo-200/80 text-[15px] leading-[1.75] mb-10">
                Appelez directement ou envoyez un message. Réponse sous 30 min en heures
                ouvrées, intervention le jour même pour les urgences.
              </p>

              {/* Coordonnées */}
              <div className="space-y-6">
                <div>
                  <div className="text-[11px] text-white/40 font-semibold mb-1 uppercase tracking-wider">
                    Téléphone
                  </div>
                  <a href="tel:+33600000000"
                    className="font-semibold text-indigo-300 text-[15px] hover:text-indigo-200 transition-colors">
                    06 00 00 00 00
                  </a>
                </div>
                <div>
                  <div className="text-[11px] text-white/40 font-semibold mb-1 uppercase tracking-wider">
                    Email
                  </div>
                  <a href="mailto:contact@voltpro.fr"
                    className="font-semibold text-indigo-300 text-[15px] hover:text-indigo-200 transition-colors">
                    contact@voltpro.fr
                  </a>
                </div>
                <div>
                  <div className="text-[11px] text-white/40 font-semibold mb-1 uppercase tracking-wider">
                    Zone d'intervention
                  </div>
                  <div className="font-semibold text-white text-[15px]">Paris & Île-de-France</div>
                </div>
                <div>
                  <div className="text-[11px] text-white/40 font-semibold mb-1 uppercase tracking-wider">
                    Disponibilité
                  </div>
                  <div className="font-semibold text-white text-[15px]">7j/7 · Urgences 24h/24</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Formulaire ── */}
          <div ref={rightRef} className="flex-[1_1_360px] opacity-0">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-[22px] p-8 border border-slate-100
                  shadow-[0_8px_40px_rgba(0,0,0,.12)]"
              >
                <h3 className="font-bold text-[20px] text-slate-900 mb-1">
                  Demande de devis gratuit
                </h3>
                <p className="text-slate-500 text-sm mb-7">Réponse garantie sous 30 minutes</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="nom" className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                      Nom *
                    </label>
                    <input id="nom" required name="nom" type="text" placeholder="Jean Dupont"
                      className="form-input" autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                      Téléphone *
                    </label>
                    <input id="telephone" required name="telephone" type="tel" placeholder="06 00 00 00 00"
                      className="form-input" autoComplete="tel" />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input id="email" name="email" type="email" placeholder="jean@exemple.fr"
                    className="form-input" autoComplete="email" />
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                    Prestation souhaitée
                  </label>
                  <select id="service" name="service" className="form-input cursor-pointer">
                    <option value="">Choisissez une prestation…</option>
                    {SERVICES_OPTIONS.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea id="message" required name="message" rows={4}
                    placeholder="Décrivez votre besoin ou problème…"
                    className="form-input resize-y min-h-[100px]" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-[15px]
                    hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer
                    shadow-[0_4px_16px_rgba(79,70,229,.35)] border-none"
                >
                  Envoyer ma demande
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-[22px] p-10 text-center anim-pop-in
                shadow-[0_8px_40px_rgba(0,0,0,.12)]">
                <IconCheckCircle />
                <h3 className="font-extrabold text-[22px] text-slate-900 mb-3">Message envoyé !</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  Nous vous recontactons dans les 30 minutes. Merci de votre confiance.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold
                    text-[14px] cursor-pointer hover:bg-indigo-700 transition-colors border-none"
                >
                  Nouvelle demande
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
