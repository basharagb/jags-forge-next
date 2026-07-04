import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Jordan Advanced Gate" },
      { name: "description", content: "Enterprise software products by JAG: ERP, CRM, HRMS, hospital, school, retail POS, AI chatbot, DMS and more." },
      { property: "og:title", content: "Products — JAG" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const PRODUCTS = [
  { name: "JAG ERP Suite", cat: "Enterprise", desc: "Modular ERP with finance, HR, procurement and manufacturing modules." },
  { name: "JAG CRM Platform", cat: "Sales & Service", desc: "Pipeline, service ticketing and marketing automation with AI insights." },
  { name: "JAG HR Cloud", cat: "People", desc: "Complete HRMS with payroll, performance and employee self-service." },
  { name: "JAG Inventory", cat: "Operations", desc: "Real-time inventory across warehouses with barcode and RFID support." },
  { name: "JAG Accounting", cat: "Finance", desc: "IFRS-ready accounting with multi-currency and tax localization." },
  { name: "JAG Hospital Management", cat: "Healthcare", desc: "Admissions, EMR, pharmacy, radiology and billing — HL7/FHIR ready." },
  { name: "JAG School", cat: "Education", desc: "SIS, LMS, parent portal and analytics in a single platform." },
  { name: "JAG POS", cat: "Retail", desc: "Cloud POS with offline mode, ESL integration and omnichannel." },
  { name: "JAG AI Chatbot", cat: "AI", desc: "Multilingual conversational AI with RAG over your business knowledge." },
  { name: "JAG Document Management", cat: "Compliance", desc: "Secure DMS with e-signature, workflows and audit trails." },
  { name: "JAG Fleet", cat: "Logistics", desc: "Fleet telematics, driver behavior and maintenance intelligence." },
  { name: "JAG Vision", cat: "Security", desc: "AI CCTV analytics: face, ANPR, PPE and crowd detection." },
  { name: "JAG Visitor", cat: "Facilities", desc: "Touchless visitor management with badge and check-in kiosks." },
  { name: "JAG Signage", cat: "Marketing", desc: "Cloud-managed digital signage for retail, hospitality and campuses." },
  { name: "JAG ESL", cat: "Retail", desc: "Electronic shelf-label deployments with campaign automation." },
];

function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Products"
        title={<>Enterprise software, <span className="text-gradient">delivered as products</span></>}
        sub="A growing family of platforms built on years of enterprise engagement — deployed in the cloud or your data center."
      />
      <section className="container-x py-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.05}>
            <article className="premium-card group p-8 h-full flex flex-col">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--emerald-brand)]">{p.cat}</span>
              <h3 className="mt-3 text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--navy)] group-hover:gap-2 transition-all">
                Product details <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
