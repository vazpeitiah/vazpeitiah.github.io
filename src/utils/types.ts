export interface TimeLineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    showCode?: boolean;
    showDemo?: boolean;
    codeUrl?: string;
    demoUrl?: string;
}