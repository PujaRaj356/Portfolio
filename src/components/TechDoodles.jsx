import React from 'react';
import confetti from 'canvas-confetti';

export function CodeBracketDoodle({ style, className = "" }) {
  const handleClick = (e) => {
    e.stopPropagation();
    confetti({ particleCount: 25, spread: 50, origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight } });
  };

  return (
    <div
      onClick={handleClick}
      className={`interactive-doodle floating-doodle ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 14px',
        borderRadius: '8px',
        border: '2px solid var(--border-main)',
        backgroundColor: 'var(--bg-card)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 800,
        fontSize: '0.9rem',
        boxShadow: 'var(--shadow-sm)',
        userSelect: 'none',
        ...style
      }}
      title="Interactive Code Doodle — Click me!"
    >
      &lt;Dev/&gt;
    </div>
  );
}

export function BinaryStreamDoodle({ style, className = "" }) {
  const handleClick = (e) => {
    e.stopPropagation();
    confetti({ particleCount: 25, spread: 50, origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight } });
  };

  return (
    <div
      onClick={handleClick}
      className={`interactive-doodle floating-doodle delay-2 ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '6px 12px',
        borderRadius: '9999px',
        border: '2px dashed var(--border-main)',
        backgroundColor: 'var(--bg-card)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '0.8rem',
        userSelect: 'none',
        ...style
      }}
      title="Binary Data Doodle"
    >
      <span>01001001</span>
    </div>
  );
}

export function CpuChipDoodle({ style, className = "" }) {
  return (
    <div
      className={`interactive-doodle floating-doodle delay-1 ${className}`}
      style={{
        width: '42px',
        height: '42px',
        border: '2px solid var(--border-main)',
        borderRadius: '8px',
        backgroundColor: 'var(--bg-card)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        ...style
      }}
      title="CPU Microchip Drawing"
    >
      {/* Pins */}
      <div style={{ position: 'absolute', top: '-6px', width: '20px', height: '2px', backgroundColor: 'var(--border-main)' }}></div>
      <div style={{ position: 'absolute', bottom: '-6px', width: '20px', height: '2px', backgroundColor: 'var(--border-main)' }}></div>
      <div style={{ position: 'absolute', left: '-6px', height: '20px', width: '2px', backgroundColor: 'var(--border-main)' }}></div>
      <div style={{ position: 'absolute', right: '-6px', height: '20px', width: '2px', backgroundColor: 'var(--border-main)' }}></div>
      <span style={{ fontSize: '0.75rem', fontWeight: 900, fontFamily: 'var(--font-mono)' }}>AI</span>
    </div>
  );
}

export function GearSpinDoodle({ style, className = "" }) {
  return (
    <svg
      className={`spin-doodle interactive-doodle ${className}`}
      style={{ width: '36px', height: '36px', stroke: 'currentColor', fill: 'none', ...style }}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function MarqueeTechStrip() {
  const techItems = [
    "⚡ PYTHON & FASTAPI",
    "🤖 FEDERATED LEARNING",
    "💻 REACT.JS & NEXT.JS",
    "🌲 RANDOM FOREST & SHAP AI",
    "🥇 1ST PLACE WINNER NIT HACKATHON",
    "🎓 CIT M.SC SOFTWARE SYSTEMS (9.03 CGPA)",
    "🛡️ NETWORK INTRUSION DETECTION (NIDS)",
    "⚙️ C++ & DATA STRUCTURES"
  ];

  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee-content">
        {techItems.map((item, idx) => (
          <span key={idx}>{item} • </span>
        ))}
        {techItems.map((item, idx) => (
          <span key={`dup-${idx}`}>{item} • </span>
        ))}
      </div>
    </div>
  );
}
