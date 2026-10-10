import { 
  NavItem, 
  ServiceItem, 
  DemoProjectItem, 
  ProcessStep, 
  FAQItem, 
  SolutionOption, 
  BriefOptions,
  Language,
  BeliefItem,
  RoadmapPhase
} from '../types';

// ============================================================================
// WHATSAPP CONTACT DETAILS (Preserved for both lines)
// Line 01: +966 58 257 8793
// Line 02: +966 53 418 2945
// ============================================================================

export const WHATSAPP_CONTACTS_DATA = {
  line1: {
    lineLabel: { en: "Line 01", ar: "الخط 01" },
    displayNumber: "+966 58 257 8793",
    rawNumber: "966582578793",
  },
  line2: {
    lineLabel: { en: "Line 02", ar: "الخط 02" },
    displayNumber: "+966 53 418 2945",
    rawNumber: "966534182945",
  }
};

export const getGeneralWhatsAppUrl = (lang: Language = 'en', rawNumber: string = "966582578793") => {
  const text = lang === 'ar'
    ? "مرحباً APEX AI AGENCY، أود مناقشة مشروع لأعمالي."
    : "Hello APEX AI AGENCY, I would like to discuss a project.";
  return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
};

export const getServiceWhatsAppUrlWithLang = (serviceTitle: string, lang: Language = 'en', rawNumber: string = "966582578793") => {
  const text = lang === 'ar'
    ? `مرحباً APEX AI AGENCY، أود مناقشة خدمة ${serviceTitle} لأعمالي.`
    : `Hello APEX AI AGENCY, I would like to discuss your ${serviceTitle} service.`;
  return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
};

export const getProjectWhatsAppUrlWithLang = (projectTitle: string, lang: Language = 'en', rawNumber: string = "966582578793") => {
  const text = lang === 'ar'
    ? `مرحباً APEX AI AGENCY، أود مناقشة مشروع مماثل لـ ${projectTitle}.`
    : `Hello APEX AI AGENCY, I would like to discuss a project similar to the ${projectTitle}.`;
  return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
};

// ============================================================================
// WHATSAPP PROJECT BRIEF BUILDER OPTIONS & BUILDER
// ============================================================================

export interface BriefOptionItem {
  id: string;
  en: string;
  ar: string;
  desc?: { en: string; ar: string };
}

export const BRIEF_BUSINESS_TYPES: BriefOptionItem[] = [
  { id: "real-estate", en: "Real Estate & Property", ar: "عقارات وتطوير عقاري" },
  { id: "restaurant", en: "Restaurant & Hospitality", ar: "مطاعم وضيافة" },
  { id: "retail", en: "Retail & E-commerce", ar: "تجارة وتجزئة ومتاجر إلكترونية" },
  { id: "healthcare", en: "Healthcare & Clinic", ar: "عيادات ورعاية صحية" },
  { id: "professional", en: "Professional Services & Consulting", ar: "خدمات مهنية واستشارات" },
  { id: "contracting", en: "Contracting & Trades", ar: "مقاولات وأعمال مهنية" },
  { id: "other", en: "Other Business", ar: "نشاط تجاري آخر" },
];

export const BRIEF_SERVICES_NEEDED: BriefOptionItem[] = [
  { id: "website", en: "Professional Website", ar: "موقع إلكتروني احترافي" },
  { id: "chatbot", en: "AI Chatbot (Web)", ar: "مساعد محادثة ذكي للموقع" },
  { id: "voice-agent", en: "AI Voice Agent (Phone)", ar: "مساعد صوتي للمكالمات الهاتفية" },
  { id: "automation", en: "Business Automation", ar: "أتمتة العمليات وسير العمل" },
  { id: "agent", en: "AI Multi-Step Agent", ar: "وكيل ذكاء اصطناعي متعدد المهام" },
  { id: "custom", en: "Custom AI Solution", ar: "حل ذكاء اصطناعي مخصص" },
  { id: "undecided", en: "Not Sure Yet / Multiple Services", ar: "لست متأكداً بعد / خدمات متعددة" },
];

export const BRIEF_PROJECT_NATURES: BriefOptionItem[] = [
  { 
    id: "new", 
    en: "New Project", 
    ar: "مشروع جديد",
    desc: { en: "Building from scratch", ar: "تأسيس وبناء من البداية" }
  },
  { 
    id: "upgrade", 
    en: "Upgrade Existing", 
    ar: "تطوير مشروع قائم",
    desc: { en: "Refining or upgrading current setup", ar: "تحسين أو ترقية النظام الحالي" }
  },
];

export interface BriefBuilderState {
  businessTypeId: string;
  serviceNeededId: string;
  projectNatureId: string;
  requirements: string;
  selectedLine: '966582578793' | '966534182945';
}

export const buildLocalizedBriefText = (state: BriefBuilderState, lang: Language): string => {
  const bType = BRIEF_BUSINESS_TYPES.find(b => b.id === state.businessTypeId)?.[lang] || state.businessTypeId;
  const sNeed = BRIEF_SERVICES_NEEDED.find(s => s.id === state.serviceNeededId)?.[lang] || state.serviceNeededId;
  const pNature = BRIEF_PROJECT_NATURES.find(p => p.id === state.projectNatureId)?.[lang] || state.projectNatureId;

  if (lang === 'ar') {
    const lines: string[] = [
      "مرحباً APEX AI AGENCY،",
      "",
      "أود الاستفسار ومناقشة تفاصيل مشروع لأعمالي:",
      `• نوع النشاط: ${bType}`,
      `• الخدمة المطلوبة: ${sNeed}`,
      `• طبيعة المشروع: ${pNature}`,
    ];
    if (state.requirements && state.requirements.trim().length > 0) {
      lines.push(`• متطلبات إضافية: ${state.requirements.trim()}`);
    }
    lines.push("", "أتطلع للتواصل مع فريقكم ومناقشة الحلول المناسبة.");
    return lines.join("\n");
  }

  const lines: string[] = [
    "Hello APEX AI AGENCY,",
    "",
    "I would like to discuss a project enquiry:",
    `• Business Type: ${bType}`,
    `• Service Needed: ${sNeed}`,
    `• Project Nature: ${pNature}`,
  ];
  if (state.requirements && state.requirements.trim().length > 0) {
    lines.push(`• Requirements: ${state.requirements.trim()}`);
  }
  lines.push("", "Looking forward to hearing from your team.");
  return lines.join("\n");
};

