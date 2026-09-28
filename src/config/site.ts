import { 
  NavItem, 
  ServiceItem, 
  DemoProjectItem, 
  ProcessStep, 
  FAQItem, 
  ProjectItem, 
  ApproachStep, 
  BeliefItem, 
  RoadmapPhase 
} from '../types';

// Configuration variables for WhatsApp contacts
// Both WhatsApp numbers preserved with prefilled messages mentioning APEX AI AGENCY
const PREFILLED_MESSAGE = encodeURIComponent("Hello APEX AI AGENCY, I would like to discuss a project.");

export const WHATSAPP_CONTACTS = [
  {
    lineLabel: "Line 01",
    displayNumber: "+966 58 257 8793",
    rawNumber: "966582578793",
    url: `https://wa.me/966582578793?text=${PREFILLED_MESSAGE}`,
  },
  {
    lineLabel: "Line 02",
    displayNumber: "+966 53 418 2945",
    rawNumber: "966534182945",
    url: `https://wa.me/966534182945?text=${PREFILLED_MESSAGE}`,
  },
];

export const WHATSAPP_NUMBER = "+966 58 257 8793";
export const WHATSAPP_URL = `https://wa.me/966582578793?text=${PREFILLED_MESSAGE}`;

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
    description: "A property website concept with property browsing and an Arabic and English interface.",
    demoUrl: "https://celebrated-biscuit-a7f671.netlify.app/",
    previewType: "real-estate",
  },
  {
    id: "custom-cake-bakery",
    title: "Custom Cake Bakery Website",
    label: "Demo Project",
    description: "A bakery concept featuring a cake gallery and a cake customisation interface with estimated pricing.",
    demoUrl: "https://sweet-dream-bakes.netlify.app/",
    previewType: "bakery",
  },
  {
    id: "chicken-restaurant",
    title: "Chicken Restaurant Website",
    label: "Demo Project",
    description: "A chicken restaurant website concept showcasing a design approach for a food business.",
    demoUrl: "https://cerulean-begonia-2ecb7d.netlify.app/",
    previewType: "restaurant",
  },
];

