import React from "react";

interface TechStackProps {
  techStack: string[];
}

export const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  return (
    <section className="mb-24 mt-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">Tech Stack</h2>
        <p className="text-zinc-500 italic">the tech arsenal behind my builds!</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-400 hover:text-white hover:border-zinc-600 transition-all cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};
