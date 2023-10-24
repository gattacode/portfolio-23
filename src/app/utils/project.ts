export interface Image {
  url: string;
  description?: string;
}
export interface Project {
  id: string;
  name: string;
  images: Image[];
  description: string;
  role: string;
  collaborators?: string;
  techStack: string;
}
