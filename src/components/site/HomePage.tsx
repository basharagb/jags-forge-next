import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight, Play, Sparkles, ShieldCheck, Zap, Star,
  CheckCircle2, TrendingUp, Globe, Target, Compass, Shield, Heart, Rocket,
  Mail, Phone, MapPin, Facebook, Send, ChevronDown,
  Landmark, FileCheck2,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { HeroCanvas } from "@/components/site/HeroCanvas";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import {
  SERVICES, WHY, STATS, INDUSTRIES, TECHS, TESTIMONIALS, PARTNERS, SOLUTIONS,
  OUTCOMES, FAQS, GOVERNMENT_TRANSACTION_SERVICES,
} from "@/lib/content";

// Full homepage content, shared by both language routes (src/routes/index.tsx
// for English, src/routes/ar.tsx for Arabic). Rendering the exact same
// component tree under two distinct URLs — with useI18n() deriving language
// from the URL path — is what makes both languages genuinely prerendered,
// crawlable HTML instead of a single English snapshot with a client-side
// toggle. See src/lib/i18n.tsx for why that distinction matters.
export function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <TrustBar />
      <Stats />
      <About />
      <Services />
      <GovernmentTransactions />
      <Solutions />
      <WhyUs />
      <Industries />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
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
    <section id="home" ref={ref} className="relative -mt-24 min-h-[100svh] overflow-hidden gradient-hero text-white">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <HeroCanvas />
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
          {/* Brand name leads the H1 — the single strongest on-page signal for
              branded/entity search queries. The stylized tagline underneath
              carries the visual weight; the name carries the SEO weight. */}
          <h1
            className={`mt-6 font-bold tracking-tight max-w-5xl ${
              lang === "ar"
                ? "text-[clamp(2.25rem,6vw,5rem)] leading-[1.35] pb-1"
                : "text-[clamp(2.25rem,6vw,5.5rem)] leading-[1.05]"
            }`}
          >
            <span className="block text-white/90 text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
              {t("brand.name")}
            </span>
            <span className="block text-white">{t("hero.title.a")}</span>
            <span className="block text-gradient pb-1.5">{t("hero.title.b")}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">{t("hero.sub")}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="sheen gradient-emerald text-white shadow-emerald hover:opacity-95 hover:scale-[1.03] transition-transform h-12 px-6">
              <a href="#contact">
                {t("hero.cta1")} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <a href="#services">{t("hero.cta2")}</a>
            </Button>
            <button type="button" className="h-12 px-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition">
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
              { icon: ShieldCheck, label: t("badge.iso") },
              { icon: Globe, label: t("badge.countries") },
              { icon: Zap, label: t("badge.support") },
              { icon: Star, label: t("badge.csat") },
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
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-surface-2/50 overflow-hidden">
      <div className="container-x py-8">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-muted-foreground font-semibold">
          {t("trustbar")}
        </p>
        <div className="mt-6 relative overflow-hidden mask-fade-b">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span key={i} className="text-xl font-bold text-foreground/40 hover:text-foreground/70 transition whitespace-nowrap">
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

const VALUES = [
  { icon: Sparkles, title: "Craft", titleAr: "الإتقان", desc: "Every line of code and every pixel is a promise to our clients.", descAr: "كل سطر برمجي وكل بكسل هو وعدٌ لعملائنا." },
  { icon: Shield, title: "Integrity", titleAr: "النزاهة", desc: "We say what we do, and we do what we say — audited and documented.", descAr: "نقول ما نفعله، ونفعل ما نقوله — موثّقاً ومُدقّقاً." },
  { icon: Heart, title: "Empathy", titleAr: "التعاطف", desc: "Human-centered design for the people who actually use the software.", descAr: "تصميم يركّز على الإنسان لمن يستخدم البرمجيات فعلاً." },
  { icon: Rocket, title: "Momentum", titleAr: "الزخم", desc: "Small squads, fast iterations, honest metrics.", descAr: "فرق صغيرة، تكرارات سريعة، ومؤشرات صادقة." },
];

