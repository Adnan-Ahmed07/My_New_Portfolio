export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
}