import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Jordan Advanced Gate" },
      { name: "description", content: "A wider view of the projects delivered by JAG." },
      { property: "og:title", content: "Projects — JAG" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Projects" title={<>Programs delivered across <span className="text-gradient">the region and beyond</span></>} sub="See detailed write-ups in Portfolio and Case Studies." />
      <section className="container-x py-24">
        <div className="premium-card p-10 md:p-16 text-center">
          <p className="text-lg text-muted-foreground">Explore in-depth stories in <a href="/portfolio" className="text-[var(--emerald-brand)] font-semibold">Portfolio</a> and <a href="/case-studies" className="text-[var(--emerald-brand)] font-semibold">Case Studies</a>.</p>
        </div>
      </section>
    </PageShell>
  ),
});
