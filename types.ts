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
  link?: string;
}

export interface Client {
  name: string;
  url: string;
  initials: string;
}

// New Interface for Grouped Client Solutions
export interface ClientSolution {
  clientId: string;
  clientName: string;
  description: string;
  logoUrl?: string;
  apps: {
    title: string;
    type: 'Portal' | 'App' | 'Dashboard';
    url: string;
    image: string;
  }[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  isNew?: boolean;
  url?: string;
}

export interface InnovationProject {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'Audio' | 'Education' | 'Corporate' | 'Development' | 'Research';
  image: string;
  url: string;
  badge?: 'Prototype' | 'Beta' | 'New' | 'Vision' | 'Research';
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
}