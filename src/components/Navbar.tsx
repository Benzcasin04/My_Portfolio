"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="font-display font-bold text-xl gradient-text-2 tracking-tight"
            suppressHydrationWarning
          >
            BAC<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-body font-medium transition-colors duration-200 rounded-lg group ${
                    isActive ? "text-accent" : "text-muted hover:text-text"
                  }`}
                  suppressHydrationWarning
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-accent/10 rounded-lg" />
                  )}
                  {link.label}
                  <span
                    className={`nav-indicator ${isActive ? "active" : ""}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-muted hover:text-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            suppressHydrationWarning
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-bg/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 p-6 flex flex-col gap-2 transition-all duration-300 ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-left px-6 py-4 text-lg font-display font-medium text-muted hover:text-accent border border-border hover:border-accent/50 rounded-xl transition-all duration-200"
              style={{ animationDelay: `${i * 0.05}s` }}
              suppressHydrationWarning
            >
              <span className="text-accent/50 font-mono text-sm mr-3">
                0{i + 1}.
              </span>
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
