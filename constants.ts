import { InnovationItem, Certification, Jurisdiction, ServiceItem } from './types';
import { Cpu, Globe, Zap, Bot, ShieldCheck, Terminal, Layers, Leaf } from 'lucide-react';

// REPLACE THIS WITH YOUR ACTUAL LINKEDIN PROFILE URL
export const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile-id/";

export const INNOVATIONS: InnovationItem[] = [
  {
    id: 'transwing',
    title: 'Transwing VTOL',
    description: 'Next-gen Vertical Take-Off and Landing aircraft with variable wing geometry for superior efficiency.',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'tiltwing',
    title: 'Tiltwing VTOL',
    description: 'Advanced tilt-rotor mechanism allowing seamless transition between hover and forward flight.',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'hexapod',
    title: 'Hexapod Walker',
    description: 'Six-legged terrain traversal unit designed for stability in extreme environments.',
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'octopod',
    title: 'Octopod Heavy Lifter',
    description: 'Eight-legged heavy payload transport system for industrial and rescue operations.',
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: 'bionic-hand',
    title: 'Lumina Bionic Hand',
    description: 'Neural-linked prosthetic hand with multi-articulating fingers and sensory feedback.',
    image: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: 'autonomous-rover',
    title: 'Autonomous Rover',
    description: 'AI-driven surface exploration vehicle capable of long-duration independent missions.',
    image: 'https://picsum.photos/800/600?random=6'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'ISO 45001', description: 'Occupational Health and Safety' },
  { name: 'ISO 23894', description: 'AI Risk Management' },
  { name: 'ISO 20000', description: 'IT Service Management' },
  { name: 'ISO 9001', description: 'Quality Management' },
  { name: 'B Corp', description: 'Social and Environmental Performance' },
  { name: 'PCI DSS', description: 'Payment Card Industry Security' },
];

export const JURISDICTIONS: Jurisdiction[] = [
  { name: 'India', code: 'IN' },
  { name: 'China', code: 'CN' },
  { name: 'South Korea', code: 'KR' },
  { name: 'Japan', code: 'JP' },
  { name: 'Canada', code: 'CA' },
  { name: 'Germany', code: 'DE' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'Australia', code: 'AU' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'software',
    title: 'Software & IT Solutions',
    description: 'Custom-built digital ecosystems tailored for scalability and security.',
    icon: Terminal,
    features: ['Custom Software Development', 'AI Tools Integration', 'IT Infrastructure Consulting', 'Cloud Architecture']
  },
  {
    id: 'robotics',
    title: 'Hardware & Robotics',
    description: 'Engineering the physical future with advanced robotic systems.',
    icon: Bot,
    features: ['Autonomous Rovers', 'Bionic Systems', 'Drone Technology', 'VTOL Manufacturing']
  },
  {
    id: 'prototyping',
    title: 'Prototyping & R&D',
    description: 'From concept to reality. Rapid iteration and testing facilities.',
    icon: Layers,
    features: ['Full-cycle R&D', '3D Printing & Fabrication', 'MVP Development', 'Material Science']
  },
  {
    id: 'consulting',
    title: 'Consulting & Sustainability',
    description: 'Technology that protects our planet and improves lives.',
    icon: Leaf,
    features: ['Green Tech Solutions', 'Ecosystem Welfare Analysis', 'Sustainability Audits', 'Ethical Tech Consulting']
  }
];

export const NEWS_OUTLETS = [
  "Times of India", "Economic Times", "Hindustan Times", "Forbes", "Fortune", "TechCrunch", "Wired", "BBC News"
];