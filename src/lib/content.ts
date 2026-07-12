import {
  Code2, Cloud, ShieldCheck, Brain, Network, Cpu, Database, Smartphone,
  Layers, Bot, Camera, Building2, Store, Radar, LineChart, Wrench,
  Server, Lock, Rocket, Users2, Award, Clock, Headphones, Globe2,
  Sparkles, GraduationCap, Heart, ShoppingBag, Landmark, Wallet, Factory,
  Hotel, Truck, Home, HardHat, Zap, Radio, Package, Bus, MapPin as MapPinIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = { icon: LucideIcon; title: string; titleAr: string; desc: string; descAr: string; tag: string };

export const SERVICES: Service[] = [
  { icon: Code2, title: "Custom Software", titleAr: "برمجيات مخصصة", desc: "Enterprise-grade platforms tailored to your operating model — from monoliths to microservices.", descAr: "منصات على مستوى المؤسسات مصممة لنموذج تشغيلك.", tag: "Engineering" },
  { icon: Brain, title: "AI & Machine Learning", titleAr: "الذكاء الاصطناعي", desc: "Predictive models, computer vision, LLM copilots and generative AI built into your workflows.", descAr: "نماذج تنبؤية ورؤية حاسوبية ومساعدات LLM مدمجة في سير العمل.", tag: "AI" },
  { icon: Cloud, title: "Cloud & DevOps", titleAr: "السحابة و DevOps", desc: "AWS, Azure and GCP architecture with automated pipelines, IaC and cost governance.", descAr: "هندسة AWS و Azure و GCP مع خطوط أنابيب آلية.", tag: "Cloud" },
  { icon: ShieldCheck, title: "Cybersecurity", titleAr: "الأمن السيبراني", desc: "24/7 SOC, zero-trust architecture, VAPT, ISO 27001 and compliance programs.", descAr: "مركز عمليات أمنية 24/7 وبنية Zero-Trust والامتثال.", tag: "Security" },
  { icon: Network, title: "Networking & Infrastructure", titleAr: "الشبكات والبنية التحتية", desc: "Data centers, SD-WAN, structured cabling and enterprise Wi-Fi with certified engineers.", descAr: "مراكز بيانات و SD-WAN وشبكات Wi-Fi للمؤسسات.", tag: "Infra" },
  { icon: Layers, title: "ERP & CRM Implementation", titleAr: "أنظمة ERP و CRM", desc: "SAP, Oracle, Odoo and custom ERPs — process design, integration and change management.", descAr: "تنفيذ SAP و Oracle و Odoo وأنظمة مخصصة.", tag: "Business" },
  { icon: Bot, title: "Automation & RPA", titleAr: "الأتمتة و RPA", desc: "Automate back-office, finance and customer operations with UiPath, Power Automate and custom bots.", descAr: "أتمتة العمليات المالية والخلفية.", tag: "Automation" },
  { icon: Smartphone, title: "Mobile & Web Apps", titleAr: "تطبيقات الويب والجوال", desc: "React, Next.js, Flutter and native iOS/Android delivered with design-led craftsmanship.", descAr: "تطبيقات ويب وجوال بأعلى معايير التصميم.", tag: "Product" },
  { icon: Camera, title: "Smart Surveillance", titleAr: "المراقبة الذكية", desc: "AI-powered CCTV, facial recognition, ANPR and integrated command centers.", descAr: "أنظمة مراقبة ذكية مدعومة بالذكاء الاصطناعي.", tag: "Smart" },
  { icon: Building2, title: "Smart Buildings & IoT", titleAr: "المباني الذكية و IoT", desc: "Sensors, BMS, energy analytics and occupancy intelligence for modern facilities.", descAr: "حساسات و BMS وتحليلات الطاقة للمباني الحديثة.", tag: "IoT" },
  { icon: Store, title: "Retail Technology & POS", titleAr: "تقنيات التجزئة", desc: "POS, ESL, omnichannel commerce and inventory intelligence for retailers.", descAr: "أنظمة نقاط بيع وتجارة متعددة القنوات.", tag: "Retail" },
  { icon: LineChart, title: "Data & Analytics", titleAr: "البيانات والتحليلات", desc: "Modern data platforms, warehousing, BI dashboards and MLOps at scale.", descAr: "منصات بيانات حديثة ولوحات BI.", tag: "Data" },
];

export const WHY = [
  {
    icon: Award,
    title: "Specialized technical expertise",
    titleAr: "خبرات تقنية متخصصة",
    desc: "Practical solutions built on a real understanding of the needs of companies and organizations.",
    descAr: "نقدّم حلولاً عملية مبنية على فهم احتياجات الشركات والمؤسسات.",
  },
  {
    icon: Layers,
    title: "Integrated solutions, one source",
    titleAr: "حلول متكاملة من مصدر واحد",
    desc: "Software, networks, smart systems and technical support within a single ecosystem.",
    descAr: "نوفّر البرمجيات، الشبكات، الأنظمة الذكية، والدعم الفني ضمن منظومة واحدة.",
  },
  {
    icon: Rocket,
    title: "Innovation & scalability",
    titleAr: "ابتكار وقابلية للتطوير",
    desc: "Modern, scalable technologies that grow with your business and future needs.",
    descAr: "نعتمد تقنيات حديثة قابلة للتوسع مع نمو أعمالك واحتياجاتك المستقبلية.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to quality & support",
    titleAr: "التزام بالجودة والدعم",
    desc: "On-time delivery, execution quality and fast response after project handover.",
    descAr: "نلتزم بالمواعيد، جودة التنفيذ، وسرعة الاستجابة بعد تسليم المشروع.",
  },
];

// Product & solution groups — from the JAG company profile
export type SolutionGroup = { icon: LucideIcon; title: string; titleAr: string; items: string[]; itemsAr: string[] };
export const SOLUTIONS: SolutionGroup[] = [
  {
    icon: Code2,
    title: "Software Solutions",
    titleAr: "حلول البرمجيات",
    items: ["Web & mobile app development", "ERP enterprise systems", "CRM customer systems", "Custom business apps"],
    itemsAr: ["تطوير تطبيقات الويب والموبايل", "أنظمة إدارة المؤسسات ERP", "أنظمة إدارة العملاء CRM", "تطبيقات الأعمال المخصصة"],
  },
  {
    icon: Network,
    title: "Networks & Infrastructure",
    titleAr: "الشبكات والبنية التحتية",
    items: ["Network design & implementation", "Servers & data centers", "Enterprise Wi-Fi systems"],
    itemsAr: ["تصميم وتنفيذ الشبكات", "الخوادم ومراكز البيانات", "أنظمة الواي فاي المؤسسية"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    titleAr: "حلول الذكاء الاصطناعي",
    items: ["Smart camera systems", "Image & video analysis", "Smart assistants & customer service"],
    itemsAr: ["أنظمة كاميرات ذكية", "تحليل الصور والفيديو", "المساعدات الذكية وخدمة العملاء"],
  },
];

export const STATS = [
  { value: 14, suffix: "+", label: "stats.years" },
  { value: 320, suffix: "+", label: "stats.projects" },
  { value: 180, suffix: "+", label: "stats.clients" },
  { value: 22, suffix: "", label: "stats.countries" },
  { value: 95, suffix: "", label: "stats.engineers" },
  { value: 99, suffix: "%", label: "stats.satisfaction" },
];

export const INDUSTRIES = [
  { icon: Heart, name: "Healthcare", nameAr: "الرعاية الصحية" },
  { icon: GraduationCap, name: "Education", nameAr: "التعليم" },
  { icon: ShoppingBag, name: "Retail", nameAr: "التجزئة" },
  { icon: Landmark, name: "Government", nameAr: "القطاع الحكومي" },
  { icon: Wallet, name: "Banking", nameAr: "البنوك" },
  { icon: ShieldCheck, name: "Insurance", nameAr: "التأمين" },
  { icon: Factory, name: "Manufacturing", nameAr: "التصنيع" },
  { icon: Hotel, name: "Hospitality", nameAr: "الضيافة" },
  { icon: Truck, name: "Logistics", nameAr: "الخدمات اللوجستية" },
  { icon: Home, name: "Real Estate", nameAr: "العقارات" },
  { icon: HardHat, name: "Construction", nameAr: "الإنشاءات" },
  { icon: Zap, name: "Energy", nameAr: "الطاقة" },
  { icon: Radio, name: "Telecom", nameAr: "الاتصالات" },
  { icon: Package, name: "E-commerce", nameAr: "التجارة الإلكترونية" },
  { icon: Bus, name: "Transportation", nameAr: "النقل" },
  { icon: MapPinIcon, name: "Smart Cities", nameAr: "المدن الذكية" },
];

export const TECHS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", ".NET", "Java", "Flutter",
  "Laravel", "Spring Boot", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud",
  "Firebase", "MongoDB", "PostgreSQL", "SQL Server", "Redis", "TensorFlow", "OpenAI",
  "Linux", "VMware", "Cisco", "Fortinet", "Oracle", "SAP",
];

export const TESTIMONIALS = [
  {
    name: "Dr. Rania Al-Sharif", nameAr: "د. رانيا الشريف",
    role: "CIO, University Hospital", roleAr: "مديرة تقنية المعلومات، مستشفى جامعي",
    quote: "JAG's platform reduced our patient-onboarding time by 62%. The engineering discipline is on par with the best global vendors we've worked with.",
    quoteAr: "قلّصت منصة البوابة المتقدمة الأردنية وقت تسجيل مرضانا بنسبة 62%. الانضباط الهندسي لديهم يضاهي أفضل المزوّدين العالميين.",
  },
  {
    name: "Marcus Whitfield", nameAr: "ماركوس ويتفيلد",
    role: "Head of Digital, Retail Group", roleAr: "مدير التحول الرقمي، مجموعة تجزئة",
    quote: "From ESL to POS to analytics, JAG delivered a unified retail stack across 220 stores in nine months. Exceptional.",
    quoteAr: "من بطاقات الأسعار الإلكترونية إلى نقاط البيع والتحليلات، سلّمت البوابة منظومة تجزئة موحّدة عبر 220 متجراً خلال تسعة أشهر. عمل استثنائي.",
  },
  {
    name: "Salem Al-Otaibi", nameAr: "سالم العتيبي",
    role: "Director of IT, Public Sector", roleAr: "مدير تقنية المعلومات، القطاع العام",
    quote: "A true partner. Their zero-trust migration was seamless and audited against the strictest standards.",
    quoteAr: "شريك حقيقي. تنفيذ بنية الثقة الصفرية لديهم كان سلساً ومُدقّقاً وفق أصرم المعايير.",
  },
];

// Generic engagement outcomes (marketing copy, not factual claims — safe to translate).
export const OUTCOMES = [
  { en: "Faster time-to-market for digital products", ar: "إطلاق أسرع للمنتجات الرقمية إلى السوق" },
  { en: "Reduced operating costs through automation", ar: "خفض التكاليف التشغيلية عبر الأتمتة" },
  { en: "Enterprise-grade security & compliance posture", ar: "أمن وامتثال بمستوى المؤسسات" },
  { en: "Data-driven decision-making at every level", ar: "قرارات مبنية على البيانات في كل المستويات" },
  { en: "Resilient, elastic cloud infrastructure", ar: "بنية تحتية سحابية مرنة وموثوقة" },
  { en: "Modern, delightful experiences for users", ar: "تجارب مستخدم حديثة وسلسة" },
];

export const GOVERNMENT_TRANSACTION_SERVICES = [
  {
    en: "Follow-up and completion of all government transactions",
    ar: "متابعة وإنجاز جميع المعاملات الحكومية.",
  },
  {
    en: "Company formation, information amendments and liquidation",
    ar: "تأسيس الشركات وتعديل بياناتها وتصفيتها.",
  },
  {
    en: "Issuance and renewal of licenses and permits",
    ar: "إصدار وتجديد التراخيص والتصاريح.",
  },
  {
    en: "Follow-up with ministries, departments and official institutions",
    ar: "متابعة معاملات الوزارات والدوائر والمؤسسات الرسمية.",
  },
  {
    en: "Dedicated services for business owners and investors",
    ar: "خدمات مخصصة لرجال الأعمال والمستثمرين.",
  },
  {
    en: "Procedural consultation and transaction follow-up through completion",
    ar: "تقديم الاستشارات الإجرائية ومتابعة المعاملات حتى إنجازها.",
  },
];

// FAQ — brand-identity questions come first (explicit EN/AR name disambiguation
// for search engines), followed by general engagement questions.
export type FAQItem = { q: string; a: string; qAr: string; aAr: string };
export const FAQS: FAQItem[] = [
  {
    q: "What is Jordan Advanced Gate (JAG)?",
    a: "Jordan Advanced Gate — known in Arabic as البوابة المتقدمة الأردنية — is a Jordanian technology company based in Amman that delivers enterprise IT solutions, AI, cybersecurity and digital transformation services across Jordan and the Middle East.",
    qAr: "ما هي البوابة المتقدمة الأردنية (JAG)؟",
    aAr: "البوابة المتقدمة الأردنية — المعروفة بالإنجليزية باسم Jordan Advanced Gate — شركة تقنية أردنية مقرها عمّان، تقدّم حلول تقنية المعلومات والذكاء الاصطناعي والأمن السيبراني وخدمات التحول الرقمي في الأردن والشرق الأوسط.",
  },
  {
    q: "Is \"Jordan Advanced Gate\" the same company as \"البوابة المتقدمة الأردنية\"?",
    a: "Yes. Jordan Advanced Gate and البوابة المتقدمة الأردنية are the English and Arabic names of the same company, also known by the initials JAG. jagjo.com is our official website.",
    qAr: "هل \"البوابة المتقدمة الأردنية\" و\"Jordan Advanced Gate\" نفس الشركة؟",
    aAr: "نعم. البوابة المتقدمة الأردنية وJordan Advanced Gate هما الاسمان العربي والإنجليزي لنفس الشركة، المعروفة أيضاً باختصار JAG. الموقع الرسمي لنا هو jagjo.com.",
  },
  {
    q: "Where is Jordan Advanced Gate located?",
    a: "Our head office is in Amman, Jordan. We serve clients across Jordan, the wider Middle East and internationally.",
    qAr: "أين يقع مقر البوابة المتقدمة الأردنية؟",
    aAr: "يقع مقرنا الرئيسي في عمّان، الأردن، ونخدم عملاءنا في الأردن والشرق الأوسط وخارجها.",
  },
  {
    q: "How can I contact Jordan Advanced Gate (JAG)?",
    a: "Email info@jagjo.com, call +962 7 7091 1991, or use the contact form on this website. Our official Facebook page is facebook.com/Jordan.JAG.22.",
    qAr: "كيف أتواصل مع البوابة المتقدمة الأردنية (JAG)؟",
    aAr: "راسلنا على info@jagjo.com، أو اتصل على ‎+962 7 7091 1991‎، أو استخدم نموذج التواصل في الموقع. صفحتنا الرسمية على فيسبوك: facebook.com/Jordan.JAG.22.",
  },
  {
    q: "What industries do you specialize in?",
    a: "Government, banking, healthcare, education, retail, telecom, logistics and manufacturing — with dedicated practice leads per vertical.",
    qAr: "ما هي القطاعات التي تتخصصون بها؟",
    aAr: "القطاع الحكومي، البنوك، الرعاية الصحية، التعليم، التجزئة، الاتصالات، الخدمات اللوجستية والتصنيع — بفرق متخصصة لكل قطاع.",
  },
  {
    q: "Do you work outside Jordan?",
    a: "Yes. We deliver programs across the Middle East region for clients of every size.",
    qAr: "هل تعملون خارج الأردن؟",
    aAr: "نعم. ننفّذ مشاريع في مختلف أنحاء الشرق الأوسط لعملاء بمختلف الأحجام.",
  },
  {
    q: "Can you build on top of our existing systems?",
    a: "Absolutely — we routinely integrate with SAP, Oracle, Microsoft 365 and legacy in-house systems.",
    qAr: "هل يمكنكم البناء فوق أنظمتنا الحالية؟",
    aAr: "بالتأكيد — نقوم بانتظام بالتكامل مع أنظمة SAP وOracle وMicrosoft 365 والأنظمة القديمة الداخلية.",
  },
  {
    q: "Do you have Arabic-speaking teams?",
    a: "Yes — all client-facing teams are fully bilingual in Arabic and English.",
    qAr: "هل لديكم فرق تتحدث العربية؟",
    aAr: "نعم — جميع الفرق التي تتواصل مع العملاء ثنائية اللغة بالكامل، عربي وإنجليزي.",
  },
  {
    q: "What is your approach to AI projects?",
    a: "We combine open models, commercial APIs and custom fine-tuning — always with human-in-the-loop governance.",
    qAr: "ما هو نهجكم في مشاريع الذكاء الاصطناعي؟",
    aAr: "نجمع بين النماذج المفتوحة وواجهات برمجية تجارية وضبط دقيق مخصص — دائماً مع إشراف بشري على القرارات.",
  },
  {
    q: "How do we get started with Jordan Advanced Gate?",
    a: "Book a short call through the contact form on this site. We respond within one business day.",
    qAr: "كيف نبدأ التعامل مع البوابة المتقدمة الأردنية؟",
    aAr: "احجز مكالمة قصيرة عبر نموذج التواصل في هذا الموقع. سنرد خلال يوم عمل واحد.",
  },
];

export const PARTNERS = [
  "Arab University College of Technology", "DISTY", "Dubai Style", "Razeen",
  "Talib", "Giessen", "Elite Shooter Center", "JODIY", "Elite Group", "Six Yards MMC",
];

export const SERVICE_ICONS_FULL = [
  Code2, Cloud, ShieldCheck, Brain, Network, Cpu, Database, Smartphone,
  Layers, Bot, Camera, Building2, Store, Radar, LineChart, Wrench,
  Server, Lock, Rocket,
];
