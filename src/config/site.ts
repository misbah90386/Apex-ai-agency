import { NavItem, ServiceItem, ProjectItem, ApproachStep, BeliefItem, RoadmapPhase } from '../types';

// Configuration variables for WhatsApp contacts
// Standard format: https://wa.me/966XXXXXXXXX
export const WHATSAPP_CONTACTS = [
  {
    displayNumber: "+966 58 257 8793",
    rawNumber: "966582578793",
    url: "https://wa.me/966582578793",
  },
  {
    displayNumber: "+966 53 418 2945",
    rawNumber: "966534182945",
    url: "https://wa.me/966534182945",
  },
];

export const WHATSAPP_NUMBER = "+966 58 257 8793";
export const WHATSAPP_URL = "https://wa.me/966582578793";

export const CONTACT_EMAIL = "ai104764@gmail.com";
export const CONTACT_EMAIL_URL = "mailto:ai104764@gmail.com";

export const BRAND_NAME = "APEX AI AGENCY";
export const BRAND_TAGLINE = "Technology Built for What's Next.";

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About APEX", path: "/about" },
  { name: "Mission & Vision", path: "/mission-vision" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    shortDescription: "Intelligent AI agents designed to perform specific tasks, assist with workflows, and interact with business processes.",
    fullDescription: "AI agents can be designed to perform defined tasks, process information, interact with systems, and assist with business workflows.",
    iconName: "Bot",
    capabilities: [
      "Task automation",
      "Information processing",
      "Workflow assistance",
      "Custom agent behavior",
      "System integrations",
    ],
    features: [
      "Autonomous or human-in-the-loop task routing",
      "Context-aware system execution and tool calling",
      "Secure background execution connected to enterprise APIs"
    ]
  },
  {
    id: "ai-voice-agents",
    title: "AI Voice Agents",
    shortDescription: "Voice-based AI systems designed for natural conversations and automated interactions.",
    fullDescription: "AI voice agents enable businesses to create conversational voice experiences using artificial intelligence.",
    iconName: "Mic",
    capabilities: [
      "Natural conversations",
      "Voice interactions",
      "Automated responses",
      "Custom workflows",
      "Business-specific use cases",
    ],
    features: [
      "Low-latency speech-to-speech and real-time streaming",
      "Deterministic business logic with contextual flexibility",
      "Telephony and browser-based audio endpoints"
    ]
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    shortDescription: "Custom conversational AI experiences for websites and digital platforms.",
    fullDescription: "Custom AI chatbots can provide conversational experiences across websites and digital platforms.",
    iconName: "MessageSquareText",
    capabilities: [
      "Website chatbots",
      "AI-powered responses",
      "Knowledge-based conversations",
      "Custom business information",
      "User assistance",
    ],
    features: [
      "Grounded knowledge retrieval over structured business docs",
      "Tailored tone aligned with your visual branding",
      "Escalation pathways and conversation history management"
    ]
  },
  {
    id: "professional-websites",
    title: "Professional Websites",
    shortDescription: "Modern, responsive websites designed around a business's identity, requirements, and goals.",
    fullDescription: "APEX creates modern websites designed around the business's brand, content, structure, and requirements.",
    iconName: "Layout",
    capabilities: [
      "Responsive design",
      "Modern UI",
      "Mobile optimization",
      "Custom layouts",
      "Interactive experiences",
    ],
    features: [
      "Clean semantic architecture with high-contrast accessibility",
      "Fluid interaction design using modern frontend frameworks",
      "Optimized performance and frictionless cross-device viewing"
    ]
  },
  {
    id: "business-automation",
    title: "Business Automation",
    shortDescription: "Automation systems that connect tools, workflows, and repetitive processes.",
    fullDescription: "Automation can connect repetitive tasks and workflows to reduce unnecessary manual work.",
    iconName: "Cpu",
    capabilities: [
      "Workflow automation",
      "Tool integrations",
      "Data handling",
      "Repetitive task automation",
      "Custom workflows",
    ],
    features: [
      "Multi-system pipeline triggers and webhook orchestration",
      "Error handling, alert monitoring, and state synchronization",
      "Reduction of manual copy-paste and administrative bottlenecks"
    ]
  },
  {
    id: "custom-ai-solutions",
    title: "Custom AI Solutions",
    shortDescription: "Technology solutions designed around unique business requirements and use cases.",
    fullDescription: "Every business has different technical requirements. APEX can design custom AI solutions around specific use cases.",
    iconName: "Sparkles",
    capabilities: [
      "Custom AI systems",
      "AI integrations",
      "Business-specific workflows",
      "Custom interfaces",
      "Experimental technology",
    ],
    features: [
      "Bespoke model fine-tuning and retrieval pipelines",
      "Proprietary business process integrations",
      "Robust data safety barriers and architectural reviews"
    ]
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ai-business-assistant",
    name: "AI Business Assistant",
    category: "AI Solution",
    filterCategory: "AI",
    shortDescription: "An intelligent autonomous agent engineered to organize document streams, parse internal knowledge, and assist staff with multi-step workflows.",
    fullOverview: "This concept architecture showcases an internal operational agent capable of ingesting varied data formats (spreadsheets, contracts, tickets), cross-referencing company knowledge repositories, and generating verified action checklists.",
    keyFeatures: [
      "Structured knowledge indexing",
      "Multi-step reasoning pipeline",
      "Role-based permission gating",
      "Real-time event logging"
    ],
    techStack: ["Autonomous LLM Orchestrator", "Vector Search", "TypeScript", "REST API Hub"],
    visualType: "agent",
    status: "Portfolio Concept / Architecture Model"
  },
  {
    id: "premium-business-website",
    name: "Premium Business Website",
    category: "Web Development",
    filterCategory: "Websites",
    shortDescription: "A minimalist, high-performance corporate web interface built for a technology consultancy demanding strict design standards and fluid interactions.",
    fullOverview: "A production-grade digital experience emphasizing typographic hierarchy, dark-mode refinement, sub-second load times, and responsive multi-tier navigation.",
    keyFeatures: [
      "Custom design system with subtle glow aesthetics",
      "Smooth hardware-accelerated animations",
      "Zero-latency routing and asset optimization",
      "Strict accessibility standards (WCAG AA)"
    ],
    techStack: ["React 19", "Tailwind CSS v4", "Motion", "Vite"],
    visualType: "web",
    status: "Portfolio Concept / Architecture Model"
  },
  {
    id: "automated-workflow-system",
    name: "Automated Workflow System",
    category: "Automation",
    filterCategory: "Automation",
    shortDescription: "A unified synchronization bridge coordinating data transfers, webhook dispatches, and scheduled jobs between disparate business systems.",
    fullOverview: "Engineered to eliminate manual data re-entry across CRM, inventory management, and financial reporting tools with idempotent background job queues.",
    keyFeatures: [
      "Bi-directional webhook event routing",
      "Automated payload schema validation",
      "Visual pipeline status monitor",
      "Zero-data-loss retry mechanisms"
    ],
    techStack: ["Node.js / Express", "Webhook Handlers", "Event Queueing", "Cloud Architecture"],
    visualType: "workflow",
    status: "Portfolio Concept / Architecture Model"
  },
  {
    id: "ai-customer-support",
    name: "AI Customer Support",
    category: "AI Solution",
    filterCategory: "AI",
    shortDescription: "A grounded conversational support system delivering instant, accurate product answers and smooth handoffs to human personnel.",
    fullOverview: "Designed with deterministic safety guardrails to ensure responses strictly adhere to approved product documentation while maintaining natural, helpful dialogue.",
    keyFeatures: [
      "Strict citation-grounded response synthesis",
      "Context-preserving conversational state",
      "Configurable sentiment-triggered escalation",
      "Multi-channel interface integration"
    ],
    techStack: ["Semantic Knowledge Retrieval", "Streaming WebSockets", "React UI"],
    visualType: "support",
    status: "Portfolio Concept / Architecture Model"
  },
  {
    id: "voice-scheduling-agent",
    name: "Autonomous Voice Concierge",
    category: "AI Solution",
    filterCategory: "AI",
    shortDescription: "A natural speech agent designed for real-time voice verification, scheduling verification, and customer inquiries.",
    fullOverview: "A demonstration model exhibiting low-latency audio processing, adaptive pause detection, and structured calendar system integration.",
    keyFeatures: [
      "Sub-400ms speech turnaround",
      "Noise-tolerant acoustic transcription",
      "Direct calendar API availability synchronization",
      "Conversational state machine"
    ],
    techStack: ["Real-time Audio Streaming", "Voice Synthesis", "API Connectors"],
    visualType: "custom",
    status: "Portfolio Concept / Architecture Model"
  },
  {
    id: "data-ingestion-pipeline",
    name: "Document Extraction Engine",
    category: "Automation",
    filterCategory: "Automation",
    shortDescription: "Automated processing infrastructure that normalizes legacy invoices, PDFs, and contracts into structured JSON payloads.",
    fullOverview: "Built for operational back-offices to extract structured line items from unstructured files without manual retyping.",
    keyFeatures: [
      "Document layout parsing",
      "Confidence scoring per extracted field",
      "Automated discrepancy flagging",
      "Batch directory watcher"
    ],
    techStack: ["OCR & Layout Analysis", "Data Normalizers", "Cloud Storage"],
    visualType: "workflow",
    status: "Portfolio Concept / Architecture Model"
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business, requirements, users, and technical needs."
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the right technology, structure, and solution."
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the website, AI system, automation, or custom solution."
  },
  {
    number: "04",
    title: "Improve",
    description: "Test, refine, and improve the solution over time."
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
