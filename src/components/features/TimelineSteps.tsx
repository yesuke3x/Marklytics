const STEPS = [
  {
    step: "01",
    phase: "Research Phase",
    title: "[Phase 1 Title Placeholder]",
    desc: "[Phase 1 description placeholder — describe data collection methods, sources, and timeline for this stage of the ICT research project.]",
    date: "[Month YYYY]",
    tags: ["[Tag A]", "[Tag B]"],
    color: "#6C63FF",
  },
  {
    step: "02",
    phase: "Data Analysis",
    title: "[Phase 2 Title Placeholder]",
    desc: "[Phase 2 description placeholder — describe data cleaning, preprocessing, and analytical techniques applied to the campaign data.]",
    date: "[Month YYYY]",
    tags: ["[Tag A]", "[Tag B]", "[Tag C]"],
    color: "#00D4FF",
  },
  {
    step: "03",
    phase: "Modeling",
    title: "[Phase 3 Title Placeholder]",
    desc: "[Phase 3 description placeholder — describe predictive modeling approaches, ML algorithms, and model training/validation procedures.]",
    date: "[Month YYYY]",
    tags: ["[Tag A]", "[Tag B]"],
    color: "#FF6B9D",
  },
  {
    step: "04",
    phase: "Conclusions",
    title: "[Phase 4 Title Placeholder]",
    desc: "[Phase 4 description placeholder — describe final conclusions, recommendations, and strategic insights derived from the analysis.]",
    date: "[Month YYYY]",
    tags: ["[Tag A]", "[Tag B]", "[Tag C]"],
    color: "#FFD700",
  },
];

export default function TimelineSteps() {
  return (
    <div className="relative pl-14">
      {STEPS.map((step, i) => (
        <div key={i} className="timeline-item relative pb-10">
          {/* Step number circle */}
          <div
            className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center font-mono-code font-bold text-xs z-10"
            style={{
              background: `${step.color}20`,
              border: `2px solid ${step.color}60`,
              color: step.color,
              boxShadow: `0 0 15px ${step.color}30`,
              transform: "translateX(-52px)",
            }}
          >
            {step.step}
          </div>

          {/* Content */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
              <div>
                <span
                  className="font-mono-code text-[10px] tracking-widest"
                  style={{ color: step.color }}
                >
                  {step.phase.toUpperCase()}
                </span>
                <h3 className="font-syne font-bold text-xl text-white mt-1">{step.title}</h3>
              </div>
              <div
                className="flex-shrink-0 px-3 py-1 rounded-full border font-mono-code text-xs"
                style={{
                  borderColor: `${step.color}30`,
                  color: `${step.color}80`,
                }}
              >
                {step.date}
              </div>
            </div>

            <p className="font-inter text-sm text-white/40 leading-relaxed mb-4">{step.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {step.tags.map((tag, j) => (
                <span
                  key={j}
                  className="font-mono-code text-[10px] px-2 py-1 rounded-full"
                  style={{
                    background: `${step.color}10`,
                    color: `${step.color}80`,
                    border: `1px solid ${step.color}20`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
