import React, { useState, useEffect } from "react";
import { InfoBar } from "./components/InfoBar";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { BlogsSection } from "./components/BlogsSection";
import { TechStack } from "./components/TechStack";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { PROJECTS, BLOGS, TECH_STACK } from "./constants";
import { ViewType } from "./types";

const App = () => {
  const [time, setTime] = useState(new Date());
  const [view, setView] = useState<ViewType>("home");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-zinc-700 selection:text-white font-sans">
      <InfoBar time={time} formatTime={formatTime} />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <Header view={view} setView={setView} />

        <div className="min-h-[400px]">
          {view === "projects" && (
            <ProjectsSection
              projects={PROJECTS}
              view={view}
              setView={setView}
            />
          )}

          {view === "blogs" && (
            <BlogsSection blogs={BLOGS} view={view} setView={setView} />
          )}

          {view === "home" && (
            <div className="animate-in fade-in duration-1000">
              <ProjectsSection
                projects={PROJECTS}
                view={view}
                setView={setView}
              />
              <TechStack techStack={TECH_STACK} />
              <CTA />
            </div>
          )}
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
