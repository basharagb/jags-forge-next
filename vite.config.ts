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

const ROUTES = [
  "/", "/about", "/services", "/solutions", "/industries", "/products",
  "/portfolio", "/projects", "/case-studies", "/clients", "/partners",
  "/testimonials", "/blog", "/careers", "/faq", "/contact",
  "/privacy", "/terms", "/thank-you",
];

const staticStart = STATIC
  ? {
      prerender: { enabled: true, crawlLinks: true, autoStaticPathsDiscovery: true, failOnError: false },
      pages: ROUTES.map((path) => ({
        path,
        prerender: { enabled: true },
        sitemap: { priority: path === "/" ? 1.0 : 0.7, changefreq: "weekly" as const },
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
