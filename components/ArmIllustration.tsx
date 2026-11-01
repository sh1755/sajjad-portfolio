/**
 * Line illustration of the research loop: tracked hand landmarks → perception
 * → planning → a 7-DoF arm. Animation is CSS-only and stops under reduced motion.
 */
export function ArmIllustration({ className }: { className?: string }) {
  // Hand landmark skeleton (21 points, MediaPipe-style topology), drawn small.
  const wrist = [86, 318];
  const fingers = [
    [[70, 300], [58, 284], [50, 270], [44, 258]], // thumb
    [[80, 280], [78, 258], [77, 243], [76, 230]], // index
    [[92, 278], [94, 254], [95, 238], [96, 224]], // middle
    [[104, 282], [108, 262], [110, 248], [112, 236]], // ring
    [[114, 290], [121, 276], [125, 266], [128, 257]], // little
  ];
  const joints = [
    { x: 392, y: 392, r: 9 },
    { x: 392, y: 334, r: 9 },
    { x: 392, y: 300, r: 10 },
    { x: 334, y: 214, r: 9 },
    { x: 310, y: 180, r: 8 },
    { x: 378, y: 130, r: 8 },
    { x: 412, y: 140, r: 7 },
  ];
  return (
    <svg viewBox="10 84 510 356" className={className} role="img" aria-labelledby="arm-title arm-desc">
      <title id="arm-title">From human gesture to robot motion</title>
      <desc id="arm-desc">
        A tracked human hand on the left, a signal passing through perception and planning stages, and a seven-joint robot arm on the right.
      </desc>
      <defs>
        <linearGradient id="armLink" x1="0" x2="1">
          <stop offset="0" stopColor="#E2E8F0" />
          <stop offset="1" stopColor="#94A3B8" />
        </linearGradient>
      </defs>

      {/* Workspace floor */}
      <path d="M200 404 H500" stroke="#334155" strokeWidth="1" />
      {[220, 260, 300, 340, 380, 420, 460].map((x) => (
        <path key={x} d={`M${x} 404 l-14 18`} stroke="#1E293B" strokeWidth="1" />
      ))}

      {/* Hand landmarks */}
      <g>
        {fingers.map((chain, i) => (
          <polyline
            key={i}
            points={[wrist, ...chain].map((p) => p.join(",")).join(" ")}
            fill="none"
            stroke="#64748B"
            strokeWidth="1.4"
          />
        ))}
        <polyline points={fingers.map((c) => c[0].join(",")).join(" ")} fill="none" stroke="#64748B" strokeWidth="1.4" />
        {[wrist, ...fingers.flat()].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 0 ? 3.4 : 2.4} fill={i % 4 === 0 ? "#22D3EE" : "#CBD5E1"} />
        ))}
        <rect x="30" y="212" width="112" height="124" rx="6" fill="none" stroke="#22D3EE" strokeOpacity="0.5" strokeDasharray="3 4" />
        <text x="30" y="352" className="font-mono" fontSize="9" fill="#94A3B8" letterSpacing="1.2">
          HAND · 21 LANDMARKS
        </text>
      </g>

      {/* Signal path with stage nodes */}
      <path id="signal" d="M142 270 C 190 270, 180 200, 220 168 S 300 96, 412 150" fill="none" stroke="#334155" strokeWidth="1.2" />
      <path d="M142 270 C 190 270, 180 200, 220 168 S 300 96, 412 150" fill="none" stroke="#22D3EE" strokeWidth="2.4" strokeLinecap="round" className="signal-path" />
      {[
        { x: 186, y: 222, label: "PERCEIVE" },
        { x: 238, y: 154, label: "INTERPRET" },
        { x: 300, y: 116, label: "PLAN" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="5" fill="#0B1020" stroke="#22D3EE" strokeWidth="1.5" />
          <text x={n.x - 6} y={n.y - 12} fontSize="9" className="font-mono" fill="#CBD5E1" letterSpacing="1.2" textAnchor="end">
            {n.label}
          </text>
        </g>
      ))}

      {/* 7-DoF arm */}
      <g className="arm-sway" style={{ transformOrigin: "392px 392px" }}>
        <path
          d="M392 392 L392 334 L392 300 L334 214 L310 180 L378 130 L412 140"
          fill="none"
          stroke="url(#armLink)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        />
        <path d="M392 392 L392 334 L392 300 L334 214 L310 180 L378 130 L412 140" fill="none" stroke="#0B1020" strokeWidth="1" strokeOpacity="0.35" />
        {joints.map((j, i) => (
          <g key={i}>
            <circle cx={j.x} cy={j.y} r={j.r} fill="#0B1020" stroke="#CBD5E1" strokeWidth="2" />
            <circle cx={j.x} cy={j.y} r="2" fill={i === 6 ? "#22D3EE" : "#64748B"} />
          </g>
        ))}
        {/* gripper */}
        <path d="M418 144 l10 4 l14 -6 M418 144 l10 4 l12 12" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="442" cy="150" r="14" fill="none" stroke="#22D3EE" strokeOpacity="0.45" strokeDasharray="2 3" />
      </g>
      <rect x="362" y="392" width="60" height="12" rx="2" fill="#1E293B" stroke="#475569" />
      {joints.map((j, i) => (
        <text key={i} x={j.x + (i === 0 ? 40 : i < 3 ? 16 : i === 3 || i === 4 ? -16 : 0)} y={j.y + (i >= 5 ? -14 : 4)} fontSize="8" className="font-mono" fill="#64748B" textAnchor={i === 3 || i === 4 ? "end" : i >= 5 ? "middle" : "start"}>
          {`J${i + 1}`}
        </text>
      ))}
      <text x="500" y="428" fontSize="9" className="font-mono" fill="#94A3B8" letterSpacing="1.2" textAnchor="end">
        7-DOF MANIPULATOR
      </text>
    </svg>
  );
}
