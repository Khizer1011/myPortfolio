import { Project, Blog } from "./types";
import db from "./components/assets/Gemini_Generated_Image_e1a5x9e1a5x9e1a5.png";
import eye from "./components/assets/retina.jpg";
import v from "./components/assets/vercel.png";
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
    link: "https://colab.research.google.com/drive/1tsx12laI6qMpWUTbL80FDfL78l4hd0v2",
  },
  {
    id: "Deployment System",
    title: "Deployment System",
    tagline: "User friendly frontend delpoyment system",
    description:
      "A user-friendly deployment system for managing and deploying frontends.",
    tech: ["Node.js", "React", "Tailwind CSS", "AWS", "Git"],
    color: "bg-blue-500/10 text-blue-400",
    image: v,
    link: "https://github.com/Khizer1011/Internship-Itechnologix-24/tree/main/Vercel-clone",
  },
  {
    id: "Database",
    title: "Database Managemnet System",
    tagline: "High Performance database management system.",
    description: "Work in progress.....",
    tech: ["C++17"],
    color: "bg-blue-500/10 text-blue-400",
    image: db,
    link: "",
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
