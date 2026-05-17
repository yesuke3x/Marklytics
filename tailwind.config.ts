import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: {
          primary: "#080C14",
          secondary: "#0D1220",
          card: "#111827",
          glass: "rgba(17,24,39,0.6)",
        },
        accent: {
          violet: "#6C63FF",
          cyan: "#00D4FF",
          pink: "#FF6B9D",
          gold: "#FFD700",
        },
        border: {
          subtle: "rgba(108,99,255,0.2)",
          glow: "rgba(108,99,255,0.5)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-violet-cyan":
          "linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #080C14 0%, #0D1220 50%, #080C14 100%)",
        "mesh-glow":
          "radial-gradient(ellipse at 20% 50%, rgba(108,99,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.1) 0%, transparent 60%)",
      },
      boxShadow: {
        violet: "0 0 20px rgba(108,99,255,0.4), 0 0 60px rgba(108,99,255,0.1)",
        cyan: "0 0 20px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.1)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        glow: "0 0 40px rgba(108,99,255,0.3)",
        "glow-cyan": "0 0 40px rgba(0,212,255,0.3)",
        card: "0 4px 24px rgba(0,0,0,0.5), 0 1px 0 rgba(108,99,255,0.1)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "scan": "scan 4s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "typewriter": "typewriter 3s steps(40) forwards",
        "blink": "blink 1s step-end infinite",
        "slide-up": "slideUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108,99,255,0.4)" },
          "50%": { boxShadow: "0 0 60px rgba(108,99,255,0.8), 0 0 100px rgba(108,99,255,0.3)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
