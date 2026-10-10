import { 
  NavItem, 
  ServiceItem, 
  DemoProjectItem, 
  ProcessStep, 
  FAQItem, 
  ProjectItem, 
  ApproachStep, 
  BeliefItem, 
  RoadmapPhase,
  SolutionOption,
  BriefOptions
} from '../types';

// Configuration variables for WhatsApp contacts
// Both WhatsApp numbers preserved: +966 58 257 8793 and +966 53 418 2945
const GENERAL_PREFILLED = encodeURIComponent("Hello APEX AI AGENCY, I would like to discuss a project.");

export const WHATSAPP_CONTACTS = [
  {
    lineLabel: "Line 01",
    displayNumber: "+966 58 257 8793",
    rawNumber: "966582578793",
    url: `https://wa.me/966582578793?text=${GENERAL_PREFILLED}`,
  },
  {
    lineLabel: "Line 02",
    displayNumber: "+966 53 418 2945",
    rawNumber: "966534182945",
    url: `https://wa.me/966534182945?text=${GENERAL_PREFILLED}`,
  },
];

export const WHATSAPP_NUMBER = "+966 58 257 8793";
export const WHATSAPP_URL = `https://wa.me/966582578793?text=${GENERAL_PREFILLED}`;

export const getServiceWhatsAppUrl = (serviceTitle: string, rawNumber: string = "966582578793") => {
  const text = encodeURIComponent(`Hello APEX AI AGENCY, I would like to discuss your ${serviceTitle} service.`);
  return `https://wa.me/${rawNumber}?text=${text}`;
};

export const getProjectWhatsAppUrl = (projectTitle: string, rawNumber: string = "966582578793") => {
  const text = encodeURIComponent(`Hello APEX AI AGENCY, I would like to discuss a project similar to the ${projectTitle}.`);
  return `https://wa.me/${rawNumber}?text=${text}`;
};

export const getCustomWhatsAppUrl = (messageText: string, rawNumber: string = "966582578793") => {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${rawNumber}?text=${encoded}`;
};

// Formats the readable WhatsApp Project Brief
export const buildWhatsAppBriefText = (options: BriefOptions): string => {
  const lines: string[] = [
    "Hello APEX AI AGENCY,",
    "",
    "I would like to discuss a project enquiry:",
    `• Business Type: ${options.businessType || 'Not specified'}`,
    `• Service Needed: ${options.serviceNeeded || 'General enquiry'}`,
    `• Project Nature: ${options.projectNature || 'New Project'}`,
  ];

  if (options.requirements && options.requirements.trim().length > 0) {
    lines.push(`• Requirements: ${options.requirements.trim()}`);
  }

  lines.push("", "Looking forward to hearing from your team.");
  return lines.join("\n");
};

export const buildWhatsAppBriefUrl = (options: BriefOptions): string => {
  const text = buildWhatsAppBriefText(options);
  const encoded = encodeURIComponent(text);
  const targetNumber = options.selectedLine || "966582578793";
  return `https://wa.me/${targetNumber}?text=${encoded}`;
};

export const BUSINESS_TYPE_OPTIONS = [
  "Real Estate & Property",
  "Restaurant & Hospitality",
  "Retail & E-commerce",
  "Healthcare & Clinic",
  "Professional Services & Consulting",
  "Contracting & Trades",
  "Other Business"
];

export const SERVICE_NEEDED_OPTIONS = [
  "Professional Website",
  "AI Chatbot (Web)",
  "AI Voice Agent (Phone)",
  "Business Automation",
  "AI Multi-Step Agent",
  "Custom AI Solution",
  "Not Sure Yet / Multiple Services"
];

export const PROJECT_NATURE_OPTIONS: ('New Project' | 'Upgrade Existing')[] = [
  "New Project",
  "Upgrade Existing"
];

export const CONTACT_EMAIL = "ai104764@gmail.com";
export const CONTACT_EMAIL_URL = "mailto:ai104764@gmail.com";

export const BRAND_NAME = "APEX AI AGENCY";
export const BRAND_TAGLINE = "Advanced Technology. Built for Business.";

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About APEX", path: "/about" },
  { name: "Mission & Vision", path: "/mission-vision" },
  { name: "Contact", path: "/contact" },
];

