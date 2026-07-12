import { createContext, useContext, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

export type Lang = "en" | "ar";

type Dict = Record<string, string>;

const en: Dict = {
  "brand.name": "Jordan Advanced Gate",
  "brand.tagline": "IT Solutions & Digital Transformation",
  "brand.slogan": "Your partner in digital transformation & business development",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.solutions": "Solutions",
  "nav.industries": "Industries",
  "nav.products": "Products",
  "nav.portfolio": "Portfolio",
  "nav.blog": "Insights",
  "nav.careers": "Careers",
  "nav.contact": "Contact",
  "nav.cta": "Get a proposal",

  "hero.eyebrow": "Enterprise IT · Digital Transformation · AI",
  "hero.title.a": "Transforming businesses",
  "hero.title.b": "through technology",
  "hero.sub":
    "Jordan Advanced Gate empowers organizations with software, AI, cloud, cybersecurity and infrastructure engineered for enterprise scale.",
  "hero.cta1": "Schedule consultation",
  "hero.cta2": "Explore services",
  "hero.cta3": "Watch demo",

  "stats.years": "Years of experience",
  "stats.projects": "Projects delivered",
  "stats.clients": "Clients worldwide",
  "stats.countries": "Countries served",
  "stats.engineers": "Certified engineers",
  "stats.satisfaction": "Client satisfaction",

  "why.title": "Why enterprises choose JAG",
  "why.sub": "A trusted engineering partner for governments, banks, universities and global brands.",

  "services.title": "Services built for enterprise scale",
  "services.sub": "From custom software to full digital transformation programs — engineered end-to-end.",
  "government.eyebrow": "Government transaction services",
  "government.title": "Government transaction follow-up & completion",
  "government.intro":
    "Jordan Advanced Gate provides comprehensive, professional services for following up and completing government transactions, tailored to the needs of companies, organizations and business owners across sectors.",
  "government.includes": "Our services include",
  "government.commitment":
    "We are committed to fast, accurate and reliable service, with continuous follow-up to complete our clients’ transactions to the highest professional standards.",

  "industries.title": "Industries we serve",
  "industries.sub": "Deep vertical expertise across regulated and high-growth sectors.",

  "tech.title": "Technologies we master",

  "testimonials.title": "Trusted by leaders",

  "label.about": "About",
  "label.services": "Services",
  "label.solutions": "Solutions",
  "label.why": "Why JAG",
  "label.industries": "Industries",
  "label.stack": "Stack",
  "label.clients": "Clients",
  "label.testimonials": "Testimonials",
  "label.contact": "Contact",
  "label.values": "Core values",
  "label.outcomes": "Outcomes",
  "label.faq": "FAQ",

  "btn.learnMore": "Learn more",
  "btn.allServices": "Explore all services",
  "btn.seeWork": "See our clients",
  "btn.talk": "Talk to our team",

  "solutions.title": "Our products & technical solutions",
  "solutions.sub": "Integrated software, infrastructure and AI — delivered from a single, reliable partner.",

  "outcomes.title": "What our engagements typically deliver",
  "faq.title": "Frequently asked questions",
  "faq.sub": "Common questions about Jordan Advanced Gate (JAG) and how we work.",

  "clients.title": "Trusted by teams across the region",
  "clients.sub": "From universities and retailers to growing enterprises, organizations rely on JAG to run and grow.",
  "trustbar": "Trusted by universities, retailers & growing enterprises",

  "why.pillTitle": "Why choose our technical solutions?",

  "badge.iso": "ISO 27001",
  "badge.countries": "22 countries",
  "badge.support": "24/7 support",
  "badge.csat": "99% CSAT",

  "cta.eyebrow": "Ready when you are",
  "hero.badge": "Enterprise-ready",

  "cta.title": "Let's build what's next.",
  "cta.sub": "Book a 30-minute strategy session with our solutions team.",
  "cta.button": "Start a project",

  "footer.tagline": "IT solutions & digital transformation",
  "footer.company": "Company",
  "footer.services": "Services",
  "footer.resources": "Resources",
  "footer.legal": "Legal",
  "footer.newsletter": "Get monthly insights on enterprise technology.",
  "footer.subscribe": "Subscribe",
  "footer.email": "Email address",
  "footer.rights": "All rights reserved.",
  "footer.trusted": "Your trusted technology partner",
  "footer.explore": "Explore",
  "legal.privacy": "Privacy Policy",
  "legal.terms": "Terms of Service",

  "about.title": "Building the digital gate to a smarter Jordan — and beyond.",
  "about.sub":
    "Founded to bridge global engineering standards with the ambitions of regional enterprises, JAG operates at the intersection of strategy, software and infrastructure.",
  "about.leadTitle": "Who we are",
  "about.lead":
    "Jordan Advanced Gate (JAG) is a Jordanian technology company based in Amman, specialized in delivering integrated IT solutions and digital transformation services to companies and organizations of every size and sector. We build practical, reliable solutions — custom software, point-of-sale (POS) systems, networks and infrastructure, cybersecurity, AI, and electronic shelf labels (ESL) — helping our clients improve operational performance, raise efficiency and accelerate growth. We turn ideas into real digital solutions grounded in quality, innovation, reliability and genuine customer satisfaction.",
  "about.mission": "Our mission",
  "about.missionText":
    "To help organizations run, grow and reinvent themselves with resilient, secure and human-centered technology.",
  "about.vision": "Our vision",
  "about.visionText":
    "A region where every institution — public or private — can deliver world-class digital services with confidence.",
  "about.values": "Core values",

  "contact.title": "Talk to our team",
  "contact.sub": "Tell us about your project. We'll respond within one business day.",
  "contact.name": "Full name",
  "contact.email": "Work email",
  "contact.company": "Company",
  "contact.phone": "Phone",
  "contact.message": "How can we help?",
  "contact.submit": "Send message",
  "contact.sent": "Thank you — a strategist will reach out shortly.",
};

const ar: Dict = {
  "brand.name": "البوابة المتقدمة الأردنية",
  "brand.tagline": "حلول تقنية المعلومات والتحول الرقمي",
  "brand.slogan": "شريكك في التحول الرقمي وتطوير الأعمال",
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.services": "الخدمات",
  "nav.solutions": "الحلول",
  "nav.industries": "القطاعات",
  "nav.products": "المنتجات",
  "nav.portfolio": "أعمالنا",
  "nav.blog": "المدونة",
  "nav.careers": "الوظائف",
  "nav.contact": "تواصل معنا",
  "nav.cta": "اطلب عرضاً",

  "hero.eyebrow": "تقنية المؤسسات · التحول الرقمي · الذكاء الاصطناعي",
  "hero.title.a": "نُحوّل الأعمال",
  "hero.title.b": "عبر التكنولوجيا",
  "hero.sub":
    "البوابة المتقدمة الأردنية تُمكّن المؤسسات ببرمجيات وذكاء اصطناعي وحلول سحابية وأمن سيبراني وبنية تحتية مصممة على مستوى المؤسسات.",
  "hero.cta1": "احجز استشارة",
  "hero.cta2": "استكشف الخدمات",
  "hero.cta3": "شاهد العرض",

  "stats.years": "سنوات الخبرة",
  "stats.projects": "مشروع منجز",
  "stats.clients": "عميل حول العالم",
  "stats.countries": "دولة",
  "stats.engineers": "مهندس معتمد",
  "stats.satisfaction": "رضا العملاء",

  "why.title": "لماذا تختارنا كبرى المؤسسات",
  "why.sub": "شريك هندسي موثوق للحكومات والبنوك والجامعات والشركات العالمية.",

  "services.title": "خدمات مصممة لمستوى المؤسسات",
  "services.sub": "من تطوير البرمجيات المخصصة إلى برامج التحول الرقمي الشاملة.",
  "government.eyebrow": "خدمات حكومية متكاملة",
  "government.title": "خدمات متابعة وإنجاز المعاملات الحكومية",
  "government.intro":
    "تقدم البوابة المتقدمة الأردنية للحلول والأنظمة خدمات متكاملة لمتابعة وإنجاز المعاملات الحكومية بكفاءة واحترافية، بما يلبي احتياجات الشركات والمؤسسات ورجال الأعمال في مختلف القطاعات.",
  "government.includes": "تشمل خدماتنا:",
  "government.commitment":
    "نلتزم بتقديم خدمة سريعة، دقيقة، وموثوقة، مع متابعة مستمرة لضمان إنجاز معاملات عملائنا بأعلى مستويات الاحترافية.",

  "industries.title": "القطاعات التي نخدمها",
  "industries.sub": "خبرة عميقة في القطاعات المنظمة والنامية.",

  "tech.title": "التقنيات التي نتقنها",

  "testimonials.title": "يثق بنا القادة",

  "label.about": "من نحن",
  "label.services": "الخدمات",
  "label.solutions": "منتجاتنا وحلولنا",
  "label.why": "لماذا نحن",
  "label.industries": "القطاعات",
  "label.stack": "التقنيات",
  "label.clients": "عملاؤنا",
  "label.testimonials": "آراء العملاء",
  "label.contact": "تواصل معنا",
  "label.values": "قيمنا الجوهرية",
  "label.outcomes": "النتائج",
  "label.faq": "الأسئلة الشائعة",

  "btn.learnMore": "اعرف المزيد",
  "btn.allServices": "استكشف جميع الخدمات",
  "btn.seeWork": "تعرّف على عملائنا",
  "btn.talk": "تحدّث إلى فريقنا",

  "solutions.title": "منتجاتنا وحلولنا التقنية",
  "solutions.sub": "برمجيات وبنية تحتية وذكاء اصطناعي متكامل — نقدّمها من شريك واحد موثوق.",

  "outcomes.title": "ما الذي تحققه مشاريعنا عادةً",
  "faq.title": "الأسئلة الشائعة",
  "faq.sub": "أسئلة متكررة عن البوابة المتقدمة الأردنية (JAG) وطريقة عملنا.",

  "clients.title": "يثق بنا فرق العمل في مختلف القطاعات",
  "clients.sub": "من الجامعات وتجار التجزئة إلى المؤسسات النامية، تعتمد المؤسسات على البوابة المتقدمة الأردنية للتشغيل والنمو.",
  "trustbar": "يثق بنا الجامعات وتجار التجزئة والمؤسسات النامية",

  "why.pillTitle": "لماذا تختار حلولنا التقنية؟",

  "badge.iso": "آيزو 27001",
  "badge.countries": "22 دولة",
  "badge.support": "دعم على مدار الساعة",
  "badge.csat": "رضا العملاء 99%",

  "cta.eyebrow": "جاهزون عندما تكون مستعداً",
  "hero.badge": "جاهز للمؤسسات",

  "cta.title": "لنبنِ الخطوة القادمة معاً.",
  "cta.sub": "احجز جلسة استراتيجية مدتها 30 دقيقة مع فريق الحلول.",
  "cta.button": "ابدأ مشروعك",

  "footer.tagline": "حلول تقنية المعلومات والتحول الرقمي",
  "footer.company": "الشركة",
  "footer.services": "الخدمات",
  "footer.resources": "المصادر",
  "footer.legal": "قانوني",
  "footer.newsletter": "اشترك لتصلك رؤى تقنية شهرية.",
  "footer.subscribe": "اشتراك",
  "footer.email": "البريد الإلكتروني",
  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.trusted": "شريكك التقني الموثوق",
  "footer.explore": "استكشف",
  "legal.privacy": "سياسة الخصوصية",
  "legal.terms": "الشروط والأحكام",

  "about.title": "نبني البوابة الرقمية لأردن أكثر ذكاءً — وما بعده.",
  "about.sub":
    "تأسست البوابة المتقدمة الأردنية لتجسير الفجوة بين المعايير الهندسية العالمية وطموحات المؤسسات الإقليمية.",
  "about.leadTitle": "من نحن",
  "about.lead":
    "البوابة المتقدمة الأردنية (JAG) شركة تقنية أردنية مقرها عمّان، متخصصة في تقديم الحلول التقنية المتكاملة وخدمات التحول الرقمي للشركات والمؤسسات بمختلف أحجامها وقطاعاتها. نقدّم حلولاً عملية وموثوقة تشمل تطوير البرمجيات، أنظمة نقاط البيع، الشبكات والبنية التحتية، الأمن السيبراني، الذكاء الاصطناعي، وبطاقات الأسعار الإلكترونية — بما يساعد عملاءنا على تحسين الأداء التشغيلي ورفع الكفاءة وتعزيز النمو. نحوّل الأفكار إلى حلول رقمية واقعية مبنية على الجودة والابتكار والموثوقية ورضا العملاء.",
  "about.mission": "رسالتنا",
  "about.missionText":
    "مساعدة المؤسسات على التشغيل والنمو وإعادة الاختراع عبر تقنيات مرنة وآمنة تركّز على الإنسان.",
  "about.vision": "رؤيتنا",
  "about.visionText":
    "منطقة تُقدّم فيها كل مؤسسة — عامة أو خاصة — خدمات رقمية بجودة عالمية.",
  "about.values": "قيمنا الجوهرية",

  "contact.title": "تحدث إلى فريقنا",
  "contact.sub": "أخبرنا عن مشروعك، وسنرد خلال يوم عمل واحد.",
  "contact.name": "الاسم الكامل",
  "contact.email": "البريد الإلكتروني",
  "contact.company": "الشركة",
  "contact.phone": "الهاتف",
  "contact.message": "كيف يمكننا المساعدة؟",
  "contact.submit": "أرسل الرسالة",
  "contact.sent": "شكراً لك — سيتواصل معك أحد مستشارينا قريباً.",
};

const dicts: Record<Lang, Dict> = { en, ar };

type Ctx = { lang: Lang; t: (k: string) => string; dir: "ltr" | "rtl" };
const I18nContext = createContext<Ctx | null>(null);

// Language is derived ENTIRELY from the URL path — /ar (and /ar/*) is Arabic,
// everything else is English. This is deliberate: the previous implementation
// held language in React state seeded from localStorage, which only ever
// changed after a browser ran client JS. Since this site is statically
// prerendered, the build produces exactly one snapshot of that state (always
// "en" — there's no localStorage at build time), so Arabic content was never
// written to any HTML file and was invisible to search engines. Deriving lang
// from the path instead means the static build genuinely emits two different,
// fully server-rendered documents (/ and /ar), each crawlable on its own.
export function langFromPathname(pathname: string): Lang {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = langFromPathname(pathname);
  const dir = lang === "ar" ? "rtl" : "ltr";
  const t = (k: string) => dicts[lang][k] ?? dicts.en[k] ?? k;

  return <I18nContext.Provider value={{ lang, t, dir }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be inside I18nProvider");
  return ctx;
}
