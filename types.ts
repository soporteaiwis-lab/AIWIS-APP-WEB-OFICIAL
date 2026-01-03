export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ServicePhase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ProductFeature {
  name: string;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  features: ProductFeature[];
  image: string;
  link?: string; // Added for live app links
}

export interface Client {
  name: string;
  url: string;
  initials: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  isNew?: boolean;
  url?: string; // Added for live app links
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
}