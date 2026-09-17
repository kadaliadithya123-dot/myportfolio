import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
  withGlow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 40, className = '', withGlow = true }) => (
  <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
    {withGlow && <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-neon-cyan/30 via-neon-purple/20 to-neon-pink/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />}
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 filter drop-shadow-[0_2px_8px_rgba(0,240,255,0.35)]" aria-label="Adithya Sri Krishna logo" role="img">
      <defs>
        <linearGradient id="brandFrame" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00F0FF" /><stop offset="0.52" stopColor="#8B5CF6" /><stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="brandLetter" x1="32" y1="24" x2="70" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" /><stop offset="0.5" stopColor="#00F0FF" /><stop offset="1" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="brandCore" x1="43" y1="43" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00F0FF" /><stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="92" height="92" rx="26" fill="#09090F" stroke="url(#brandFrame)" strokeWidth="2.5" />
      <path d="M22 39L15 50L22 61" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M78 39L85 50L78 61" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 22L31 76H39L43 64H57L61 76H69L50 22Z" fill="url(#brandLetter)" />
      <path d="M46 56L50 44L54 56H46Z" fill="#09090F" />
      <path d="M48 47L57 52L48 57V47Z" fill="url(#brandCore)" stroke="#FFFFFF" strokeWidth="1" />
      <path d="M35 82H65" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 4" opacity="0.65" />
      <circle cx="50" cy="22" r="2.5" fill="#FFFFFF" />
    </svg>
  </div>
);
