import React from "react";
import { Instagram } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden p-8 md:p-10 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[2rem]">
      <div className="relative z-10 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
        {/* Changed md:w-1/2 to a more flexible max-width for better text flow */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Let's connect.
          </h2>
          <p className="text-zinc-400 mb-6 text-lg leading-relaxed justify-around">
            Ready to kick off a project or just want to chat? Drop me a DM on
            Instagram. Whether you're looking for a collaboration or just want
            to talk shop, my inbox is open.
          </p>

          <a
            href="https://www.instagram.com/_khizer11"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 inline-flex"
          >
            Message @khizer0101 <Instagram size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