// The 6 Core Services with plain language, realistic examples, and clear scope inclusions
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    shortDescription: "Software agents configured to handle multi-step tasks, organize incoming information, and support your team's day-to-day operations.",
    fullDescription: "AI agents assist businesses by carrying out defined multi-step operational tasks, organizing internal documents, and coordinating data between systems based on clear rules.",
    iconName: "Bot",
    whatItHelps: "Helps your team process incoming information, coordinate repetitive tasks, and assist staff with structured operational workflows that would otherwise require manual data entry.",
    practicalExample: "An operational assistant that reads incoming service request emails, checks them against standard intake criteria, organizes relevant documents, and prepares a clear draft summary for team review.",
    scopeInclusions: [
      "Custom instructions and decision rules tailored to your process",
      "Document and text parsing for incoming requests",
      "System connections to your internal tools or databases (where access permits)",
      "Human review checkpoints before actions are carried out",
      "Action summaries and activity logging for full transparency"
    ],
    nextStep: "Discuss your team's workflow requirements to see if an AI agent is a practical fit for your business.",
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
    shortDescription: "Conversational voice systems designed to greet phone callers, answer common questions, and route inquiries to the right person.",
    fullDescription: "AI voice agents provide an automated spoken interface for inbound calls, helping callers get fast answers to standard questions without waiting on hold.",
    iconName: "Mic",
    whatItHelps: "Handles routine inbound customer calls, provides answers to frequent inquiries, collects caller details, and directs callers to available staff during business hours.",
    practicalExample: "A phone assistant for an office or clinic that answers incoming calls, shares working hours and service information, records appointment requests, and transfers urgent callers directly to front-desk staff.",
    scopeInclusions: [
      "Natural-sounding spoken voice in your selected language",
      "Configurable greeting scripts and conversational question flows",
      "Inquiry data capture sent directly to your email or messaging channel",
      "Call transfer logic to your existing telephone lines",
      "Regular review and script adjustment based on caller questions"
    ],
    nextStep: "Talk with us about your current call volume and the common questions your callers ask.",
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
    shortDescription: "Custom website chat assistants that guide visitors, answer inquiries using your business information, and capture qualified leads.",
    fullDescription: "Custom AI chatbots provide conversational assistance directly on your website or digital platforms, answering visitor questions based on approved business information.",
    iconName: "MessageSquareText",
    whatItHelps: "Gives your website visitors immediate, 24/7 answers to their questions, guides them to relevant services, and captures their contact information so your team can follow up.",
    practicalExample: "A website chat assistant for a professional services firm that explains service options, provides pricing guidance based on published ranges, and collects the visitor's contact details for a discovery call.",
    scopeInclusions: [
      "Knowledge base grounded strictly in your verified business documentation and FAQs",
      "Visual styling and chat widget branding matching your website",
      "Inquiry and lead capture forwarded to your email or WhatsApp",
      "Clear handover links when visitors prefer speaking with a human",
      "Multi-language conversational support where required"
    ],
    nextStep: "Share your standard customer questions with us to explore an interactive chatbot for your site.",
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
    shortDescription: "Fast, modern, responsive websites designed to present your business clearly, build credibility, and convert visitors into inquiries.",
    fullDescription: "We design and build clean, reliable websites that present your services clearly, work seamlessly across all screen sizes, and give potential clients an easy path to contact you.",
    iconName: "Layout",
    whatItHelps: "Establishes a credible online presence for your business, highlights your capabilities and demo projects, and makes it easy for potential clients to get in touch.",
    practicalExample: "A responsive company portfolio website with distinct service pages, interactive concept demos, client inquiry forms, and direct WhatsApp contact channels.",
    scopeInclusions: [
      "Tailored, mobile-optimized design reflecting your brand identity",
      "Clear service overviews and structured portfolio presentations",
      "Fast page load times and accessible typographic contrast",
      "Direct inquiry forms, WhatsApp action buttons, and contact options",
      "Domain connection and reliable hosting setup guidance"
    ],
    nextStep: "Tell us about your target audience and the goals you want your new website to achieve.",
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
    shortDescription: "Automated workflows that link your existing software tools, eliminating repetitive manual copying and keeping data up to date.",
    fullDescription: "Business automation connects the separate applications your business relies on every day, ensuring data flows smoothly from one step to the next without manual re-entry.",
    iconName: "Cpu",
    whatItHelps: "Reduces repetitive administrative work, prevents manual data transfer mistakes, and ensures incoming customer inquiries or orders are processed without delay.",
    practicalExample: "An automated workflow that instantly logs new website form submissions into a customer tracking spreadsheet, sends an internal notification to your team on WhatsApp, and emails a confirmation to the customer.",
    scopeInclusions: [
      "Assessment of your current tools, apps, and available integration access",
      "Automated event triggers between forms, spreadsheets, and management apps",
      "Notification routing to your preferred communication channels",
      "Basic error handling and retry logic to keep pipelines running",
      "Clear operational walk-through so your team understands how it works"
    ],
    nextStep: "Let us know which repetitive admin tasks consume the most time in your business.",
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
    shortDescription: "Tailored software solutions designed around your specific business requirements when off-the-shelf tools don't fit.",
    fullDescription: "When standard software doesn't address your operational needs, we design and build focused custom solutions around your exact business process and data structure.",
    iconName: "Sparkles",
    whatItHelps: "Solves unique operational challenges with software tailored specifically to your workflow, giving your team tools that match how you actually work.",
    practicalExample: "A custom internal web portal that takes complex customer specifications, verifies them against inventory standards, and produces a structured estimate for managerial approval.",
    scopeInclusions: [
      "Detailed review of your specific workflow, data inputs, and desired outputs",
      "Focused web interface designed for your team's practical daily use",
      "Integration with your existing databases and backend systems where supported",
      "Milestone reviews and feedback sessions throughout development",
      "Step-by-step documentation and handover walk-through for your staff"
    ],
    nextStep: "Schedule a discussion with our team to walk us through your unique business challenge.",
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

