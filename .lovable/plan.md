# Jordan Advanced Gate (JAG) — Build Plan

You've provided a very detailed brief with brand colors (#0B2343 / #11A85D / #00D084), typography (Poppins / Cairo), and 20 pages. Given the scope, I'll build this in focused phases rather than one giant turn (which would produce shallow, template-looking pages). Each phase is fully polished before moving to the next.

## Design foundation (Phase 0 — first)

- Design system in `src/styles.css`: navy/emerald tokens as oklch, glass surfaces, gradient tokens, elevation shadows, radius scale.
- Typography: Poppins (LTR) + Cairo (RTL) via `<link>` in `__root.tsx` head.
- Bilingual scaffolding: `LanguageProvider` (EN/AR) with `dir` switching on `<html>`, translation dictionary per page.
- Shared shell: premium sticky nav with glass blur, mega-menu for Services/Solutions/Industries, language toggle, footer with newsletter + socials.
- Logo: use the uploaded JAG mark as an asset.
- Motion: Framer Motion for reveals, parallax hero, counters, hover 3D cards.
- SEO baseline: per-route `head()`, JSON-LD Organization on root, sitemap.xml + robots.txt.

## Phase 1 — Core marketing (highest impact)

Home, About, Services, Contact, 404, root shell + nav + footer.
Home includes: animated hero with particle/network canvas, stats counters, services grid, why-choose-us, industries strip, technology logos marquee, testimonials, CTA.

## Phase 2 — Depth pages

Solutions, Industries, Products, Portfolio (with case study detail), Clients, Partners, Testimonials.

## Phase 3 — Content & conversion

Blog (list + article), Careers (list + apply), FAQ, Case Studies, Projects, Thank You, Privacy, Terms.

## Technical notes

- Stack as-is: TanStack Start + Tailwind v4 + shadcn. No dark-mode toggle unless requested later.
- All content generated professionally in EN + AR (no placeholders).
- No backend required for v1 (contact form posts to a server function that logs; wire to email later). Confirm if you want Lovable Cloud enabled now for form storage.
- Interactive Google Map: embedded iframe (no API key needed).
- PWA/dark mode/full WCAG audit deferred unless you want them in v1.

## Questions before I start

1. **Scope for this turn:** ship Phase 1 now (Home, About, Services, Contact, shell, 404) at very high polish, then continue phases in follow-ups? Or attempt all 20 pages in one go at lower polish per page?
2. **Bilingual:** ship EN + AR from day 1, or EN first and layer AR after Phase 1?
3. **Contact form storage:** enable Lovable Cloud now so submissions are saved, or leave as a client-only form for now?

Reply with answers (or just "go — Phase 1, EN+AR, no backend yet") and I'll start building.