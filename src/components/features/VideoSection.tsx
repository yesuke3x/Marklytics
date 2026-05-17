import aiImg from "@/assets/ai-bg.jpg";

export default function VideoSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Video placeholder */}
      <div className="relative rounded-2xl overflow-hidden aspect-video glass-card border-[rgba(108,99,255,0.2)] group">
        {/* Placeholder background */}
        <div className="absolute inset-0 bg-[#080C14] flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent" />
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="relative group/play">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover/play:scale-110"
              style={{
                background: "rgba(108,99,255,0.2)",
                border: "2px solid rgba(108,99,255,0.5)",
                boxShadow: "0 0 40px rgba(108,99,255,0.3)",
              }}
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            {/* Pulse rings */}
            <div
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "rgba(108,99,255,0.15)" }}
            />
          </button>
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full" />
            </div>
            <span className="font-mono-code text-xs text-white/30">0:00 / 0:00</span>
          </div>
        </div>

        {/* Corner badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="font-mono-code text-[10px] px-2 py-1 rounded-full bg-[rgba(108,99,255,0.2)] border border-[rgba(108,99,255,0.3)] text-[#6C63FF]">
            ▶ VIDEO PLACEHOLDER
          </span>
        </div>
      </div>

      {/* Presenter / Avatar side */}
      <div className="space-y-6">
        <div>
          <span className="section-label">PRESENTATION</span>
          <h3 className="font-syne font-bold text-3xl text-white mt-3">
            [Video Section <span className="gradient-text">Title Placeholder</span>]
          </h3>
        </div>

        <p className="font-inter text-white/50 leading-relaxed">
          [Video section description placeholder — describe what the video demonstrates, its purpose in the research context, and key takeaways for viewers.]
        </p>

        {/* Avatar */}
        <div className="flex items-center gap-4 glass-card rounded-2xl p-4">
          <div className="relative">
            <img
              src={aiImg}
              alt="Presenter"
              className="w-14 h-14 rounded-2xl object-cover"
              style={{ border: "2px solid rgba(0,212,255,0.3)" }}
            />
            <div
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#080C14] bg-[#00D4FF]"
              style={{ boxShadow: "0 0 8px rgba(0,212,255,0.5)" }}
            />
          </div>
          <div>
            <div className="font-grotesk font-semibold text-white text-sm">[Presenter Name]</div>
            <div className="font-inter text-xs text-white/40">[Presenter Role]</div>
            <div className="font-mono-code text-[10px] text-[#00D4FF] mt-0.5">● LIVE NOW</div>
          </div>
        </div>

        {/* Video metadata */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Duration", val: "0:00" },
            { label: "Format", val: "[Format]" },
            { label: "Language", val: "[Lang]" },
          ].map((m, i) => (
            <div key={i} className="glass-card rounded-xl p-3 text-center">
              <div className="font-grotesk font-semibold text-sm text-white">{m.val}</div>
              <div className="font-mono-code text-[10px] text-white/30 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
