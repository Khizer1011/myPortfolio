import React from "react";
import {
  Clock,
  MapPin,
  Github,
  Twitter,
  Coffee,
  Instagram,
} from "lucide-react";

interface InfoBarProps {
  time: Date;
  formatTime: (date: Date) => string;
}

export const InfoBar: React.FC<InfoBarProps> = ({ time, formatTime }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/50 pb-6">
      <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-zinc-500">
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span>Goa, India</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Khizer1011"
          className="hover:text-white transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.instagram.com/_khizer11"
          className="hover:text-white transition-colors"
        >
          <Instagram size={18} />
        </a>
      </div>
    </div>
  );
};
