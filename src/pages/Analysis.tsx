import ScenarioCards from "@/components/features/ScenarioCards";
import DataTable from "@/components/features/DataTable";
import VideoSection from "@/components/features/VideoSection";
import analyticsImg from "@/assets/analytics-bg.jpg";

const SIDEBAR_METRICS = [
  { label: "Primary Metric", value: "—", color: "#6C63FF", icon: "◈" },
  { label: "Secondary Metric", value: "—", color: "#00D4FF", icon: "◉" },
  { label: "Tertiary Metric", value: "—", color: "#FF6B9D", icon: "◆" },
  { label: "Benchmark", value: "—", color: "#FFD700", icon: "◎" },
  { label: "Sample Size", value: "—", color: "#A9A4FF", icon: "◈" },
  { label: "Time Period", value: "—", color: "#80ECFF", icon: "◉" },
];

export default function Analysis() {
  return (
    <div className="pt-24 pb-20">
      {/* Page hero */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 h-80">
          <img src={analyticsImg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080C14]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">ANALYSIS</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[rgba(108,99,255,0.3)] to-transparent" />
          </div>
          <h1 className="font-syne font-black text-5xl md:text-7xl text-white mb-4">
            Campaign{" "}
            <span className="gradient-text">Analysis</span>
          </h1>
          <p className="font-inter text-white/50 text-lg max-w-2xl">
            [Analysis page overview placeholder — describe what metrics and analytical frameworks are covered on this page.]
          </p>
        </div>
      </section>

      {/* 2-column text + metrics sidebar */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main text block — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section 1 */}
            <div className="glass-card rounded-2xl p-8">
              <span className="section-label">BACKGROUND</span>
              <h2 className="font-syne font-bold text-2xl text-white mt-3 mb-4">
                [Analysis Section 1 Title]
              </h2>
              <div className="space-y-4 font-inter text-white/50 leading-relaxed text-sm">
                <p>
                  [Analysis paragraph 1 placeholder — introduce the context and background of the social media campaign analysis. Explain the scope, objectives, and relevance of studying campaign effectiveness in modern digital marketing environments.]
                </p>
                <p>
                  [Analysis paragraph 2 placeholder — describe the specific social media platforms and campaign types included in this study. Mention relevant literature and prior research that informed this analysis.]
                </p>
                <p>
                  [Analysis paragraph 3 placeholder — outline the key research questions driving this analysis and explain why answering them contributes to the broader ICT field at Narxoz University.]
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="glass-card rounded-2xl p-8">
              <span className="section-label">KEY FINDINGS</span>
              <h2 className="font-syne font-bold text-2xl text-white mt-3 mb-4">
                [Analysis Section 2 Title]
              </h2>
              <div className="space-y-4 font-inter text-white/50 leading-relaxed text-sm">
                <p>
                  [Key findings paragraph 1 placeholder — describe the most significant finding from the campaign effectiveness data. Use specific metrics and comparison points to support the claim.]
                </p>
                <p>
                  [Key findings paragraph 2 placeholder — elaborate on secondary findings. Discuss trends, anomalies, or unexpected results discovered during the analysis process.]
                </p>
              </div>

              {/* Highlight box */}
              <div
                className="mt-6 p-4 rounded-xl"
                style={{
                  background: "rgba(108,99,255,0.08)",
                  border: "1px solid rgba(108,99,255,0.2)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(108,99,255,0.15)" }}
                  >
                    <span className="text-[#6C63FF] text-sm">💡</span>
                  </div>
                  <div>
                    <div className="font-grotesk font-semibold text-white text-sm mb-1">Key Insight</div>
                    <p className="font-inter text-xs text-white/40">
                      [Key insight callout placeholder — highlight the single most important takeaway from this section in a visually distinct box.]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="glass-card rounded-2xl p-8">
              <span className="section-label">INTERPRETATION</span>
              <h2 className="font-syne font-bold text-2xl text-white mt-3 mb-4">
                [Analysis Section 3 Title]
              </h2>
              <div className="space-y-4 font-inter text-white/50 leading-relaxed text-sm">
                <p>
                  [Interpretation paragraph 1 placeholder — provide academic interpretation of the findings. Connect results back to theoretical frameworks and existing literature.]
                </p>
                <p>
                  [Interpretation paragraph 2 placeholder — discuss practical implications for marketing professionals and businesses based on the findings of this study.]
                </p>
              </div>

              {/* Quote */}
              <blockquote
                className="mt-6 pl-4 border-l-2 border-[#00D4FF]"
                style={{ borderLeftColor: "#00D4FF" }}
              >
                <p className="font-inter italic text-white/40 text-sm">
                  "[Research quote placeholder — insert a relevant quote from literature or from the study itself that supports a key finding.]"
                </p>
                <cite className="font-mono-code text-xs text-[#00D4FF] mt-2 block">
                  — [Author, Year]
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Sidebar metrics — 1 col */}
          <div className="space-y-5">
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <span className="section-label mb-4 block">KEY METRICS</span>

              <div className="space-y-4">
                {SIDEBAR_METRICS.map((m, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs" style={{ color: m.color }}>{m.icon}</span>
                        <span className="font-inter text-xs text-white/50">{m.label}</span>
                      </div>
                      <span className="font-mono-code text-sm font-medium" style={{ color: m.color }}>
                        {m.value}
                      </span>
                    </div>
                    <div className="meter-bar">
                      <div
                        className="meter-fill"
                        style={{ width: "0%", background: m.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="font-mono-code text-[10px] text-white/20 mb-3">DATA SOURCE</div>
                <div className="font-inter text-xs text-white/30 leading-relaxed">
                  [Data source placeholder — describe where the metrics data originates from.]
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl" style={{ background: "rgba(0,212,255,0.05)", border: "1px solid rgba(0,212,255,0.1)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                  <span className="font-mono-code text-[10px] text-[#00D4FF]">LIVE DATA</span>
                </div>
                <p className="font-inter text-[10px] text-white/25 mt-1">[Placeholder: data updates and sync status]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Cards */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-10">
          <span className="section-label">SCENARIO ANALYSIS</span>
          <h2 className="section-title text-3xl md:text-4xl text-white mt-3">
            Projected <span className="gradient-text">Scenarios</span>
          </h2>
          <p className="font-inter text-white/40 mt-2 max-w-xl">
            [Scenario section description placeholder — explain the three scenarios modeled and the assumptions behind each.]
          </p>
        </div>
        <ScenarioCards />
      </section>

      {/* Data Table */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-10">
          <span className="section-label">RAW DATA</span>
          <h2 className="section-title text-3xl md:text-4xl text-white mt-3">
            Dataset <span className="gradient-text">Explorer</span>
          </h2>
          <p className="font-inter text-white/40 mt-2 max-w-xl">
            [Dataset description placeholder — describe the nature, collection method, and structure of the campaign dataset.]
          </p>
        </div>
        <DataTable />
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <span className="section-label">MEDIA</span>
          <h2 className="section-title text-3xl md:text-4xl text-white mt-3">
            Video <span className="gradient-text">Presentation</span>
          </h2>
        </div>
        <VideoSection />
      </section>
    </div>
  );
}
