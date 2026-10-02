import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Cpu, Zap, Shield, Bot, Terminal } from 'lucide-react';

export default function DeveloperFigurine() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const roboticQuotes = [
    "🤖 BEEP BOOP! I am Puja.AI — Software Systems Cyborg Developer @ CIT!",
    "⚡ Core Logic Online: 9.03 CGPA | Scikit-learn | React | Federated Learning!",
    "🏆 NIT Hackathon 1st Place Victory Protocol Activated (AgriHive Platform)!",
    "🛡️ NIDS Threat Subsystem: 0 Raw Data Leaks Detected in Decentralized Nodes!",
    "☕ Executing Script: Fueling Neural Network with Chai & C++ Systems Algorithms!"
  ];

  const handleAvatarClick = () => {
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.55 }
    });

    setQuoteIndex((prev) => (prev + 1) % roboticQuotes.length);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '480px',
      margin: '0 auto',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Interactive Speech Bubble above Robotic Figurine */}
      <div
        onClick={handleAvatarClick}
        className="interactive-doodle floating-doodle"
        style={{
          position: 'absolute',
          top: '-50px',
          zIndex: 10,
          backgroundColor: 'var(--accent-black)',
          color: 'var(--accent-white)',
          padding: '10px 18px',
          borderRadius: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          fontWeight: 700,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
          border: '2px solid var(--border-main)',
          cursor: 'pointer',
          maxWidth: '340px',
          textAlign: 'center'
        }}
        title="Click Puja's Cyber Avatar to change quotes!"
      >
        {roboticQuotes[quoteIndex]}
        <div style={{
          position: 'absolute',
          bottom: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0',
          height: '0',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '8px solid var(--accent-black)'
        }}></div>
      </div>

      {/* SVG Vector Robotic Girl Illustration (Exact match to "Flora sheen" sitting posture + Cybernetic AI Robot features!) */}
      <div
        onClick={handleAvatarClick}
        className="interactive-doodle"
        style={{ width: '100%', cursor: 'pointer', position: 'relative' }}
        title="Click to interact with Robotic AI Puja!"
      >
        <svg
          viewBox="0 0 500 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto' }}
        >
          {/* Ground Base Line */}
          <path d="M 40 430 L 460 430" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

          {/* Floating Cyber Hologram Code Beams from Laptop */}
          <g className="floating-doodle delay-1" opacity="0.85">
            <line x1="250" y1="260" x2="160" y2="100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="250" y1="260" x2="340" y2="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            
            <rect x="110" y="80" width="90" height="30" rx="8" fill="var(--bg-card)" stroke="currentColor" strokeWidth="2" />
            <text x="155" y="99" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">&lt;AI_SYSTEMS/&gt;</text>

            <rect x="310" y="70" width="95" height="30" rx="8" fill="var(--bg-card)" stroke="currentColor" strokeWidth="2" />
            <text x="357" y="89" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">SHAP_MODEL.PY</text>
          </g>

          {/* Robotic Companion Orb / AI Drone floating on left */}
          <g className="floating-doodle delay-2">
            <circle cx="70" cy="200" r="20" fill="var(--bg-card)" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="70" cy="200" r="8" fill="currentColor" />
            <line x1="70" y1="170" x2="70" y2="180" stroke="currentColor" strokeWidth="2" />
            <circle cx="70" cy="168" r="3" fill="currentColor" />
          </g>

          {/* --- SITTING FEMALE ROBOTIC FIGURE ("Flora Sheen" posture + Cybernetic Armor) --- */}

          {/* Solid Black Crossed Legs (Matching "Flora sheen" bottom half in screenshot!) */}
          <ellipse cx="250" cy="385" rx="140" ry="38" fill="currentColor" stroke="currentColor" strokeWidth="3" />

          {/* Feet / Mechanical Boots accents */}
          <path d="M 130 380 Q 110 395 125 405 Q 145 405 155 385 Z" fill="var(--bg-card)" stroke="currentColor" strokeWidth="2" />
          <path d="M 370 380 Q 390 395 375 405 Q 355 405 345 385 Z" fill="var(--bg-card)" stroke="currentColor" strokeWidth="2" />

          {/* Robotic Turtleneck Sweater (Clean white body with mechanical circuit contours) */}
          <path
            d="M 180 230 C 180 180, 320 180, 320 230 L 335 360 C 315 375, 185 375, 165 360 Z"
            fill="var(--bg-card)"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Cybernetic Circuit Traces on Turtleneck */}
          <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8">
            <path d="M 210 240 L 230 260 L 230 320 L 220 340" />
            <circle cx="210" cy="240" r="3" fill="currentColor" />
            <path d="M 290 240 L 270 260 L 270 320 L 280 340" />
            <circle cx="290" cy="240" r="3" fill="currentColor" />
            <line x1="250" y1="210" x2="250" y2="350" strokeWidth="1.5" strokeDasharray="4 4" />
          </g>

          {/* Cybernetic Mechanical Arms */}
          {/* Left Mechanical Arm */}
          <path d="M 180 230 L 210 295 L 250 295" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="210" cy="295" r="5" fill="currentColor" />
          
          {/* Right Mechanical Arm */}
          <path d="M 320 230 L 290 295 L 250 295" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="290" cy="295" r="5" fill="currentColor" />

          {/* LAPTOP HELD IN LAP (Matching screenshot angle) */}
          <g>
            {/* Laptop Base */}
            <path d="M 190 290 L 310 290 L 300 305 L 200 305 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
            {/* Laptop Open Screen Lid */}
            <path d="M 205 220 L 295 220 L 305 290 L 195 290 Z" fill="var(--bg-card)" stroke="currentColor" strokeWidth="2.5" />
            {/* Screen Inner Display */}
            <rect x="212" y="226" width="76" height="56" rx="2" fill="currentColor" />
            {/* Glowing Cyber Screen Lines */}
            <line x1="220" y1="236" x2="255" y2="236" stroke="var(--bg-card)" strokeWidth="2" strokeLinecap="round" />
            <line x1="220" y1="244" x2="275" y2="244" stroke="var(--bg-card)" strokeWidth="2" strokeLinecap="round" />
            <line x1="220" y1="252" x2="245" y2="252" stroke="var(--bg-card)" strokeWidth="2" strokeLinecap="round" />
            <line x1="220" y1="260" x2="268" y2="260" stroke="var(--bg-card)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="275" cy="270" r="4" fill="var(--bg-card)" />
          </g>

          {/* Cybernetic Neck Collar */}
          <rect x="238" y="178" width="24" height="22" fill="var(--bg-card)" stroke="currentColor" strokeWidth="3" rx="4" />
          <line x1="242" y1="188" x2="258" y2="188" stroke="currentColor" strokeWidth="2" />

          {/* Head Outline */}
          <ellipse cx="250" cy="150" rx="30" ry="34" fill="var(--bg-card)" stroke="currentColor" strokeWidth="3.5" />

          {/* Hair: Stylized High Top Knot Bun (Matching "Flora sheen" illustration in screenshot!) */}
          <path
            d="M 218 148 C 218 105, 282 105, 282 148 C 275 125, 262 118, 250 118 C 238 118, 225 125, 218 148 Z"
            fill="currentColor"
          />
          {/* Top Knot Bun */}
          <ellipse cx="250" cy="102" rx="14" ry="16" fill="currentColor" stroke="currentColor" strokeWidth="2" />

          {/* ROBOTIC CYBERNETIC VISOR / EYE HUD OVER FACE */}
          <g>
            {/* Cybernetic AR Glasses / Visor Band */}
            <rect x="222" y="140" width="56" height="18" rx="4" fill="currentColor" stroke="currentColor" strokeWidth="2" />
            <line x1="226" y1="149" x2="274" y2="149" stroke="var(--bg-card)" strokeWidth="2" strokeDasharray="4 2" />
            {/* Visor HUD Target Ring */}
            <circle cx="238" cy="149" r="4" fill="var(--bg-card)" />
            <circle cx="262" cy="149" r="4" fill="var(--bg-card)" />

            {/* Subtle Sleek Robot Chin/Smile Contour */}
            <path d="M 244 168 Q 250 172 256 168" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Side Ear Cyber Antenna */}
            <line x1="218" y1="149" x2="210" y2="140" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="208" cy="138" r="3" fill="currentColor" />
          </g>
        </svg>
      </div>

      {/* Cybernetic Robotic Status Indicator */}
      <div style={{
        marginTop: '12px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 18px',
        borderRadius: '9999px',
        border: '2px solid var(--border-main)',
        backgroundColor: 'var(--bg-card)',
        fontSize: '0.82rem',
        fontWeight: 700,
        fontFamily: 'var(--font-mono)'
      }}>
        <span className="status-pulse-dot"></span>
        <span>ROBOTIC AI PUJA • M.Sc. Software Systems (9.03 CGPA @ CIT)</span>
      </div>
    </div>
  );
}
