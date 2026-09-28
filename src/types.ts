export interface NavItem {
  name: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  whatItHelps: string;
  practicalExample: string;
  scopeInclusions: string[];
  nextStep: string;
  capabilities: string[];
  features: string[];
}

export interface DemoProjectItem {
  id: string;
  title: string;
  label: string;
  description: string;
  demoUrl: string;
  previewType: 'real-estate' | 'bakery' | 'restaurant';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type ProjectCategory = 'All' | 'Websites' | 'AI' | 'Automation' | 'Other';

export interface ProjectItem {
  id: string;
  name: string;
  category: 'AI Solution' | 'Web Development' | 'Automation' | 'Other';
  filterCategory: 'AI' | 'Websites' | 'Automation' | 'Other';
  shortDescription: string;
  fullOverview: string;
  keyFeatures: string[];
  techStack: string[];
  visualType: 'agent' | 'web' | 'workflow' | 'support' | 'custom';
  status: 'Portfolio Concept / Architecture Model' | 'Interactive Prototype';
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface BeliefItem {
  title: string;
  description: string;
}

export interface RoadmapPhase {
  phase: 'TODAY' | 'NEXT' | 'FUTURE';
  title: string;
  subtitle: string;
  items: string[];
}
