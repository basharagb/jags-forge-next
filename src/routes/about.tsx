import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";
import { Award, Target, Compass, Users, Sparkles, Shield, Heart, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jordan Advanced Gate" },
      { name: "description", content: "The team, mission and values behind JAG — a trusted engineering partner for enterprises, governments and universities." },
      { property: "og:title", content: "About — Jordan Advanced Gate" },
      { property: "og:description", content: "Meet the team building JAG — engineering, design and strategy for enterprise transformation." },
      { property: "og:url", content: "https://jagjo.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Sparkles, title: "Craft", desc: "Every line of code and every pixel is a promise to our clients." },
  { icon: Shield, title: "Integrity", desc: "We say what we do, and we do what we say — audited and documented." },
  { icon: Heart, title: "Empathy", desc: "Human-centered design for the people who actually use the software." },
  { icon: Rocket, title: "Momentum", desc: "Small squads, fast iterations, honest metrics." },
];

const TIMELINE = [
  { year: "2011", text: "Founded in Amman with a 6-person engineering team." },
  { year: "2014", text: "First national digital-transformation program delivered." },
  { year: "2017", text: "Expanded to GCC — Riyadh, Dubai and Doha offices opened." },
  { year: "2020", text: "ISO 27001 certified. Managed cybersecurity SOC launched." },
  { year: "2022", text: "AI & Data Practice founded. First generative-AI products in production." },
  { year: "2025", text: "Awarded MENA IT Company of the Year. 320+ projects delivered." },
];

function AboutPage() {
  const { t } = useI18n();
  return (
    <SiteShell>
      <section className="relative overflow-hidden gradient-hero text-white -mt-24 pt-40 pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[var(--emerald-brand)]/20 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-glow)]">About JAG</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
              {t("about.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">{t("about.sub")}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-2 gap-10">
        {[
          { icon: Target, title: t("about.mission"), body: t("about.missionText") },
          { icon: Compass, title: t("about.vision"), body: t("about.visionText") },
        ].map((b, i) => {
          const Icon = b.icon;
          return (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="premium-card p-10 h-full">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-emerald">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">{b.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="container-x pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">Values</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("about.values")}</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="premium-card p-6 h-full">
                  <Icon className="h-6 w-6 text-[var(--emerald-brand)]" />
                  <h3 className="mt-4 font-semibold text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface-2/60 py-24">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">Journey</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Company timeline</h2>
          </Reveal>

          <div className="mt-12 relative">
            <div className="absolute start-4 md:start-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div className={`relative flex md:items-center md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute start-4 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 h-3 w-3 rounded-full gradient-emerald shadow-emerald" />
                    <div className="ms-12 md:ms-0 md:w-1/2 md:px-8">
                      <div className="premium-card p-6">
                        <div className="text-2xl font-bold text-gradient-brand">{item.year}</div>
                        <p className="mt-2 text-foreground/80">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { icon: Award, big: "14+", small: "Industry awards" },
            { icon: Users, big: "95", small: "Certified engineers" },
            { icon: Target, big: "22", small: "Countries served" },
            { icon: Sparkles, big: "99%", small: "Client retention" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.small} delay={i * 0.06}>
                <div className="premium-card p-8">
                  <Icon className="h-6 w-6 text-[var(--emerald-brand)] mx-auto" />
                  <div className="mt-4 text-4xl font-bold text-gradient-brand">{s.big}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.small}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
