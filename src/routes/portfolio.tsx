import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Jordan Advanced Gate" },
      { name: "description", content: "Case studies from JAG: government, healthcare, retail and banking transformation programs." },
      { property: "og:title", content: "Portfolio — JAG" },
      { property: "og:url", content: "https://jagjo.com/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/portfolio" }],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  { industry: "Government", client: "Ministry of Digital Economy", title: "National e-Services Platform", tech: "React · .NET · Azure", overview: "Unified 34 e-services under a single citizen identity.", result: "72% faster service completion, 4.7/5 satisfaction." },
  { industry: "Banking", client: "Regional Commercial Bank", title: "Digital Onboarding & KYC", tech: "Flutter · Node.js · AWS", overview: "Video-KYC and instant account opening across 6 countries.", result: "Onboarding time cut from 3 days to 8 minutes." },
  { industry: "Healthcare", client: "University Hospital", title: "HIS + Patient Portal", tech: "Java · Angular · HL7/FHIR", overview: "Full hospital information system for 1,200 beds.", result: "62% reduction in patient onboarding time." },
  { industry: "Retail", client: "Emirates Retail Group", title: "Unified Retail Stack", tech: "Node.js · React · ESL", overview: "POS, ESL and analytics across 220 stores in 9 months.", result: "18% uplift in campaign conversion." },
  { industry: "Education", client: "Private University Consortium", title: "Smart Campus Program", tech: "Python · Kafka · GCP", overview: "IoT-driven attendance, safety and energy analytics.", result: "23% reduction in energy costs." },
  { industry: "Logistics", client: "GCC Logistics Operator", title: "Fleet Intelligence", tech: "TensorFlow · React · MongoDB", overview: "Driver behavior + predictive maintenance for 3,400 vehicles.", result: "31% fewer road incidents." },
];

function PortfolioPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio"
        title={<>Selected work from <span className="text-gradient">our recent programs</span></>}
        sub="A snapshot of enterprise transformations delivered across the region and beyond."
      />
      <section className="container-x py-24 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <article className="premium-card group p-8 h-full">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--emerald-brand)]">{p.industry}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span className="text-xs text-muted-foreground">{p.client}</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.overview}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.split(" · ").map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-muted text-foreground/70 font-medium">{t}</span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <div className="text-sm">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Impact</div>
                  <div className="mt-1 font-semibold text-[var(--navy)]">{p.result}</div>
                </div>
                <ArrowRight className="h-5 w-5 text-[var(--emerald-brand)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition" />
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
