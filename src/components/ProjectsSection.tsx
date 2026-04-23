import React, { useState, useEffect, useCallback } from "react";
import { ChevronRight, ArrowLeft, Info, ExternalLink } from "lucide-react";

/**
 * Interfaces for data structures.
 */
interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  color: string;
  image?: string;
  link?: string;
}

type ViewType = "home" | "projects";

interface ProjectsSectionProps {
  projects: Project[];
  view: ViewType;
  setView: (view: ViewType) => void;
}

/**
 * ProjectsSection Component
 * Displays a grid of project cards with custom interactions and notifications.
 */
export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  view,
  setView,
}) => {
  const [showNotification, setShowNotification] = useState(false);

  // Use callback to ensure stable reference
  const handleProjectClick = useCallback(() => {
    setShowNotification(true);
  }, []);

  // Cleanup notification timer on unmount or re-trigger
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <section
      id="projects"
      className="relative mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out"
    >
      {/* Premium Notification Toast */}
      {showNotification && (
        <div
          role="alert"
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-zinc-900/90 backdrop-blur-md text-white px-5 py-3 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
            <Info size={14} className="text-blue-400" />
          </div>
          <span className="text-sm font-semibold tracking-wide uppercase">
            Coming Soon
          </span>
        </div>
      )}

      {/* Header Section */}
      <div className="flex items-end justify-between mb-10 border-b border-zinc-800/50 pb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-1">
            Projects
          </h2>
        </div>

        {view !== "home" ? (
          <button
            onClick={() => setView("home")}
            className="group text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 transition-all active:scale-95"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Return Home
          </button>
        ) : (
          <button
            onClick={() => setView("projects")}
            className="group text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-all"
          >
            Explore Library{" "}
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        )}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            onClick={() => project.link && window.open(project.link, "_blank")}
            className="group relative flex flex-col p-px bg-gradient-to-b from-zinc-700/30 to-transparent rounded-[2rem] cursor-pointer transition-all duration-500 hover:scale-[1.01]"
          >
            <div className="flex flex-col h-full p-6 bg-zinc-950 rounded-[calc(2rem-1px)] overflow-hidden">
              {/* Image Container */}
              {project.image && (
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}

              {/* Status Badge */}
              <div className="mb-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${project.color.includes("blue") ? "bg-blue-500/10 border-blue-500/20 text-blue-400" : "bg-zinc-500/10 border-zinc-500/20 text-zinc-400"}`}
                >
                  {project.tech[0]}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink
                    size={14}
                    className="opacity-0 -translate-y-1 group-hover:opacity-40 group-hover:translate-y-0 transition-all"
                  />
                </h3>
                <p className="text-sm text-zinc-400 font-medium mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-zinc-500 mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Footer / Tech Stack */}
              <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-900"></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

/**
 * Main App Component
 */
export default function App() {
  const [view, setView] = React.useState<ViewType>("home");

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-blue-500/30">
      <main className="max-w-5xl mx-auto px-6 py-20">
        <ProjectsSection
          projects={SAMPLE_PROJECTS}
          view={view}
          setView={setView}
        />
      </main>
    </div>
  );
}
