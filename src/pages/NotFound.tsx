import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2,
    }));

    let af: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(108,99,255,0.3)";
        ctx.fill();
      });
      af = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(af);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 text-center px-6">
        <div
          className="font-syne font-black text-[200px] leading-none select-none"
          style={{
            background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,255,0.08))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>
        <h2 className="font-syne font-bold text-3xl text-white -mt-8 mb-4">
          Page <span className="gradient-text">Not Found</span>
        </h2>
        <p className="font-inter text-white/40 text-sm mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist in the MARKLYTICS dataset.
        </p>
        <NavLink to="/" className="btn-glow px-6 py-3 rounded-xl font-grotesk font-semibold relative z-10">
          <span className="relative z-10">← Back to Home</span>
        </NavLink>
      </div>
    </div>
  );
}
