import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
  withGlow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 40,
  className = '',
  withGlow = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {withGlow && (
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-neon-cyan/30 via-neon-purple/20 to-neon-pink/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"
        />
      )}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 filter drop-shadow-[0_2px_8px_rgba(0,240,255,0.35)]"
      >
        <defs>
          {/* Main Neon Cyan to Violet Gradient */}
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>

          {/* Core Play Prism Gradient */}
          <linearGradient id="prismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#00A3FF" />
          </linearGradient>

          {/* Metallic Glass Background Gradient */}
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#141420" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#09090e" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Outer Premium Squircle Housing */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="24"
          fill="url(#bgGrad)"
          stroke="url(#brandGrad)"
          strokeWidth="2"
          strokeOpacity="0.85"
        />

        {/* Ambient Corner Accent Lines */}
        <path
          d="M 16 28 C 16 20 20 16 28 16"
          stroke="#00F0FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />
        <path
          d="M 84 72 C 84 80 80 84 72 84"
          stroke="#EC4899"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />

        {/* Left Code Bracket: < */}
        <path
          d="M 28 36 L 19 50 L 28 64"
          stroke="#00F0FF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Code Bracket: > */}
        <path
          d="M 72 36 L 81 50 L 72 64"
          stroke="#A855F7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Monogram "A" & Cinematic Play Prism */}
        {/* Outer Delta Apex */}
        <path
          d="M 50 24 L 37 72 L 44 72 L 48 58 L 52 58 L 56 72 L 63 72 Z"
          fill="url(#brandGrad)"
        />

        {/* Inner Counterpart Window */}
        <polygon
          points="50,38 44,52 56,52"
          fill="#09090e"
        />

        {/* Overlapping Cinematic Play Prism (Video Symbol) */}
        <path
          d="M 46 44 L 56 50 L 46 56 Z"
          fill="url(#prismGrad)"
          stroke="#FFFFFF"
          strokeWidth="0.8"
        />

        {/* Subtle Horizontal Shutter Scanline / Crossbar */}
        <line
          x1="36"
          y1="50"
          x2="64"
          y2="50"
          stroke="#00F0FF"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          strokeDasharray="2 2"
        />

        {/* Precision Laser Core Dot */}
        <circle
          cx="50"
          cy="25"
          r="2"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};
