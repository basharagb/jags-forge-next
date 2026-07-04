import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank you — Jordan Advanced Gate" },
      { name: "description", content: "Your message has been received." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/thank-you" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: () => (
    <PageShell>
      <section className="container-x py-32 text-center">
        <CheckCircle2 className="h-14 w-14 mx-auto text-[var(--emerald-brand)]" />
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">Thank you.</h1>
        <p className="mt-4 max-w-lg mx-auto text-muted-foreground">A JAG strategist will reach out within one business day. In the meantime, feel free to explore our work.</p>
        <div className="mt-8">
          <Button asChild size="lg" className="gradient-brand text-white shadow-emerald">
            <Link to="/portfolio">See our work</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  ),
});

// Keep TS happy about unused import
void PageHero;
