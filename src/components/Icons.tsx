/* ─────────────────────────────────────────────────
   Icons.tsx — Icônes SVG inline
   Stroke uniquement, style cohérent, zéro emoji
───────────────────────────────────────────────── */

interface IconProps {
  size?: number;
  className?: string;
}

const base = (size: number, className: string, children: React.ReactNode) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const BoltIcon = ({ size = 22, className = '' }: IconProps) =>
  base(size, className, <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />);

export const PlugIcon = ({ size = 22, className = '' }: IconProps) =>
  base(size, className, <>
    <path d="M12 22v-5" />
    <path d="M9 7V2" />
    <path d="M15 7V2" />
    <rect x="5" y="7" width="14" height="8" rx="2" />
  </>);

export const HardHatIcon = ({ size = 22, className = '' }: IconProps) =>
  base(size, className, <>
    <path d="M2 18h20v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2z" />
    <path d="M4 18v-1a8 8 0 0 1 16 0v1" />
    <line x1="12" y1="2" x2="12" y2="10" />
  </>);

export const ClockIcon = ({ size = 20, className = '' }: IconProps) =>
  base(size, className, <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>);

export const ShieldCheckIcon = ({ size = 20, className = '' }: IconProps) =>
  base(size, className, <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </>);

export const FileTextIcon = ({ size = 20, className = '' }: IconProps) =>
  base(size, className, <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </>);

export const AwardIcon = ({ size = 20, className = '' }: IconProps) =>
  base(size, className, <>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </>);

export const PhoneIcon = ({ size = 16, className = '' }: IconProps) =>
  base(size, className, <>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </>);

export const MailIcon = ({ size = 16, className = '' }: IconProps) =>
  base(size, className, <>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </>);

export const MapPinIcon = ({ size = 16, className = '' }: IconProps) =>
  base(size, className, <>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </>);

export const ArrowRightIcon = ({ size = 14, className = '' }: IconProps) =>
  base(size, className, <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </>);

export const CheckCircleIcon = ({ size = 48, className = '' }: IconProps) =>
  base(size, className, <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 10" />
  </>);
