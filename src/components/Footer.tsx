"use client";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg gradient-text-2">
          BAC<span className="text-accent">.</span>
        </div>
        <p className="font-mono text-xs text-muted text-center">
          © {new Date().getFullYear()} Bench Aeron Casin · Built with Next.js, Tailwind & TypeScript
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-xs text-muted hover:text-accent transition-colors"
          suppressHydrationWarning
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
