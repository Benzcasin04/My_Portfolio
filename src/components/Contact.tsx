"use client";

import { useState, useEffect } from "react";
import { Send, MapPin, Mail, Github, Linkedin, Facebook, CheckCircle, AlertCircle } from "lucide-react";
import { useReveal } from "./useReveal";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_rrvn1f3";
const TEMPLATE_ID = "template_oxhnpb9";
const PUBLIC_KEY = "ecM4zsHE8uLlZZsMC";

export default function Contact() {
  const { ref, revealed } = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        name: form.name,
        email: form.email,
        message: form.message,
      });
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const socials = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/benchaeron.casin", color: "#1877f2" },
    { icon: Mail, label: "Email", href: "mailto:benchaeroncasin04@gmail.com", color: "#ea4335" },
    { icon: Github, label: "GitHub", href: "https://github.com/Benzcasin04", color: "#f0f6fc" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aeron-casin-52599234b/", color: "#0077b5" },
  ];

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BG elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent2/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-accent text-sm mb-2">06. Connect</p>
          <h2 className="font-display font-black text-5xl text-text section-title center">
            Contact Me
          </h2>
          <p className="text-muted mt-6 max-w-lg mx-auto font-body">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div
            className={`space-y-8 transition-all duration-700 delay-100 ${
              revealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="p-6 rounded-2xl border border-border bg-card/60">
              <h3 className="font-display font-bold text-xl text-text mb-6">
                Let&apos;s build something amazing together
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted">Email</p>
                    <a href="mailto:benchaeroncasin04@gmail.com" className="text-text hover:text-accent transition-colors font-body text-sm">
                      benchaeroncasin04@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent2/10 flex items-center justify-center">
                    <MapPin size={18} className="text-accent2" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted">Location</p>
                    <p className="text-text font-body text-sm">Dasmariñas, Cavite, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="p-6 rounded-2xl border border-border bg-card/60">
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-4">
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-opacity-60 bg-surface hover:bg-card transition-all duration-200 group"
                    style={{ "--hover-border": color } as React.CSSProperties}
                  >
                    <Icon size={18} className="text-muted group-hover:text-text transition-colors" />
                    <span className="font-body text-sm text-muted group-hover:text-text transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              revealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            suppressHydrationWarning
          >
            {mounted && sent ? (
              <div className="p-8 rounded-2xl border border-accent3/30 bg-accent3/5 text-center">
                <CheckCircle size={48} className="text-accent3 mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl text-text mb-2">Message Sent!</h3>
                <p className="text-muted font-body">
                  Thanks for reaching out. I&apos;ll get back to you soon!
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 font-mono text-sm text-accent hover:underline"
                  suppressHydrationWarning
                >
                  Send another message
                </button>
              </div>
            ) : mounted ? (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl border border-border bg-card/60 space-y-5"
                suppressHydrationWarning
              >
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-xs">
                    <AlertCircle size={14} />
                    {error}
                  </div>
                )}
                <div>
                  <label className="font-mono text-xs text-muted mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text font-body text-sm placeholder-muted focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text font-body text-sm placeholder-muted focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text font-body text-sm placeholder-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent/10 border border-accent/30 text-accent font-display font-semibold hover:bg-accent/20 transition-all duration-200 disabled:opacity-50 glow-accent"
                  suppressHydrationWarning
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}