import React from "react";
import { Github, Twitter, Instagram } from "lucide-react";
import { ViewType } from "../types";

interface HeaderProps {
  view: ViewType;
  setView: (view: ViewType) => void;
}

export const Header: React.FC<HeaderProps> = ({ view, setView }) => {
  return (
    <header className="mb-16">
      <h1
        className="text-4xl font-bold text-white mb-2 cursor-pointer"
        onClick={() => setView("home")}
      >
        Khizer Ahmed Khan
      </h1>
      <p className="text-zinc-500 font-medium mb-8">Software Engineer</p>

      <nav className="flex gap-6 mb-12 text-sm font-medium">
        <button
          onClick={() => setView("home")}
          className={`${view === "home" ? "text-white border-b border-white" : "text-zinc-500 hover:text-white"} pb-1 transition-all`}
        >
          Home
        </button>
        <button
          onClick={() => setView("projects")}
          className={`${view === "projects" ? "text-white border-b border-white" : "text-zinc-500 hover:text-white"} pb-1 transition-all`}
        >
          Projects
        </button>
        <button
          onClick={() => setView("blogs")}
          className={`${view === "blogs" ? "text-white border-b border-white" : "text-zinc-500 hover:text-white"} pb-1 transition-all`}
        >
          Blogs
        </button>
      </nav>

      <div className="space-y-4 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        {view === "home" && (
          <>
            <p className="text-xl text-zinc-200 leading-relaxed">
              I build robust, scalable web applications from the hardware level
              up to the user interface. Beyond standard development, I
              specialize in using machine learning to recognize patterns within
              natural phenomena. I thrive on using real-world data to bridge the
              gap between low-level system efficiency and solving complex,
              large-scale problems.
            </p>
            <p className="text-zinc-400">Always learning and building.</p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Twitter Link */}
              <a
                href="https://instagram.com/khizer0101"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all flex items-center gap-2"
              >
                Let's chat <Instagram size={16} />
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/Khizer1011"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-zinc-900 text-white font-semibold rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-all flex items-center gap-2"
              >
                GitHub <Github size={16} />
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
