import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { PARTNERS } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Jordan Advanced Gate" },
      { name: "description", content: "Our global technology partners." },
      { property: "og:title", content: "Partners — JAG" },
      { property: "og:url", content: "https://jagjo.com/partners" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/partners" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Partners" title={<>Certified with the <span className="text-gradient">world's leading platforms</span></>} sub="Strategic partnerships that let us design, deliver and support the best-in-class stack for every client." />
      <section className="container-x py-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {PARTNERS.map((p, i) => (
          <Reveal key={p} delay={(i % 5) * 0.05}>
            <div className="premium-card h-32 grid place-items-center text-xl font-bold text-foreground/70">{p}</div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
