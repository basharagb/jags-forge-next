import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/lib/content";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Jordan Advanced Gate" },
      { name: "description", content: "What our clients say about working with JAG." },
      { property: "og:title", content: "Testimonials — JAG" },
      { property: "og:url", content: "https://jagjo.com/testimonials" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Testimonials" title={<>Voices from <span className="text-gradient">our clients</span></>} sub="Feedback from the CIOs, ministers and business leaders we partner with." />
      <section className="container-x py-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((tm, i) => (
          <Reveal key={i} delay={(i % 3) * 0.06}>
            <figure className="premium-card p-8 h-full flex flex-col">
              <div className="flex text-[var(--emerald-brand)]">
                {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90">"{tm.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="text-sm font-semibold">{tm.name}</div>
                <div className="text-xs text-muted-foreground">{tm.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
