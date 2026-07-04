import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Jordan Advanced Gate" },
      { name: "description", content: "How Jordan Advanced Gate collects, uses and protects personal data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Legal" title="Privacy Policy" sub="This page is maintained by Jordan Advanced Gate to answer common privacy questions about our website and services." />
      <section className="container-x py-20 max-w-3xl prose prose-slate">
        <Section title="Overview">
          Jordan Advanced Gate (JAG) respects your privacy. This policy describes what information we collect through this website and how we use it. It is not a certification or a substitute for a signed Data Processing Agreement.
        </Section>
        <Section title="Information we collect">
          Contact details you submit (name, email, phone, company, message), plus standard analytics such as pages viewed, referrer, and device metadata.
        </Section>
        <Section title="How we use it">
          To respond to your inquiry, deliver services you request, and improve the website. We do not sell personal information.
        </Section>
        <Section title="Retention">
          Inquiry data is retained only as long as needed for the purpose collected, or as required by applicable law.
        </Section>
        <Section title="Your rights">
          You may request access, correction, or deletion of your personal data by contacting hello@jag.jo.
        </Section>
        <Section title="Contact">
          For privacy questions, contact hello@jag.jo.
        </Section>
      </section>
    </PageShell>
  ),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
