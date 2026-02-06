import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      width="100%"
      height="100%"
      style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="GreyCells animated logo"
    >
      <defs>
        <style>{`.text{fill:#e6eef0;font-family:Inter, sans-serif;font-weight:700}.node{fill:#f97316;stroke:#f97316}.node2{fill:#14b8a6;stroke:#14b8a6}.link{stroke:#9fbebe;stroke-width:2;fill:none;stroke-linecap:round;opacity:0.9}.bg{fill:#0f172a}`}</style>
      </defs>
      <rect className="bg" width="240" height="240" rx="26"/>
      <text x="50%" y="50%" dy="10" textAnchor="middle" className="text" fontSize="28">GreyCells</text>
      <g transform="translate(120,120)">
        <g id="ring" transform="rotate(0)">
          <path className="link" d="M-60 -10 C -40 -60, 40 -60, 60 -10"/>
          <path className="link" d="M60 10 C 40 60, -40 60, -60 10"/>
          <path className="link" d="M-10 -70 C -50 -40, -50 40, -10 70"/>
          <circle className="node2" cx="-60" cy="-10" r="5"/>
          <circle className="node" cx="60" cy="-10" r="6"/>
          <circle className="node2" cx="-10" cy="-70" r="4"/>
          <circle className="node" cx="10" cy="70" r="4"/>
          <circle className="node2" cx="-60" cy="10" r="3"/>
          <circle className="node" cx="60" cy="10" r="3"/>
        </g>
        <animateTransform xlinkHref="#ring" attributeName="transform" type="rotate" from="0" to="360" dur="18s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}
