"use client";

import { Award, Shield, X } from "lucide-react";
import { useReveal } from "./useReveal";
import { useState } from "react";

const certificates = [
  {
    issuer: "Cisco Networking Academy Program",
    title: "PCAP - Programming Essentials in Python",
    emoji: "🐍",
    color: "#00d4ff",
    type: "Programming",
    image: "/pcap-certificate.png",
  },
  {
    issuer: "Millennial Business Academy",
    title: "AI Automation Workshop",
    emoji: "🤖",
    color: "#7c3aed",
    type: "AI",
    image: "/ai-automation-certificate.png",
  },
  {
    issuer: "Information Technology Specialist",
    title: "Databases",
    emoji: "🗄️",
    color: "#10b981",
    type: "Database",
    image: "/databases-certificate.png",
  },
  {
    issuer: "Cisco Networking Academy Program",
    title: "Ethical Hacker",
    emoji: "🔒",
    color: "#f59e0b",
    type: "Security",
    image: "/ethical-hacker-certificate.png",
  },
  {
    issuer: "InnovateIT: Capstone Journeys & Research Exhibit",
    title: "Certificate of Participation",
    emoji: "🎓",
    color: "#f472b6",
    type: "Research",
    image: "/innovateit-certificate.png",
  },
  {
    issuer: "Cisco Networking Academy Program",
    title: "DevNet Associate",
    emoji: "💻",
    color: "#60a5fa",
    type: "Development",
    image: "/devnet-associate-certificate.png",
  },
  {
    issuer: "Cisco Networking Academy Program",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    emoji: "🌐",
    color: "#34d399",
    type: "Networking",
    image: "/ccna-certificate.png",
  },
  {
    issuer: "Cisco Networking Academy Program",
    title: "Cyber Threat Management",
    emoji: "🛡️",
    color: "#fb923c",
    type: "Security",
    image: "/cyber-threat-management-certificate.png",
  },
  {
    issuer: "Cisco Networking Academy Program",
    title: "Getting Started with Cisco Packet Tracer",
    emoji: "📡",
    color: "#a78bfa",
    type: "Networking",
    image: "/packet-tracer-certificate.png",
  },
];

export default function Certificates() {
  const { ref, revealed } = useReveal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="certificates"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent2/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-accent text-sm mb-2">05. Achievements</p>
          <h2 className="font-display font-black text-5xl text-text section-title center">
            Certificates
          </h2>
          <p className="text-muted mt-6 max-w-lg mx-auto font-body">
            Professional certifications and recognitions earned throughout my academic journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm card-hover overflow-hidden transition-all duration-700 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              {/* BG glow */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: cert.color }}
              />

              {/* Top bar */}
              <div
                className="h-0.5 w-0 group-hover:w-full mb-5 rounded-full transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${cert.color}15` }}
                >
                  {cert.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  {/* Type badge */}
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded mb-2 inline-block"
                    style={{
                      color: cert.color,
                      backgroundColor: `${cert.color}15`,
                    }}
                  >
                    {cert.type}
                  </span>
                  <h3 className="font-display font-bold text-text text-sm leading-tight group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Issuer */}
              <div className="flex items-center gap-2 mt-3">
                <Award size={12} className="text-muted flex-shrink-0" />
                <p className="text-muted text-xs font-body truncate">{cert.issuer}</p>
              </div>

              {/* Certificate image or placeholder */}
              {cert.image ? (
                <div
                  onClick={() => setSelectedImage(cert.image)}
                  className="mt-4 h-50 rounded-xl overflow-hidden border border-dashed opacity-80 hover:opacity-100 transition-opacity cursor-pointer group-hover:border-solid"
                  style={{ borderColor: cert.color }}
                >
                  {cert.image.endsWith('.pdf') ? (
                    <iframe
                      src={cert.image}
                      className="w-full h-full"
                      style={{ 
                        pointerEvents: "none",
                        overflow: "hidden",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        transform: "scale(1.0)",
                        transformOrigin: "top left"
                      }}
                      scrolling="no"
                      title="Certificate Preview"
                    />
                  ) : (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      style={{ pointerEvents: "none" }}
                    />
                  )}
                </div>
              ) : (
                <div
                  className="mt-4 h-24 rounded-xl flex items-center justify-center border border-dashed opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ borderColor: cert.color }}
                >
                  <div className="text-center">
                    <Shield size={16} className="mx-auto mb-1" style={{ color: cert.color }} />
                    <span className="font-mono text-xs" style={{ color: cert.color }}>
                      Certificate Image
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Count badge */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent/20 bg-accent/5">
            <Award size={18} className="text-accent" />
            <span className="font-mono text-sm text-muted">
              <span className="text-accent font-bold">{certificates.length}</span> certifications earned
            </span>
          </div>
        </div>
      </div>

      {/* Modal for viewing certificate */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              suppressHydrationWarning
            >
              <X size={20} />
            </button>
            {selectedImage.endsWith('.pdf') ? (
              <iframe
                src={selectedImage}
                className="w-full h-full"
                style={{ height: "85vh" }}
                title="Certificate Full View"
              />
            ) : (
              <img
                src={selectedImage}
                alt="Certificate Full View"
                className="w-full h-full object-contain"
                style={{ maxHeight: "75vh" }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
