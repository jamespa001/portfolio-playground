export interface ProjectView {
  image: string;
  label: string;
  desc?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string; // Fallback or main image
  views?: ProjectView[]; // Multi-view rotator data
  featured: boolean;
}
