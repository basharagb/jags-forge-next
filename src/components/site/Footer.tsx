import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--navy-deep)] text-white">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-b" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--emerald-brand)]/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--emerald-glow)]/10 blur-3xl" />

      <div className="container-x relative py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="dark" />
            <p className="mt-5 text-sm text-white/70 max-w-sm leading-relaxed">
              {t("footer.newsletter")}
            </p>
            <form className="mt-4 flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder={t("footer.email")}
                className="flex-1 rounded-lg bg-white/10 border border-white/15 px-3 py-2.5 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--emerald-glow)]"
              />
              <button className="rounded-lg gradient-emerald px-4 py-2.5 text-sm font-semibold text-white shadow-emerald hover:opacity-95 transition">
                {t("footer.subscribe")}
              </button>
            </form>

            <div className="mt-8 flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <FooterCol
              title={t("footer.company")}
              links={[
                ["About", "/about"],
                ["Careers", "/careers"],
                ["Partners", "/partners"],
                ["Clients", "/clients"],
              ]}
            />
            <FooterCol
              title={t("footer.services")}
              links={[
                ["Software Development", "/services"],
                ["AI & Automation", "/services"],
                ["Cloud & DevOps", "/services"],
                ["Cybersecurity", "/services"],
              ]}
            />
            <FooterCol
              title={t("footer.resources")}
              links={[
                ["Insights", "/blog"],
                ["Case Studies", "/case-studies"],
                ["Portfolio", "/portfolio"],
                ["FAQ", "/faq"],
              ]}
            />
            <FooterCol
              title={t("footer.legal")}
              links={[
                ["Privacy Policy", "/privacy"],
                ["Terms of Service", "/terms"],
                ["Contact", "/contact"],
              ]}
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 grid gap-6 md:grid-cols-3 text-sm text-white/70">
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 mt-0.5 text-[var(--emerald-glow)]" />
            <span>Amman, Jordan · King Hussein Business Park</span>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-4 w-4 mt-0.5 text-[var(--emerald-glow)]" />
            <a href="mailto:hello@jag.jo" className="hover:text-white">hello@jag.jo</a>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-4 w-4 mt-0.5 text-[var(--emerald-glow)]" />
            <a href="tel:+96265000000" className="hover:text-white">+962 6 500 0000</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} Jordan Advanced Gate. {t("footer.rights")}</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald-glow)] animate-pulse" />
            Trusted engineering partner
            <ArrowRight className="h-3 w-3 rtl:rotate-180" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.18em] text-white/50 font-semibold">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <li key={href + label}>
            <Link to={href} className="text-white/80 hover:text-white transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
