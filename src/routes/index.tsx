import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { buildHomeJsonLd, SITE_URL, OG_IMAGE, EN_NAME, AR_NAME } from "@/lib/seo";

const TITLE = `${EN_NAME} — Enterprise IT, AI & Digital Transformation`;
const DESCRIPTION =
  `${EN_NAME} (${AR_NAME}) builds enterprise software, AI, cloud, cybersecurity and infrastructure for governments, banks, universities and global brands across Jordan and the Middle East.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_JO" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      // hreflang: tells Google / is the English variant, /ar is the Arabic
      // variant of the SAME page — required for any language-toggle
      // architecture; without it, search engines have no way to know these
      // two URLs represent one entity rather than duplicate/unrelated pages.
      { rel: "alternate", hreflang: "en", href: `${SITE_URL}/` },
      { rel: "alternate", hreflang: "ar", href: `${SITE_URL}/ar` },
      { rel: "alternate", hreflang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildHomeJsonLd("en")) },
    ],
  }),
  component: HomePage,
});
