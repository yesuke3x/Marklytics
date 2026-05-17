import teamPhoto from "@/assets/team-photo.jpg";

const AUTHORS = [
  {
    name: "[Author 1 Name]",
    role: "[Student Role / Position]",
    id: "[Student ID: XXXXXXXX]",
    bio: "[Author 1 bio placeholder — describe academic background, research interests, and contribution to this project here.]",
    skills: ["[Skill A]", "[Skill B]", "[Skill C]", "[Skill D]"],
    email: "[author1@narxoz.kz]",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "[Author 2 Name]",
    role: "[Student Role / Position]",
    id: "[Student ID: XXXXXXXX]",
    bio: "[Author 2 bio placeholder — describe academic background, research interests, and contribution to this project here.]",
    skills: ["[Skill A]", "[Skill B]", "[Skill C]", "[Skill D]"],
    email: "[author2@narxoz.kz]",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
];

export default function AuthorCards() {
  return (
    <div className="space-y-8">
      {/* Team photo banner */}
      <div className="relative rounded-3xl overflow-hidden h-56">
        <img src={teamPhoto} alt="Team" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14] via-transparent to-[#080C14]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] to-transparent" />
        <div className="absolute bottom-6 left-6">
          <span className="font-mono-code text-xs text-[#6C63FF] tracking-widest">RESEARCH TEAM</span>
          <h3 className="font-syne font-bold text-3xl text-white mt-1">Meet the Authors</h3>
        </div>
        <div className="absolute top-4 right-4">
          <span className="font-mono-code text-xs px-3 py-1 rounded-full border border-[rgba(108,99,255,0.3)] text-[#6C63FF]">
            Narxoz University · 2025
          </span>
        </div>
      </div>

      {/* Author cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {AUTHORS.map((author, i) => (
          <div key={i} className="glass-card rounded-2xl p-6 relative overflow-hidden">
            {/* Bg glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
              style={{
                background: `radial-gradient(circle at top right, ${i === 0 ? "#6C63FF" : "#00D4FF"}, transparent)`,
              }}
            />

            {/* Profile */}
            <div className="flex items-start gap-4 mb-5">
              <div className="relative flex-shrink-0">
                <img
                  src={author.img}
                  alt={author.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                  style={{
                    border: `2px solid ${i === 0 ? "rgba(108,99,255,0.4)" : "rgba(0,212,255,0.4)"}`,
                  }}
                />
                <div
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#080C14]"
                  style={{ background: i === 0 ? "#6C63FF" : "#00D4FF" }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-syne font-bold text-xl text-white truncate">{author.name}</h4>
                <p className="font-grotesk text-sm font-medium" style={{ color: i === 0 ? "#6C63FF" : "#00D4FF" }}>
                  {author.role}
                </p>
                <p className="font-mono-code text-xs text-white/25 mt-0.5">{author.id}</p>
              </div>
            </div>

            {/* Bio */}
            <p className="font-inter text-sm text-white/40 leading-relaxed mb-4">{author.bio}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {author.skills.map((skill, j) => (
                <span
                  key={j}
                  className="font-mono-code text-[10px] px-2 py-1 rounded-full"
                  style={{
                    background: `${i === 0 ? "rgba(108,99,255,0.1)" : "rgba(0,212,255,0.1)"}`,
                    color: i === 0 ? "#A9A4FF" : "#80ECFF",
                    border: `1px solid ${i === 0 ? "rgba(108,99,255,0.2)" : "rgba(0,212,255,0.2)"}`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 pt-3 border-t border-white/5">
              <svg className="w-3.5 h-3.5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-mono-code text-xs text-white/30">{author.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
