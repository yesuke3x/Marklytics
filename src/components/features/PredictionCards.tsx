const PREDICTIONS = [
  {
    id: "engagement",
    title: "[Prediction 1 Title]",
    subtitle: "Engagement Forecast",
    value: "—",
    change: "+0%",
    positive: true,
    color: "#6C63FF",
    desc: "[Prediction 1 placeholder description. AI model output will appear here after data is populated.]",
    confidence: 0,
    model: "[Model Placeholder]",
    indicators: [
      { label: "Training Accuracy", val: "0%" },
      { label: "Validation Loss", val: "0.000" },
      { label: "Features Used", val: "0" },
    ],
  },
  {
    id: "reach",
    title: "[Prediction 2 Title]",
    subtitle: "Reach Forecast",
    value: "—",
    change: "+0%",
    positive: true,
    color: "#00D4FF",
    desc: "[Prediction 2 placeholder description. AI model output will appear here after data is populated.]",
    confidence: 0,
    model: "[Model Placeholder]",
    indicators: [
      { label: "Training Accuracy", val: "0%" },
      { label: "Validation Loss", val: "0.000" },
      { label: "Features Used", val: "0" },
    ],
  },
  {
    id: "roi",
    title: "[Prediction 3 Title]",
    subtitle: "ROI Forecast",
    value: "—",
    change: "+0%",
    positive: true,
    color: "#FF6B9D",
    desc: "[Prediction 3 placeholder description. AI model output will appear here after data is populated.]",
    confidence: 0,
    model: "[Model Placeholder]",
    indicators: [
      { label: "Training Accuracy", val: "0%" },
      { label: "Validation Loss", val: "0.000" },
      { label: "Features Used", val: "0" },
    ],
  },
];

export default function PredictionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {PREDICTIONS.map((p) => (
        <div
          key={p.id}
          className="glass-card rounded-2xl p-6 relative overflow-hidden"
        >
          {/* Glow bg */}
          <div
            className="absolute inset-0 opacity-5"
            style={{ background: `radial-gradient(ellipse at top right, ${p.color}, transparent)` }}
          />

          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="font-mono-code text-[10px] text-white/30 tracking-widest uppercase">
                {p.subtitle}
              </span>
              <h4 className="font-grotesk font-semibold text-white mt-0.5">{p.title}</h4>
            </div>
            <div
              className="px-2 py-1 rounded-lg text-xs font-mono-code"
              style={{
                background: `${p.color}15`,
                color: p.color,
                border: `1px solid ${p.color}30`,
              }}
            >
              {p.change}
            </div>
          </div>

          {/* Big value */}
          <div
            className="font-syne font-black text-5xl mb-1"
            style={{ color: p.color, textShadow: `0 0 30px ${p.color}40` }}
          >
            {p.value}
          </div>

          <p className="font-inter text-xs text-white/35 leading-relaxed mb-4">{p.desc}</p>

          {/* Confidence */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-mono-code text-[10px] text-white/25">CONFIDENCE SCORE</span>
              <span className="font-mono-code text-[10px]" style={{ color: p.color }}>
                {p.confidence}%
              </span>
            </div>
            <div className="meter-bar">
              <div
                className="meter-fill"
                style={{ width: `${p.confidence}%`, background: p.color }}
              />
            </div>
          </div>

          {/* Indicators */}
          <div className="space-y-2 border-t border-white/5 pt-4">
            {p.indicators.map((ind, i) => (
              <div key={i} className="flex justify-between">
                <span className="font-inter text-xs text-white/30">{ind.label}</span>
                <span className="font-mono-code text-xs text-white/50">{ind.val}</span>
              </div>
            ))}
          </div>

          {/* Model tag */}
          <div className="mt-3">
            <span className="font-mono-code text-[10px] text-white/20">{p.model}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
