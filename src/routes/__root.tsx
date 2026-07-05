import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--emerald-brand)] font-semibold">Error 404</p>
        <h1 className="mt-3 text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">This page can't be found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The URL might be outdated or mistyped. Let's get you back on track.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-emerald hover:opacity-95 transition"
          >
            Return home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted transition"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md gradient-brand px-4 py-2 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://jagjo.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const TITLE = "Jordan Advanced Gate — Enterprise IT, AI & Digital Transformation";
const DESCRIPTION =
  "JAG builds enterprise software, AI, cloud, cybersecurity and infrastructure for governments, banks, universities and global brands.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Jordan Advanced Gate, JAG, IT solutions Jordan, digital transformation, enterprise software, AI, cloud, cybersecurity, ERP, Amman, البوابة المتقدمة الأردنية",
      },
      { name: "author", content: "Jordan Advanced Gate" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#0B2343" },
      { name: "application-name", content: "Jordan Advanced Gate" },
      { property: "og:site_name", content: "Jordan Advanced Gate" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_JO" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Jordan Advanced Gate — Enterprise IT & Digital Transformation" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Cairo:wght@300;400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Jordan Advanced Gate",
              alternateName: ["JAG", "البوابة المتقدمة الأردنية"],
              description: "IT Solutions & Digital Transformation",
              url: SITE_URL,
              logo: `${SITE_URL}/jag-mark.png`,
              image: OG_IMAGE,
              email: "hello@jag.jo",
              telephone: "+962-6-500-0000",
              foundingLocation: "Amman, Jordan",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Amman",
                addressCountry: "JO",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+962-6-500-0000",
                contactType: "sales",
                email: "hello@jag.jo",
                availableLanguage: ["en", "ar"],
              },
              sameAs: ["https://www.linkedin.com/company/jordan-advanced-gate"],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Jordan Advanced Gate",
              inLanguage: "en",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [qc] = useState(() => queryClient);
  return (
    <QueryClientProvider client={qc}>
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
