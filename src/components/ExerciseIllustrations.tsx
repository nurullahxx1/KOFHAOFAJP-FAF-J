import React from 'react';

interface IllustrationProps {
  className?: string;
}

export const SquatIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floor mat */}
    <rect x="25" y="106" width="150" height="4" rx="2" fill="#fed7e2" />
    {/* Target muscle highlight (Glutes) */}
    <ellipse cx="78" cy="65" rx="14" ry="11" fill="#f43f5e" opacity="0.18" />
    
    {/* Head */}
    <circle cx="120" cy="30" r="10" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />
    <path d="M124 24 Q 131 28, 127 34" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" />
    
    {/* Torso tilted forward slightly with neutral spine */}
    <path d="M116 39 L 90 62" stroke="#475569" strokeWidth="5.5" strokeLinecap="round" />
    
    {/* Arms extended forward for balance */}
    <path d="M112 43 L 138 48" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />
    
    {/* Thigh / Hip in deep squat */}
    <path d="M90 62 L 122 66" stroke="#fb7185" strokeWidth="6" strokeLinecap="round" />
    
    {/* Lower leg / Shin */}
    <path d="M122 66 L 118 104" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
    {/* Foot */}
    <path d="M114 104 L 132 104" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

    {/* Background other leg for depth */}
    <path d="M85 64 L 114 68" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
    <path d="M114 68 L 110 104" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />

    {/* Dynamic movement indicator arrow */}
    <path d="M68 56 Q 66 65, 70 74" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
    <polygon points="70,76 74,70 66,70" fill="#f43f5e" />
  </svg>
);

export const GluteBridgeIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floor mat */}
    <rect x="15" y="98" width="170" height="4" rx="2" fill="#fed7e2" />
    {/* Target muscle highlight */}
    <ellipse cx="106" cy="62" rx="14" ry="12" fill="#f43f5e" opacity="0.18" />

    {/* Head resting on mat */}
    <circle cx="44" cy="90" r="10" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />

    {/* Arms resting on mat */}
    <path d="M55 94 L 95 94" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />

    {/* Upper back on ground to lifted hips */}
    <path d="M52 90 L 105 60" stroke="#475569" strokeWidth="5.5" strokeLinecap="round" />

    {/* Thighs from lifted hips down to bent knees */}
    <path d="M105 60 L 142 66" stroke="#fb7185" strokeWidth="6" strokeLinecap="round" />

    {/* Shins vertical to floor */}
    <path d="M142 66 L 144 96" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
    {/* Foot planted */}
    <path d="M136 96 L 152 96" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

    {/* Secondary leg behind */}
    <path d="M102 62 L 138 68" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
    <path d="M138 68 L 139 96" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />

    {/* Lift upward arrow */}
    <path d="M106 48 L 106 38" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
    <polygon points="106,34 102,40 110,40" fill="#f43f5e" />
  </svg>
);

export const HipThrustIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Bench / Box */}
    <rect x="25" y="65" width="35" height="35" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
    <rect x="23" y="63" width="39" height="8" rx="3" fill="#cbd5e1" />
    {/* Floor */}
    <rect x="15" y="100" width="170" height="4" rx="2" fill="#fed7e2" />

    {/* Target Glute activation glow */}
    <ellipse cx="102" cy="67" rx="14" ry="11" fill="#f43f5e" opacity="0.18" />

    {/* Head looking slightly forward */}
    <circle cx="50" cy="52" r="10" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />

    {/* Upper back braced on bench */}
    <path d="M52 64 L 102 66" stroke="#475569" strokeWidth="5.5" strokeLinecap="round" />

    {/* Arms resting safely across bench/chest */}
    <path d="M52 64 L 40 70" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />

    {/* Thigh horizontal at lockout */}
    <path d="M102 66 L 140 68" stroke="#fb7185" strokeWidth="6" strokeLinecap="round" />

    {/* Shins 90 degree to floor */}
    <path d="M140 68 L 140 98" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
    {/* Foot planted flat */}
    <path d="M132 98 L 148 98" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

    {/* Upward pulse indicator */}
    <path d="M102 54 L 102 44" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
    <polygon points="102,40 98,46 106,46" fill="#f43f5e" />
  </svg>
);

