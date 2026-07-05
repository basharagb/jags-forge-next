// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Every marketing route is static, so we prerender the whole site to plain HTML
// (best-in-class SEO + works on any static/Apache host) and ship an SPA shell as
// a fallback for client navigation. Deploy target: static files under jagjo.com.
const ROUTES = [
  "/", "/about", "/services", "/solutions", "/industries", "/products",
  "/portfolio", "/projects", "/case-studies", "/clients", "/partners",
  "/testimonials", "/blog", "/careers", "/faq", "/contact",
  "/privacy", "/terms", "/thank-you",
];

export default defineConfig({
  // Disable Nitro: we want TanStack Start's native prerender + SPA output in dist/,
  // which we ship as plain static files to the Apache/LiteSpeed host (jagjo.com).
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true, autoStaticPathsDiscovery: true, failOnError: false },
    pages: ROUTES.map((path) => ({
      path,
      prerender: { enabled: true },
      sitemap: { priority: path === "/" ? 1.0 : 0.7, changefreq: "weekly" },
    })),
    sitemap: { enabled: true, host: "https://jagjo.com" },
  },
});
