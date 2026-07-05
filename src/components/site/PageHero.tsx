import type { ReactNode } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  const { lang } = useI18n();
  return (
    <section className="relative overflow-hidden gradient-hero text-white -mt-24 pt-36 sm:pt-40 pb-16 sm:pb-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[var(--emerald-brand)]/20 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-glow)]">{eyebrow}</p>
          <h1
            className={`mt-3 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-4xl ${
              lang === "ar" ? "leading-[1.35] pb-1" : "leading-[1.05]"
            }`}
          >
            {title}
          </h1>
          {sub ? <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/75">{sub}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
