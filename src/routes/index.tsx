import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, Play, Sparkles, ShieldCheck, Zap, Star,
  CheckCircle2, TrendingUp, Globe,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { HeroCanvas } from "@/components/site/HeroCanvas";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { SERVICES, WHY, STATS, INDUSTRIES, TECHS, TESTIMONIALS, PARTNERS } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jordan Advanced Gate — Enterprise IT, AI & Digital Transformation" },
      { name: "description", content: "JAG builds enterprise software, AI, cloud, cybersecurity and infrastructure for governments, banks, universities and global brands." },
      { property: "og:title", content: "Jordan Advanced Gate — Enterprise IT & Digital Transformation" },
      { property: "og:description", content: "Custom software, AI, cloud, cybersecurity and infrastructure for enterprises worldwide." },
      { property: "og:url", content: "https://jagjo.com/" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <TrustBar />
      <Stats />
      <Services />
      <WhyUs />
      <Industries />
      <TechStack />
      <Testimonials />
      <FinalCTA />
    </SiteShell>
  );
}

function Hero() {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative -mt-24 min-h-[100svh] overflow-hidden gradient-hero text-white">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <HeroCanvas />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[var(--emerald-brand)]/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--emerald-glow)]/15 blur-3xl animate-float" style={{ animationDelay: "-4s" }} />

      <motion.div style={{ y, opacity }} className="container-x relative pt-40 pb-24 min-h-[100svh] flex flex-col justify-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white/90">
            <Sparkles className="h-3.5 w-3.5 text-[var(--emerald-glow)]" />
            {t("hero.eyebrow")}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-tight max-w-5xl">
            <span className="block text-white">{t("hero.title.a")}</span>
            <span className="block text-gradient">{t("hero.title.b")}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className={`mt-6 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed ${lang === "ar" ? "font-normal" : ""}`}>
            {t("hero.sub")}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="gradient-emerald text-white shadow-emerald hover:opacity-95 h-12 px-6">
              <Link to="/contact">
                {t("hero.cta1")} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link to="/services">{t("hero.cta2")}</Link>
            </Button>
            <button className="h-12 px-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition">
              <span className="h-10 w-10 grid place-items-center rounded-full glass-dark animate-pulse-ring">
                <Play className="h-4 w-4 fill-white" />
              </span>
              {t("hero.cta3")}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {[
              { icon: ShieldCheck, label: "ISO 27001" },
              { icon: Globe, label: "22 countries" },
              { icon: Zap, label: "24/7 support" },
              { icon: Star, label: "99% CSAT" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/70">
                <Icon className="h-4 w-4 text-[var(--emerald-glow)]" />
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-border bg-surface-2/50 overflow-hidden">
      <div className="container-x py-8">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-muted-foreground font-semibold">
          Trusted by ministries, banks, universities & global enterprises
        </p>
        <div className="mt-6 relative overflow-hidden mask-fade-b">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span key={i} className="text-2xl font-bold text-foreground/40 hover:text-foreground/70 transition">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient-brand tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{t(s.label)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const { t, lang } = useI18n();
  return (
    <section className="container-x py-24">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">Services</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{t("services.title")}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{t("services.sub")}</p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <article className="premium-card group h-full p-6 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--emerald-glow)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-emerald">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{lang === "ar" ? s.titleAr : s.title}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.tag}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {lang === "ar" ? s.descAr : s.desc}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--emerald-brand)] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <Link to="/services">View all services <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" /></Link>
        </Button>
      </div>
    </section>
  );
}

function WhyUs() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--navy-deep)]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--emerald-brand)]/20 blur-3xl" />

      <div className="container-x relative text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-glow)]">Why JAG</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{t("why.title")}</h2>
            <p className="mt-4 text-lg text-white/70 max-w-md">{t("why.sub")}</p>

            <div className="mt-10 space-y-4">
              {[
                "Fixed-scope discovery in 2 weeks",
                "Delivery accelerators for regulated sectors",
                "Bilingual teams: Arabic & English",
                "Dedicated CSM on every engagement",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[var(--emerald-glow)]" />
                  <span className="text-white/85">{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {WHY.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={i * 0.06}>
                  <div className="glass-dark rounded-2xl p-6 h-full hover:bg-white/10 transition">
                    <div className="h-11 w-11 rounded-lg gradient-emerald grid place-items-center shadow-emerald">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mt-4 font-semibold">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">Industries</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{t("industries.title")}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{t("industries.sub")}</p>
      </div>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {INDUSTRIES.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <Reveal key={ind.name} delay={(i % 8) * 0.03}>
              <div className="group aspect-square rounded-2xl border border-border bg-surface hover:bg-gradient-to-br hover:from-[var(--navy)] hover:to-[var(--emerald-brand)] hover:text-white flex flex-col items-center justify-center gap-2 p-4 text-center transition-all cursor-pointer hover:shadow-emerald hover:-translate-y-1">
                <Icon className="h-6 w-6 text-[var(--navy)] group-hover:text-white transition-colors" />
                <span className="text-xs font-medium">{ind.name}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function TechStack() {
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-surface-2/60 py-20 overflow-hidden">
      <div className="container-x">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">Stack</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">{t("tech.title")}</h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TECHS.map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/80 hover:border-[var(--emerald-brand)] hover:text-[var(--navy)] transition">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">Testimonials</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{t("testimonials.title")}</h2>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((tm, i) => (
          <Reveal key={tm.name} delay={i * 0.1}>
            <figure className="premium-card p-8 h-full flex flex-col">
              <div className="flex text-[var(--emerald-brand)]">
                {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90">
                "{tm.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="h-11 w-11 rounded-full gradient-brand grid place-items-center text-white font-bold text-sm">
                  {tm.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{tm.name}</div>
                  <div className="text-xs text-muted-foreground">{tm.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-3xl gradient-hero text-white px-8 md:px-16 py-16 md:py-24 shadow-elegant">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--emerald-brand)]/25 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium">
            <TrendingUp className="h-3.5 w-3.5 text-[var(--emerald-glow)]" />
            Ready when you are
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="mt-4 text-lg text-white/75 max-w-xl">{t("cta.sub")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gradient-emerald text-white shadow-emerald h-12 px-6">
              <Link to="/contact">{t("cta.button")} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link to="/portfolio">See our work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
