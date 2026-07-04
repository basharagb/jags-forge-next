import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Jordan Advanced Gate" },
      { name: "description", content: "Enterprises, governments and universities that trust JAG." },
      { property: "og:title", content: "Clients — JAG" },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

const CLIENTS = [
  "Ministry of Digital Economy", "King Abdullah University Hospital", "Emirates Retail Group",
  "Arab Bank", "Zain Telecom", "Aramex", "University of Jordan", "Royal Jordanian",
  "Petra Bank", "Orange Jordan", "Jordan Post", "Amman Municipality", "Saudi Post",
  "Etihad Airways", "Al Rajhi Bank", "Mashreq Bank", "Emirates Post", "Qatar University",
  "Kuwait Ministry of Health", "Oman Telecom",
];

function ClientsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Clients" title={<>Trusted by leaders <span className="text-gradient">across the region</span></>} sub="A selection of the enterprises, ministries and universities we're proud to work with." />
      <section className="container-x py-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CLIENTS.map((c, i) => (
          <Reveal key={c} delay={(i % 4) * 0.04}>
            <div className="premium-card p-6 h-full flex items-center justify-center text-center font-semibold text-foreground/80">{c}</div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
