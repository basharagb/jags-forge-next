import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Jordan Advanced Gate" },
      { name: "description", content: "Terms governing use of the Jordan Advanced Gate website." },
      { property: "og:url", content: "https://jagjo.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/terms" }],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Legal" title="Terms of Service" sub="These terms govern your use of this website. Engagements are additionally governed by signed contracts." />
      <section className="container-x py-20 max-w-3xl">
        {[
          { t: "Acceptance", b: "By accessing this website you agree to these terms." },
          { t: "Content", b: "All content, marks and materials are owned by Jordan Advanced Gate or its licensors." },
          { t: "Use", b: "You may not use this site for unlawful, harmful, or infringing activity." },
          { t: "Warranties", b: "Website content is provided 'as is' without warranty of any kind." },
          { t: "Liability", b: "To the maximum extent permitted by law, JAG disclaims liability for indirect or consequential damages." },
          { t: "Governing law", b: "These terms are governed by the laws of the Hashemite Kingdom of Jordan." },
        ].map((s) => (
          <div key={s.t} className="mt-10">
            <h2 className="text-2xl font-bold">{s.t}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.b}</p>
          </div>
        ))}
      </section>
    </PageShell>
  ),
});
