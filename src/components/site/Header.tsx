import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/about", k: "nav.about" },
  { to: "/services", k: "nav.services" },
  { to: "/solutions", k: "nav.solutions" },
  { to: "/industries", k: "nav.industries" },
  { to: "/products", k: "nav.products" },
  { to: "/portfolio", k: "nav.portfolio" },
  { to: "/blog", k: "nav.blog" },
  { to: "/careers", k: "nav.careers" },
] as const;

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Every page renders a dark gradient hero under the fixed header, so at the top
  // the header sits on a dark background (white text); once scrolled it becomes a
  // light glass bar (dark text).
  const onDark = !scrolled;
  const navLink = onDark
    ? "text-white/85 hover:text-white hover:bg-white/10"
    : "text-foreground/75 hover:text-foreground hover:bg-muted";
  const iconBtn = onDark
    ? "text-white/85 hover:text-white hover:bg-white/10"
    : "text-foreground/75 hover:text-foreground hover:bg-muted";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between gap-6 rounded-2xl px-4 lg:px-6 py-2.5 transition-all ${
            scrolled
              ? "glass shadow-card border border-border/60"
              : "bg-transparent border border-transparent"
          }`}
        >
          <Logo variant={onDark ? "dark" : "light"} />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${navLink}`}
                activeProps={{ className: onDark ? "text-white bg-white/15" : "text-foreground bg-muted" }}
              >
                {t(n.k)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${iconBtn}`}
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
              {lang === "en" ? "AR" : "EN"}
            </button>
            <Button asChild size="sm" className="sheen hidden md:inline-flex gradient-emerald text-white hover:opacity-95 hover:scale-[1.04] transition-transform shadow-emerald">
              <Link to="/contact">
                {t("nav.cta")} <ArrowRight className="ms-1 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${iconBtn}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-elegant animate-fade-up">
            <div className="flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted"
                >
                  {t(n.k)}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-3 py-3 rounded-lg text-sm font-semibold text-white gradient-brand text-center"
              >
                {t("nav.cta")}
              </Link>
              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="mt-2 px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted text-start"
              >
                <Globe className="inline h-4 w-4 me-2" />
                {lang === "en" ? "العربية" : "English"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
