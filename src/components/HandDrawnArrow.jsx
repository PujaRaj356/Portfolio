import React from 'react';

export default function HandDrawnArrow({ style, className = "" }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '80px', height: '50px', stroke: 'currentColor', ...style }}
      className={className}
    >
      {/* Curved stroke arrow pointing downwards-right */}
      <path
        d="M 15 15 Q 40 65 95 55"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrowhead */}
      <path
        d="M 80 42 L 98 56 L 86 68"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