export const DonkeyKickIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floor mat */}
    <rect x="20" y="100" width="160" height="4" rx="2" fill="#fed7e2" />

    {/* Glute target glow */}
    <ellipse cx="78" cy="62" rx="13" ry="11" fill="#f43f5e" opacity="0.18" />

    {/* Head looking neutral down */}
    <circle cx="145" cy="50" r="9" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />

    {/* Torso horizontal & supported */}
    <path d="M80 62 L 138 60" stroke="#475569" strokeWidth="5.5" strokeLinecap="round" />

    {/* Arms under shoulders */}
    <path d="M135 60 L 135 98" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

    {/* Supporting knee on mat */}
    <path d="M86 64 L 88 98" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />

    {/* Kicking leg: Thigh lifted backward/up */}
    <path d="M78 62 L 52 46" stroke="#fb7185" strokeWidth="6" strokeLinecap="round" />

    {/* Lower leg bent 90 degrees pointing up */}
    <path d="M52 46 L 50 24" stroke="#fb7185" strokeWidth="5" strokeLinecap="round" />
    {/* Foot flexed */}
    <path d="M46 24 L 56 24" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

    {/* Arrow indicating upward squeeze */}
    <path d="M40 38 Q 40 26, 44 18" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
    <polygon points="45,16 48,22 41,20" fill="#f43f5e" />
  </svg>
);

export const FireHydrantIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floor mat */}
    <rect x="25" y="100" width="150" height="4" rx="2" fill="#fed7e2" />

    {/* Target glute glow */}
    <ellipse cx="78" cy="62" rx="14" ry="12" fill="#f43f5e" opacity="0.18" />

    {/* Head */}
    <circle cx="140" cy="50" r="9" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />

    {/* Torso */}
    <path d="M80 62 L 132 60" stroke="#475569" strokeWidth="5.5" strokeLinecap="round" />

    {/* Hands on ground */}
    <path d="M130 60 L 130 98" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

    {/* Grounded knee */}
    <path d="M88 64 L 88 98" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />

    {/* Abducted leg flared outward to side */}
    <path d="M78 62 L 56 50" stroke="#fb7185" strokeWidth="6" strokeLinecap="round" />
    <path d="M56 50 L 48 68" stroke="#fb7185" strokeWidth="5" strokeLinecap="round" />
    <path d="M45 68 L 52 72" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

    {/* Lateral outward movement arc */}
    <path d="M54 36 Q 44 45, 46 56" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
    <polygon points="46,58 48,51 42,53" fill="#f43f5e" />
  </svg>
);

export const PlankIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floor mat */}
    <rect x="20" y="98" width="160" height="4" rx="2" fill="#fed7e2" />

    {/* Core activation glow */}
    <ellipse cx="100" cy="68" rx="18" ry="10" fill="#f43f5e" opacity="0.18" />

    {/* Head looking down at mat */}
    <circle cx="152" cy="56" r="9" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />

    {/* Forearm on mat */}
    <path d="M142 70 L 142 96" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
    <path d="M142 96 L 158 96" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />

    {/* Torso forming straight line */}
    <path d="M142 70 L 96 73" stroke="#fb7185" strokeWidth="5.5" strokeLinecap="round" />

    {/* Legs straight back */}
    <path d="M96 73 L 45 84" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

    {/* Toes tucked on mat */}
    <path d="M45 84 L 40 96" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

    {/* Stability horizontal guide line */}
    <line x1="38" y1="62" x2="162" y2="62" stroke="#fda4af" strokeWidth="1" strokeDasharray="4 4" />
    <text x="78" y="52" fill="#e11d48" fontSize="8" fontWeight="600" fontFamily="sans-serif">Düz Hat & Core</text>
  </svg>
);

