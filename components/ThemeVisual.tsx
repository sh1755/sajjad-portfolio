/** Small, consistent line motifs — one per research theme. */
export function ThemeVisual({ kind, className }: { kind: "hri" | "language" | "learning" | "sustainable"; className?: string }) {
  const stroke = "#94A3B8";
  const accent = "#22D3EE";
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
      <rect x="0.5" y="0.5" width="199" height="119" rx="10" fill="#0B1020" stroke="#232C47" />
      {kind === "hri" && (
        <g fill="none" strokeLinecap="round">
          {[
            [40, 88, 32, 60],
            [40, 88, 42, 52],
            [40, 88, 52, 54],
            [40, 88, 60, 60],
            [40, 88, 24, 72],
          ].map(([x1, y1, x2, y2], i) => (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="1.4" />
              <circle cx={x2} cy={y2} r="2.5" fill={accent} stroke="none" />
            </g>
          ))}
          <path d="M70 70 C 100 70, 110 50, 130 50" stroke={accent} strokeWidth="1.6" strokeDasharray="3 4" />
          <path d="M150 96 V76 L136 54 L156 38 L170 44" stroke={stroke} strokeWidth="6" strokeLinejoin="round" />
          <circle cx="150" cy="76" r="4" fill="#0B1020" stroke={accent} strokeWidth="1.5" />
          <circle cx="136" cy="54" r="4" fill="#0B1020" stroke={accent} strokeWidth="1.5" />
          <circle cx="156" cy="38" r="4" fill="#0B1020" stroke={accent} strokeWidth="1.5" />
        </g>
      )}
      {kind === "language" && (
        <g fill="none">
          <rect x="22" y="30" width="78" height="26" rx="13" stroke={stroke} strokeWidth="1.4" />
          <text x="61" y="47" textAnchor="middle" fontSize="10" fill="#CBD5E1" className="font-mono">
            &quot;make tea&quot;
          </text>
          <rect x="22" y="66" width="78" height="26" rx="13" stroke={stroke} strokeWidth="1.4" />
          <text x="61" y="83" textAnchor="middle" fontSize="10" fill="#CBD5E1" className="font-mono">
            &quot;Tee bitte&quot;
          </text>
          <path d="M104 43 C 120 43, 120 61, 132 61 M104 79 C 120 79, 120 61, 132 61" stroke={accent} strokeWidth="1.5" />
          <rect x="132" y="48" width="50" height="26" rx="4" stroke={accent} strokeWidth="1.5" />
          <text x="157" y="65" textAnchor="middle" fontSize="8.5" fill={accent} className="font-mono">
            TEA()
          </text>
        </g>
      )}
      {kind === "learning" && (
        <g fill="none">
          {[
            [40, 40],
            [80, 40],
            [80, 80],
            [120, 60],
            [160, 60],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="9" stroke={i === 2 ? accent : stroke} strokeWidth="1.5" />
          ))}
          <path d="M49 40 H71 M80 49 V71 M88 44 L112 56 M88 76 L112 64 M129 60 H151" stroke={stroke} strokeWidth="1.3" />
          <path d="M88 76 L112 64" stroke={accent} strokeWidth="1.8" />
          <text x="100" y="104" textAnchor="middle" fontSize="8" fill="#64748B" className="font-mono" letterSpacing="1">
            PRE → SKILL → EFFECT
          </text>
        </g>
      )}
      {kind === "sustainable" && (
        <g fill="none">
          <path d="M20 90 H180" stroke="#334155" />
          <path d="M20 90 C 50 90, 60 30, 100 30 S 150 90, 180 90" stroke={stroke} strokeWidth="1.4" strokeDasharray="2 4" />
          <path d="M20 90 C 60 90, 70 45, 100 45 S 140 90, 180 90" stroke={accent} strokeWidth="2" />
          <text x="100" y="24" textAnchor="middle" fontSize="8" fill="#64748B" className="font-mono" letterSpacing="1">
            ENERGY ↓  SMOOTHNESS ↑
          </text>
        </g>
      )}
    </svg>
  );
}
