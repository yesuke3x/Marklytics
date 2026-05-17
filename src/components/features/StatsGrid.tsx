import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
}

const STATS: Stat[] = [
  { value: 0, suffix: "", label: "Campaigns Analyzed", sublabel: "[Placeholder value]", color: "#6C63FF" },
  { value: 0, suffix: "%", label: "Avg. Engagement Rate", sublabel: "[Placeholder value]", color: "#00D4FF" },
  { value: 0, suffix: "x", label: "ROI Multiplier", sublabel: "[Placeholder value]", color: "#FF6B9D" },
  { value: 0, suffix: "K", label: "Data Points", sublabel: "[Placeholder value]", color: "#FFD700" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || target === 0) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 2000, active);

  return (
    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-10 transition-opacity group-hover:opacity-20"
        style={{ background: `radial-gradient(circle at top right, ${stat.color}, transparent)` }}
      />
      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full"
        style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
      />

      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
      >
        <div className="w-3 h-3 rounded-sm" style={{ background: stat.color }} />
      </div>

      <div className="flex items-end gap-1 mb-1">
        <span
          className="font-syne font-black text-4xl md:text-5xl"
          style={{ color: stat.color, textShadow: `0 0 30px ${stat.color}60` }}
        >
          {count}
        </span>
        <span
          className="font-syne font-black text-2xl mb-1"
          style={{ color: stat.color }}
        >
          {stat.suffix}
        </span>
      </div>

      <div className="font-grotesk font-semibold text-white/80 text-sm mb-1">{stat.label}</div>
      <div className="font-mono-code text-xs text-white/25">{stat.sublabel}</div>
    </div>
  );
}

export default function StatsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" ref={ref}>
      <div className="text-center mb-12">
        <span className="section-label">QUANTIFIED IMPACT</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          By The <span className="gradient-text">Numbers</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <StatCard key={i} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
