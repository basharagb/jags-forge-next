import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { buildHomeJsonLd, SITE_URL, OG_IMAGE, EN_NAME, AR_NAME } from "@/lib/seo";

// Dedicated, fully server-rendered Arabic homepage. This exists specifically
// so Arabic-language content is genuinely present in the static build output
// (see src/lib/i18n.tsx for why a client-side language toggle alone cannot
// produce crawlable Arabic content). Renders the exact same <HomePage/> tree
// as "/" — useI18n() derives "ar" from this route's own /ar path.
const TITLE = AR_NAME;
const DESCRIPTION =
  `${AR_NAME} شركة أردنية تقدم خدمات متابعة وإنجاز المعاملات الحكومية وتأسيس الشركات وإصدار وتجديد التراخيص والتصاريح، إلى جانب الحلول التقنية المتكاملة.`;

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:locale", content: "ar_JO" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:url", content: `${SITE_URL}/ar` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/ar` },
      { rel: "alternate", hreflang: "ar", href: `${SITE_URL}/ar` },
      { rel: "alternate", hreflang: "en", href: `${SITE_URL}/` },
      { rel: "alternate", hreflang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildHomeJsonLd("ar")) },
    ],
  }),
  component: HomePage,
});
