import { useState } from "react";
import ChartWrapper from "@/components/features/ChartWrapper";
import socialImg from "@/assets/social-network.jpg";
import analyticsImg from "@/assets/analytics-bg.jpg";
import neuralImg from "@/assets/neural-bg.jpg";

const MASONRY_IMAGES = [
  { src: socialImg, alt: "Social Network", label: "[Gallery 1]", aspect: "tall" },
  { src: analyticsImg, alt: "Analytics", label: "[Gallery 2]", aspect: "wide" },
  { src: neuralImg, alt: "Neural", label: "[Gallery 3]", aspect: "normal" },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
    alt: "Dashboard",
    label: "[Gallery 4]",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
    alt: "Campaign",
    label: "[Gallery 5]",
    aspect: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop",
    alt: "Data",
    label: "[Gallery 6]",
    aspect: "wide",
  },
];

export default function Visualization() {
  const [compareMode, setCompareMode] = useState(false);

  return (
    <div className="pt-24 pb-20">
      {/* Page header */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="section-label">VISUALIZATION</span>
          <div className="h-px flex-1 bg-gradient-to-r from-[rgba(108,99,255,0.3)] to-transparent" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <h1 className="font-syne font-black text-5xl md:text-7xl text-white mb-3">
              Data <span className="gradient-text">Charts</span>
            </h1>
            <p className="font-inter text-white/50 max-w-xl">
              [Visualization page description placeholder — explain the charts presented and what insights they communicate about campaign effectiveness.]
            </p>
          </div>

          {/* Compare toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="font-grotesk text-sm text-white/50">Compare Mode</span>
            <button
              onClick={() => setCompareMode(!compareMode)}
              className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                compareMode
                  ? "bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]"
                  : "bg-white/10"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                  compareMode ? "left-7" : "left-1"
                }`}
                style={compareMode ? { boxShadow: "0 0 8px rgba(108,99,255,0.5)" } : {}}
              />
            </button>
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all ${
                compareMode
                  ? "border-[rgba(108,99,255,0.4)] text-[#6C63FF]"
                  : "border-white/10 text-white/20"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${compareMode ? "bg-[#6C63FF] animate-pulse" : "bg-white/20"}`}
              />
              <span className="font-mono-code text-[10px]">{compareMode ? "ACTIVE" : "OFF"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 space-y-8">
        {/* Chart 1: Line */}
        <div className="relative">
          <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6C63FF] to-transparent rounded-full" />
          <div className="mb-4 pl-2">
            <span className="section-label">CHART 01</span>
            <h2 className="font-syne font-bold text-2xl text-white mt-1">
              [Line Chart Title] — <span className="gradient-text">Trend Analysis</span>
            </h2>
          </div>

          {compareMode ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChartWrapper
                type="line"
                title="[Period A]"
                subtitle="[Period A description placeholder]"
              />
              <ChartWrapper
                type="line"
                title="[Period B]"
                subtitle="[Period B description placeholder]"
              />
            </div>
          ) : (
            <ChartWrapper
              type="line"
              title="[Line Chart — Full View]"
              subtitle="[Chart subtitle placeholder — describe what this line chart shows over time.]"
            />
          )}
        </div>

        {/* Chart 2: Bar */}
        <div className="relative">
          <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D4FF] to-transparent rounded-full" />
          <div className="mb-4 pl-2">
            <span className="section-label" style={{ color: "#00D4FF" }}>CHART 02</span>
            <h2 className="font-syne font-bold text-2xl text-white mt-1">
              [Bar Chart Title] — <span style={{ color: "#00D4FF" }}>Platform Comparison</span>
            </h2>
          </div>

          {compareMode ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ChartWrapper
                type="bar"
                title="[Group A Comparison]"
                subtitle="[Group A description placeholder]"
              />
              <ChartWrapper
                type="bar"
                title="[Group B Comparison]"
                subtitle="[Group B description placeholder]"
              />
            </div>
          ) : (
            <ChartWrapper
              type="bar"
              title="[Bar Chart — Full View]"
              subtitle="[Chart subtitle placeholder — describe what platforms and metrics are compared.]"
            />
          )}
        </div>

        {/* Chart 3: Doughnut */}
        <div className="relative">
          <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B9D] to-transparent rounded-full" />
          <div className="mb-4 pl-2">
            <span className="section-label" style={{ color: "#FF6B9D" }}>CHART 03</span>
            <h2 className="font-syne font-bold text-2xl text-white mt-1">
              [Doughnut Chart Title] — <span style={{ color: "#FF6B9D" }}>Distribution</span>
            </h2>
          </div>

          <div className={compareMode ? "grid grid-cols-1 md:grid-cols-2 gap-5" : ""}>
            <ChartWrapper
              type="doughnut"
              title="[Distribution Chart — Full View]"
              subtitle="[Chart subtitle placeholder — describe what distribution or breakdown this doughnut chart shows.]"
            />
            {compareMode && (
              <ChartWrapper
                type="doughnut"
                title="[Distribution Chart — Compare View]"
                subtitle="[Comparison period description placeholder]"
              />
            )}
          </div>
        </div>
      </section>

      {/* Compare mode explanation */}
      {compareMode && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div
            className="rounded-2xl p-6 flex items-start gap-4"
            style={{
              background: "rgba(108,99,255,0.05)",
              border: "1px solid rgba(108,99,255,0.2)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(108,99,255,0.15)" }}
            >
              <span className="text-lg">🔀</span>
            </div>
            <div>
              <h4 className="font-grotesk font-semibold text-white mb-1">Compare Mode Active</h4>
              <p className="font-inter text-sm text-white/40">
                [Compare mode explanation placeholder — explain what periods or groups are being compared side-by-side in this view mode.]
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Image Masonry */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <span className="section-label">VISUAL GALLERY</span>
          <h2 className="section-title text-3xl md:text-4xl text-white mt-3">
            Research <span className="gradient-text">Imagery</span>
          </h2>
          <p className="font-inter text-white/40 mt-2 max-w-xl">
            [Gallery description placeholder — describe the visual materials, infographics, and supporting images used in this research.]
          </p>
        </div>

        <div className="masonry-grid">
          {MASONRY_IMAGES.map((img, i) => (
            <div key={i} className="masonry-item relative group">
              <div className="glass-card rounded-2xl overflow-hidden">
                <div
                  className={`relative overflow-hidden ${
                    img.aspect === "tall"
                      ? "h-72"
                      : img.aspect === "wide"
                      ? "h-36"
                      : "h-52"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-grotesk text-sm font-medium text-white">{img.label}</span>
                  </div>
                </div>
                <div className="p-3">
                  <span className="font-mono-code text-[10px] text-white/25">{img.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
