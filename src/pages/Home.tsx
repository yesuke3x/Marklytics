import HeroSection from "@/components/features/HeroSection";
import StatsGrid from "@/components/features/StatsGrid";
import ImageCarousel from "@/components/features/ImageCarousel";
import analyticsImg from "@/assets/analytics-bg.jpg";
import { NavLink } from "react-router-dom";

const METHOD_STEPS = [
  {
    num: "01",
    title: "[Method Step 1]",
    desc: "[Method step 1 description placeholder — explain the first methodological approach used in this research.]",
    color: "#6C63FF",
  },
  {
    num: "02",
    title: "[Method Step 2]",
    desc: "[Method step 2 description placeholder — explain the second methodological approach used in this research.]",
    color: "#00D4FF",
  },
  {
    num: "03",
    title: "[Method Step 3]",
    desc: "[Method step 3 description placeholder — explain the third methodological approach used in this research.]",
    color: "#FF6B9D",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <HeroSection />

      {/* Stats */}
      <StatsGrid />

      {/* Intro section */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* BG image accent */}
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-10 overflow-hidden rounded-3xl">
          <img src={analyticsImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080C14]" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <span className="section-label">ABOUT THIS RESEARCH</span>
          <h2 className="section-title text-4xl md:text-5xl text-white mt-4 mb-6">
            Understanding Social Media
            <br />
            <span className="gradient-text">Campaign Effectiveness</span>
          </h2>
          <p className="font-inter text-white/50 leading-relaxed text-lg mb-5">
            [Research introduction placeholder — describe the overarching goal of this project, the problem statement, and why social media campaign effectiveness analysis matters in the modern ICT landscape.]
          </p>
          <p className="font-inter text-white/40 leading-relaxed mb-8">
            [Extended description placeholder — provide context about the scope of this research, the data sources used, and the expected impact of the findings for Narxoz University's ICT department in 2025.]
          </p>
          <div className="flex flex-wrap gap-4">
            <NavLink to="/analysis" className="btn-glow px-6 py-3 rounded-xl font-grotesk font-semibold text-sm relative z-10">
              <span className="relative z-10">Read Full Analysis</span>
            </NavLink>
            <NavLink to="/about" className="btn-outline-glow px-6 py-3 rounded-xl font-grotesk font-semibold text-sm">
              Meet the Team
            </NavLink>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <ImageCarousel />

      {/* Method Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="section-label">METHODOLOGY</span>
          <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
            Our <span className="gradient-text">Approach</span>
          </h2>
          <p className="font-inter text-white/40 mt-4 max-w-xl mx-auto">
            [Methodology overview placeholder — briefly introduce the analytical framework used throughout this research.]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {METHOD_STEPS.map((m) => (
            <div
              key={m.num}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Number watermark */}
              <span
                className="font-syne font-black text-8xl absolute -top-2 -right-2 opacity-5 select-none"
                style={{ color: m.color }}
              >
                {m.num}
              </span>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${m.color}15`, border: `1px solid ${m.color}30` }}
              >
                <span className="font-mono-code font-bold text-sm" style={{ color: m.color }}>
                  {m.num}
                </span>
              </div>

              <h3 className="font-syne font-bold text-xl text-white mb-3">{m.title}</h3>
              <p className="font-inter text-sm text-white/40 leading-relaxed">{m.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                style={{ background: `linear-gradient(90deg, ${m.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 py-10 mb-10">
        <div
          className="relative rounded-3xl p-10 md:p-16 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(0,212,255,0.08) 100%)",
            border: "1px solid rgba(108,99,255,0.2)",
          }}
        >
          {/* Orbs */}
          <div
            className="orb w-80 h-80 -top-20 -right-20 opacity-30"
            style={{ background: "radial-gradient(circle, rgba(108,99,255,0.2), transparent)" }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-2">
                Explore The <span className="gradient-text">AI Insights</span>
              </h2>
              <p className="font-inter text-white/40 text-sm max-w-md">
                [CTA description placeholder — invite users to explore the AI assistant predictions and deep analysis sections.]
              </p>
            </div>
            <NavLink
              to="/ai-assistant"
              className="btn-glow px-8 py-4 rounded-xl font-grotesk font-semibold flex-shrink-0 relative z-10"
            >
              <span className="relative z-10">Try AI Assistant →</span>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
