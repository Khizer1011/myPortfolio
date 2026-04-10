import { Project, Blog } from "./types";
import db from "./components/assets/Gemini_Generated_Image_e1a5x9e1a5x9e1a5.png";
import eye from "./components/assets/retina.jpg";
export const PROJECTS: Project[] = [
  {
    id: "Database",
    title: "Database",
    tagline: "",
    description: "",
    tech: ["C", "C++"],
    color: "bg-blue-500/10 text-blue-400",
    image: db,
  },
  {
    id: "Federated Learning",
    title: "Federated Learning",
    tagline: "High performance solution to diabetic retinopathy",
    description:
      "Built in Rust with content-addressable storage to understand Git internals.",
    tech: ["Rust", "CLI", "Storage"],
    color: "bg-orange-500/10 text-orange-400",
    image: eye,
  },
];

export const BLOGS: Blog[] = [];

export const TECH_STACK: string[] = [
  "TypeScript",
  "React",
  "C++",
  "C",
  "Python",
  "JavaScript",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "Socket.io",
  "MongoDB",
  "Redis",
  "AWS",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "MySQL",
];
