export interface Project {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  link: string;
  technologies: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime?: string;
}