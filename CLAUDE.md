# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Type-check + production build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Stack

- **React 19 + TypeScript** via Vite
- **Tailwind CSS v4** — uses `@import "tailwindcss"` in `src/index.css`, no `tailwind.config` file. Custom utilities and keyframes are written directly in `index.css`.
- No external icon library — SVG inline only.
- Font: Inter (loaded via Google Fonts in `index.html`).

## Architecture

All site data (copy, images, checklist items) lives in **`src/data.ts`** with typed interfaces. Components import from there — never hardcode content inside components.

**`src/index.css`** holds all keyframe animations, custom CSS classes (`.srv-card`, `.nav-link`, `.form-input`, `.marquee-track`, `.cta-float`, etc.) and the body reset. Tailwind utility classes handle everything else.

**`src/hooks/useScrollReveal.ts`** — IntersectionObserver hook used throughout. Elements must start with `opacity-0` class; the hook removes it and adds the animation class when the element enters the viewport.

```ts
useScrollReveal(ref, 'anim-fade-up', delayMs?)
```

Available animation classes: `anim-fade-up`, `anim-fade-left`, `anim-fade-right`, `anim-pop-in`. Hero-specific: `hero-d0` through `hero-d4`.

## Section order (App.tsx)

`Navbar → Hero → Services → APropos → Avis → Contact → Footer` + floating CTA button.

## Design tokens

- Accent color: **indigo-600** (`#4f46e5`) — used everywhere including the hardcoded hex values in `index.css`.
- Dark background sections (APropos, Contact): `linear-gradient(135deg, #0f172a 0%, #312e81 100%)`
- Light sections: `bg-white` or `bg-slate-50`
- Avis and Footer: `bg-white`

## Unused files

`src/components/Icons.tsx` and `src/components/Engagements.tsx` are unused — they can be deleted safely.

# Directives Strictes UI/UX - Style Minimaliste & Pro

Dès que tu génères une interface (React, Tailwind, HTML/CSS), applique rigoureusement les règles suivantes :

### 1. Interdictions "Anti-Style IA"
- **Zéro Emoji :** N'utilise jamais d'emojis dans le texte, les boutons, les menus ou les icônes.
- **Titres Sobres :** Pas de dégradés de couleurs (gradient text) dans les titres. Les titres doivent être d'une seule couleur unie (ex: noir, anthracite, blanc).
- **Pas de surcharge :** Évite les listes à puces trop longues ou les blocs de texte denses.

### 2. Structure Hero Section
- **Minimalisme extrême :** La section d'accueil (Hero) doit être très aérée. 
- **Contenu :** Un titre fort, un sous-titre de maximum une phrase, et un bouton d'action (CTA) unique.
- **Espace :** Utilise un "negative space" (espace vide) important pour donner un aspect haut de gamme.

### 3. Interactions et Animations
- **Hover Effects :** Tous les éléments interactifs (boutons, cartes, liens) doivent avoir une animation au survol de la souris.
- **Style d'animation :** Utilise des transitions fluides et lentes (ex: `transition-all duration-300`). Privilégie les légers zooms (`scale-105`), les changements subtils d'opacité ou les translations douces.
- **Bibliothèques :** Utilise de préférence Framer Motion pour React ou des classes Tailwind `transition` bien paramétrées.

### 4. Esthétique Visuelle
- **Typographie :** Utilise des polices élégantes. Serif pour les titres (pour le luxe) ou Sans-Serif très propre (pour le technique).
- **Couleurs :** Reste sur des palettes sobres (noir, blanc, gris, et une seule couleur d'accentuation maximum).