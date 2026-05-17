import { NavLink } from "react-router-dom";

export default function Footer() {
  const year = 2025;

  return (
    <footer className="relative z-10 border-t border-[rgba(108,99,255,0.12)] mt-24">
      <div className="bg-[rgba(8,12,20,0.9)] backdrop-blur-xl">
        {/* Top section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-syne font-black text-2xl text-white">MARKLYTICS</span>
              <span className="font-syne font-black text-2xl text-[#6C63FF]">·</span>
              <span
                className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse-slow"
                style={{ boxShadow: "0 0 8px rgba(108,99,255,0.8)" }}
              />
            </div>
            <p className="font-inter text-sm text-white/40 leading-relaxed max-w-xs">
              Social Media Marketing Campaign Effectiveness Analysis — an ICT student research project exploring data-driven approaches to modern digital marketing.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="font-mono-code text-xs text-[#00D4FF]">v1.0.0</span>
              <span className="text-white/20">·</span>
              <span className="font-mono-code text-xs text-white/30">BUILD_2025</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-grotesk font-semibold text-white/80 text-sm mb-4 tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/analysis", label: "Analysis" },
                { to: "/visualization", label: "Visualization" },
                { to: "/ai-assistant", label: "AI Assistant" },
                { to: "/about", label: "About" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="font-inter text-sm text-white/40 hover:text-[#6C63FF] transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-grotesk font-semibold text-white/80 text-sm mb-4 tracking-wider uppercase">
              Project Info
            </h4>
            <ul className="space-y-2 font-inter text-sm text-white/40">
              <li>
                <span className="text-[#6C63FF]">University</span>
                <br />
                Narxoz University
              </li>
              <li>
                <span className="text-[#6C63FF]">Discipline</span>
                <br />
                Information &amp; Communication Technology
              </li>
              <li>
                <span className="text-[#6C63FF]">Year</span>
                <br />
                {year}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.04)] px-6 py-5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-inter text-xs text-white/25">
              © {year} MARKLYTICS · Narxoz University ICT Department · All rights reserved
            </p>
            <div className="flex items-center gap-4">
              <span className="font-mono-code text-xs text-white/25">
                Authors: [Author 1] · [Author 2]
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                <span className="font-mono-code text-xs text-[#00D4FF]/60">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