// The 3 Demo Portfolio Projects
export const DEMO_PROJECTS: DemoProjectItem[] = [
  {
    id: "real-estate-concept",
    title: "Real Estate Website Concept",
    label: "Demo Project",
    description: "A bilingual property website concept featuring property browsing in Arabic and English, filter controls, and clean listing layouts.",
    demoUrl: "https://celebrated-biscuit-a7f671.netlify.app/",
    previewType: "real-estate",
    whatsappUrl: getProjectWhatsAppUrl("Real Estate Website Concept"),
  },
  {
    id: "custom-cake-bakery",
    title: "Custom Cake Bakery Website",
    label: "Demo Project",
    description: "An artisan bakery website concept with a visual cake gallery and an interactive cake customisation interface with live estimated pricing.",
    demoUrl: "https://sweet-dream-bakes.netlify.app/",
    previewType: "bakery",
    whatsappUrl: getProjectWhatsAppUrl("Custom Cake Bakery Website"),
  },
  {
    id: "chicken-restaurant",
    title: "Chicken Restaurant Website",
    label: "Demo Project",
    description: "A fast-casual restaurant website concept showcasing an appetizing menu layout, combo showcases, and direct ordering channels.",
    demoUrl: "https://cerulean-begonia-2ecb7d.netlify.app/",
    previewType: "restaurant",
    whatsappUrl: getProjectWhatsAppUrl("Chicken Restaurant Website"),
  },
];

