import React from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Blog, ViewType } from "../types";

interface BlogsSectionProps {
  blogs: Blog[];
  view: ViewType;
  setView: (view: ViewType) => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({
  blogs,
  view,
  setView,
}) => {
  return (
    <section
      id="blogs"
      className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Blogs</h2>
        {view !== "home" ? (
          <button
            onClick={() => setView("home")}
            className="text-xs text-zinc-500 hover:text-white flex items-center gap-1"
          >
            <ArrowLeft size={12} /> Back Home
          </button>
        ) : (
          <button
            onClick={() => setView("blogs")}
            className="text-xs text-zinc-500 hover:text-white flex items-center gap-1"
          >
            View All <ChevronRight size={14} />
          </button>
        )}
      </div>

      <div className="space-y-6">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-6 p-6 border border-zinc-800/30 rounded-2xl hover:bg-zinc-900/20 transition-all cursor-pointer"
          >
            <div className="md:w-1/4">
              <p className="text-xs font-mono text-zinc-600 mb-1">
                {blog.date}
              </p>
              <span className="text-[10px] px-2 py-0.5 bg-zinc-800 rounded text-zinc-400 uppercase tracking-tighter">
                {blog.category}
              </span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-lg font-bold text-white mb-2">
                {blog.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
                {blog.excerpt}
              </p>
              <span className="text-sm text-white font-medium flex items-center gap-1 hover:underline">
                Read More <ChevronRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
