/* ─────────────────────────────────────────────────
   SectionTag.tsx — Petit tag au-dessus des titres
───────────────────────────────────────────────── */

interface Props {
  children: React.ReactNode;
}

export default function SectionTag({ children }: Props) {
  return (
    <span className="inline-block text-[11px] font-bold tracking-[.12em] uppercase
      text-indigo-600 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full mb-4">
      {children}
    </span>
  );
}
