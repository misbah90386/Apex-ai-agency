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
  capabilities: string[];
  features: string[];
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
