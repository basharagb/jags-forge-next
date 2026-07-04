import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Jordan Advanced Gate" },
      { name: "description", content: "Answers to common questions about working with Jordan Advanced Gate." },
      { property: "og:title", content: "FAQ — JAG" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

const FAQS = [
  { q: "What industries do you specialize in?", a: "Government, banking, healthcare, education, retail, telecom, logistics and manufacturing — with dedicated practice leads per vertical." },
  { q: "Do you work outside Jordan?", a: "Yes. We deliver programs across the MENA region and in 22 countries worldwide." },
  { q: "How long does a typical engagement take?", a: "Discovery is 2–4 weeks. Most implementation programs run 3–9 months, delivered in agile sprints." },
  { q: "Do you offer fixed-price contracts?", a: "Yes, for scoped work. For evolving products we recommend a time-and-materials or capped model." },
  { q: "Can you build on top of our existing systems?", a: "Absolutely — we routinely integrate with SAP, Oracle, Salesforce, Microsoft 365, and legacy in-house systems." },
  { q: "Do you provide 24/7 support?", a: "Yes. Our managed-services team runs a follow-the-sun SLA-backed support model." },
  { q: "Are you ISO 27001 certified?", a: "Yes. We maintain ISO 27001 and align programs with ISO 9001, SOC 2 principles and local regulations." },
  { q: "Can you host solutions in our data center?", a: "Yes. We support cloud, on-prem and hybrid deployments — including sovereign clouds." },
  { q: "Do you have Arabic-speaking teams?", a: "All client-facing teams are fully bilingual in Arabic and English." },
  { q: "How do you handle data protection?", a: "We follow ISO 27001 controls, data-residency requirements and GDPR-style privacy patterns by default." },
  { q: "What is your AI approach?", a: "We combine open models, commercial APIs and custom fine-tuning — always with human-in-the-loop governance." },
  { q: "Do you offer training?", a: "Yes — we run tailored enablement programs for client engineering, security and business teams." },
  { q: "Can you help with cloud cost optimization?", a: "Yes. Our FinOps practice averages 28% cloud-cost reduction in the first 90 days." },
  { q: "What technologies do you use?", a: "React, Next.js, Node.js, .NET, Java, Python, Flutter, AWS, Azure, GCP, Kubernetes, and more." },
  { q: "Do you provide UX research?", a: "Yes — user research, service design and usability testing are part of our design practice." },
  { q: "Can you sign NDAs and DPAs?", a: "Standard practice on every engagement, including localized variants where required." },
  { q: "Do you offer proof-of-concepts?", a: "Yes — typical PoCs run 3–6 weeks with a clear success metric agreed up front." },
  { q: "How do you price AI projects?", a: "PoC as fixed-price, production as retainer + per-use, adjusted per model economics." },
  { q: "Can you help with compliance audits?", a: "Yes — ISO 27001, PCI-DSS, HIPAA-aligned and local regulator readiness programs." },
  { q: "How do we get started?", a: "Book a 30-minute call through our contact page. We'll respond within one business day." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions we get <span className="text-gradient">from every CIO</span></>}
        sub="If you don't see your question here, our team will answer in a first call."
      />
      <section className="container-x py-20 max-w-3xl">
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={(i % 6) * 0.03}>
              <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start hover:bg-muted transition"
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-up">{f.a}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
