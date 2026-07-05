import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Jordan Advanced Gate" },
      { name: "description", content: "Enterprise IT services from JAG: custom software, AI, cloud, cybersecurity, networking, ERP/CRM, automation and managed services." },
      { property: "og:title", content: "Services — Jordan Advanced Gate" },
      { property: "og:description", content: "End-to-end enterprise IT services: software, AI, cloud, security, ERP, automation, managed services." },
      { property: "og:url", content: "https://jagjo.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/services" }],
  }),
  component: ServicesPage,
});

const OUTCOMES = [
  "Faster time-to-market for digital products",
  "Reduced operating costs through automation",
  "Enterprise-grade security & compliance posture",
  "Data-driven decision-making at every level",
  "Resilient, elastic cloud infrastructure",
  "Modern, delightful experiences for users",
];

function ServicesPage() {
  const { t, lang } = useI18n();
  return (
    <SiteShell>
      <section className="relative overflow-hidden gradient-hero text-white -mt-24 pt-40 pb-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-x relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-glow)]">Services</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
              A full-spectrum <span className="text-gradient">technology partner</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{t("services.sub")}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <article className="premium-card group p-6 h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-emerald">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{lang === "ar" ? s.titleAr : s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{lang === "ar" ? s.descAr : s.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="premium-card p-10 lg:p-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">Outcomes</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">What our engagements typically deliver</h2>
            <p className="mt-4 text-muted-foreground">Every JAG program starts with a business outcome — not a technology choice. Here's what our clients measure.</p>
            <Button asChild className="mt-8 gradient-brand text-white shadow-emerald">
              <Link to="/contact">Discuss your project <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" /></Link>
            </Button>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {OUTCOMES.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-[var(--emerald-brand)]" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
