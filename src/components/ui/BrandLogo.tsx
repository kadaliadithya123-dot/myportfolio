import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
  withGlow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 40, className = '', withGlow = true }) => (
  <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
    {withGlow && <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-neon-cyan/30 via-neon-purple/20 to-neon-pink/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />}
    <img
      src="/logo.png"
      alt="Adithya Sri Krishna logo"
      className="relative z-10 w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(0,240,255,0.35)]"
      draggable={false}
    />
  </div>
);