// The 6 Core Services rewritten in simple language for business owners
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    shortDescription: "Software assistants configured to handle multi-step tasks, organize incoming requests, and support your team's day-to-day operations.",
    fullDescription: "AI agents assist businesses by carrying out defined multi-step operational tasks, organizing internal documents, and coordinating data between systems based on clear rules.",
    iconName: "Bot",
    whatWeBuild: "Custom software assistants programmed with clear rules to handle repetitive, multi-step digital tasks.",
    whatItHelps: "Saves hours of manual administrative work by sorting information, reviewing requests, and preparing ready-to-approve summaries for your staff.",
    practicalExample: "An intake assistant that reads incoming service requests, verifies all required details are attached, and formats a neat summary for your team to review.",
    whatItIncludes: [
      "Custom instruction set and structured decision rules",
      "Document, file, and structured request parser",
      "Review checkpoint interface before actions are executed",
      "Automated summary output and transparent activity log"
    ],
    practicalUseCase: "An operations team receives dozens of service requests daily. The AI agent extracts the client specifications, validates that all required attachments exist, and drafts an organized summary ready for your manager to review in seconds.",
    whatWeNeedToGetStarted: [
      "Sample documents, forms, or requests your team processes routinely",
      "A step-by-step description of your current manual review checkpoints",
      "Authorized access or API credentials for internal systems to connect"
    ],
    technicalRequirementsNote: "Third-party platform accounts, proprietary API access, or specialized model subscriptions are reviewed and discussed during planning with no hidden promises.",
    scopeInclusions: [
      "Custom instructions and decision rules tailored to your workflow",
      "Document and request parsing for incoming customer data",
      "System connections to your internal tools (where access permits)",
      "Human review checkpoints before actions are carried out",
      "Action summaries and activity logging for full transparency"
    ],
    nextStep: "Message us on WhatsApp to discuss your team's workflow and see if an AI agent is a good fit.",
    whatsappUrl: getServiceWhatsAppUrl("AI Agents"),
    capabilities: [
      "Task automation",
      "Information processing",
      "Workflow assistance",
      "Structured data extraction",
      "Human-in-the-loop review",
    ],
    features: [
      "Clear rule-based decision logic",
      "System data coordination",
      "Transparent audit and activity logs"
    ]
  },
  {
    id: "ai-voice-agents",
    title: "AI Voice Agents",
    shortDescription: "Spoken phone assistants designed to answer routine caller questions, take messages, and route important calls to your team.",
    fullDescription: "AI voice agents provide an automated spoken interface for inbound calls, helping callers get fast answers to standard questions without waiting on hold.",
    iconName: "Mic",
    whatWeBuild: "Natural-sounding telephone voice systems that greet callers and handle routine inquiries automatically.",
    whatItHelps: "Ensures every customer call is answered promptly, answers frequent questions around the clock, and transfers urgent callers directly to your staff.",
    practicalExample: "A phone assistant for a clinic or office that answers caller questions about opening hours, records appointment requests, and forwards urgent calls to front desk staff.",
    whatItIncludes: [
      "Configured telephone or web voice greeting system",
      "Custom conversational response script for your top business FAQs",
      "Caller intake collection and call transfer logic to your team",
      "Spoken message summaries delivered straight to WhatsApp or email"
    ],
    practicalUseCase: "A dental clinic or consulting office receives high call volumes. The voice agent answers inquiries about opening hours, services, and location directions 24/7, records booking details, and immediately routes urgent callers to the on-duty receptionist.",
    whatWeNeedToGetStarted: [
      "List of your most common customer inquiries and approved company answers",
      "Preferred phone numbers for live staff escalation and transfer",
      "Operating hours and business intake policies"
    ],
    technicalRequirementsNote: "Telephony line provisioning (SIP/VoIP provider) and voice minutes are third-party infrastructure requirements discussed openly during initial scoping.",
    scopeInclusions: [
      "Natural-sounding spoken voice in your preferred language",
      "Custom greeting scripts and structured conversation flows",
      "Caller intake summaries delivered straight to WhatsApp or email",
      "Call transfer logic to your existing telephone numbers",
      "Ongoing script updates as common questions change"
    ],
    nextStep: "Connect with us on WhatsApp to discuss your call volume and standard customer inquiries.",
    whatsappUrl: getServiceWhatsAppUrl("AI Voice Agents"),
    capabilities: [
      "Spoken phone greetings",
      "Frequently asked question responses",
      "Caller intake collection",
      "Call routing to human team members",
      "Call logging and notifications",
    ],
    features: [
      "Clear conversational flow design",
      "Telephone and web voice integration",
      "Defined escalation pathways"
    ]
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    shortDescription: "Website chat assistants that answer customer questions 24/7 using your business information and capture qualified leads.",
    fullDescription: "Custom AI chatbots provide conversational assistance directly on your website or digital platforms, answering visitor questions based on approved business information.",
    iconName: "MessageSquareText",
    whatWeBuild: "A branded chat assistant embedded on your website, trained strictly on your approved business information.",
    whatItHelps: "Answers visitor questions instantly at any hour, guides prospective clients to your services, and captures their contact details for follow-up.",
    practicalExample: "A website chat assistant that answers questions about service pricing guidelines, suggests the right package, and collects the visitor's phone number for your sales team.",
    whatItIncludes: [
      "Embeddable website chat widget styled for your brand colors",
      "Knowledge base grounded strictly in your verified FAQs and documentation",
      "Lead and enquiry intake form capturing visitor name and phone number",
      "Direct handoff link to human WhatsApp chat for immediate personal follow-up"
    ],
    practicalUseCase: "A property agency website receives evening visitors. The chatbot instantly explains neighborhood amenities, viewing procedures, and pricing tiers, collects the buyer's contact details, and notifies your sales team on WhatsApp.",
    whatWeNeedToGetStarted: [
      "Verified company FAQs, pricing guidelines, and service documents",
      "Brand color preferences and website CMS/hosting access for widget embedding",
      "Target email address or WhatsApp number where leads should be sent"
    ],
    technicalRequirementsNote: "Third-party conversational API usage or knowledge base vector storage depends on monthly traffic volume and is structured transparently with client-owned accounts.",
    scopeInclusions: [
      "Knowledge base grounded strictly in your verified FAQs and documentation",
      "Visual styling and chat colors tailored to match your website branding",
      "Lead and enquiry alerts delivered directly to your WhatsApp or email",
      "Direct handoff link to human WhatsApp chat when requested",
      "Multi-language conversation support where needed"
    ],
    nextStep: "Send us a message on WhatsApp with the typical questions your website visitors ask.",
    whatsappUrl: getServiceWhatsAppUrl("AI Chatbots"),
    capabilities: [
      "Website chat widget",
      "Approved business FAQ responses",
      "Lead and contact capture",
      "Direct email/messaging alerts",
      "Multi-language text support",
    ],
    features: [
      "Reliable information boundaries",
      "Seamless website integration",
      "Clean mobile and desktop interface"
    ]
  },
  {
    id: "professional-websites",
    title: "Professional Websites",
    shortDescription: "Clean, responsive websites designed to showcase your services, build trust, and make it easy for clients to contact you.",
    fullDescription: "We design and build clean, reliable websites that present your services clearly, work seamlessly across all screen sizes, and give potential clients an easy path to contact you.",
    iconName: "Layout",
    whatWeBuild: "Fast, custom websites designed around your brand, services, and commercial goals.",
    whatItHelps: "Gives your business a credible digital presence, showcases your projects clearly, and provides visitors an effortless way to reach you on WhatsApp.",
    practicalExample: "A high-converting company website with clear service breakdowns, concept portfolio showcases, and one-tap WhatsApp inquiry buttons.",
    whatItIncludes: [
      "Custom responsive layout designed for mobile, tablet, and desktop",
      "Structured service breakdown and portfolio presentation sections",
      "Direct WhatsApp contact buttons and accessible communication triggers",
      "Fast page load optimization and foundational search structure"
    ],
    practicalUseCase: "A commercial service firm or bakery needs a modern digital presence to validate credentials with prospective clients, display past work clearly, and enable one-tap WhatsApp bookings without friction.",
    whatWeNeedToGetStarted: [
      "Your company logo, brand color preferences, and high-resolution images",
      "Written descriptions of your core services and company background",
      "Domain registrar credentials and chosen hosting environment"
    ],
    technicalRequirementsNote: "Domain registration and hosting subscriptions remain in the client's direct ownership; we provide setup guidance and full deployment assistance.",
    scopeInclusions: [
      "Custom, mobile-optimized design reflecting your visual brand identity",
      "Clear service presentations and structured portfolio showcase sections",
      "Fast page load times and accessible, readable typography",
      "Direct WhatsApp action buttons and inquiry channels",
      "Domain connection and hosting configuration assistance"
    ],
    nextStep: "Chat with us on WhatsApp about what you want your new website to achieve.",
    whatsappUrl: getServiceWhatsAppUrl("Professional Websites"),
    capabilities: [
      "Responsive mobile and desktop layouts",
      "Modern interface design",
      "Service and portfolio presentation",
      "Direct WhatsApp and inquiry links",
      "SEO and performance foundations",
    ],
    features: [
      "Clean semantic architecture",
      "Fast performance across devices",
      "Frictionless navigation structure"
    ]
  },
  {
    id: "business-automation",
    title: "Business Automation",
    shortDescription: "Connected workflows that link your existing software tools, eliminating manual copy-pasting and keeping records up to date.",
    fullDescription: "Business automation connects the separate applications your business relies on every day, ensuring data flows smoothly from one step to the next without manual re-entry.",
    iconName: "Cpu",
    whatWeBuild: "Automated pipelines that connect your forms, spreadsheets, messaging apps, and CRMs together.",
    whatItHelps: "Eliminates repetitive data entry, prevents lost customer inquiries, and ensures notifications reach your team immediately.",
    practicalExample: "An automated workflow that logs every new website inquiry into Google Sheets, notifies your team instantly on WhatsApp, and sends the customer a confirmation.",
    whatItIncludes: [
      "Webhook and event trigger connections between your daily software tools",
      "Automated data syncing into Google Sheets, Airtable, or your CRM",
      "Instant team alert dispatch to WhatsApp or email channels",
      "Operational error monitoring and a clear walkthrough for your staff"
    ],
    practicalUseCase: "A catering or trade business receives inquiries from multiple forms. The workflow automatically records each lead in a central spreadsheet, alerts the coordinator on WhatsApp with key details, and sends the customer an instant confirmation.",
    whatWeNeedToGetStarted: [
      "List of specific apps and platforms your business currently operates",
      "Exact data fields and steps your team currently copies and pastes manually",
      "Authorized account access or API tokens for the tools you want to connect"
    ],
    technicalRequirementsNote: "Third-party automation platform plans (e.g., Make, Zapier, or cloud webhook servers) depend on expected monthly operation volume and are discussed upfront.",
    scopeInclusions: [
      "Review of your current tools, apps, and available integration access",
      "Automated event triggers between forms, spreadsheets, and messaging tools",
      "Notification routing to your preferred WhatsApp or email channels",
      "Error monitoring so pipelines continue working reliably",
      "Simple walk-through so your team understands how the automation runs"
    ],
    nextStep: "Tell us on WhatsApp which repetitive admin tasks take the most time in your business.",
    whatsappUrl: getServiceWhatsAppUrl("Business Automation"),
    capabilities: [
      "Tool-to-tool connections",
      "Lead and order routing",
      "Instant team notifications",
      "Spreadsheet and CRM sync",
      "Automated confirmation messages",
    ],
    features: [
      "Reliable webhook and API triggers",
      "Reduced manual data re-entry",
      "Straightforward operational maintenance"
    ]
  },
  {
    id: "custom-ai-solutions",
    title: "Custom AI Solutions",
    shortDescription: "Tailored software solutions designed around your specific workflow when ready-made software does not fit your needs.",
    fullDescription: "When standard software doesn't address your operational needs, we design and build focused custom solutions around your exact business process and data structure.",
    iconName: "Sparkles",
    whatWeBuild: "Tailored digital tools built around your unique operational process and data requirements.",
    whatItHelps: "Solves business bottlenecks that standard off-the-shelf software cannot handle, giving your team tools built exactly for your workflow.",
    practicalExample: "An internal portal that parses customer order specifications against your inventory rules and prepares an estimate ready for manager approval.",
    whatItIncludes: [
      "Targeted software architecture designed for your unique operational requirements",
      "Dedicated internal user interface tailored for your team's workflow",
      "Integration with your internal database or systems where APIs permit",
      "Structured review milestones, comprehensive testing, and staff handover"
    ],
    practicalUseCase: "A supplier receives non-standard order sheets from clients. We build a focused web portal that validates incoming item codes against live warehouse rules, flags discrepancies, and outputs a clean quotation for final manager sign-off.",
    whatWeNeedToGetStarted: [
      "Detailed review of your existing workflow, daily inputs, and expected outputs",
      "Sample records, spreadsheets, or documents demonstrating typical edge cases",
      "Technical contact or system permissions for your existing software stack"
    ],
    technicalRequirementsNote: "Cloud database instances, hosting infrastructure, and specialized API integrations are defined and scoped collaboratively during the initial planning phase.",
    scopeInclusions: [
      "Thorough review of your specific workflow, inputs, and desired results",
      "Custom interface designed specifically for your team's everyday use",
      "Integration with your existing databases and systems where supported",
      "Milestone reviews and progress checks throughout development",
      "Documentation and handover walk-through for your staff"
    ],
    nextStep: "Discuss your specific operational requirements with our team on WhatsApp.",
    whatsappUrl: getServiceWhatsAppUrl("Custom AI Solutions"),
    capabilities: [
      "Custom workflow architecture",
      "Tailored internal tools",
      "System and database integrations",
      "Milestone-based development",
      "Practical team handover",
    ],
    features: [
      "Engineered around verified requirements",
      "Practical and accessible design",
      "Structured review milestones"
    ]
  },
];

