"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Github, Linkedin, Mail, Facebook } from "lucide-react";

const roles = ["Full Stack Developer", "Networking Enthusiast", "IT Professional", "Web Developer"];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentRole.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = [];
    const colors = ["#00d4ff", "#7c3aed", "#10b981"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Connect nearby particles
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color +
          Math.floor(p.opacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const socials = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/benchaeron.casin",
      label: "Facebook",
      color: "#1877f2",
    },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/u/4/#inbox",
      label: "Email",
      color: "#ea4335",
    },
    {
      icon: Github,
      href: "https://github.com/Benzcasin04",
      label: "GitHub",
      color: "#f0f6fc",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aeron-casin-52599234b/",
      label: "LinkedIn",
      color: "#0077b5",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent2/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-accent3 animate-pulse" />
          <span className="text-sm font-mono text-muted">
            Available for opportunities
          </span>
        </div>

        {/* Greeting */}
        <div
          className={`transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-accent text-lg mb-2">Hi, I&apos;m</p>
          <h1 className="font-display font-black text-5xl md:text-6xl text-text mb-4 whitespace-nowrap">
            Bench Aeron <span className="gradient-text">Casin</span>
          </h1>
        </div>

        {/* Typewriter */}
        <div
          className={`transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-xl md:text-2xl font-display font-semibold text-muted">
              {displayText}
            </span>
            <span className="typewriter-cursor" />
          </div>
        </div>

        {/* Social links */}
        <div
          className={`flex items-center justify-center gap-4 mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {socials.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative w-12 h-12 flex items-center justify-center rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300"
            >
              <Icon
                size={20}
                className="text-muted group-hover:text-text transition-colors duration-200"
                style={{ "--hover-color": color } as React.CSSProperties}
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`flex items-center justify-center gap-4 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="/cv.pdf"
            download
            className="group animated-border relative inline-flex items-center gap-3 px-8 py-4 bg-accent/10 rounded-xl font-display font-semibold text-accent hover:bg-accent/20 transition-all duration-300 glow-accent"
          >
            <Download
              size={18}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
            Download CV
          </a>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 border border-border hover:border-accent/50 rounded-xl font-display font-semibold text-muted hover:text-text transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="font-mono text-xs">scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
