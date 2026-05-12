"use client";

import { GraduationCap, BookOpen, School } from "lucide-react";
import { useReveal } from "./useReveal";

const timeline = [
  {
    icon: School,
    level: "High School",
    school: "Cavite School of Life Dasmariñas",
    period: "2016 – 2019",
    color: "accent3",
    hex: "#10b981",
  },
  {
    icon: BookOpen,
    level: "Senior High School",
    school: "Cavite School of Life Dasmariñas",
    period: "2020 – 2022",
    color: "accent2",
    hex: "#7c3aed",
  },
  {
    icon: GraduationCap,
    level: "Bachelor of Science in Information Technology",
    school: "De La Salle University Dasmariñas",
    period: "2022 – 2026",
    color: "accent",
    hex: "#00d4ff",
    current: true,
  },
];

export default function Education() {
  const { ref, revealed } = useReveal();

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BG accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-accent text-sm mb-2">02. Background</p>
          <h2 className="font-display font-black text-5xl text-text section-title center">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent2 to-accent3 opacity-30" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`relative flex gap-8 transition-all duration-700 ${
                    revealed
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  {/* Icon node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${item.hex}10`,
                        borderColor: `${item.hex}40`,
                        boxShadow: `0 0 20px ${item.hex}20`,
                      }}
                    >
                      <Icon size={24} style={{ color: item.hex }} />
                    </div>
                    {item.current && (
                      <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-accent3 animate-pulse" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm card-hover group">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <span
                          className="font-mono text-xs font-medium px-2 py-1 rounded-md mb-3 inline-block"
                          style={{
                            color: item.hex,
                            backgroundColor: `${item.hex}15`,
                          }}
                        >
                          {item.level}
                        </span>
                        <h3 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors">
                          {item.school}
                        </h3>
                      </div>
                      <span
                        className="font-mono text-sm px-3 py-1.5 rounded-lg border"
                        style={{
                          color: item.hex,
                          borderColor: `${item.hex}30`,
                          backgroundColor: `${item.hex}08`,
                        }}
                      >
                        {item.period}
                      </span>
                    </div>

                    {item.current && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent3 animate-pulse" />
                        <span className="font-mono text-xs text-accent3">
                          Currently enrolled
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
