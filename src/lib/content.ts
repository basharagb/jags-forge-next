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
  { icon: Award, title: "Enterprise-grade delivery", desc: "Frameworks built for regulated, mission-critical environments." },
  { icon: Users2, title: "Certified engineers", desc: "AWS, Azure, Cisco, Fortinet, Oracle and Microsoft certified specialists." },
  { icon: Rocket, title: "Fast time-to-value", desc: "Agile squads with a 6-week discovery-to-prototype default." },
  { icon: Headphones, title: "24/7 support", desc: "Follow-the-sun SLA-backed managed services." },
  { icon: Sparkles, title: "Design-led engineering", desc: "Human-centered products that people actually use." },
  { icon: Lock, title: "Security by default", desc: "OWASP, ISO 27001 and zero-trust practices baked in." },
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
  { icon: Heart, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Landmark, name: "Government" },
  { icon: Wallet, name: "Banking" },
  { icon: ShieldCheck, name: "Insurance" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Truck, name: "Logistics" },
  { icon: Home, name: "Real Estate" },
  { icon: HardHat, name: "Construction" },
  { icon: Zap, name: "Energy" },
  { icon: Radio, name: "Telecom" },
  { icon: Package, name: "E-commerce" },
  { icon: Bus, name: "Transportation" },
  { icon: MapPinIcon, name: "Smart Cities" },
];

export const TECHS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", ".NET", "Java", "Flutter",
  "Laravel", "Spring Boot", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud",
  "Firebase", "MongoDB", "PostgreSQL", "SQL Server", "Redis", "TensorFlow", "OpenAI",
  "Linux", "VMware", "Cisco", "Fortinet", "Oracle", "SAP",
];

export const TESTIMONIALS = [
  { name: "Dr. Rania Al-Sharif", role: "CIO, King Abdullah University Hospital", quote: "JAG's platform reduced our patient-onboarding time by 62%. The engineering discipline is on par with the best global vendors we've worked with." },
  { name: "Marcus Whitfield", role: "Head of Digital, Emirates Retail Group", quote: "From ESL to POS to analytics, JAG delivered a unified retail stack across 220 stores in nine months. Exceptional." },
  { name: "Salem Al-Otaibi", role: "Director of IT, Ministry of Digital Economy", quote: "A true partner. Their zero-trust migration was seamless and audited against the strictest standards." },
];

export const PARTNERS = ["Microsoft", "AWS", "Cisco", "Fortinet", "Oracle", "SAP", "Google Cloud", "VMware", "Red Hat", "Palo Alto"];

export const SERVICE_ICONS_FULL = [
  Code2, Cloud, ShieldCheck, Brain, Network, Cpu, Database, Smartphone,
  Layers, Bot, Camera, Building2, Store, Radar, LineChart, Wrench,
  Server, Lock, Rocket,
];
