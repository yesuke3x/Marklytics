import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import heroWallpaper from "@/assets/hero-wallpaper.jpg";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#6C63FF", "#00D4FF", "#FF6B9D", "#A9A4FF"];

    // Initialize particles
    particlesRef.current = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.6 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pts = particlesRef.current;

      // Draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const hex = p.color;
        ctx.fillStyle = hex + Math.floor(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Wallpaper background */}
      <div className="absolute inset-0">
        <img
          src={heroWallpaper}
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14] via-transparent to-[#080C14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14] via-transparent to-[#080C14]" />
      </div>

      {/* BG Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Orbs */}
      <div
        className="orb w-96 h-96 top-1/4 left-1/4 animate-float-slow"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="orb w-80 h-80 bottom-1/4 right-1/4 animate-float-delayed"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)" }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px opacity-20 pointer-events-none z-10"
        style={{
          background: "linear-gradient(90deg, transparent, #6C63FF, transparent)",
          animation: "scan 8s linear infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(108,99,255,0.3)] bg-[rgba(108,99,255,0.05)] mb-6 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="font-mono-code text-xs text-[#00D4FF] tracking-widest">NARXOZ UNIVERSITY · ICT · 2025</span>
        </div>

        {/* Title */}
        <h1 className="font-syne font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
          <span className="block text-white">MARK</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #6C63FF 0%, #00D4FF 50%, #FF6B9D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradientShift 4s ease infinite",
            }}
          >
            LYTICS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-grotesk text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-4">
          Social Media Marketing Campaign{" "}
          <span className="text-white/90 font-medium">Effectiveness Analysis</span>
        </p>

        {/* Descriptor chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            "Data-Driven Insights",
            "AI-Powered Analytics",
            "Campaign Optimization",
            "Predictive Modeling",
          ].map((tag) => (
            <span
              key={tag}
              className="font-mono-code text-xs px-3 py-1 rounded-full border border-white/10 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NavLink
            to="/analysis"
            className="btn-glow px-8 py-4 rounded-xl text-base font-grotesk font-semibold relative z-10 flex items-center gap-2"
          >
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="relative z-10">Explore Analysis</span>
          </NavLink>
          <NavLink
            to="/visualization"
            className="btn-outline-glow px-8 py-4 rounded-xl text-base font-grotesk font-semibold flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            View Charts
          </NavLink>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono-code text-[10px] text-white/20 tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#6C63FF] to-transparent" />
        </div>
      </div>
    </section>
  );
}
