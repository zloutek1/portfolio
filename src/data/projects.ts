export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  images: ProjectImage[];
  techStack: string[];
  features: string[];
  challenges: string[];
  github?: string;
  liveUrl?: string;
  role: string;
  timeline: string;
  company?: string;
}


