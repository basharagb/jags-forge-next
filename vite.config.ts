// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export is OPT-IN via STATIC_EXPORT=1. This keeps the default build
// (the one Lovable runs) on its normal Cloudflare/Nitro path, while our own
// self-host deploy to jagjo.com runs `STATIC_EXPORT=1 bun run build` to
// prerender every route to plain HTML for a static Apache host.
const STATIC = process.env.STATIC_EXPORT === "1";

// The site now consolidates all product/marketing content onto two canonical
// entity pages — "/" (English) and "/ar" (Arabic) — plus the two legal pages.
// The previously separate marketing routes (about/services/blog/careers/...)
// were orphaned (unlinked from nav) and are 301-redirected to homepage
// anchors via public/.htaccess; keeping them in the sitemap would dilute
// crawl budget and entity signal across many thin/duplicate URLs instead of
// concentrating authority on the two real entity pages.
const ROUTES = ["/", "/ar", "/privacy", "/terms"];

const HREFLANG_PAIR = [
  { href: "https://jagjo.com/", hreflang: "en" },
  { href: "https://jagjo.com/ar", hreflang: "ar" },
  { href: "https://jagjo.com/", hreflang: "x-default" },
];

const staticStart = STATIC
  ? {
      // crawlLinks/autoStaticPathsDiscovery are OFF: the site is a single-page
      // app with in-page anchor links (#about, #services, ...). With crawling
      // on, the prerenderer follows those anchors as if they were distinct
      // pages and adds "https://jagjo.com/#about" etc. as separate sitemap
      // entries — meaningless/duplicate URLs (fragments aren't crawlable
      // resources) that dilute the sitemap. ROUTES below is the complete,
      // authoritative list; nothing needs auto-discovery.
      prerender: { enabled: true, crawlLinks: false, autoStaticPathsDiscovery: false, failOnError: false },
      pages: ROUTES.map((path) => ({
        path,
        prerender: { enabled: true },
        sitemap: {
          priority: path === "/" || path === "/ar" ? 1.0 : 0.5,
          changefreq: "weekly" as const,
          // Only / and /ar are genuine language variants of each other.
          ...(path === "/" || path === "/ar" ? { alternateRefs: HREFLANG_PAIR } : {}),
        },
      })),
      sitemap: { enabled: true, host: "https://jagjo.com" },
    }
  : {};

export default defineConfig({
  // Skip Nitro only for our static export; leave Lovable's build untouched.
  nitro: STATIC ? false : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    ...staticStart,
  },
});