// Straightforward rule-based Solution Advisor options for "Find the Right Solution"
export const SOLUTION_OPTIONS: SolutionOption[] = [
  {
    id: "website",
    label: "I need a professional website.",
    iconName: "Layout",
    tagline: "Establish credibility & showcase your services",
    recommendedServiceId: "professional-websites",
    recommendedServiceTitle: "Professional Websites",
    practicalExplanation: "A fast, beautifully crafted website gives your business instant credibility, organizes your services clearly for prospective clients, and makes it effortless for visitors to reach you directly on WhatsApp.",
    keyHighlights: [
      "Clean layout tailored to your brand identity",
      "Service showcases and demo/portfolio presentations",
      "Fast page load speed across mobile and desktop",
      "Frictionless one-tap WhatsApp contact buttons"
    ],
    pairedService: {
      id: "ai-chatbots",
      title: "AI Chatbots",
      reason: "Can be paired with an embedded chatbot to answer questions when your team is busy."
    },
    whatsappPrefill: "Hello APEX AI AGENCY, I need a professional website for my business."
  },
  {
    id: "enquiries",
    label: "I want to answer customer enquiries.",
    iconName: "MessageSquareText",
    tagline: "Never miss a customer lead or leave questions waiting",
    recommendedServiceId: "ai-chatbots",
    recommendedServiceTitle: "AI Chatbots & Voice Agents",
    practicalExplanation: "Automate your first line of communication. An AI chatbot handles 24/7 website visitors using approved business information, while an AI voice agent greets phone callers, answers routine questions, and routes urgent calls to your staff.",
    keyHighlights: [
      "Instant 24/7 answers to common customer questions",
      "Captures visitor names and phone numbers for follow-up",
      "Direct handoff to WhatsApp for human team members",
      "Available for both website visitors and inbound phone calls"
    ],
    pairedService: {
      id: "ai-voice-agents",
      title: "AI Voice Agents",
      reason: "Extends 24/7 customer enquiry coverage to incoming phone calls as well as your website."
    },
    whatsappPrefill: "Hello APEX AI AGENCY, I want to discuss automated solutions for answering customer enquiries."
  },
  {
    id: "automate",
    label: "I want to automate repetitive work.",
    iconName: "Cpu",
    tagline: "Eliminate manual data entry & connect your software",
    recommendedServiceId: "business-automation",
    recommendedServiceTitle: "Business Automation & AI Agents",
    practicalExplanation: "Stop wasting hours copying and pasting data between spreadsheets, forms, and messages. We connect your daily software tools so new leads, orders, and records flow automatically, notifying your team in real time.",
    keyHighlights: [
      "Connects your forms, spreadsheets, and messaging tools",
      "Eliminates repetitive manual copy-pasting",
      "Instant team notifications on WhatsApp or email",
      "Error monitoring so workflows run reliably"
    ],
    pairedService: {
      id: "ai-agents",
      title: "AI Agents",
      reason: "Can process complex document parsing and multi-step tasks before updating your systems."
    },
    whatsappPrefill: "Hello APEX AI AGENCY, I want to automate repetitive workflows in my business."
  },
  {
    id: "help",
    label: "I need help choosing.",
    iconName: "Sparkles",
    tagline: "Let's review your workflow & find the best fit",
    recommendedServiceId: "custom-ai-solutions",
    recommendedServiceTitle: "Tailored Consultation & Strategy",
    practicalExplanation: "Not sure where to begin? We look at where your business currently loses the most time—whether it's fielding the same inquiries repeatedly, needing an online portfolio, or managing manual paperwork—and recommend the simplest, highest-impact solution.",
    keyHighlights: [
      "Direct review of your current business bottlenecks",
      "Objective recommendation focused on practical return",
      "Realistic project scope with transparent milestones",
      "No unnecessary complexity or confusing technical jargon"
    ],
    whatsappPrefill: "Hello APEX AI AGENCY, I need help choosing the right solution for my business."
  }
];

