import { Project, Blog } from "./types";
import db from "./components/assets/Gemini_Generated_Image_e1a5x9e1a5x9e1a5.png";
import eye from "./components/assets/retina.jpg";
export const PROJECTS: Project[] = [
  {
    id: "Federated Learning",
    title: "Federated Learning",
    tagline:
      "High performanceand optimized algorithmic solution to diabetic retinopathy detection",
    description:
      "Trained and optimized neural networks for diabetic retinopathy detection ",
    tech: ["python3", "CLI", "Storage"],
    color: "bg-orange-500/10 text-orange-400",
    image: eye,
  },
  {
    id: "Database",
    title: "Database Managemnet System",
    tagline: "High Performance database management system.",
    description: "Work in progress.....",
    tech: ["C++17"],
    color: "bg-blue-500/10 text-blue-400",
    image: db,
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
