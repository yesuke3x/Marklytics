import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/analysis", label: "Analysis" },
  { path: "/visualization", label: "Visualization" },
  { path: "/ai-assistant", label: "AI Assistant" },
  { path: "/about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(8,12,20,0.92)] backdrop-blur-xl border-b border-[rgba(108,99,255,0.15)] shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center">
            <span className="font-syne font-black text-xl tracking-tight text-white">
              MARKLYTICS
            </span>
            <span className="font-syne font-black text-xl text-[#6C63FF]">·</span>
            <span
              className="w-2 h-2 rounded-full bg-[#6C63FF] ml-0.5 animate-pulse-slow"
              style={{ boxShadow: "0 0 8px rgba(108,99,255,0.8)" }}
            />
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 font-grotesk text-sm font-medium transition-all duration-200 rounded-lg ${
                  isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white/90 hover:bg-white/5"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#6C63FF]"
                      style={{ boxShadow: "0 0 6px rgba(108,99,255,0.8)" }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/analysis"
            className="hidden md:block btn-glow px-4 py-2 rounded-lg text-sm font-grotesk font-semibold relative z-10"
          >
            Launch Analysis
          </NavLink>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 border-b border-[rgba(108,99,255,0.15)]" : "max-h-0"
        }`}
        style={{ background: "rgba(8,12,20,0.97)", backdropFilter: "blur(24px)" }}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `px-4 py-3 font-grotesk text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? "text-white bg-[rgba(108,99,255,0.15)] border border-[rgba(108,99,255,0.3)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
