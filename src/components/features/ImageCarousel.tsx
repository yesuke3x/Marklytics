import { useState, useEffect } from "react";
import analyticsImg from "@/assets/analytics-bg.jpg";
import neuralImg from "@/assets/neural-bg.jpg";
import socialImg from "@/assets/social-network.jpg";

const SLIDES = [
  {
    img: analyticsImg,
    title: "[Slide 1 Title Placeholder]",
    desc: "[Slide 1 description placeholder content for review]",
    tag: "Analytics",
  },
  {
    img: neuralImg,
    title: "[Slide 2 Title Placeholder]",
    desc: "[Slide 2 description placeholder content for review]",
    tag: "Neural",
  },
  {
    img: socialImg,
    title: "[Slide 3 Title Placeholder]",
    desc: "[Slide 3 description placeholder content for review]",
    tag: "Social",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
    title: "[Slide 4 Title Placeholder]",
    desc: "[Slide 4 description placeholder content for review]",
    tag: "Data",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
    title: "[Slide 5 Title Placeholder]",
    desc: "[Slide 5 description placeholder content for review]",
    tag: "Campaign",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 600);
  };

  const goNext = () => goTo((current + 1) % SLIDES.length);
  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="section-label">AI GALLERY</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          Visual <span className="gradient-text">Intelligence</span>
        </h2>
      </div>

      <div className="relative rounded-3xl overflow-hidden" style={{ height: "480px" }}>
        {/* Slides */}
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ${
              i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[rgba(8,12,20,0.3)] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/80 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 p-10">
              <span className="chip mb-3 inline-block">{slide.tag}</span>
              <h3 className="font-syne font-bold text-3xl text-white mb-2">{slide.title}</h3>
              <p className="font-inter text-white/50 text-sm max-w-md">{slide.desc}</p>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl glass-card flex items-center justify-center text-white/60 hover:text-white z-20 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl glass-card flex items-center justify-center text-white/60 hover:text-white z-20 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 right-8 flex items-center gap-2 z-20">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-[#6C63FF]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              style={i === current ? { boxShadow: "0 0 8px rgba(108,99,255,0.6)" } : {}}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute top-4 right-6 font-mono-code text-xs text-white/30 z-20">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
