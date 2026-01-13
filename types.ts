export interface Trainer {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  highlight?: boolean;
}

export interface ClassItem {
  id: number;
  name: string;
  description: string;
  trainers: string[];
  imageUrl: string;
  category: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  features: string[];
  price?: string;
  highlight?: boolean;
  type: 'Starter' | 'Beginner' | 'Advance' | 'Basic' | 'Professional';
}