// Project Process: "A Clear Path From Idea to Launch"
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discuss",
    description: "We learn about your business, goals, and requirements.",
  },
  {
    step: "02",
    title: "Plan",
    description: "We agree on the scope, price, and delivery milestones.",
  },
  {
    step: "03",
    title: "Build & Review",
    description: "We develop your solution and review progress with you.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We prepare the agreed solution for launch and explain how to use it.",
  },
];

// Homepage FAQs
export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-what-can-apex-build",
    question: "What can APEX build for my business?",
    answer: "We build professional websites, AI assistants, chatbots, voice agents, and business automation workflows. Every project is planned around what your business actually needs, whether that is presenting your services clearly online, assisting customers with routine inquiries, or automating repetitive tasks across your team.",
  },
  {
    id: "faq-redesign-website",
    question: "Can you redesign my existing website?",
    answer: "Yes. We can review your existing website, modernize the visual design, improve readability and mobile responsiveness, and restructure content so it clearly communicates your services to visitors.",
  },
  {
    id: "faq-connect-systems",
    question: "Can AI tools connect with my existing systems?",
    answer: "In many cases, yes. Connecting AI tools or automations depends on the specific software, CRMs, spreadsheets, or platforms your business uses, as well as the available APIs or access permissions. During our initial discussion, we review your current tools to determine what connections are feasible.",
  },
  {
    id: "faq-project-cost",
    question: "How much does a project cost?",
    answer: "Project pricing depends on the agreed scope, technical requirements, and depth of functionality. A focused single-page website or simple automation requires a different investment than a multi-step custom AI assistant or comprehensive platform. We agree on the scope and price together before work begins.",
  },
  {
    id: "faq-project-timeline",
    question: "How long does a project take?",
    answer: "Timelines depend on the complexity of what we are building, the speed of feedback, and the availability of your required content or system access. We establish realistic delivery milestones during the planning stage so you know what to expect at each step.",
  },
  {
    id: "faq-get-started",
    question: "How do I get started?",
    answer: "Getting started is simple. Contact us on WhatsApp to tell us about your business and what you are looking to build. We will discuss your goals, answer your questions, and suggest a practical next step.",
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "Discuss",
    description: "We learn about your business, goals, and requirements."
  },
  {
    number: "02",
    title: "Plan",
    description: "We agree on the scope, price, and delivery milestones."
  },
  {
    number: "03",
    title: "Build & Review",
    description: "We develop your solution and review progress with you."
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We prepare the agreed solution for launch and explain how to use it."
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
    description: "Technology should solve meaningful problems."
  },
  {
    title: "Simplicity Matters",
    description: "Complex technology should feel simple to use."
  },
  {
    title: "Build With Purpose",
    description: "Every system should have a clear reason to exist."
  },
  {
    title: "Keep Improving",
    description: "Technology should evolve continuously."
  },
  {
    title: "Think Long Term",
    description: "Build foundations that can support bigger ideas in the future."
  }
];

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: "TODAY",
    title: "Active Production Capabilities",
    subtitle: "Current core services delivered to businesses today",
    items: [
      "Websites",
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
      "More integrations",
      "More intelligent automation",
      "Larger digital systems"
    ]
  },
  {
    phase: "FUTURE",
    title: "Long-Term Vision",
    subtitle: "Foundational platforms and deep tech innovation",
    items: [
      "Advanced AI platforms",
      "Technology products",
      "Research & Development",
      "Next-generation digital systems"
    ]
  }
];

// Preserved for backwards compatibility with any references
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "real-estate-concept",
    name: "Real Estate Website Concept",
    category: "Web Development",
    filterCategory: "Websites",
    shortDescription: "A property website concept with property browsing and an Arabic and English interface.",
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
    shortDescription: "A bakery concept featuring a cake gallery and a cake customisation interface with estimated pricing.",
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
    shortDescription: "A chicken restaurant website concept showcasing a design approach for a food business.",
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
