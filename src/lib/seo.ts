import { FAQS, SERVICES } from "./content";

export const SITE_URL = "https://jagjo.com";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const EN_NAME = "Jordan Advanced Gate";
export const AR_NAME = "البوابة المتقدمة الأردنية";

/**
 * Builds the full JSON-LD @graph for a language variant of the homepage.
 *
 * IMPORTANT: this must be emitted by the route itself (index.tsx / ar.tsx),
 * never by __root.tsx. TanStack Router dedupes <meta> by name/property (child
 * overrides parent) but does NOT dedupe raw <script> tags by any semantic key
 * — two conflicting Organization graphs would both render. Keeping this
 * entirely out of the root guarantees exactly one graph per page, with the
 * page's own language asserted as the primary `name`.
 */
export function buildHomeJsonLd(lang: "en" | "ar") {
  const isAr = lang === "ar";
  const pageUrl = isAr ? `${SITE_URL}/ar` : `${SITE_URL}/`;
  const primaryName = isAr ? AR_NAME : EN_NAME;
  const altNames = isAr ? [EN_NAME, "JAG"] : ["JAG", AR_NAME];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: primaryName,
        alternateName: altNames,
        description: isAr
          ? "شركة تقنية أردنية تقدّم حلول البرمجيات والذكاء الاصطناعي والحوسبة السحابية والأمن السيبراني والتحول الرقمي."
          : "Jordanian technology company delivering software, AI, cloud, cybersecurity and digital transformation solutions.",
        url: SITE_URL,
        logo: `${SITE_URL}/jag-mark.png`,
        image: OG_IMAGE,
        email: "info@jagjo.com",
        telephone: "+962-7-7091-1991",
        foundingLocation: "Amman, Jordan",
        areaServed: ["JO", "Middle East"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Amman",
          addressCountry: "JO",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+962-7-7091-1991",
          contactType: "sales",
          email: "info@jagjo.com",
          availableLanguage: ["en", "ar"],
        },
        sameAs: ["https://www.facebook.com/Jordan.JAG.22/"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: primaryName,
        alternateName: altNames,
        inLanguage: lang,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: isAr
          ? `${AR_NAME} — حلول تقنية المعلومات والذكاء الاصطناعي والتحول الرقمي`
          : `${EN_NAME} — Enterprise IT, AI & Digital Transformation`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: lang,
        primaryImageOfPage: OG_IMAGE,
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#services`,
        name: isAr ? "خدمات البوابة المتقدمة الأردنية" : "Jordan Advanced Gate services",
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: isAr ? s.titleAr : s.title,
            description: isAr ? s.descAr : s.desc,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: ["JO", "Middle East"],
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: isAr ? f.qAr : f.q,
          acceptedAnswer: { "@type": "Answer", text: isAr ? f.aAr : f.a },
        })),
      },
    ],
  };
}
