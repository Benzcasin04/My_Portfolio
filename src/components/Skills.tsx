"use client";

import { useReveal } from "./useReveal";

const skillCategories = [
  {
    title: "Web Development",
    icon: "🌐",
    color: "#00d4ff",
    skills: ["TypeScript", "JavaScript", "Next.js", "React.js", "ShadCN", "Redux", "Tailwind"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    color: "#7c3aed",
    skills: ["Node.js", "Express", "Vite", "Python", "FastAPI", "Pydantic Schema", "Alembic", "SQLAlchemy"],
  },
  {
    title: "Database Development",
    icon: "🗄️",
    color: "#10b981",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Hardware Development (IoT)",
    icon: "🔌",
    color: "#f59e0b",
    skills: [
      "ESP8266",
      "1N4007 Rectifier Diodes",
      "USB Proximity Sensor",
      "Jumper/Dupont Wires",
      "Battery Protection Board",
    ],
  },
  {
    title: "API & Collaboration Tools",
    icon: "🔗",
    color: "#f472b6",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Development Tools",
    icon: "🛠️",
    color: "#60a5fa",
    skills: ["VS Code", "Arduino IDE", "Antigravity", "Windsurf"],
  },
];

export default function Skills() {
  const { ref, revealed } = useReveal();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-accent text-sm mb-2">04. Expertise</p>
          <h2 className="font-display font-black text-5xl text-text section-title">
            Skills
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm card-hover transition-all duration-700 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${cat.color}15` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-text text-sm">
                  {cat.title}
                </h3>
              </div>

              {/* Skills as tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 group-hover:border-opacity-60"
                    style={{
                      color: cat.color,
                      borderColor: `${cat.color}30`,
                      backgroundColor: `${cat.color}08`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Accent line */}
              <div
                className="h-0.5 w-0 group-hover:w-full mt-5 rounded-full transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom tag cloud */}
        <div
          className={`mt-16 p-8 rounded-2xl border border-border bg-card/30 text-center transition-all duration-700 delay-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-xs text-muted mb-4 uppercase tracking-wider">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "TypeScript", "JavaScript", "Next.js", "React.js", "ShadCN", "Redux", "Tailwind",
              "Node.js", "Express", "Vite", "Python", "FastAPI", "Pydantic Schema", "Alembic", "SQLAlchemy",
              "MySQL", "PostgreSQL", "MongoDB", "HTML", "CSS",
              "ESP8266", "Arduino IDE", "Git", "GitHub", "VS Code",
              "Antigravity", "Windsurf", "Claude AI",
            ].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent/40 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}