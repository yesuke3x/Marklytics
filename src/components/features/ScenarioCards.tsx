const SCENARIOS = [
  {
    id: "growth",
    label: "Growth",
    emoji: "📈",
    color: "#00D4FF",
    borderColor: "rgba(0,212,255,0.3)",
    bgGlow: "rgba(0,212,255,0.05)",
    badge: "OPTIMISTIC",
    badgeColor: "#00D4FF",
    metrics: [
      { label: "Projected ROI", value: "—" },
      { label: "Engagement Lift", value: "—" },
      { label: "Reach Expansion", value: "—" },
    ],
    desc: "[Growth scenario placeholder — describe the optimistic campaign outcome conditions and projected results here.]",
    confidence: 0,
  },
  {
    id: "stable",
    label: "Stable",
    emoji: "⚖️",
    color: "#6C63FF",
    borderColor: "rgba(108,99,255,0.3)",
    bgGlow: "rgba(108,99,255,0.05)",
    badge: "REALISTIC",
    badgeColor: "#6C63FF",
    metrics: [
      { label: "Projected ROI", value: "—" },
      { label: "Engagement Lift", value: "—" },
      { label: "Reach Expansion", value: "—" },
    ],
    desc: "[Stable scenario placeholder — describe the realistic campaign outcome conditions and projected results here.]",
    confidence: 0,
  },
  {
    id: "decline",
    label: "Decline",
    emoji: "📉",
    color: "#FF6B9D",
    borderColor: "rgba(255,107,157,0.3)",
    bgGlow: "rgba(255,107,157,0.05)",
    badge: "PESSIMISTIC",
    badgeColor: "#FF6B9D",
    metrics: [
      { label: "Projected ROI", value: "—" },
      { label: "Engagement Lift", value: "—" },
      { label: "Reach Expansion", value: "—" },
    ],
    desc: "[Decline scenario placeholder — describe the pessimistic campaign outcome conditions and projected results here.]",
    confidence: 0,
  },
];

export default function ScenarioCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {SCENARIOS.map((s) => (
        <div
          key={s.id}
          className="rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
          style={{
            background: `${s.bgGlow}`,
            border: `1px solid ${s.borderColor}`,
            boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 20px ${s.bgGlow}`,
          }}
        >
          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
            style={{ background: `radial-gradient(circle at top right, ${s.color}, transparent)` }}
          />

          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <span
                className="font-mono-code text-[10px] tracking-widest px-2 py-1 rounded-full border mb-2 inline-block"
                style={{
                  color: s.badgeColor,
                  borderColor: s.borderColor,
                  background: `${s.bgGlow}`,
                }}
              >
                {s.badge}
              </span>
              <h3 className="font-syne font-bold text-2xl text-white flex items-center gap-2">
                {s.emoji} {s.label}
              </h3>
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-2 mb-5">
            {s.metrics.map((m, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="font-inter text-xs text-white/40">{m.label}</span>
                <span
                  className="font-mono-code text-sm font-medium"
                  style={{ color: s.color }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Confidence meter */}
          <div className="mb-4">
            <div className="flex justify-between mb-1.5">
              <span className="font-mono-code text-[10px] text-white/30">CONFIDENCE</span>
              <span className="font-mono-code text-[10px]" style={{ color: s.color }}>
                {s.confidence}%
              </span>
            </div>
            <div className="meter-bar">
              <div
                className="meter-fill"
                style={{
                  width: `${s.confidence}%`,
                  background: `linear-gradient(90deg, ${s.color}80, ${s.color})`,
                }}
              />
            </div>
          </div>

          {/* Description */}
          <p className="font-inter text-xs text-white/35 leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
