import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Layers, Cloud, Cpu, Users, ShieldCheck, LineChart } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Jordan Advanced Gate" },
      { name: "description", content: "Pre-built and configurable JAG solutions for digital transformation, cloud modernization, AI adoption and cybersecurity." },
      { property: "og:title", content: "Solutions — JAG" },
      { property: "og:description", content: "Configurable enterprise solutions accelerating digital transformation." },
      { property: "og:url", content: "https://jagjo.com/solutions" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/solutions" }],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  { icon: Layers, name: "Digital Transformation Program", desc: "Strategy, operating model, tech stack and change management to modernize the entire enterprise." },
  { icon: Cloud, name: "Cloud Modernization", desc: "Lift-shift-modernize legacy workloads to AWS, Azure or GCP with cost governance." },
  { icon: Cpu, name: "AI Adoption Accelerator", desc: "Identify high-value AI use cases, prove them fast and scale with MLOps." },
  { icon: ShieldCheck, name: "Zero-Trust Security", desc: "Identity-first architecture, SOC-as-a-service and ISO 27001 alignment." },
  { icon: Users, name: "Employee Experience", desc: "Microsoft 365, Google Workspace, intranets and productivity intelligence." },
  { icon: LineChart, name: "Data & BI Platform", desc: "Modern data warehouse, semantic layer and self-service analytics." },
];

function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Solutions"
        title={<>Battle-tested <span className="text-gradient">solution blueprints</span></>}
        sub="Accelerators that combine software, services and expertise — deployed in weeks, not quarters."
      />
      <section className="container-x py-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.name} delay={(i % 3) * 0.06}>
              <div className="premium-card p-8 h-full">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-emerald">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </section>
    </PageShell>
  );
}
