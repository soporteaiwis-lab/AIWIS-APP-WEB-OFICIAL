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
}