import { LucideIcon } from 'lucide-react';

export interface InnovationItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Certification {
  name: string;
  description: string;
}

export interface NewsOutlet {
  name: string;
  logo: string;
}

export interface Jurisdiction {
  name: string;
  code: string;
}