export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  color: string;
  image?: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export type ViewType = "home" | "projects" | "blogs";
