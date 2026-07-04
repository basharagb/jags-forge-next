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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jordan Advanced Gate — Enterprise IT, AI & Digital Transformation" },
      { name: "description", content: "JAG builds enterprise software, AI, cloud, cybersecurity and infrastructure for governments, banks, universities and global brands." },
      { name: "author", content: "Jordan Advanced Gate" },
      { name: "theme-color", content: "#0B2343" },
      { property: "og:site_name", content: "Jordan Advanced Gate" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Jordan Advanced Gate — Enterprise IT, AI & Digital Transformation" },
      { property: "og:description", content: "JAG builds enterprise software, AI, cloud, cybersecurity and infrastructure for governments, banks, universities and global brands." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jordan Advanced Gate — Enterprise IT, AI & Digital Transformation" },
      { name: "twitter:description", content: "JAG builds enterprise software, AI, cloud, cybersecurity and infrastructure for governments, banks, universities and global brands." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8397e102-180d-417e-ac0e-86bd267893f3/id-preview-ae827a62--8a52d05c-988b-4733-9f99-e0378572423a.lovable.app-1783190973066.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8397e102-180d-417e-ac0e-86bd267893f3/id-preview-ae827a62--8a52d05c-988b-4733-9f99-e0378572423a.lovable.app-1783190973066.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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
          "@type": "Organization",
          name: "Jordan Advanced Gate",
          alternateName: "JAG",
          description: "IT Solutions & Digital Transformation",
          url: "/",
          address: { "@type": "PostalAddress", addressLocality: "Amman", addressCountry: "JO" },
          sameAs: ["https://www.linkedin.com/company/jag"],
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