function About() {
  const { t, lang } = useI18n();
  return (
    <section id="about" className="scroll-mt-28 relative border-y border-border bg-surface-2/40 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-2">
            <div className="grid place-items-center rounded-3xl bg-white p-8 sm:p-12 ring-1 ring-black/5 shadow-elegant">
              <img
                src="/jag-logo.jpg"
                alt="Jordan Advanced Gate — البوابة المتقدمة الأردنية logo"
                width={1254}
                height={1254}
                className="h-auto w-full max-w-[280px]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("about.leadTitle")}</p>
            <h2 className={`mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>
              {t("brand.name")}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{t("about.lead")}</p>
          </Reveal>
        </div>

        {/* Mission & vision */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {[
            { icon: Target, title: t("about.mission"), body: t("about.missionText") },
            { icon: Compass, title: t("about.vision"), body: t("about.visionText") },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="premium-card p-8 h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-emerald">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Values */}
        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("label.values")}</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="premium-card p-6 h-full">
                    <Icon className="h-6 w-6 text-[var(--emerald-brand)]" />
                    <h4 className="mt-4 font-semibold text-lg">{lang === "ar" ? v.titleAr : v.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{lang === "ar" ? v.descAr : v.desc}</p>
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

function Services() {
  const { t, lang } = useI18n();
  return (
    <section id="services" className="scroll-mt-28 container-x py-24">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("label.services")}</p>
        <h2 className={`mt-3 text-4xl md:text-5xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>{t("services.title")}</h2>
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
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-emerald transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{lang === "ar" ? s.titleAr : s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {lang === "ar" ? s.descAr : s.desc}
                  </p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--emerald-brand)] group-hover:gap-2 transition-all">
                    {t("btn.learnMore")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Outcomes */}
      <div className="mt-14 premium-card p-8 lg:p-12">
        <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("label.outcomes")}</p>
        <h3 className={`mt-3 text-2xl md:text-3xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>{t("outcomes.title")}</h3>
        <ul className="mt-6 grid sm:grid-cols-2 gap-4">
          {OUTCOMES.map((o) => (
            <li key={o.en} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-[var(--emerald-brand)]" />
              <span className="text-foreground/85">{lang === "ar" ? o.ar : o.en}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GovernmentTransactions() {
  const { t, lang } = useI18n();

  return (
    <section id="government-transactions" className="scroll-mt-28 border-y border-border bg-surface-2/60 py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-emerald">
                <Landmark className="h-7 w-7" />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">
                {t("government.eyebrow")}
              </p>
              <h2 className={`mt-3 text-4xl md:text-5xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>
                {t("government.title")}
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                {t("government.intro")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="premium-card p-7 sm:p-9">
              <h3 className="text-xl font-bold">{t("government.includes")}</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {GOVERNMENT_TRANSACTION_SERVICES.map((service) => (
                  <li key={service.en} className="flex items-start gap-3">
                    <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--emerald-brand)]" />
                    <span className="text-sm leading-relaxed text-foreground/85">
                      {lang === "ar" ? service.ar : service.en}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-border pt-6 leading-relaxed text-foreground/85">
                {t("government.commitment")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const { t, lang } = useI18n();
  return (
    <section id="solutions" className="scroll-mt-28 border-y border-border bg-surface-2/60 py-24">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("label.solutions")}</p>
          <h2 className={`mt-3 text-4xl md:text-5xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>{t("solutions.title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("solutions.sub")}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SOLUTIONS.map((g, i) => {
            const Icon = g.icon;
            const items = lang === "ar" ? g.itemsAr : g.items;
            return (
              <Reveal key={g.title} delay={i * 0.1}>
                <div className="premium-card h-full p-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-emerald text-white shadow-emerald">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{lang === "ar" ? g.titleAr : g.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-[var(--emerald-brand)]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { t, lang } = useI18n();
  return (
    <section id="why" className="scroll-mt-28 relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--navy-deep)]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--emerald-brand)]/20 blur-3xl" />

      <div className="container-x relative text-white">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-glow)]">{t("label.why")}</p>
          <h2 className={`mt-3 text-4xl md:text-5xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>{t("why.title")}</h2>
          <p className="mt-4 text-lg text-white/70">{t("why.sub")}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="glass-dark rounded-2xl p-6 h-full hover:bg-white/10 transition-colors">
                  <div className="h-11 w-11 rounded-lg gradient-emerald grid place-items-center shadow-emerald">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-4 font-semibold">{lang === "ar" ? w.titleAr : w.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{lang === "ar" ? w.descAr : w.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const { t, lang } = useI18n();
  return (
    <section id="industries" className="scroll-mt-28 container-x py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("label.industries")}</p>
        <h2 className={`mt-3 text-4xl md:text-5xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>{t("industries.title")}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{t("industries.sub")}</p>
      </div>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {INDUSTRIES.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <Reveal key={ind.name} delay={(i % 8) * 0.03}>
              <div className="group aspect-square rounded-2xl border border-border bg-surface hover:bg-gradient-to-br hover:from-[var(--navy)] hover:to-[var(--emerald-brand)] hover:text-white flex flex-col items-center justify-center gap-2 p-3 text-center transition-all cursor-pointer hover:shadow-emerald hover:-translate-y-1">
                <Icon className="h-6 w-6 text-[var(--navy)] group-hover:text-white transition-colors" />
                <span className="text-xs font-medium">{lang === "ar" ? ind.nameAr : ind.name}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function TechStack() {
  const { t, lang } = useI18n();
  return (
    <section className="border-y border-border bg-surface-2/60 py-20 overflow-hidden">
      <div className="container-x">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("label.stack")}</p>
          <h2 className={`mt-3 text-3xl md:text-4xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>{t("tech.title")}</h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TECHS.map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/80 hover:border-[var(--emerald-brand)] hover:text-[var(--navy)] transition" dir="ltr">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t, lang } = useI18n();
  return (
    <section id="clients" className="scroll-mt-28 container-x py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("label.clients")}</p>
        <h2 className={`mt-3 text-4xl md:text-5xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>{t("clients.title")}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{t("clients.sub")}</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((tm, i) => (
          <Reveal key={tm.name} delay={i * 0.1}>
            <figure className="premium-card p-8 h-full flex flex-col">
              <div className="flex text-[var(--emerald-brand)]">
                {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90">
                &ldquo;{lang === "ar" ? tm.quoteAr : tm.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="h-11 w-11 rounded-full gradient-brand grid place-items-center text-white font-bold text-sm">
                  {tm.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{lang === "ar" ? tm.nameAr : tm.name}</div>
                  <div className="text-xs text-muted-foreground">{lang === "ar" ? tm.roleAr : tm.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-28 border-t border-border bg-surface-2/40 py-24">
      <div className="container-x max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("label.faq")}</p>
        <h2 className={`mt-3 text-4xl md:text-5xl font-bold tracking-tight ${lang === "ar" ? "leading-[1.35]" : ""}`}>{t("faq.title")}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{t("faq.sub")}</p>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={(i % 6) * 0.03}>
              <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start hover:bg-muted transition"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold">{lang === "ar" ? f.qAr : f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-up">
                    {lang === "ar" ? f.aAr : f.a}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="scroll-mt-28 border-t border-border bg-surface-2/40 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-brand)]">{t("label.contact")}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{t("contact.title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-md">{t("contact.sub")}</p>

          <div className="mt-10 space-y-4">
            <a href="mailto:info@jagjo.com" className="flex items-center gap-4 group">
              <span className="h-11 w-11 rounded-lg gradient-brand grid place-items-center text-white shrink-0"><Mail className="h-4 w-4" /></span>
              <span className="text-foreground/85 group-hover:text-[var(--emerald-brand)] transition-colors" dir="ltr">info@jagjo.com</span>
            </a>
            <a href="tel:+962770911991" className="flex items-center gap-4 group">
              <span className="h-11 w-11 rounded-lg gradient-brand grid place-items-center text-white shrink-0"><Phone className="h-4 w-4" /></span>
              <span className="text-foreground/85 group-hover:text-[var(--emerald-brand)] transition-colors" dir="ltr">+962 7 7091 1991</span>
            </a>
            <div className="flex items-center gap-4">
              <span className="h-11 w-11 rounded-lg gradient-brand grid place-items-center text-white shrink-0"><MapPin className="h-4 w-4" /></span>
              <span className="text-foreground/85">Amman, Jordan</span>
            </div>
            <a href="https://www.facebook.com/Jordan.JAG.22/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <span className="h-11 w-11 rounded-lg gradient-brand grid place-items-center text-white shrink-0"><Facebook className="h-4 w-4" /></span>
              <span className="text-foreground/85 group-hover:text-[var(--emerald-brand)] transition-colors">facebook.com/Jordan.JAG.22</span>
            </a>
          </div>
        </div>

        <Reveal>
          <form
            className="premium-card p-7 sm:p-8"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            {sent ? (
              <div className="h-full min-h-[320px] grid place-items-center text-center">
                <div>
                  <div className="mx-auto h-14 w-14 rounded-full gradient-emerald grid place-items-center shadow-emerald">
                    <CheckCircle2 className="h-7 w-7 text-white" />
                  </div>
                  <p className="mt-5 text-lg font-semibold">{t("contact.sent")}</p>
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t("contact.name")} type="text" required />
                  <Field label={t("contact.email")} type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t("contact.company")} type="text" />
                  <Field label={t("contact.phone")} type="tel" />
                </div>
                <label className="block">
                  <span className="text-sm font-medium text-foreground/80">{t("contact.message")}</span>
                  <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--emerald-brand)]" />
                </label>
                <Button type="submit" size="lg" className="sheen gradient-emerald text-white shadow-emerald hover:scale-[1.02] transition-transform w-full">
                  {t("contact.submit")} <Send className="ms-2 h-4 w-4 rtl:-scale-x-100" />
                </Button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, type, required }: { label: string; type: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      <input
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--emerald-brand)]"
      />
    </label>
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
            {t("cta.eyebrow")}
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">{t("cta.title")}</h2>
          <p className="mt-4 text-lg text-white/75 max-w-xl">{t("cta.sub")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="sheen gradient-emerald text-white shadow-emerald hover:scale-[1.03] transition-transform h-12 px-6">
              <a href="#contact">{t("cta.button")} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <a href="#clients">{t("btn.seeWork")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
