"use client";

import { useState } from "react";
import { ExternalLink, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { useReveal } from "./useReveal";
import { ImageModal } from "./ImageModal";

const projects = [
  {
    title: "NFC Enable Door Lock and Attendance Managing System",
    emoji: "🔐",
    description:
      "An innovative security and monitoring solution designed to automate door access control and attendance tracking using NFC technology. The system allows authorized users to unlock doors by scanning NFC cards or devices while automatically recording attendance data in real time. It improves security, monitoring efficiency, and convenience for organizations, schools, and workplaces.",
    longDesc:
      "Developed using HTML, CSS, JavaScript, MongoDB, Arduino, ESP8266, and Claude AI. HTML and CSS were used to create a responsive and user-friendly interface, while JavaScript handled system interactions and dynamic functionalities. MongoDB served as the database for securely storing attendance records and user information.",
    tech: ["HTML", "CSS", "Javascript", "MongoDB", "Arduino IDE", "ESP8266", "Claude AI"],
    color: "#00d4ff",
    gradient: "from-cyan-500/20 to-blue-500/20",
    category: "IoT + Web",
  },
  {
    title: "Landing Page Perfume",
    emoji: "🌸",
    description:
      "A modern and visually appealing website designed to showcase luxury and premium perfume products. The landing page focuses on creating an elegant user experience through attractive layouts, smooth animations, and responsive design.",
    longDesc:
      "Built with HTML, CSS, and JavaScript. HTML structured the content and organized the sections, CSS created stylish and responsive designs, while JavaScript added interactivity and dynamic features such as animations, navigation effects, and user interactions.",
    tech: ["HTML", "CSS", "Javascript"],
    color: "#f472b6",
    gradient: "from-pink-500/20 to-purple-500/20",
    category: "Frontend",
  },
  {
    title: "Simple Task Manager",
    emoji: "✅",
    description:
      "A web-based application designed to help users organize, manage, and track their daily tasks efficiently. The system allows users to create, update, delete, and monitor tasks through a clean and user-friendly interface.",
    longDesc:
      "Developed using HTML, CSS, JavaScript, and PostgreSQL. JavaScript handled the interactive functionalities and dynamic user actions. PostgreSQL served as the database management system, securely storing task information and allowing efficient data retrieval.",
    tech: ["HTML", "CSS", "Javascript", "PostgreSQL"],
    color: "#10b981",
    gradient: "from-emerald-500/20 to-teal-500/20",
    category: "Full Stack",
  },
  {
    title: "B1G Project Tracker",
    emoji: "📊",
    description:
      "A comprehensive web-based project management system designed to help teams efficiently monitor, organize, and track project progress and performance. Features project monitoring, task management, progress tracking, KPI evaluation, and real-time updates.",
    longDesc:
      "Built with HTML, CSS, TypeScript, Node.js, React.js, Express.js, PostgreSQL, KPI integration, and Vite. React.js and TypeScript built dynamic and scalable front-end components, while Node.js and Express.js handled server-side logic and API integration.",
    tech: ["HTML", "CSS", "TypeScript", "Node.js", "React.js", "Express", "PostgreSQL", "KPI", "Vite"],
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-orange-500/20",
    category: "Full Stack",
  },
  {
    title: "Hotel Management System",
    emoji: "🏨",
    gallery: [
      { url: "/hotel-management-system.png", alt: "Hotel Management System - Home Page" },
      { url: "/hotel-management-system-2.png", alt: "Hotel Management System - Rooms Page" }
    ],  
    description:
      "A web-based application designed to streamline and automate hotel operations such as room reservations, guest management, check-in and check-out processes, booking records, and payment monitoring.",
    longDesc:
      "Developed using HTML, CSS, TypeScript, Node.js, React.js, Express.js, PostgreSQL, and Vite. React.js and TypeScript enabled dynamic and scalable front-end components. Node.js and Express.js handled back-end functionality, server-side operations, and API integration.",
    tech: ["HTML", "CSS", "TypeScript", "Node.js", "React.js", "Express", "PostgreSQL", "Vite"],
    color: "#7c3aed",
    gradient: "from-violet-500/20 to-purple-500/20",
    category: "Full Stack",
  },
  {
    title: "Worklog Reporting System",
    gallery: [
  { url: "/weeklog-dashboard.png", alt: "Worklog Reporting System - Dashboard" },
  { url: "/weeklog-add-note.png", alt: "Worklog Reporting System - Add Note" },
  { url: "/weeklog-report.png", alt: "Worklog Reporting System - Report" },
],
    description:
      "Weeklog is a modern web-based productivity and reporting platform designed to help teams document, manage, and review weekly progress updates efficiently. The system provides a clean and intuitive interface where team members can submit weekly notes, track accomplishments, identify blockers, and monitor ongoing tasks in one centralized workspace.",
    longDesc:
      "The application features a comprehensive dashboard with real-time weekly statistics, contributor tracking, recent activity logs, searchable reports, and export functionality for Excel, PDF, and Word formats. Built with Next.js and TypeScript for a scalable front-end, ShadCN for UI components, Redux for state management, and Tailwind CSS for styling. The back-end is powered by Python FastAPI with Pydantic Schema for data validation, Alembic for database migrations, and SQLAlchemy as the ORM.",
    tech: ["Next.js", "ShadCN", "Redux", "TypeScript", "Tailwind", "Python FastAPI", "Pydantic", "Alembic", "SQLAlchemy"],
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-sky-500/20",
    category: "Full Stack",
  },
];

function ProjectCard({
  project,
  index,
  revealed,
  onImageClick,
}: {
  project: typeof projects[0];
  index: number;
  revealed: boolean;
  onImageClick?: (images: { url: string; alt: string }[], startIndex: number) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  // Get gallery (supports both with and without images)
  const gallery = project.gallery || [];

  return (
    <div
      className={`group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden card-hover transition-all duration-700 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 120 + 200}ms` }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
        }}
      />

      {/* Placeholder image area */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden cursor-pointer group/image`}
        onClick={() => {
          if (gallery.length > 0 && onImageClick) {
            onImageClick(gallery, 0);
          }
        }}
      >
        {gallery.length > 0 ? (
          <>
            <img
              src={gallery[0].url}
              alt={gallery[0].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 font-mono text-sm font-semibold">
                {gallery.length > 1 ? "Click to view gallery" : "Click to expand"}
              </div>
            </div>
          </>
        ) : (
          <div className="text-7xl select-none">{project.emoji}</div>
        )}
        {/* Grid overlay */}
        {gallery.length === 0 && (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(${project.color}22 1px, transparent 1px), linear-gradient(90deg, ${project.color}22 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
        )}
        {/* Category badge */}
        <span
          className="absolute top-4 right-4 font-mono text-xs px-2 py-1 rounded-lg"
          style={{
            color: project.color,
            backgroundColor: `${project.color}20`,
            border: `1px solid ${project.color}30`,
          }}
        >
          {project.category}
          {gallery.length > 1 && <span className="ml-1">({gallery.length})</span>}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display font-bold text-lg text-text group-hover:text-accent transition-colors leading-tight">
            {project.title}
          </h3>
          <Code2 size={18} className="text-muted flex-shrink-0 mt-0.5" />
        </div>

        <p className="text-muted text-sm leading-relaxed mb-2">
          {project.description}
        </p>

        {expanded && (
          <p className="text-muted/80 text-sm leading-relaxed mt-2 mb-2 border-t border-border pt-3">
            {project.longDesc}
          </p>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-mono text-muted hover:text-accent transition-colors mb-4"
          suppressHydrationWarning
        >
          {expanded ? (
            <>
              <ChevronUp size={14} /> Show less
            </>
          ) : (
            <>
              <ChevronDown size={14} /> Read more
            </>
          )}
        </button>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-1 rounded-lg border border-border bg-surface text-muted hover:text-text transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, revealed } = useReveal();
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [] as { url: string; alt: string }[],
    currentIndex: 0,
  });

  const handleImageClick = (images: { url: string; alt: string }[], startIndex: number = 0) => {
    setModalState({ isOpen: true, images, currentIndex: startIndex });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleImageNavigate = (index: number) => {
    setModalState((prev) => ({ ...prev, currentIndex: index }));
  };

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 px-6 overflow-hidden"
    >
      <ImageModal
        isOpen={modalState.isOpen}
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        onClose={closeModal}
        onNavigate={handleImageNavigate}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent2/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-accent text-sm mb-2">03. Work</p>
          <h2 className="font-display font-black text-5xl text-text section-title center">
            Projects
          </h2>
          <p className="text-muted mt-6 max-w-xl mx-auto font-body">
            A selection of projects I&apos;ve built — from IoT systems to full-stack web applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              revealed={revealed}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}