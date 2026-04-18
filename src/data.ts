/* ─────────────────────────────────────────────────
   data.ts — Toutes les données du site VoltPro
   Typées avec TypeScript pour une gestion propre
───────────────────────────────────────────────── */

export interface Service {
  label: string;
  title: string;
  desc: string;
  tags: string[];
  img: string;
  items: string[];
  anim: 'ring' | 'bars' | 'pulse' | 'wave';
}

export interface Engagement {
  title: string;
  desc: string;
  icon: 'clock' | 'invoice' | 'check' | 'diploma';
}

export interface Avis {
  name: string;
  loc: string;
  date: string;
  stars: 1 | 2 | 3 | 4 | 5;
  initials: string;
  img: string;
  text: string;
}

export const SERVICES: Service[] = [
  {
    label: 'Installation',
    title: 'Installation électrique',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    tags: ['NF C 15-100', 'Garantie décennale'],
    anim: 'ring',
    items: ['Tableau électrique', 'Prises & interrupteurs', 'Circuits dédiés', 'Éclairage LED', 'Rapport de conformité'],
    desc:
      'Mise en place complète de circuits, prises, interrupteurs et tableaux. Travaux conformes à la norme NF C 15-100, avec rapport de conformité et garantie décennale.',
  },
  {
    label: 'Rénovation',
    title: 'Rénovation & mise aux normes',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80&auto=format&fit=crop',
    tags: ['Mise aux normes', 'CONSUEL'],
    anim: 'bars',
    items: ['Diagnostic initial', 'Remplacement tableau', 'Mise aux normes', 'Attestation CONSUEL', 'Rapport final'],
    desc:
      'Modernisation des installations vieillissantes, remplacement de tableaux obsolètes et mise en conformité avant vente ou assurance. Attestation CONSUEL fournie.',
  },
  {
    label: 'Dépannage',
    title: 'Dépannage d\'urgence',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80&auto=format&fit=crop',
    tags: ['30 min', '24h/24 · 7j/7'],
    anim: 'pulse',
    items: ['Panne de courant', 'Disjoncteur déclenché', 'Court-circuit', 'Câble endommagé', 'Urgence 24h/24'],
    desc:
      "Panne de courant, disjoncteur qui saute, court-circuit — nous intervenons sous 30 minutes dans toute l'Île-de-France, 24h/24, 7j/7 et jours fériés.",
  },
  {
    label: 'Domotique',
    title: 'Domotique & Smart Home',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80&auto=format&fit=crop',
    tags: ['Zigbee / Z-Wave', 'Google & Alexa'],
    anim: 'wave',
    items: ['Éclairage connecté', 'Volets automatisés', 'Thermostat intelligent', 'Alarme & sécurité', 'Pilotage à distance'],
    desc:
      "Transformez votre logement en maison intelligente. Installation et configuration de systèmes domotiques compatibles avec tous les assistants vocaux.",
  },
];

export const ENGAGEMENTS: Engagement[] = [
  {
    icon: 'clock',
    title: 'Intervention en 30 minutes',
    desc: "Engagement contractuel : nous sommes sur place en 30 minutes pour toute urgence, à toute heure, toute l'année.",
  },
  {
    icon: 'invoice',
    title: 'Devis gratuit et transparent',
    desc: "Vous recevez un devis détaillé avant le moindre travail. Le prix annoncé est le prix final — sans frais cachés ni suppléments.",
  },
  {
    icon: 'check',
    title: 'Respect strict des normes',
    desc: "Toutes les interventions respectent la norme NF C 15-100. Habilitation électrique BR/BC et certification QUALIFELEC.",
  },
  {
    icon: 'diploma',
    title: 'Techniciens qualifiés',
    desc: "Équipe expérimentée (15 ans+), QUALIFELEC, formation continue, assurance décennale. Votre sécurité est notre priorité.",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export const STATS: Stat[] = [
  { value: '200+', label: 'Clients satisfaits' },
  { value: '15 ans', label: "D'expérience" },
  { value: '30 min', label: 'Intervention garantie' },
  { value: '4.9/5', label: 'Note Google' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Contactez-nous',
    desc: 'Appelez directement ou envoyez un message via le formulaire. Disponibles 7j/7, urgences 24h/24.',
  },
  {
    num: '02',
    title: 'Devis gratuit',
    desc: 'Un technicien évalue votre besoin et vous remet un devis clair et détaillé, sans surprise, sans engagement.',
  },
  {
    num: '03',
    title: 'Intervention certifiée',
    desc: "Nos techniciens QUALIFELEC interviennent dans les règles de l'art. Rapport de conformité remis à l'issue.",
  },
];

export const AVIS: Avis[] = [
  { name: 'Sophie M.',   loc: 'Paris 15e',  date: 'Mars 2025',     stars: 5, initials: 'SM', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop&crop=face', text: "Panne totale un vendredi soir. Technicien présent en 25 min, tableau remis en état en une heure. Professionnel, propre et efficace." },
  { name: 'Marc T.',     loc: 'Paris 8e',   date: 'Février 2025',  stars: 5, initials: 'MT', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop&crop=face', text: "Rénovation complète de mon appartement. Résultat impeccable, délai respecté, prix conforme au devis. Je recommande vivement." },
  { name: 'Isabelle R.', loc: 'Boulogne',   date: 'Janvier 2025',  stars: 5, initials: 'IR', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop&crop=face', text: "Disjoncteur en panne un dimanche soir. Technicien présent à 21h, problème résolu sur place. Merci pour la réactivité." },
  { name: 'Pierre D.',   loc: 'Paris 11e',  date: 'Décembre 2024', stars: 4, initials: 'PD', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&auto=format&fit=crop&crop=face', text: "Mise aux normes du tableau électrique. Travail soigné, explications claires, devis respecté à la lettre. Très satisfait." },
  { name: 'Lucie V.',    loc: 'Paris 7e',   date: 'Avril 2025',    stars: 5, initials: 'LV', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80&auto=format&fit=crop&crop=face', text: "Court-circuit cuisine géré en urgence. Équipe réactive, travail propre, aucun dommage. Je recommande sans réserve." },
  { name: 'Antoine B.',  loc: 'Vincennes',  date: 'Mars 2025',     stars: 5, initials: 'AB', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop&crop=face', text: "Installation de prises et spots LED dans tout l'appartement. Devis honnête, délais respectés, résultat très soigné." },
  { name: 'Nathalie C.', loc: 'Paris 17e',  date: 'Février 2025',  stars: 5, initials: 'NC', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80&auto=format&fit=crop&crop=face', text: "Diagnostic rapide d'une panne que deux autres artisans n'avaient pas trouvée. Sérieux, ponctuel et compétent." },
  { name: 'Romain L.',   loc: 'Levallois',  date: 'Janvier 2025',  stars: 4, initials: 'RL', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80&auto=format&fit=crop&crop=face', text: "Mise aux normes avant vente, rapport CONSUEL obtenu sans difficulté. Bonne communication tout au long du chantier." },
];
