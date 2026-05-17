const TECH_STACK = [
  { name: "Python", color: "#6C63FF", icon: "🐍", desc: "Data Processing" },
  { name: "React", color: "#00D4FF", icon: "⚛️", desc: "Frontend" },
  { name: "Pandas", color: "#FFD700", icon: "🐼", desc: "Data Wrangling" },
  { name: "NumPy", color: "#FF6B9D", icon: "🔢", desc: "Computation" },
  { name: "Recharts", color: "#6C63FF", icon: "📊", desc: "Visualization" },
  { name: "Scikit", color: "#00D4FF", icon: "🤖", desc: "ML Models" },
  { name: "Jupyter", color: "#FF6B9D", icon: "📓", desc: "Notebooks" },
  { name: "TypeScript", color: "#FFD700", icon: "📘", desc: "Type Safety" },
  { name: "Tailwind", color: "#6C63FF", icon: "🎨", desc: "Styling" },
  { name: "Vite", color: "#00D4FF", icon: "⚡", desc: "Build Tool" },
];

export default function HexGrid() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center">
        {TECH_STACK.map((tech, i) => (
          <div
            key={i}
            className="group relative"
            style={{
              marginTop: i % 2 === 0 ? 0 : 20,
            }}
          >
            {/* Hex shape */}
            <div
              className="hex-cell w-24 h-24 flex flex-col items-center justify-center cursor-pointer relative"
              style={{
                background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}08)`,
                border: `1px solid ${tech.color}30`,
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `${tech.color}20`,
                  filter: `blur(8px)`,
                }}
              />

              <span className="text-2xl mb-1 relative z-10">{tech.icon}</span>
              <span
                className="font-grotesk font-semibold text-xs relative z-10"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            </div>

            {/* Tooltip */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap"
            >
              <span
                className="font-mono-code text-[10px] px-2 py-1 rounded-full"
                style={{
                  background: `${tech.color}20`,
                  color: tech.color,
                  border: `1px solid ${tech.color}30`,
                }}
              >
                {tech.desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative bottom line */}
      <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[rgba(108,99,255,0.3)] to-transparent" />
    </div>
  );
}