// Simple 4-step process: Discuss → Design → Build → Launch
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discuss",
    description: "We learn about your business, goals, and requirements to define what you actually need.",
  },
  {
    step: "02",
    title: "Design",
    description: "We plan the layout, structure, and user flow, agreeing on the scope before building begins.",
  },
  {
    step: "03",
    title: "Build",
    description: "We develop your website, AI assistant, or automated workflow and review progress with you.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We test the finished solution, prepare it for launch, and explain how your team can use it.",
  },
];

// Helpful Homepage FAQs
export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-project-scope",
    question: "How is the scope of a project determined?",
    answer: "We begin with a direct discussion to understand your business goals, target audience, and required features. We then define the exact deliverables and project scope together so expectations are completely clear before any work begins.",
  },
  {
    id: "faq-project-timeline",
    question: "How long does a project take?",
    answer: "Timelines depend on the agreed scope, technical depth, and the speed of feedback. A focused website or targeted automation takes less time than a complex multi-tool system. We agree on realistic milestones during planning so you know what to expect.",
  },
  {
    id: "faq-domain-hosting",
    question: "Do you handle domain setup and hosting?",
    answer: "Yes. We help guide your domain connection and assist in setting up reliable hosting for your website or tools. Specific hosting providers and domain configurations are agreed upon before launch so you have full ownership.",
  },
  {
    id: "faq-updates-maintenance",
    question: "How are updates and ongoing changes handled?",
    answer: "We build our websites and tools so they are straightforward to manage and maintain. If ongoing updates, content adjustments, or feature additions are needed, we agree on update arrangements based on your business requirements.",
  },
  {
    id: "faq-connect-systems",
    question: "Can AI tools connect with our existing software?",
    answer: "In many cases, yes. Connecting AI assistants or automated workflows depends on the specific software, CRMs, spreadsheets, or platforms your business uses, as well as the available APIs or access permissions. We review feasibility during our first discussion.",
  },
  {
    id: "faq-get-started",
    question: "How do we get started?",
    answer: "Getting started is simple. Tap 'Discuss Your Project' or reach out to us directly on WhatsApp. Tell us what your business needs, and we will discuss practical solutions and define the right next step.",
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "Discuss",
    description: "We learn about your business, goals, and requirements to define what you actually need."
  },
  {
    number: "02",
    title: "Design",
    description: "We plan the layout, structure, and user flow, agreeing on the scope before building begins."
  },
  {
    number: "03",
    title: "Build",
    description: "We develop your website, AI assistant, or automated workflow and review progress with you."
  },
  {
    number: "04",
    title: "Launch",
    description: "We test the finished solution, prepare it for launch, and explain how your team can use it."
  }
];

