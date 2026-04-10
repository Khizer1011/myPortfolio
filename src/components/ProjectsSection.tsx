import React, { useState } from "react";
import { ChevronRight, ArrowLeft, Info } from "lucide-react";

/**
 * Note: Project and ViewType interfaces ensure type safety for the props.
 */
interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  color: string;
  image?: string;
}

type ViewType = "home" | "projects";

interface ProjectsSectionProps {
  projects: Project[];
  view: ViewType;
  setView: (view: ViewType) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  view,
  setView,
}) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleProjectClick = () => {
    setShowNotification(true);
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <section
      id="projects"
      className="relative mb-24 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Custom Alert/Notification */}
      {showNotification && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-zinc-800 text-white px-6 py-3 rounded-full border border-zinc-700 shadow-2xl animate-in zoom-in slide-in-from-bottom-2 duration-300">
          <Info size={16} className="text-blue-400" />
          <span className="text-sm font-medium">COMING SOON.</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        {view !== "home" ? (
          <button
            onClick={() => setView("home")}
            className="text-xs text-zinc-500 hover:text-white flex items-center gap-1 transition-colors"
          >
            <ArrowLeft size={12} /> Back Home
          </button>
        ) : (
          <button
            onClick={() => setView("projects")}
            className="text-xs text-zinc-500 hover:text-white flex items-center gap-1 transition-colors"
          >
            View All <ChevronRight size={14} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={handleProjectClick}
            className="group p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl hover:border-zinc-700 transition-all hover:bg-zinc-900/60 overflow-hidden cursor-pointer"
          >
            {project.image && (
              <div className="mb-6 overflow-hidden rounded-xl border border-zinc-800/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x200?text=Project+Preview";
                  }}
                />
              </div>
            )}
            <div
              className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 ${project.color}`}
            >
              {project.id === "fynt" ? "Featured" : "Internal"}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 font-medium mb-3 italic">
              {project.tagline}
            </p>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] text-zinc-600 font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <ChevronRight
                size={14}
                className="ml-auto text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-1"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Default export for the preview environment
export default function App() {
  const [view, setView] = React.useState<ViewType>("home");

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <ProjectsSection projects={projects} view={view} setView={setView} />
      </div>
    </div>
  );
}