export const DeadBugIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floor mat */}
    <rect x="20" y="96" width="160" height="4" rx="2" fill="#fed7e2" />

    {/* Core activation highlight */}
    <ellipse cx="95" cy="80" rx="16" ry="10" fill="#f43f5e" opacity="0.18" />

    {/* Head resting on mat */}
    <circle cx="48" cy="88" r="9" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />

    {/* Back flat on mat */}
    <path d="M56 89 L 105 89" stroke="#fb7185" strokeWidth="5.5" strokeLinecap="round" />

    {/* Arm 1 reaching backward overhead */}
    <path d="M64 88 L 32 68" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />

    {/* Arm 2 pointing toward ceiling (90 deg) */}
    <path d="M64 88 L 68 50" stroke="#94a3b8" strokeWidth="4.5" strokeLinecap="round" />

    {/* Leg 1 extending forward near ground */}
    <path d="M105 89 L 150 82" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

    {/* Leg 2 bent in tabletop (90 deg) */}
    <path d="M102 88 L 102 58 L 126 58" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />

    {/* Reaching indicators */}
    <path d="M30 62 L 24 58" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M152 79 L 160 76" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BirdDogIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floor mat */}
    <rect x="20" y="98" width="160" height="4" rx="2" fill="#fed7e2" />

    {/* Core center highlight */}
    <ellipse cx="100" cy="62" rx="16" ry="10" fill="#f43f5e" opacity="0.18" />

    {/* Head looking down */}
    <circle cx="132" cy="52" r="9" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />

    {/* Torso horizontal */}
    <path d="M78 62 L 128 62" stroke="#fb7185" strokeWidth="5.5" strokeLinecap="round" />

    {/* Arm reaching straight forward */}
    <path d="M125 62 L 170 56" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />

    {/* Supporting arm vertical to mat */}
    <path d="M122 62 L 122 96" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />

    {/* Leg reaching straight backward */}
    <path d="M78 62 L 30 58" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

    {/* Supporting knee on mat */}
    <path d="M82 62 L 82 96" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />

    {/* Alignment axis */}
    <line x1="28" y1="58" x2="172" y2="56" stroke="#fda4af" strokeWidth="1" strokeDasharray="3 3" />
  </svg>
);

export const ReverseCrunchIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floor mat */}
    <rect x="20" y="98" width="160" height="4" rx="2" fill="#fed7e2" />

    {/* Lower abs glow */}
    <ellipse cx="94" cy="72" rx="14" ry="10" fill="#f43f5e" opacity="0.18" />

    {/* Head relaxed on mat */}
    <circle cx="50" cy="90" r="9" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />

    {/* Upper spine on mat */}
    <path d="M58 92 L 88 92" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

    {/* Arms flat for support */}
    <path d="M65 94 L 105 94" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />

    {/* Lower back / Pelvis gently curled upward */}
    <path d="M88 92 L 106 74" stroke="#fb7185" strokeWidth="5.5" strokeLinecap="round" />

    {/* Thighs curled toward chest */}
    <path d="M106 74 L 92 46" stroke="#fb7185" strokeWidth="5" strokeLinecap="round" />

    {/* Shins tucked */}
    <path d="M92 46 L 118 40" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />

    {/* Rolling curl arrow */}
    <path d="M116 70 Q 110 56, 98 50" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
    <polygon points="96,48 103,51 100,56" fill="#f43f5e" />
  </svg>
);

export const MountainClimberIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-36' }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floor mat */}
    <rect x="20" y="98" width="160" height="4" rx="2" fill="#fed7e2" />

    {/* Core target highlight */}
    <ellipse cx="106" cy="62" rx="14" ry="10" fill="#f43f5e" opacity="0.18" />

    {/* Head looking down */}
    <circle cx="152" cy="46" r="9" fill="#fecdd3" stroke="#475569" strokeWidth="2.5" />

    {/* Straight arms pushing from ground */}
    <path d="M142 56 L 142 96" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

    {/* Torso */}
    <path d="M142 56 L 98 62" stroke="#fb7185" strokeWidth="5.5" strokeLinecap="round" />

    {/* Rear straight leg back */}
    <path d="M98 62 L 48 88" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
    <path d="M48 88 L 44 96" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

    {/* Front knee driving forward to chest */}
    <path d="M98 62 L 108 80" stroke="#fb7185" strokeWidth="5" strokeLinecap="round" />
    <path d="M108 80 L 90 92" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />

    {/* Driving forward arrow */}
    <path d="M80 82 L 102 74" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
    <polygon points="106,73 99,71 101,77" fill="#f43f5e" />
  </svg>
);

export const ExerciseIllustration: React.FC<{ id: string; className?: string }> = ({ id, className }) => {
  switch (id) {
    case 'squat':
      return <SquatIllustration className={className} />;
    case 'glute-bridge':
      return <GluteBridgeIllustration className={className} />;
    case 'hip-thrust':
      return <HipThrustIllustration className={className} />;
    case 'donkey-kick':
      return <DonkeyKickIllustration className={className} />;
    case 'fire-hydrant':
      return <FireHydrantIllustration className={className} />;
    case 'plank':
      return <PlankIllustration className={className} />;
    case 'dead-bug':
      return <DeadBugIllustration className={className} />;
    case 'bird-dog':
      return <BirdDogIllustration className={className} />;
    case 'reverse-crunch':
      return <ReverseCrunchIllustration className={className} />;
    case 'mountain-climber':
      return <MountainClimberIllustration className={className} />;
    default:
      return <SquatIllustration className={className} />;
  }
};
