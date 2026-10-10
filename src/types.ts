export type Language = 'en' | 'ar';

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
  whatWeBuild: string;
  whatItHelps: string;
  practicalExample: string;
  whatItIncludes: string[];
  practicalUseCase: string;
  whatWeNeedToGetStarted: string[];
  technicalRequirementsNote?: string;
  scopeInclusions: string[];
  nextStep: string;
  whatsappUrl?: string;
  capabilities: string[];
  features: string[];
}

export type SolutionOptionId = 'website' | 'enquiries' | 'automate' | 'help';

export interface SolutionOption {
  id: SolutionOptionId;
  label: string;
  iconName: string;
  tagline: string;
  recommendedServiceId: string;
  recommendedServiceTitle: string;
  practicalExplanation: string;
  keyHighlights: string[];
  pairedService?: {
    id: string;
    title: string;
    reason: string;
  };
  whatsappPrefill: string;
}

export interface BriefOptions {
  businessType: string;
  serviceNeeded: string;
  projectNature: 'New Project' | 'Upgrade Existing';
  requirements: string;
  selectedLine: '966582578793' | '966534182945';
}

export interface DemoProjectItem {
  id: string;
  title: string;
  label: string;
  description: string;
  demoUrl: string;
  previewType: 'real-estate' | 'bakery' | 'restaurant';
  whatsappUrl?: string;
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
