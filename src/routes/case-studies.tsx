import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Jordan Advanced Gate" },
      { name: "description", content: "In-depth case studies of JAG programs across government, banking, healthcare and retail." },
      { property: "og:title", content: "Case Studies — JAG" },
      { property: "og:url", content: "https://jagjo.com/case-studies" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  { title: "Digitizing 34 government services", industry: "Government", stat: "72% faster completion", body: "A national program consolidating 34 e-services under a unified identity layer, deployed across 6 ministries in 11 months." },
  { title: "Instant onboarding at scale", industry: "Banking", stat: "8 minutes vs 3 days", body: "Video-KYC and biometric identity built into a mobile-first onboarding flow, launched across 6 countries." },
  { title: "AI CCTV for a national retail chain", industry: "Retail", stat: "31% fewer incidents", body: "Face, ANPR and PPE analytics deployed across 340 branches with a central command SOC." },
  { title: "Smart campus program", industry: "Education", stat: "23% energy saved", body: "IoT-driven attendance, safety and energy analytics for a 42,000-student private university consortium." },
];

function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Case Studies" title={<>Real programs, <span className="text-gradient">measurable outcomes</span></>} sub="Written by the JAG delivery teams who ran them. No fluff — just the decisions and results." />
      <section className="container-x py-24 grid gap-6 lg:grid-cols-2">
        {CASES.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 0.08}>
            <article className="premium-card p-10 h-full">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--emerald-brand)]">{c.industry}</span>
              <h3 className="mt-3 text-2xl font-bold">{c.title}</h3>
              <div className="mt-4 text-3xl font-bold text-gradient-brand">{c.stat}</div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
