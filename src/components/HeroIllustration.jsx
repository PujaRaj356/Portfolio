import React from 'react';

export default function HeroIllustration() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '480px',
      margin: '0 auto',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <svg
        viewBox="0 0 500 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto' }}
      >
        {/* Background Decorative Ground Line */}
        <path d="M 40 410 L 460 410" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

        {/* Floating Code Bubbles / Icons */}
        <g opacity="0.85">
          <rect x="50" y="60" width="80" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="90" y="83" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="monospace" textAnchor="middle">&lt;code/&gt;</text>
          
          <rect x="370" y="90" width="80" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="410" y="113" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">AI / ML</text>
        </g>

        {/* Character - Legs Crossed */}
        <path
          d="M 160 360 C 160 320, 200 310, 250 310 C 300 310, 340 320, 340 360 C 340 395, 300 405, 250 405 C 200 405, 160 395, 160 360 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
        />

        {/* Character Torso */}
        <path
          d="M 200 230 C 200 180, 300 180, 300 230 L 315 320 C 300 330, 200 330, 185 320 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Shirt Line Art Accent / Collar */}
        <path d="M 235 220 L 250 245 L 265 220" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 250 245 L 250 315" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />

        {/* Arms holding laptop */}
        <path d="M 200 230 L 225 285 L 285 285 L 300 230" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Laptop */}
        <g>
          {/* Laptop Screen Open */}
          <path d="M 220 200 L 280 200 L 275 270 L 225 270 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
          <rect x="232" y="212" width="36" height="24" rx="3" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
          {/* Code lines on laptop screen */}
          <line x1="237" y1="220" x2="255" y2="220" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          <line x1="237" y1="226" x2="262" y2="226" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          <line x1="237" y1="231" x2="248" y2="231" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

          {/* Laptop Keyboard Base */}
          <path d="M 205 275 L 295 275 C 295 275, 290 285, 285 285 L 215 285 C 210 285, 205 275, 205 275 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        </g>

        {/* Neck */}
        <rect x="242" y="170" width="16" height="20" fill="none" stroke="currentColor" strokeWidth="3" rx="2" />

        {/* Head */}
        <circle cx="250" cy="140" r="32" fill="none" stroke="currentColor" strokeWidth="3.5" />

        {/* Hair - Modern Style */}
        <path
          d="M 220 135 C 220 100, 280 100, 280 135 C 275 115, 260 110, 250 110 C 235 110, 225 120, 220 135 Z"
          fill="currentColor"
        />

        {/* Face Features - Glasses & Smile */}
        <circle cx="240" cy="140" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="260" cy="140" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="247" y1="140" x2="253" y2="140" stroke="currentColor" strokeWidth="2" />
        <path d="M 244 153 Q 250 158 256 153" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Potted Plant Decor on Right */}
        <g stroke="currentColor" strokeWidth="2.5" fill="none">
          <path d="M 390 410 L 400 360 L 430 360 L 440 410 Z" />
          <path d="M 415 360 Q 400 320 380 330 Q 410 345 415 360 Z" fill="currentColor" opacity="0.85" />
          <path d="M 415 360 Q 430 310 450 320 Q 425 345 415 360 Z" fill="none" />
        </g>
      </svg>
    </div>
  );
}
