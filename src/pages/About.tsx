import TimelineSteps from "@/components/features/TimelineSteps";
import HexGrid from "@/components/features/HexGrid";
import AuthorCards from "@/components/features/AuthorCards";
import SourcesList from "@/components/features/SourcesList";
import ContactForm from "@/components/features/ContactForm";
import neuralImg from "@/assets/neural-bg.jpg";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Page header */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 h-72">
          <img src={neuralImg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080C14]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4 pb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">ABOUT</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[rgba(108,99,255,0.3)] to-transparent" />
          </div>
          <h1 className="font-syne font-black text-5xl md:text-7xl text-white mb-4">
            About <span className="gradient-text">MARKLYTICS</span>
          </h1>
          <p className="font-inter text-white/50 text-lg max-w-2xl">
            [About page overview placeholder — introduce the research project, its academic context, and the team behind it at Narxoz University ICT department, 2025.]
          </p>

          {/* Quick facts */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { label: "Institution", val: "Narxoz University" },
              { label: "Department", val: "ICT" },
              { label: "Year", val: "2025" },
              { label: "Project Type", val: "Research" },
            ].map((fact, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-xl font-mono-code text-xs"
                style={{
                  background: "rgba(108,99,255,0.08)",
                  border: "1px solid rgba(108,99,255,0.2)",
                }}
              >
                <span className="text-white/30">{fact.label}: </span>
                <span className="text-[#6C63FF]">{fact.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main grid layout */}
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Timeline */}
        <section>
          <div className="mb-12">
            <span className="section-label">RESEARCH TIMELINE</span>
            <h2 className="section-title text-3xl md:text-4xl text-white mt-3">
              Project <span className="gradient-text">Journey</span>
            </h2>
            <p className="font-inter text-white/40 mt-2 max-w-xl">
              [Timeline description placeholder — describe the phases and milestones of this ICT research project from inception to completion.]
            </p>
          </div>
          <TimelineSteps />
        </section>

        {/* Tech Stack Hex Grid */}
        <section>
          <div className="mb-12">
            <span className="section-label">TECHNOLOGY STACK</span>
            <h2 className="section-title text-3xl md:text-4xl text-white mt-3">
              Tools &amp; <span className="gradient-text">Technologies</span>
            </h2>
            <p className="font-inter text-white/40 mt-2 max-w-xl">
              [Tech stack description placeholder — explain the technologies, frameworks, and tools used to build and analyze data for this research.]
            </p>
          </div>
          <HexGrid />
        </section>

        {/* Author Cards */}
        <section>
          <div className="mb-10">
            <span className="section-label">THE TEAM</span>
            <h2 className="section-title text-3xl md:text-4xl text-white mt-3">
              Research <span className="gradient-text">Authors</span>
            </h2>
          </div>
          <AuthorCards />
        </section>

        {/* Sources */}
        <section>
          <div className="mb-10">
            <span className="section-label">REFERENCES</span>
            <h2 className="section-title text-3xl md:text-4xl text-white mt-3">
              Academic <span className="gradient-text">Sources</span>
            </h2>
            <p className="font-inter text-white/40 mt-2 max-w-xl">
              [Sources description placeholder — explain the citation style and how sources were selected for this research project.]
            </p>
          </div>
          <SourcesList />
        </section>

        {/* Project declaration */}
        <section>
          <div
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(108,99,255,0.1) 0%, rgba(0,212,255,0.05) 100%)",
              border: "1px solid rgba(108,99,255,0.2)",
            }}
          >
            <div
              className="orb w-64 h-64 -top-10 -right-10 opacity-20"
              style={{ background: "radial-gradient(circle, rgba(108,99,255,0.3), transparent)" }}
            />
            <div className="relative z-10">
              <span className="section-label">DECLARATION</span>
              <h3 className="font-syne font-bold text-2xl text-white mt-3 mb-4">
                Academic Integrity Statement
              </h3>
              <p className="font-inter text-white/40 leading-relaxed text-sm max-w-3xl">
                [Academic integrity declaration placeholder — include the official academic integrity statement confirming this work is original, properly cited, and complies with Narxoz University research standards and ICT department requirements for the 2025 academic year.]
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div
                  className="px-4 py-2 rounded-xl font-mono-code text-xs"
                  style={{
                    background: "rgba(108,99,255,0.1)",
                    border: "1px solid rgba(108,99,255,0.2)",
                    color: "#A9A4FF",
                  }}
                >
                  Submitted: [Date Placeholder]
                </div>
                <div
                  className="px-4 py-2 rounded-xl font-mono-code text-xs"
                  style={{
                    background: "rgba(0,212,255,0.1)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "#80ECFF",
                  }}
                >
                  Supervisor: [Supervisor Name]
                </div>
                <div
                  className="px-4 py-2 rounded-xl font-mono-code text-xs"
                  style={{
                    background: "rgba(255,215,0,0.1)",
                    border: "1px solid rgba(255,215,0,0.2)",
                    color: "#FFD700",
                  }}
                >
                  Grade: [Grade Placeholder]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">CONTACT</span>
              <h2 className="section-title text-3xl md:text-4xl text-white mt-3 mb-5">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p className="font-inter text-white/40 leading-relaxed mb-8">
                [Contact section intro placeholder — invite professors, fellow students, and researchers to reach out with feedback, questions, or collaboration opportunities.]
              </p>

              {/* Contact details */}
              <div className="space-y-4">
                {[
                  {
                    icon: "🏛️",
                    label: "University",
                    val: "Narxoz University, Almaty, Kazakhstan",
                    color: "#6C63FF",
                  },
                  {
                    icon: "📚",
                    label: "Department",
                    val: "Information & Communication Technologies",
                    color: "#00D4FF",
                  },
                  {
                    icon: "📅",
                    label: "Academic Year",
                    val: "2024–2025",
                    color: "#FF6B9D",
                  },
                  {
                    icon: "📧",
                    label: "Contact Email",
                    val: "[department@narxoz.kz]",
                    color: "#FFD700",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <span className="text-base">{item.icon}</span>
                    </div>
                    <div>
                      <div className="font-mono-code text-[10px] text-white/30 mb-0.5">{item.label}</div>
                      <div className="font-inter text-sm text-white/60">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

      </div>
    </div>
  );
}
