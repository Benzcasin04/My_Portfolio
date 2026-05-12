"use client";

import { useReveal } from "./useReveal";

export default function About() {
  const { ref, revealed } = useReveal();

  const stats = [
    { value: "4+", label: "Projects Built" },
    { value: "2+", label: "Years Learning" },
    { value: "9+", label: "Certificates" },
    { value: "1", label: "Internship" },
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent2/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-accent text-sm mb-2">01. About</p>
          <h2 className="font-display font-black text-5xl text-text section-title">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div
            className={`transition-all duration-700 delay-100 ${
              revealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Avatar placeholder with creative styling */}
            <div className="relative">
              <div className="animated-border relative w-72 h-72 mx-auto rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-card via-surface to-bg flex items-center justify-center">
                  {/* Creative monogram */}
                  <div className="text-center">
                    <div className="font-display font-black text-8xl gradient-text select-none">
                      BA
                    </div>
                    <div className="font-mono text-xs text-muted mt-2">
                      BENCH AERON CASIN
                    </div>
                  </div>
                </div>
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer pointer-events-none" />
              </div>

              {/* Floating tags */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-lg font-mono text-xs text-accent">
                Full Stack
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-accent2/10 border border-accent2/30 rounded-lg font-mono text-xs text-accent2">
                Networking
              </div>
              <div className="absolute top-1/2 -right-8 px-3 py-1.5 bg-accent3/10 border border-accent3/30 rounded-lg font-mono text-xs text-accent3">
                DLSU-D
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              revealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-5 text-muted leading-relaxed font-body">
              <p>
                I am a passionate and dedicated{" "}
                <span className="text-accent font-medium">Web Developer</span>{" "}
                and{" "}
                <span className="text-accent2 font-medium">
                  Networking student
                </span>{" "}
                from{" "}
                <span className="text-text font-medium">
                  De La Salle University–Dasmariñas
                </span>{" "}
                with hands-on experience in developing web-based projects and
                working on networking-related tasks. During my internship
                experience, I gained practical knowledge in real-world
                development, improved my technical skills, and learned how to
                collaborate effectively within a team.
              </p>
              <p>
                I have created different projects related to web development,
                including responsive websites, database systems, and
                user-friendly applications. These experiences helped me
                strengthen my skills in programming, problem-solving, and system
                design while continuously improving my understanding of modern
                technologies.
              </p>
              <p>
                My goal is to gain more experience in the field of web
                development and networking, continuously learn new technologies,
                and further enhance my technical and professional skills. I am
                eager to explore new opportunities that will help me grow as an
                <span className="text-accent3 font-medium"> IT professional</span>{" "}
                and contribute effectively to future projects and organizations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-10">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-xl border border-border bg-card/50 card-hover"
                  style={{
                    transitionDelay: `${(i + 3) * 100}ms`,
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s ease",
                  }}
                >
                  <div className="font-display font-black text-2xl gradient-text">
                    {s.value}
                  </div>
                  <div className="font-body text-xs text-muted mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
