import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Jordan Advanced Gate" },
      { name: "description", content: "Enterprise technology insights from JAG's engineering, AI and cybersecurity teams." },
      { property: "og:title", content: "Insights — JAG" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  { cat: "AI", title: "Beyond the chatbot: building enterprise-grade RAG systems", date: "Jun 2026", read: "8 min", excerpt: "Practical patterns for grounding LLMs in regulated business knowledge." },
  { cat: "Cloud", title: "The FinOps operating model that actually reduces cloud spend", date: "May 2026", read: "6 min", excerpt: "What separates FinOps success stories from theater — with data from 40 migrations." },
  { cat: "Cybersecurity", title: "Zero-trust for real: an 18-month transformation blueprint", date: "May 2026", read: "10 min", excerpt: "A staged program that our clients used to migrate 45,000 users to zero-trust." },
  { cat: "Digital Transformation", title: "Why most transformation programs stall at year two", date: "Apr 2026", read: "7 min", excerpt: "The organizational patterns that predict success — and the ones that predict failure." },
  { cat: "Programming", title: "TypeScript at scale: patterns from a 1M-line monorepo", date: "Apr 2026", read: "12 min", excerpt: "What we learned building and maintaining a very large TS codebase." },
  { cat: "Networking", title: "SD-WAN vs SASE: choosing the right edge for 2026", date: "Mar 2026", read: "5 min", excerpt: "A decision framework for CIOs modernizing the branch network." },
];

function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title={<>Engineering, AI & security <span className="text-gradient">from our practitioners</span></>}
        sub="Field-tested writing from the JAG teams shipping enterprise software every day."
      />
      <section className="container-x py-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.06}>
            <article className="premium-card group p-8 h-full flex flex-col">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--emerald-brand)]">{p.cat}</span>
              <h3 className="mt-3 text-xl font-bold leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1 leading-relaxed">{p.excerpt}</p>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{p.read}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-[var(--emerald-brand)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition" />
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