export const buildLocalizedBriefUrl = (state: BriefBuilderState, lang: Language): string => {
  const text = buildLocalizedBriefText(state, lang);
  return `https://wa.me/${state.selectedLine}?text=${encodeURIComponent(text)}`;
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const getNavItems = (lang: Language): NavItem[] => {
  if (lang === 'ar') {
    return [
      { name: "الرئيسية", path: "/" },
      { name: "خدماتنا", path: "/services" },
      { name: "عن APEX", path: "/about" },
      { name: "الرؤية والرسالة", path: "/mission-vision" },
      { name: "تواصل معنا", path: "/contact" },
    ];
  }
  return [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About APEX", path: "/about" },
    { name: "Mission & Vision", path: "/mission-vision" },
    { name: "Contact", path: "/contact" },
  ];
};

// ============================================================================
// DEMO PORTFOLIO PROJECTS
// ============================================================================

export const getDemoProjects = (lang: Language): DemoProjectItem[] => {
  if (lang === 'ar') {
    return [
      {
        id: "real-estate-concept",
        title: "نموذج موقع عقاري متكامل",
        label: "مشروع تجريبي",
        description: "نموذج لموقع عقاري ثنائي اللغة باللغتين العربية والإنجليزية، يتيح استعراض العقارات والفلترة التفاعلية وقوائم العرض الحديثة.",
        demoUrl: "https://celebrated-biscuit-a7f671.netlify.app/",
        previewType: "real-estate",
        whatsappUrl: getProjectWhatsAppUrlWithLang("نموذج موقع عقاري متكامل", 'ar'),
      },
      {
        id: "custom-cake-bakery",
        title: "نموذج متجر مخبوزات وحلويات",
        label: "مشروع تجريبي",
        description: "نموذج لموقع مخبوزات راقٍ يضم معرضاً بصرياً للكعك وواجهة تفاعلية لتخصيص الطلبات مع حساب فوري للتكلفة التقديرية.",
        demoUrl: "https://sweet-dream-bakes.netlify.app/",
        previewType: "bakery",
        whatsappUrl: getProjectWhatsAppUrlWithLang("نموذج متجر مخبوزات وحلويات", 'ar'),
      },
      {
        id: "chicken-restaurant",
        title: "نموذج موقع مطعم",
        label: "مشروع تجريبي",
        description: "نموذج لموقع مطعم سريع يقدم عرضاً جذاباً لقائمة الطعام ووجبات الكومبو وقنوات الطلب المباشر للمحلي والسفري.",
        demoUrl: "https://cerulean-begonia-2ecb7d.netlify.app/",
        previewType: "restaurant",
        whatsappUrl: getProjectWhatsAppUrlWithLang("نموذج موقع مطعم", 'ar'),
      },
    ];
  }

  return [
    {
      id: "real-estate-concept",
      title: "Real Estate Website Concept",
      label: "Demo Project",
      description: "A bilingual property website concept featuring property browsing in Arabic and English, filter controls, and clean listing layouts.",
      demoUrl: "https://celebrated-biscuit-a7f671.netlify.app/",
      previewType: "real-estate",
      whatsappUrl: getProjectWhatsAppUrlWithLang("Real Estate Website Concept", 'en'),
    },
    {
      id: "custom-cake-bakery",
      title: "Custom Cake Bakery Website",
      label: "Demo Project",
      description: "An artisan bakery website concept with a visual cake gallery and an interactive cake customisation interface with live estimated pricing.",
      demoUrl: "https://sweet-dream-bakes.netlify.app/",
      previewType: "bakery",
      whatsappUrl: getProjectWhatsAppUrlWithLang("Custom Cake Bakery Website", 'en'),
    },
    {
      id: "chicken-restaurant",
      title: "Chicken Restaurant Website",
      label: "Demo Project",
      description: "A fast-casual restaurant website concept showcasing an appetizing menu layout, combo showcases, and direct ordering channels.",
      demoUrl: "https://cerulean-begonia-2ecb7d.netlify.app/",
      previewType: "restaurant",
      whatsappUrl: getProjectWhatsAppUrlWithLang("Chicken Restaurant Website", 'en'),
    },
  ];
};

// ============================================================================
// 6 CORE SERVICES DATA
// ============================================================================

export const getServicesData = (lang: Language): ServiceItem[] => {
  if (lang === 'ar') {
    return [
      {
        id: "ai-agents",
        title: "المساعدون البرمجيون متعددو المهام (AI Agents)",
        shortDescription: "مساعدون برمجيون مخصصون لتنفيذ المهام متعددة الخطوات، وتنظيم الطلبات الواردة، ودعم فريق عملك يومياً.",
        fullDescription: "يساعد الوكلاء الأذكياء الشركات على تنفيذ مهام تشغيلية محددة متعددة الخطوات، وتنظيم الملفات الداخلية، وتنسيق تدفق البيانات بين الأنظمة المختلفة وفق قواعد واضحة.",
        iconName: "Bot",
        whatWeBuild: "مساعدون برمجيون مخصصون بقواعد دقيقة للتعامل مع المهام الرقمية الروتينية ومتعددة الخطوات.",
        whatItHelps: "يوفر ساعات من العمل الإداري اليدوي عبر فرز المعلومات ومراجعة الطلبات وإعداد ملخصات جاهزة لاعتماد فريقك.",
        practicalExample: "مساعد لاستقبال طلبات الصيانة يستخرج بيانات العميل، ويتأكد من إرفاق الملفات المطلوبة، ويرتب ملخصاً جاهزاً لمشرف العمل في ثوانٍ.",
        whatItIncludes: [
          "مجموعة تعليمات وقواعد اتخاذ قرار مخصصة لأسلوب عملك",
          "محلل للمستندات والملفات والطلبات الرقمية الواردة",
          "واجهة فحص واعتماد بشري قبل تنفيذ أي إجراءات فعلية",
          "سجلات نشاط شفافة وملخصات آلية للعمليات"
        ],
        practicalUseCase: "يتلقى فريق العمليات عشرات الطلبات يومياً. يستخرج المساعد الذكي مواصفات العميل، ويتأكد من اكتمال النماذج، ويجهز ملخصاً منظماً جاهزاً للمراجعة الفورية.",
        whatWeNeedToGetStarted: [
          "نماذج من المستندات أو الطلبات التي يعالجها فريقك بانتظام",
          "وصف تفصيلي لخطوات المراجعة ونقاط التدقيق اليدوية الحالية",
          "صلاحيات وصول للأنظمة المطلوب الربط معها (حسب التوفر)"
        ],
        technicalRequirementsNote: "حسابات المنصات الخارجية أو واجهات البرمجة الخاصة تتم مناقشتها وتوضيحها بشفافية كاملة أثناء مرحلة التخطيط دون وعود غير واقعية.",
        scopeInclusions: [
          "تعليمات وقواعد قرار مخصصة ومطابقة لسير عملك",
          "معالجة وفرز المستندات والطلبات الرقمية",
          "ربط الأنظمة مع أدواتك الداخلية المتاحة",
          "محطات مراجعة بشرية قبل تنفيذ الإجراءات",
          "ملخصات وتقارير نشاط واضحة"
        ],
        nextStep: "تواصل معنا عبر واتساب لمناقشة أسلوب عمل فريقك وتحديد ما إذا كان الوكيل الذكي ملائماً لاحتياجاتك.",
        whatsappUrl: getServiceWhatsAppUrlWithLang("المساعدون البرمجيون متعددو المهام", 'ar'),
        capabilities: [
          "أتمتة المهام المعقدة",
          "معالجة البيانات والملفات",
          "مساعدة سير العمل",
          "استخراج البيانات المنظمة",
          "المراجعة البشرية عند الحاجة"
        ],
        features: [
          "منطق اتخاذ قرار محدد ومضبوط",
          "تنسيق البيانات بين الأنظمة",
          "سجلات تدقيق ومتابعة واضحة"
        ]
      },
      {
        id: "ai-voice-agents",
        title: "المساعدون الصوتيّون للمكالمات (AI Voice Agents)",
        shortDescription: "أنظمة صوتية هاتفية ذكية للرد على استفسارات المتصلين الروتينية، وتسجيل الرسائل، وتوجيه المكالمات الهامة لفريقك.",
        fullDescription: "يوفر المساعد الصوتي واجهة ذكية للمكالمات الهاتفية الواردة، مما يتيح للمتصلين الحصول على إجابات سريعة دون الانتظار على الخط.",
        iconName: "Mic",
        whatWeBuild: "أنظمة هاتفية بصوت طبيعي ترحب بالمتصلين وتجيب على الاستفسارات المتكررة على مدار الساعة.",
        whatItHelps: "يضمن الرد على كل مكالمة فوراً، ويجيب على الأسئلة الشائعة 24/7، ويحول المتصلين الهامين مباشرة إلى موظفيك.",
        practicalExample: "مساعد هاتف لعيادة أو مكتب يرد على استفسارات مواعيد العمل، ويسجل طلبات الحجز، ويحول الحالات الطارئة إلى موظف الاستقبال.",
        whatItIncludes: [
          "نظام ترحيب صوتي مهيأ للهاتف أو الويب",
          "سيناريو محادثة مخصص ومضبوط للأسئلة الأكثر شيوعاً لنشاطك",
          "جمع بيانات المتصل ومنطق تحويل المكالمات للموظفين",
          "ملخصات صوتية ورسائل للمكالمات تصل مباشرة إلى واتساب أو البريد"
        ],
        practicalUseCase: "عيادة أسنان أو مكتب استشاري يتلقى اتصالات مكثفة. يجيب المساعد الصوتي على أسئلة ساعات العمل والخدمات والعنوان، ويسجل رغبات الحجز، ويحول المكالمات العاجلة فوراً.",
        whatWeNeedToGetStarted: [
          "قائمة بالأسئلة الأكثر تكراراً من العملاء والإجابات المعتمدة لها",
          "أرقام الهواتف المعتمدة لتحويل المكالمات إلى فريقك",
          "ساعات العمل الرسمية وسياسات استقبال العملاء"
        ],
        technicalRequirementsNote: "خطوط الاتصال الهاتفي (مزود خدمة الاتصال SIP/VoIP) ودقائق المكالمات هي متطلبات بنية تحتية خارجية نوضحها بوضوح خلال التخطيط.",
        scopeInclusions: [
          "صوت طبيعي واضح باللهجة أو اللغة المناسبة",
          "نصوص ترحيب وسيناريوهات محادثة منظمة",
          "إرسال ملخصات المكالمات مباشرة إلى واتساب أو البريد",
          "منطق تحويل المكالمات لأرقام فريقك الحالية",
          "تحديث النصوص مع تطور أسئلة العملاء"
        ],
        nextStep: "تواصل معنا عبر واتساب لمناقشة حجم المكالمات والأسئلة الشائعة لدى عملائك.",
        whatsappUrl: getServiceWhatsAppUrlWithLang("المساعدون الصوتيّون للمكالمات", 'ar'),
        capabilities: [
          "استقبال المكالمات بصوت طبيعي",
          "الرد على الأسئلة الشائعة",
          "جمع بيانات وحجوزات المتصلين",
          "تحويل المكالمات لفريقك",
          "تسجيل المكالمات وإرسال الإشعارات"
        ],
        features: [
          "تصميم محادثة صوتية واضحة ومباشرة",
          "تكامل مع شبكات الهاتف والويب",
          "مسارات تصعيد وتحويل محددة"
        ]
      },
      {
        id: "ai-chatbots",
        title: "المساعدون الذكيون للمواقع (AI Chatbots)",
        shortDescription: "مساعدو محادثة للمواقع يجيبون على أسئلة العملاء 24/7 بناءً على معلومات نشاطك المعتمدة ويجمعون بيانات المهتمين.",
        fullDescription: "مساعدو دردشة ذكيون مدمجون مباشرة في موقعك الإلكتروني أو منصاتك الرقمية، يجيبون على استفسارات الزوار بدقة وفق معلوماتك المعتمدة فقط.",
        iconName: "MessageSquareText",
        whatWeBuild: "مساعد دردشة بهوية علامتك التجارية مدمج في موقعك، مدرب حصراً على معلوماتك وبياناتك المعتمدة.",
        whatItHelps: "يجيب الزوار فوراً في أي وقت، ويوجه العملاء المحتملين لخدماتك المناسبة، ويجمع أرقامهم للمتابعة.",
        practicalExample: "مساعد محادثة لموقع عقاري يجيب عن تفاصيل الأسعار، ويرشح العقار المناسب، ويجمع رقم هاتف العميل لفريق المبيعات.",
        whatItIncludes: [
          "نافذة محادثة مدمجة للموقع بألوان وهوية علامتك التجارية",
          "قاعدة معرفة مبنية حصراً على وثائقك وأسئلتك المعتمدة",
          "نموذج استقبال لجمع اسم العميل ورقم هاتفه",
          "رابط تحويل فوري لمحادثة واتساب للمتابعة الشخصية المباشرة"
        ],
        practicalUseCase: "موقع شركة عقارية يزوره العملاء مساءً. يشرح المساعد الذكي فوراً الخدمات والخيارات المتاحة، ويجمع بيانات المهتمين، ويرسل تنبيهاً فورياً لفريق المبيعات على واتساب.",
        whatWeNeedToGetStarted: [
          "الأسئلة الشائعة المعتمدة للشركة والخدمات وسياسات الأسعار",
          "ألوان الهوية وصلاحية إضافة كود النافذة على الموقع",
          "رقم واتساب أو البريد الإلكتروني لاستقبال بيانات العملاء"
        ],
        technicalRequirementsNote: "استخدام واجهات الذكاء الاصطناعي الخارجية يعتمد على حجم حركة الزوار الشهرية ويتم تنظيمه بشفافية بحسابات مملوكة للعميل.",
        scopeInclusions: [
          "تدريب قاعدة المعرفة بدقة على وثائقك فقط لمنع التخريف",
          "تصميم وألوان ملائمة لهوية موقعك بالكامل",
          "تنبيهات فورية بالعملاء الجدد تصل لواتساب أو البريد",
          "خيار التحويل لمحادثة واتساب بلمسة واحدة",
          "دعم اللغتين العربية والإنجليزية"
        ],
        nextStep: "راسلنا على واتساب بنماذج من الأسئلة المعتادة التي يطرحها زوار موقعك.",
        whatsappUrl: getServiceWhatsAppUrlWithLang("المساعدون الذكيون للمواقع", 'ar'),
        capabilities: [
          "نافذة محادثة سريعة للموقع",
          "إجابات موثوقة من معلوماتك فقط",
          "جمع بيانات العملاء وأرقامهم",
          "تنبيهات فورية على واتساب والإيميل",
          "دعم متعدد اللغات (عربي وإنجليزي)"
        ],
        features: [
          "حدود معلوماتية دقيقة بدون تخريف",
          "اندماج متناسق مع تصميم الموقع",
          "واجهة أنيقة ومتجاوبة مع الجوال"
        ]
      },
      {
        id: "professional-websites",
        title: "المواقع الإلكترونية الاحترافية (Professional Websites)",
        shortDescription: "مواقع أنيقة وسريعة مصممة لعرض خدماتك، وبناء الثقة، وتسهيل تواصل العملاء معك مباشرة عبر واتساب.",
        fullDescription: "نصمم ونطوّر مواقع إلكترونية متقنة وسريعة تعرض خدماتك بوضوح، وتعمل بسلاسة على كل الشاشات، وتوفر لعملائك طريقاً سهلاً للتواصل المباشر.",
        iconName: "Layout",
        whatWeBuild: "مواقع إلكترونية سريعة ومخصصة مبنية حول علامتك التجارية وخدماتك وأهدافك التجارية.",
        whatItHelps: "تمنح نشاطك حضوراً رقمياً موثوقاً، وتعرض أعمالك السابقة باحترافية، وتتيح للزوار التواصل معك على واتساب بلمسة واحدة.",
        practicalExample: "موقع حديث لشركة خدمات أو مقهى ومخبز يوضح قائمة الخدمات، ويعرض نماذج الأعمال، ويوفر أزرار تواصل سريعة لواتساب.",
        whatItIncludes: [
          "تصميم متجاوب بالكامل مخصص للجوال والأجهزة اللوحية والكمبيوتر",
          "أقسام واضحة لعرض الخدمات ونماذج الأعمال والمشاريع",
          "أزرار واتساب مباشرة وسهلة الاستخدام في كل الصفحات",
          "تحسين فائق لسرعة التحميل وتأسيس ممتاز لمحركات البحث"
        ],
        practicalUseCase: "شركة خدمات تجارية أو متجر يحتاج موقعاً عصرياً لتوثيق مصداقيته أمام العملاء المحتملين، وعرض خدماته بوضوح، وتمكين الحجز والاستفسار عبر واتساب دون تعقيد.",
        whatWeNeedToGetStarted: [
          "شعار شركتك، وألوان الهوية، وصور عالية الجودة إن وجدت",
          "نصوص وصف الخدمات ونبذة مختصرة عن الشركة",
          "بيانات النطاق (الدومين) وبيئة الاستضافة المفضلة"
        ],
        technicalRequirementsNote: "اشتراك النطاق والاستضافة يظل ملكاً مباشراً للعميل؛ نقدم لك الإرشاد الكامل والدعم الفني للإعداد والإطلاق.",
        scopeInclusions: [
          "تصميم متقن متوافق مع الهوية البصرية لشركتك",
          "عرض منظم للخدمات والمشاريع السابقة",
          "سرعة تحميل ممتازة وخطوط عربية مريحة للقراءة",
          "قنوات تواصل واتساب مباشرة ومحسنة",
          "ربط الدومين وإعداد الاستضافة حتى الإطلاق"
        ],
        nextStep: "تحدث معنا عبر واتساب حول الأهداف التي ترغب بتحقيقها من موقعك الجديد.",
        whatsappUrl: getServiceWhatsAppUrlWithLang("المواقع الإلكترونية الاحترافية", 'ar'),
        capabilities: [
          "تصاميم متجاوبة للجوال والكمبيوتر",
          "واجهات عصرية وراقية",
          "عرض مميز للخدمات والمشاريع",
          "أزرار واتساب سريعة ومباشرة",
          "أسس قوية للسرعة ومحركات البحث"
        ],
        features: [
          "بنية برمجية نظيفة وحديثة",
          "أداء سريع على جميع الأجهزة",
          "تنقل سلس وسهل للزوار"
        ]
      },
      {
        id: "business-automation",
        title: "أتمتة العمليات والربط بين الأنظمة (Business Automation)",
        shortDescription: "سير عمل مؤتمت يربط برامجك الحالية معاً، ويلغي النسخ واللصق اليدوي، ويبقي سجلاتك محدثة أولاً بأول.",
        fullDescription: "تربط أتمتة الأعمال بين التطبيقات المنفصلة التي يعتمد عليها نشاطك التجاري يومياً، مما يضمن تدفق البيانات بسلاسة من خطوة لأخرى دون الحاجة لإعادة إدخالها يدوياً.",
        iconName: "Cpu",
        whatWeBuild: "مسارات آلية تربط النماذج، وجداول البيانات، وتطبيقات المراسلة، وأنظمة إدارة العملاء (CRM) معاً.",
        whatItHelps: "تلغي الإدخال اليدوي المكرر، وتمنع ضياع استفسارات العملاء، وتضمن وصول التنبيهات لفريقك في اللحظة نفسها.",
        practicalExample: "سير عمل آلي يسجل كل استفسار جديد من الموقع في جداول Google Sheets، وينبه فريقك فوراً على واتساب، ويرسل تأكيداً للعميل.",
        whatItIncludes: [
          "ربط إلكتروني ومشغلات أحداث (Webhooks) بين أدواتك اليومية",
          "مزامنة تلقائية للبيانات في Google Sheets أو Airtable أو CRM",
          "إرسال تنبيهات فورية لفريقك على واتساب أو البريد الإلكتروني",
          "مراقبة الأخطاء التشغيلية وشرح مبسط لفريقك لكيفية المتابعة"
        ],
        practicalUseCase: "مشروع توريد أو خدمات يتلقى طلبات عبر نماذج متعددة. يسجل النظام كل طلب تلقائياً في جدول مركزي، وينبه المشرف على واتساب بالتفاصيل، ويرسل تأكيداً للعميل فوراً.",
        whatWeNeedToGetStarted: [
          "قائمة البرامج والتطبيقات التي يستخدمها نشاطك التجاري حالياً",
          "البيانات والخطوات المحددة التي ينسخها فريقك يدوياً حالياً",
          "صلاحيات وصول أو مفاتيح API للأدوات المطلوب ربطها"
        ],
        technicalRequirementsNote: "خطط منصات الأتمتة الخارجية (مثل Make أو Zapier أو سيرفرات السحاب) تعتمد على عدد العمليات الشهرية وتتم مناقشتها مسبقاً بوضوح.",
        scopeInclusions: [
          "دراسة أدواتك الحالية وإمكانيات الربط المتاحة فيها",
          "إعداد مشغلات تلقائية بين النماذج والجداول والرسائل",
          "توجيه التنبيهات لأرقام واتساب أو البريد المفضلة لديك",
          "مراقبة استقرار مسارات العمل وضمان عملها الموثوق",
          "شرح وافٍ لفريقك لكيفية عمل وتدفق النظام"
        ],
        nextStep: "أخبرنا على واتساب بالمهام الإدارية المتكررة التي تستهلك أكبر قدر من وقت فريقك.",
        whatsappUrl: getServiceWhatsAppUrlWithLang("أتمتة العمليات والربط بين الأنظمة", 'ar'),
        capabilities: [
          "الربط والتكامل بين البرامج",
          "توجيه الطلبات والعملاء تلقائياً",
          "تنبيهات فورية لفريق العمل",
          "مزامنة الجداول وقواعد البيانات",
          "رسائل تأكيد آلية للعملاء"
        ],
        features: [
          "مشغلات API و Webhooks عالية الموثوقية",
          "تقليص كبير للأخطاء والإدخال اليدوي",
          "إدارة وصيانة تشغيلية سهلة ومباشرة"
        ]
      },
      {
        id: "custom-ai-solutions",
        title: "حلول الذكاء الاصطناعي المخصصة (Custom AI Solutions)",
        shortDescription: "أنظمة برمجية مصممة خصيصاً حول أسلوب عملك وبياناتك عندما لا تلبي البرامج الجاهزة متطلباتك بدقة.",
        fullDescription: "عندما لا تغطي البرامج الجاهزة احتياجاتك التشغيلية الخاصة، نصمم ونطور حلولاً مركزة ومخصصة تماماً وفق عملياتك التجارية وبنية بياناتك.",
        iconName: "Sparkles",
        whatWeBuild: "أدوات وأنظمة رقمية مصممة خصيصاً لعملياتك التشغيلية ومتطلبات بياناتك الفريدة.",
        whatItHelps: "تحل معضلات الأعمال التي تعجز البرامج العامة الجاهزة عن التعامل معها، وتمنح فريقك أدوات صُممت خصيصاً لأسلوب عملهم.",
        practicalExample: "بوابة داخلية تفحص مواصفات طلبات العملاء وتقارنها بقواعد المخزون والتسعير، وتجهز عرض سعر دقيق جاهز لاعتماد الإدارة.",
        whatItIncludes: [
          "بنية برمجية موجهة ومصممة بدقة لمتطلباتك التشغيلية الفريدة",
          "واجهة مستخدم داخلية مخصصة ومريحة لأسلوب عمل فريقك",
          "ربط مع قواعد بياناتك أو أنظمتك الداخلية المتاحة برمجياً",
          "محطات مراجعة مجدولة، واختبار شامل، وتسليم عملي لفريقك"
        ],
        practicalUseCase: "مورد مواد يتلقى جداول طلبات غير نمطية من العملاء. نطوّر بوابة ويب تفحص أكواد المنتجات مع قواعد المستودع الحالية، وتوضح الفروقات، وتستخرج عرض سعر منظم للاعتماد.",
        whatWeNeedToGetStarted: [
          "مراجعة تفصيلية لسير عملك الحالي والمدخلات اليومية والنتائج المطلوبة",
          "نماذج من السجلات أو الجداول التي توضح الحالات الشائعة والخاصة",
          "مسؤول تقني أو صلاحيات مناسبة لأنظمتك البرمجية الحالية"
        ],
        technicalRequirementsNote: "قواعد البيانات السحابية والاستضافة وواجهات البرمجة التخصصية يتم تحديد نطاقها وتكلفتها بتعاون وشفافية خلال مرحلة التخطيط الأولية.",
        scopeInclusions: [
          "دراسة شاملة لعملياتك ومدخلاتك والنتائج المستهدفة",
          "واجهة مخصصة مصممة للاستخدام اليومي المريح لفريقك",
          "ربط مع قواعد البيانات والأنظمة المدعومة لديك",
          "مراجعات واختبارات مرحلية على مدار فترة التطوير",
          "توثيق وشرح تدريبي عملي لموظفيك"
        ],
        nextStep: "ناقش متطلباتك التشغيلية المحددة مع فريقنا مباشرة عبر واتساب.",
        whatsappUrl: getServiceWhatsAppUrlWithLang("حلول الذكاء الاصطناعي المخصصة", 'ar'),
        capabilities: [
          "معمارية برمجية مخصصة للعمليات",
          "أدوات وبوابات داخلية للموظفين",
          "ربط قواعد البيانات والأنظمة",
          "تطوير مرحلي واضح الخطوات",
          "تسليم وتدريب عملي للفريق"
        ],
        features: [
          "مصممة بدقة حول متطلبات تم التحقق منها",
          "تصميم عملي وواضح وسهل الاستخدام",
          "محطات مراجعة واعتماد منظمة"
        ]
      },
    ];
  }

  // English fallback
  return [
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
      whatsappUrl: getServiceWhatsAppUrlWithLang("AI Agents", 'en'),
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
      whatsappUrl: getServiceWhatsAppUrlWithLang("AI Voice Agents", 'en'),
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
      whatsappUrl: getServiceWhatsAppUrlWithLang("AI Chatbots", 'en'),
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
      whatsappUrl: getServiceWhatsAppUrlWithLang("Professional Websites", 'en'),
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
      whatsappUrl: getServiceWhatsAppUrlWithLang("Business Automation", 'en'),
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
      whatsappUrl: getServiceWhatsAppUrlWithLang("Custom AI Solutions", 'en'),
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
};

// ============================================================================
// SOLUTION ADVISOR OPTIONS ("Find the Right Solution")
// ============================================================================

export const getSolutionOptions = (lang: Language): SolutionOption[] => {
  if (lang === 'ar') {
    return [
      {
        id: "website",
        label: "أحتاج موقعاً إلكترونياً احترافياً.",
        iconName: "Layout",
        tagline: "ابنِ حضوراً موثوقاً واعرض خدماتك باحترافية",
        recommendedServiceId: "professional-websites",
        recommendedServiceTitle: "المواقع الإلكترونية الاحترافية",
        practicalExplanation: "موقع إلكتروني سريع ومتقن يمنح نشاطك التجاري مصداقية فورية، ويعرض خدماتك بوضوح للعملاء، ويتيح للزوار التواصل معك عبر واتساب بنقرة واحدة.",
        keyHighlights: [
          "تصميم أنيق متوافق تماماً مع هوية علامتك التجارية",
          "استعراض منظم للخدمات والمشاريع ونماذج الأعمال",
          "سرعة تحميل فائقة على الهواتف وأجهزة الكمبيوتر",
          "أزرار تواصل سريعة ومباشرة عبر تطبيق واتساب"
        ],
        pairedService: {
          id: "ai-chatbots",
          title: "المساعدون الذكيون للمواقع",
          reason: "يمكن دمجه مع مساعد محادثة آلي للرد على استفسارات الزوار أثناء انشغال فريقك."
        },
        whatsappPrefill: "مرحباً APEX AI AGENCY، أرغب بمناقشة إنشاء موقع إلكتروني احترافي لأعمالي."
      },
      {
        id: "enquiries",
        label: "أريد الرد على استفسارات العملاء.",
        iconName: "MessageSquareText",
        tagline: "لا تفوت أي عميل محتمل ولا تترك استفسارات معلقة",
        recommendedServiceId: "ai-chatbots",
        recommendedServiceTitle: "المساعدون الذكيون للمواقع والمكالمات",
        practicalExplanation: "أتمتة خط التواصل الأول لديك. يجيب المساعد الذكي على زوار موقعك 24/7 بناءً على معلوماتك المعتمدة، بينما يرد المساعد الصوتي على المكالمات الهاتفية الاعتيادية ويحول المكالمات الهامة إلى فريقك.",
        keyHighlights: [
          "إجابات فورية 24/7 على أسئلة العملاء الشائعة",
          "جمع أسماء العملاء وأرقام هواتفهم للمتابعة السريعة",
          "تحويل فوري إلى محادثة واتساب مع موظفي فريقك",
          "متاح لزوار الموقع والمكالمات الهاتفية الواردة"
        ],
        pairedService: {
          id: "ai-voice-agents",
          title: "المساعدون الصوتيّون للمكالمات",
          reason: "يمتد استقبال الاستفسارات ليشمل المكالمات الهاتفية الواردة إلى جانب موقعك."
        },
        whatsappPrefill: "مرحباً APEX AI AGENCY، أرغب بمناقشة حلول أتمتة الرد على استفسارات العملاء."
      },
      {
        id: "automate",
        label: "أريد أتمتة المهام اليومية المتكررة.",
        iconName: "Cpu",
        tagline: "تخلص من الإدخال اليدوي واربط برامجك معاً",
        recommendedServiceId: "business-automation",
        recommendedServiceTitle: "أتمتة الأعمال والوكلاء الأذكياء",
        practicalExplanation: "توقف عن إضاعة الساعات في نسخ ولصق البيانات بين الجداول والنماذج والمحادثات. نربط أدواتك الرقمية اليومية لتنساب الطلبات والمعلومات تلقائياً مع تنبيه فريقك فورياً.",
        keyHighlights: [
          "ربط متكامل بين النماذج وجداول البيانات والمحادثات",
          "إلغاء النسخ واللصق اليدوي المكرر تماماً",
          "تنبيهات فورية لفريقك على واتساب أو البريد الإلكتروني",
          "مراقبة استقرار مسارات العمل وضمان موثوقيتها"
        ],
        pairedService: {
          id: "ai-agents",
          title: "المساعدون البرمجيون متعددو المهام",
          reason: "يمكنه معالجة المستندات المعقدة وفحص البيانات قبل تحديث أنظمتك."
        },
        whatsappPrefill: "مرحباً APEX AI AGENCY، أرغب بأتمتة سير العمل والمهام المتكررة في أعمالي."
      },
      {
        id: "help",
        label: "أحتاج مساعدة في اختيار الحل الأنسب.",
        iconName: "Sparkles",
        tagline: "دعنا نستعرض احتياجاتك ونحدد الحل الأفضل",
        recommendedServiceId: "custom-ai-solutions",
        recommendedServiceTitle: "استشارة وتخطيط استراتيجي مخصص",
        practicalExplanation: "لست متأكداً من أين تبدأ؟ نستعرض معاً مواضع الهدر في وقت أعمالك—سواء كانت استفسارات مكررة، أو الحاجة لمعرض أعمال، أو معاملات ورقية ويدوية—ونقترح عليك الحل الأبسط والأعلى أثراً.",
        keyHighlights: [
          "دراسة مباشرة لنقاط الاختناق الحالية في أعمالك",
          "توصيات موضوعية تركز على العائد العملي الملموس",
          "نطاق عمل واقعي ومحدد ومراحل تنفيذ واضحة",
          "بدون أي تعقيد أو مصطلحات تقنية مبهمة"
        ],
        whatsappPrefill: "مرحباً APEX AI AGENCY، أحتاج مساعدة في اختيار الحل الأنسب لنشاطي التجاري."
      }
    ];
  }

  return [
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
};

// ============================================================================
// PROCESS STEPS (Discuss → Design → Build → Launch)
// ============================================================================

export const getProcessSteps = (lang: Language): ProcessStep[] => {
  if (lang === 'ar') {
    return [
      {
        step: "01",
        title: "ناقش",
        description: "نتعرف على نشاطك التجاري وأهدافك ومتطلباتك لنحدد ما تحتاجه أعمالك فعلياً.",
      },
      {
        step: "02",
        title: "صمّم",
        description: "نخطط الهيكل وتدفق المستخدم ونطاق العمل بالتفصيل ونتفق عليه قبل بدء البرمجة.",
      },
      {
        step: "03",
        title: "طوّر",
        description: "نبني موقعك أو مساعدك الذكي أو نظام الأتمتة ونراجع التقدم معك خطوة بخطوة.",
      },
      {
        step: "04",
        title: "أطلق",
        description: "نختبر الحل النهائي بدقة، ونجهزه للإطلاق، ونشرح لفريقك كيفية استخدامه ومتابعته.",
      },
    ];
  }
  return [
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
};

// ============================================================================
// FAQS
// ============================================================================

export const getFaqData = (lang: Language): FAQItem[] => {
  if (lang === 'ar') {
    return [
      {
        id: "faq-project-scope",
        question: "كيف يتم تحديد نطاق المشروع وتفاصيله؟",
        answer: "نبدأ بمناقشة مباشرة لفهم أهداف نشاطك التجاري والجمهور المستهدف والميزات المطلوبة. ثم نحدد المخرجات المتفق عليها ونطاق المشروع بدقة معاً حتى تكون التوقعات واضحة تماماً قبل بدء أي عمل.",
      },
      {
        id: "faq-project-timeline",
        question: "كم يستغرق إنجاز المشروع عادة؟",
        answer: "يعتمد الوقت على النطاق المتفق عليه والتعقيد التقني وسرعة الملاحظات. الموقع أو الأتمتة المحددة تستغرق وقتاً أقل من الأنظمة المتعددة. نتفق على جدول زمني واقعي خلال التخطيط لتكون على دراية بكل مرحلة.",
      },
      {
        id: "faq-domain-hosting",
        question: "هل تساعدون في إعداد الدومين والاستضافة؟",
        answer: "نعم، نوجهك ونساعدك في ربط النطاق (الدومين) وإعداد الاستضافة السريعة والموثوقة لموقعك أو أدواتك. يتم الاتفاق على خيارات الاستضافة قبل الإطلاق وتبقى ملكيتها وإدارتها الكاملة لك.",
      },
      {
        id: "faq-updates-maintenance",
        question: "كيف تتم معالجة التحديثات والتعديلات المستقبلية؟",
        answer: "نبني مواقعنا وأنظمتنا لتكون مستقرة وسهلة الإدارة. إذا كانت هناك حاجة لتحديثات مستمرة أو إضافة ميزات جديدة، نتفق على ترتيبات الدعم والتطوير وفق متطلبات نشاطك التجاري.",
      },
      {
        id: "faq-connect-systems",
        question: "هل يمكن لأدوات الذكاء الاصطناعي الارتباط ببرامجنا الحالية؟",
        answer: "في أغلب الأحيان نعم. ربط المساعدين الأذكياء أو الأتمتة يعتمد على البرامج المحددة وأنظمة CRM أو الجداول التي تستخدمها وإمكانية الوصول البرمجي (APIs). نراجع إمكانية الربط خلال نقاشنا الأول.",
      },
      {
        id: "faq-get-started",
        question: "كيف نبدأ العمل معكم؟",
        answer: "البدء في غاية البساطة. اضغط على 'ناقش مشروعك' أو تواصل معنا مباشرة عبر واتساب. أخبرنا باحتياجات نشاطك وسنناقش معك الحلول العملية المناسبة والخطوة التالية.",
      },
    ];
  }

  return [
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
};

// ============================================================================
// ABOUT & MISSION/VISION DATA
// ============================================================================

export const getCoreValues = (lang: Language): string[] => {
  if (lang === 'ar') {
    return [
      "تقنية عملية مفيدة",
      "تصميم نظيف ومتقن",
      "تجربة مستخدم قوية وسهلة",
      "أنظمة مستقرة وموثوقة",
      "تطوير مستمر",
      "تفكير طويل المدى"
    ];
  }
  return [
    "Practical technology",
    "Clean design",
    "Strong user experiences",
    "Reliable systems",
    "Continuous improvement",
    "Long-term thinking"
  ];
};

export const getBeliefsData = (lang: Language): BeliefItem[] => {
  if (lang === 'ar') {
    return [
      {
        title: "التقنية يجب أن تكون نافعة",
        description: "يجب أن تحل التقنية مشاكل حقيقية وملموسة لنشاطك التجاري."
      },
      {
        title: "البساطة هي الأساس",
        description: "التقنيات المتقدمة يجب أن تكون سهلة الاستخدام ومباشرة في الإدارة."
      },
      {
        title: "البناء لغرض تجاري واضح",
        description: "كل موقع أو مساعد ذكي أو أتمتة يجب أن يمتلك سبباً تجارياً واضحاً لوجوده."
      },
      {
        title: "التطوير المستمر",
        description: "نبني أسساً متينة يمكن تطويرها وتوسيعها مع نمو نشاطك التجاري."
      },
      {
        title: "التفكير طويل المدى",
        description: "بناء أنظمة موثوقة تدعم أهداف أعمالك وتصمد مع مرور الوقت."
      }
    ];
  }
  return [
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
};

export const getRoadmapData = (lang: Language): RoadmapPhase[] => {
  if (lang === 'ar') {
    return [
      {
        phase: "TODAY",
        title: "القدرات الإنتاجية النشطة",
        subtitle: "الخدمات الأساسية التي نقدمها للأعمال اليوم",
        items: [
          "المواقع الإلكترونية الاحترافية",
          "المساعدون البرمجيون متعددو المهام",
          "المساعدون الصوتيون للمكالمات",
          "المساعدون الذكيون للمواقع",
          "أتمتة العمليات والربط بين الأنظمة",
          "حلول الذكاء الاصطناعي المخصصة"
        ]
      },
      {
        phase: "NEXT",
        title: "التطور التقني القريب",
        subtitle: "توسيع متقدم لهياكل وأنظمة الأتمتة",
        items: [
          "أنظمة ذكاء اصطناعي أكثر تقدماً",
          "تكامل أعمق مع الأدوات السحابية",
          "أتمتة متعددة المراحل ذاتية المعالجة",
          "بوابات أعمال رقمية مخصصة"
        ]
      },
      {
        phase: "FUTURE",
        title: "الرؤية المستقبلية",
        subtitle: "منصات تأسيسية وابتكار تقني مستمر",
        items: [
          "منصات ذكاء اصطناعي متطورة",
          "منتجات أعمال رقمية متخصصة",
          "أبحاث وتطوير تطبيقي",
          "أنظمة رقمية من الجيل القادم"
        ]
      }
    ];
  }

  return [
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
};

// ============================================================================
// COMMON UI TRANSLATIONS
// ============================================================================

export const UI_STRINGS = {
  en: {
    brandName: "APEX AI AGENCY",
    discussProject: "Discuss Your Project",
    viewDemoWebsites: "View Demo Websites",
    chatWithUsOnWhatsApp: "Chat with us on WhatsApp",
    exploreWork: "Explore Our Work",
    viewLiveDemo: "View Live Demo",
    discussSimilar: "Discuss Similar Project",
    discussSolution: "Discuss This Solution",
    discussService: "Discuss This Service",
    viewFullServiceDetails: "View Full Service Details",
    viewAllServices: "View All Service Inclusions",
    conceptPreview: "Concept Preview",
    illustrativeDemo: "Illustrative demo",
    demoProject: "Demo Project",
    recommendedSolution: "Recommended Solution",
    ruleMatched: "Rule-matched directly to your goal",
    whatThisDelivers: "What this delivers:",
    optionalExtension: "Optional Extension:",
    pairsWellWith: "Pairs well with",
    readyToBuild: "READY TO BUILD YOUR NEXT BUSINESS SOLUTION?",
    readySubtext: "Tell us what your business needs. Let’s discuss your project on WhatsApp and define the right next step.",
    discussOnWhatsApp: "Discuss on WhatsApp",
    viewBothLines: "View Both WhatsApp Lines",
    directCommunication: "DIRECT COMMUNICATION",
    taglineShort: "AI, digital technology, and modern solutions built around real requirements.",
    allRightsReserved: "© 2026 APEX AI AGENCY. All rights reserved.",
    languageToggle: "العربية",
    languageCurrent: "EN",
    whatWeBuildLabel: "What We Build:",
    howItHelpsLabel: "How It Helps Your Business:",
    practicalExampleLabel: "Practical Example:",
    whatItIncludesLabel: "What It Includes:",
    practicalUseCaseLabel: "Practical Business Use Case:",
    whatWeNeedLabel: "What Information We Need to Get Started:",
    scopeInclusionsLabel: "Core Scope Inclusions:",
    technicalNoteLabel: "Third-Party & Technical Scope Note:",
    nextStepLabel: "Next Step:",
    capabilitiesHeader: "Core Capabilities & Deliverables",
    interactiveDemonstrations: "Interactive Demonstrations",
    exploreWhatWeBuild: "Explore What We Can Build",
    exploreWhatWeBuildDesc: "Explore concept websites showing different ways businesses can present their services online.",
    findRightSolution: "Find the Right Solution",
    findRightSolutionSub: "Select what your business is aiming to achieve, and we’ll recommend the most effective starting point.",
    selectYourGoal: "Select Your Goal:",
    ourServices: "Our Services",
    servicesSub: "We design and build practical digital solutions focused on clear communication, everyday usefulness, and reliable operations.",
    projectLifecycle: "A Clear Path From Idea to Launch",
    projectLifecycleSub: "Every project follows a straightforward four-stage process designed to maintain alignment, clarity, and open communication.",
    commonInquiries: "Frequently Asked Questions",
    commonInquiriesSub: "Straightforward answers to the most common questions business owners have about scope, timelines, hosting, and getting started.",
    contactTitle: "Discuss Your Project",
    contactSub: "Have a project in mind or questions about our services? Choose an instant direct line below or build a structured project brief.",
    directWhatsAppChannels: "Instant Direct WhatsApp Lines",
    directWhatsAppChannelsSub: "Skip the questions and start a direct chat with either line immediately.",
    chatOn: "Chat on",
    directPrefillNote: "DIRECT PREFILLED: \"Hello APEX AI AGENCY, I would like to discuss a project.\"",
    briefBuilderTitle: "Build Your Project Brief",
    briefBuilderSub: "Optionally select your requirements below to generate a clear, pre-formatted message. You will review and send it in WhatsApp.",
    step1Business: "1. Business Type",
    step2Service: "2. Service Needed",
    step3Stage: "3. Project Stage",
    step4Reqs: "4. Requirements & Notes (Optional)",
    step4Placeholder: "Briefly describe what you'd like to achieve (e.g. key pages, questions your bot should answer, or current bottlenecks)...",
    step5Line: "5. Choose WhatsApp Line",
    messagePreview: "Message Preview (Will open in WhatsApp):",
    sendingTo: "Sending to",
    briefNotice: "You will review and send this message inside WhatsApp. No information is submitted automatically or stored on any server.",
    continueToWhatsApp: "Continue to WhatsApp",
    aboutAgencyApproach: "Agency Approach",
    aboutTitle: "About APEX",
    aboutSubtitle: "Building practical digital solutions through clear communication and work tailored to business requirements.",
    aboutPillar1Title: "Clear Communication",
    aboutPillar1Desc: "We speak in plain language, keep discussions transparent, and define deliverables and expectations together before work starts.",
    aboutPillar2Title: "Practical Solutions",
    aboutPillar2Desc: "We build tools that work reliably for everyday tasks—connecting your apps, presenting your offerings, and automating repetitive data entry.",
    aboutPillar3Title: "Tailored Requirements",
    aboutPillar3Desc: "Every business has different operational realities. We adapt the architecture and scope to your existing tools and team workflows.",
    missionVisionTag: "Foundational Direction",
    missionVisionTitle: "Our Mission & Vision",
    missionVisionSubtitle: "Building useful technology today while creating a bigger vision for tomorrow.",
    ourMission: "Our Mission",
    ourVision: "Our Vision",
    ourBeliefs: "Our Philosophy",
    ourBeliefsSub: "The core principles that guide how we design, build, and partner with businesses.",
    roadmapTitle: "System Roadmap",
    roadmapSub: "How our capabilities evolve from active production to long-term innovation."
  },
  ar: {
    brandName: "APEX AI AGENCY",
    discussProject: "ناقش مشروعك معنا",
    viewDemoWebsites: "شاهد نماذج المواقع",
    chatWithUsOnWhatsApp: "تواصل معنا مباشرة عبر واتساب",
    exploreWork: "استكشف أعمالنا",
    viewLiveDemo: "معاينة النموذج الحي",
    discussSimilar: "ناقش مشروعاً مماثلاً",
    discussSolution: "ناقش هذا الحل على واتساب",
    discussService: "ناقش هذه الخدمة على واتساب",
    viewFullServiceDetails: "استعرض تفاصيل الخدمة كاملة",
    viewAllServices: "استعرض كافة تفاصيل الخدمات",
    conceptPreview: "معاينة نموذجية",
    illustrativeDemo: "عرض توضيحي",
    demoProject: "مشروع تجريبي",
    recommendedSolution: "الحل المقترح لأعمالك",
    ruleMatched: "مطابق مباشرة لهدفك المحدد",
    whatThisDelivers: "ما يوفره هذا الحل:",
    optionalExtension: "إضافة اختيارية مقترحة:",
    pairsWellWith: "يتكامل بشكل ممتاز مع",
    readyToBuild: "هل أنت مستعد لتطوير الحل الرقمي القادم لأعمالك؟",
    readySubtext: "أخبرنا باحتياجات نشاطك التجاري. دعنا نناقش مشروعك عبر واتساب ونحدد الخطوة المناسبة معاً.",
    discussOnWhatsApp: "ناقش مشروعك عبر واتساب",
    viewBothLines: "عرض كلا رقمي واتساب",
    directCommunication: "تواصل مباشر",
    taglineShort: "تقنيات ذكاء اصطناعي وحلول رقمية حديثة مبنية على احتياجات الأعمال الفعلية.",
    allRightsReserved: "© 2026 APEX AI AGENCY. جميع الحقوق محفوظة.",
    languageToggle: "English",
    languageCurrent: "العربية",
    whatWeBuildLabel: "ما نقوم بتطويره:",
    howItHelpsLabel: "كيف يفيد نشاطك التجاري:",
    practicalExampleLabel: "مثال عملي من الواقع:",
    whatItIncludesLabel: "ما تشمله الخدمة:",
    practicalUseCaseLabel: "حالة استخدام واقعية للأعمال:",
    whatWeNeedLabel: "المعلومات المطلوبة للبدء:",
    scopeInclusionsLabel: "نطاق العمل الأساسي:",
    technicalNoteLabel: "ملاحظة الاشتراكات والأنظمة الخارجية:",
    nextStepLabel: "الخطوة التالية:",
    capabilitiesHeader: "القدرات والمخرجات الأساسية",
    interactiveDemonstrations: "نماذج ومشاريع تفاعلية",
    exploreWhatWeBuild: "استكشف ما يمكننا تطويره",
    exploreWhatWeBuildDesc: "استكشف نماذج لمواقع توضح طرقاً متنوعة لعرض خدمات أعمالك باحترافية على الإنترنت.",
    findRightSolution: "اختر الحل المناسب لأعمالك",
    findRightSolutionSub: "حدد ما يسعى نشاطك التجاري لتحقيقه، وسنقترح عليك نقطة البداية الأكثر فاعلية وأثراً.",
    selectYourGoal: "حدد هدفك الأساسي:",
    ourServices: "خدماتنا",
    servicesSub: "نصمم ونطور حلولاً رقمية عملية تركز على الوضوح وسهولة الاستخدام اليومي والعمليات الموثوقة.",
    projectLifecycle: "مسار واضح من الفكرة وحتى الإطلاق",
    projectLifecycleSub: "يتبع كل مشروع مساراً بسيطاً من أربع مراحل مصمم للحفاظ على التوافق والوضوح والشفافية.",
    commonInquiries: "الأسئلة الشائعة",
    commonInquiriesSub: "إجابات واضحة ومباشرة عن أكثر ما يهم أصحاب الأعمال حول النطاق والتوقيت والاستضافة والبدء.",
    contactTitle: "ناقش مشروعك معنا",
    contactSub: "هل لديك مشروع في بالك أو استفسار عن خدماتنا؟ اختر خط اتصال مباشر أدناه أو أنشئ موجزاً مخصصاً لمشروعك.",
    directWhatsAppChannels: "قنوات واتساب المباشرة",
    directWhatsAppChannelsSub: "تجاوز الأسئلة وابدأ محادثة مباشرة وفورية عبر أي من الخطين المعتمدين.",
    chatOn: "محادثة عبر",
    directPrefillNote: "نص الرسالة التلقائي: \"مرحباً APEX AI AGENCY، أود مناقشة مشروع لأعمالي.\"",
    briefBuilderTitle: "منشئ موجز المشروع",
    briefBuilderSub: "حدد تفضيلات مشروعك أدناه لإنشاء رسالة استفسار منظمة وواضحة. ستقوم بمراجعتها وإرسالها بنفسك في واتساب.",
    step1Business: "1. نوع النشاط التجاري",
    step2Service: "2. الخدمة المطلوبة",
    step3Stage: "3. مرحلة المشروع",
    step4Reqs: "4. متطلبات أو ملاحظات إضافية (اختياري)",
    step4Placeholder: "صف باختصار ما ترغب بتحقيقه (مثل الصفحات الرئيسية، أو الأسئلة التي يجب أن يجيب عليها المساعد، أو الصعوبات الحالية)...",
    step5Line: "5. اختر خط واتساب",
    messagePreview: "معاينة الرسالة (ستفتح داخل واتساب):",
    sendingTo: "الإرسال إلى",
    briefNotice: "ستقوم بمراجعة الرسالة وإرسالها بنفسك داخل تطبيق واتساب. لا يتم حفظ أو إرسال أي بيانات تلقائياً على خوادم.",
    continueToWhatsApp: "المتابعة إلى واتساب",
    aboutAgencyApproach: "منهجية الوكالة",
    aboutTitle: "عن APEX AI AGENCY",
    aboutSubtitle: "تطوير حلول رقمية عملية بتواصل واضح وعمل مخصص بدقة لمتطلبات نشاطك التجاري.",
    aboutPillar1Title: "تواصل واضح ومباشر",
    aboutPillar1Desc: "نتحدث بلغة بسيطة وواضحة، ونبقي النقاشات شفافة، ونحدد المخرجات والتوقعات معاً قبل بدء العمل.",
    aboutPillar2Title: "حلول عملية وفعالة",
    aboutPillar2Desc: "نبني أدوات تعمل بثقة للمهام اليومية—تربط برامجك، وتعرض خدماتك، وتلغي الإدخال اليدوي المكرر للبيانات.",
    aboutPillar3Title: "متطلبات مخصصة لواقعك",
    aboutPillar3Desc: "لكل عمل واقعه التشغيلي الخاص. نكيف البنية البرمجية ونطاق المشروع مع أدواتك الحالية وأسلوب فريقك.",
    missionVisionTag: "الاتجاه التأسيسي",
    missionVisionTitle: "الرؤية والرسالة",
    missionVisionSubtitle: "بناء تقنيات مفيدة اليوم مع تأسيس رؤية طموحة وراسخة للغد.",
    ourMission: "رسالتنا",
    ourVision: "رؤيتنا",
    ourBeliefs: "فلسفتنا ومبادئنا",
    ourBeliefsSub: "المبادئ الأساسية التي توجه أسلوبنا في التصميم والتطوير والشراكة مع رواد الأعمال.",
    roadmapTitle: "خارطة طريق الأنظمة",
    roadmapSub: "كيف تتطور قدراتنا التقنية من الإنتاج الفعلي النشط إلى الابتكار طويل المدى."
  }
};
