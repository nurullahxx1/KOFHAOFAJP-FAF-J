import React from 'react';

// Cute aesthetic cat vector components
export const CatStretching: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Body arched in cute stretch */}
    <path
      d="M15 55 Q 35 30, 60 45 Q 75 52, 85 50"
      stroke="#fda4af"
      strokeWidth="6"
      strokeLinecap="round"
    />
    {/* Back legs */}
    <path d="M18 55 Q 12 65, 10 70" stroke="#fda4af" strokeWidth="5" strokeLinecap="round" />
    <path d="M26 55 Q 22 66, 20 70" stroke="#fda4af" strokeWidth="4.5" strokeLinecap="round" />
    {/* Front stretched paws */}
    <path d="M70 48 Q 80 62, 88 68" stroke="#fda4af" strokeWidth="5" strokeLinecap="round" />
    <path d="M64 50 Q 72 65, 78 69" stroke="#fda4af" strokeWidth="4.5" strokeLinecap="round" />
    {/* Tail curling happily */}
    <path
      d="M15 54 Q 6 40, 14 26 Q 22 16, 26 22"
      stroke="#fda4af"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {/* Head */}
    <circle cx="76" cy="40" r="12" fill="#fff1f2" stroke="#fda4af" strokeWidth="3" />
    {/* Ears */}
    <polygon points="68,32 72,20 78,30" fill="#f43f5e" opacity="0.3" stroke="#fda4af" strokeWidth="2" />
    <polygon points="78,30 84,21 87,33" fill="#f43f5e" opacity="0.3" stroke="#fda4af" strokeWidth="2" />
    {/* Closed happy eyes */}
    <path d="M71 40 Q 74 43, 76 40" stroke="#881337" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M79 40 Q 82 43, 84 40" stroke="#881337" strokeWidth="1.5" strokeLinecap="round" />
    {/* Tiny nose & smile */}
    <circle cx="77.5" cy="43.5" r="1.2" fill="#fb7185" />
    <path d="M76 45 Q 77.5 47, 79 45" stroke="#881337" strokeWidth="1.2" strokeLinecap="round" />
    {/* Cheeks */}
    <circle cx="71" cy="43" r="2.5" fill="#fecdd3" />
    <circle cx="84" cy="43" r="2.5" fill="#fecdd3" />
  </svg>
);

export const CatCurled: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Curled sleeping body */}
    <ellipse cx="45" cy="48" rx="30" ry="22" fill="#fff1f2" stroke="#f472b6" strokeWidth="3" />
    {/* Fluffy tail wrapped around */}
    <path
      d="M20 54 C 18 68, 45 74, 65 65"
      stroke="#f472b6"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {/* Head nestled */}
    <circle cx="56" cy="38" r="14" fill="#fff1f2" stroke="#f472b6" strokeWidth="3" />
    {/* Ears */}
    <polygon points="48,28 52,16 59,25" fill="#fb7185" opacity="0.4" stroke="#f472b6" strokeWidth="2" />
    <polygon points="59,25 67,17 69,29" fill="#fb7185" opacity="0.4" stroke="#f472b6" strokeWidth="2" />
    {/* Sleeping curved eyes (^^) */}
    <path d="M52 38 Q 55 35, 57 38" stroke="#9d174d" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M60 38 Q 63 35, 65 38" stroke="#9d174d" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="58.5" cy="41" r="1.2" fill="#fb7185" />
    {/* Blush */}
    <circle cx="50" cy="41" r="2.5" fill="#fbcfe8" />
    <circle cx="67" cy="41" r="2.5" fill="#fbcfe8" />
    {/* Zzz floating */}
    <text x="68" y="20" fill="#f472b6" fontSize="11" fontWeight="bold" fontFamily="sans-serif">z</text>
    <text x="76" y="14" fill="#fb7185" fontSize="9" fontWeight="bold" fontFamily="sans-serif">z</text>
  </svg>
);

export const CatCheering: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Body */}
    <ellipse cx="50" cy="65" rx="22" ry="24" fill="#fff1f2" stroke="#fb7185" strokeWidth="3" />
    {/* Paws raised in celebration */}
    <path d="M34 56 Q 24 42, 28 35" stroke="#fb7185" strokeWidth="5" strokeLinecap="round" />
    <circle cx="28" cy="35" r="4.5" fill="#fff1f2" stroke="#fb7185" strokeWidth="2" />
    <path d="M66 56 Q 76 42, 72 35" stroke="#fb7185" strokeWidth="5" strokeLinecap="round" />
    <circle cx="72" cy="35" r="4.5" fill="#fff1f2" stroke="#fb7185" strokeWidth="2" />
    {/* Feet */}
    <circle cx="38" cy="88" r="6" fill="#fff1f2" stroke="#fb7185" strokeWidth="2.5" />
    <circle cx="62" cy="88" r="6" fill="#fff1f2" stroke="#fb7185" strokeWidth="2.5" />
    {/* Head */}
    <circle cx="50" cy="38" r="18" fill="#fff1f2" stroke="#fb7185" strokeWidth="3" />
    {/* Ears */}
    <polygon points="36,27 40,12 50,23" fill="#f43f5e" opacity="0.3" stroke="#fb7185" strokeWidth="2" />
    <polygon points="50,23 60,12 64,27" fill="#f43f5e" opacity="0.3" stroke="#fb7185" strokeWidth="2" />
    {/* Sparkle eyes */}
    <ellipse cx="44" cy="36" rx="2.5" ry="3" fill="#881337" />
    <circle cx="43" cy="35" r="1" fill="#ffffff" />
    <ellipse cx="56" cy="36" rx="2.5" ry="3" fill="#881337" />
    <circle cx="55" cy="35" r="1" fill="#ffffff" />
    {/* Cute cat mouth :3 */}
    <path d="M47 43 Q 50 45, 50 43 Q 50 45, 53 43" stroke="#881337" strokeWidth="1.8" strokeLinecap="round" />
    {/* Rosy cheeks */}
    <circle cx="39" cy="41" r="3.5" fill="#fda4af" opacity="0.7" />
    <circle cx="61" cy="41" r="3.5" fill="#fda4af" opacity="0.7" />
    {/* Little heart above */}
    <path
      d="M50 12 C 48 8, 44 8, 44 11 C 44 14, 50 18, 50 18 C 50 18, 56 14, 56 11 C 56 8, 52 8, 50 12 Z"
      fill="#f43f5e"
    />
  </svg>
);

export const FlamingoEmblem: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* S-curved long neck */}
    <path
      d="M48 20 C 42 12, 32 14, 34 24 C 36 32, 44 38, 46 48"
      stroke="#fb7185"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Head & beak */}
    <circle cx="48" cy="18" r="5" fill="#f43f5e" />
    <path d="M52 17 L 59 20 L 53 22 Z" fill="#1e293b" />
    {/* Eye */}
    <circle cx="47" cy="17" r="1" fill="#ffffff" />
    {/* Body */}
    <ellipse cx="40" cy="50" rx="14" ry="10" fill="#fecdd3" stroke="#fb7185" strokeWidth="2.5" />
    {/* Wing detail */}
    <path d="M34 48 Q 42 46, 48 51 Q 42 56, 34 48" fill="#fda4af" />
    {/* Legs: one straight down, one bent gracefully */}
    <path d="M42 60 L 42 76" stroke="#fb7185" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M38 60 L 32 67 L 40 68" stroke="#fb7185" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