export const CORE_VALUES: string[] = [
  "Practical technology",
  "Clean design",
  "Strong user experiences",
  "Reliable systems",
  "Continuous improvement",
  "Long-term thinking"
];

export const BELIEFS_DATA: BeliefItem[] = [
  {
    title: "Technology Should Be Useful",
    description: "Technology should solve meaningful problems for your business."
  },
  {
    title: "Simplicity Matters",
    description: "Complex technology should feel simple to use and easy to manage."
  },
  {
    title: "Build With Purpose",
    description: "Every website, assistant, and automation should have a clear commercial reason to exist."
  },
  {
    title: "Keep Improving",
    description: "We build solid foundations that can be improved as your business grows."
  },
  {
    title: "Think Long Term",
    description: "Build reliable systems that support your business goals over time."
  }
];

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: "TODAY",
    title: "Active Production Capabilities",
    subtitle: "Current core services delivered to businesses today",
    items: [
      "Professional Websites",
      "AI Agents",
      "AI Voice Agents",
      "AI Chatbots",
      "Business Automation",
      "Custom AI Solutions"
    ]
  },
  {
    phase: "NEXT",
    title: "Near-Term Technical Evolution",
    subtitle: "Advanced expansion of our system architectures",
    items: [
      "More advanced AI systems",
      "Deeper tool integrations",
      "Intelligent multi-step automation",
      "Custom business portals"
    ]
  },
  {
    phase: "FUTURE",
    title: "Long-Term Vision",
    subtitle: "Foundational platforms and deep tech innovation",
    items: [
      "Advanced AI platforms",
      "Specialized business products",
      "Research & Development",
      "Next-generation digital systems"
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "real-estate-concept",
    name: "Real Estate Website Concept",
    category: "Web Development",
    filterCategory: "Websites",
    shortDescription: "A bilingual property website concept featuring property browsing in Arabic and English, filter controls, and clean listing layouts.",
    fullOverview: "A property website concept with property browsing and an Arabic and English interface.",
    keyFeatures: [
      "Bilingual interface (Arabic & English)",
      "Property search and filtering",
      "Featured listings overview",
      "Mobile responsive design"
    ],
    techStack: ["React", "Tailwind CSS", "Netlify"],
    visualType: "web",
    status: "Interactive Prototype"
  },
  {
    id: "custom-cake-bakery",
    name: "Custom Cake Bakery Website",
    category: "Web Development",
    filterCategory: "Websites",
    shortDescription: "An artisan bakery website concept with a visual cake gallery and an interactive cake customisation interface with live estimated pricing.",
    fullOverview: "A bakery concept featuring a cake gallery and a cake customisation interface with estimated pricing.",
    keyFeatures: [
      "Visual cake gallery showcase",
      "Interactive tier and flavor customizer",
      "Live estimated pricing calculation",
      "Direct inquiry call-to-action"
    ],
    techStack: ["React", "Tailwind CSS", "Netlify"],
    visualType: "web",
    status: "Interactive Prototype"
  },
  {
    id: "chicken-restaurant",
    name: "Chicken Restaurant Website",
    category: "Web Development",
    filterCategory: "Websites",
    shortDescription: "A fast-casual restaurant website concept showcasing an appetizing menu layout, combo showcases, and direct ordering channels.",
    fullOverview: "A chicken restaurant website concept showcasing a design approach for a food business.",
    keyFeatures: [
      "Appetizing food menu layout",
      "Signature combo meal showcases",
      "Dine-in and takeaway indicators",
      "Online order & reservation flow"
    ],
    techStack: ["React", "Tailwind CSS", "Netlify"],
    visualType: "web",
    status: "Interactive Prototype"
  }
];
