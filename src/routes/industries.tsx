import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { INDUSTRIES } from "@/lib/content";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Jordan Advanced Gate" },
      { name: "description", content: "JAG serves healthcare, banking, education, government, retail, manufacturing, telecom and more with deep vertical expertise." },
      { property: "og:title", content: "Industries — JAG" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const DETAILS: Record<string, string> = {
  Healthcare: "HIS, patient portals, telemedicine, AI diagnostics and HL7/FHIR integration.",
  Education: "SIS, LMS, digital campuses and analytics for student success.",
  Retail: "Omnichannel POS, ESL, WMS and customer intelligence for modern retail.",
  Government: "e-Gov platforms, citizen services, digital identity and secure infrastructure.",
  Banking: "Core banking integration, digital onboarding and fraud analytics.",
  Insurance: "Policy administration, claims automation and actuarial data platforms.",
  Manufacturing: "IIoT, MES, predictive maintenance and supply-chain visibility.",
  Hospitality: "PMS, guest apps, kiosks and revenue-management analytics.",
  Logistics: "Fleet management, TMS, WMS and real-time tracking.",
  "Real Estate": "Property portals, smart buildings and tenant experience apps.",
  Construction: "Project controls, BIM integration and site-safety analytics.",
  Energy: "SCADA integration, grid analytics and asset performance management.",
  Telecom: "OSS/BSS, network analytics and self-service portals.",
  "E-commerce": "Headless commerce, personalization and marketplace platforms.",
  Transportation: "ITS, ticketing, MaaS platforms and fleet telematics.",
  "Smart Cities": "Command centers, urban IoT and citizen engagement platforms.",
};

function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title={<>Deep expertise across <span className="text-gradient">every sector we serve</span></>}
        sub="From regulated public-sector programs to high-growth consumer brands — engineered for domain reality."
      />
      <section className="container-x py-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <Reveal key={ind.name} delay={(i % 3) * 0.05}>
              <div className="premium-card p-6 h-full">
                <Icon className="h-6 w-6 text-[var(--emerald-brand)]" />
                <h3 className="mt-4 text-lg font-semibold">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{DETAILS[ind.name] ?? ""}</p>
              </div>
            </Reveal>
          );
        })}
      </section>
    </PageShell>
  );
}
