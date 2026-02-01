
export interface SlideData {
  id: number;
  label: string;
  headline: string[];
  image: string;
  tabLabel: string;
}

export interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  summary: string;
  image?: string;
}

export interface ReportItem {
  id: number;
  title: string;
  date: string;
  size: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  description: string[];
  stats: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  image: string;
  description: string[];
  features: { title: string; text: string }[];
}

export interface OfficeLocation {
  region: string;
  city: string;
  address: string;
  phone: string;
  email: string;
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  description: string[];
  image: string;
  logo: string;
  collaborationDetails: string;
}
