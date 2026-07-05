import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

// Square brand mark, served locally from /public so it works on any host
// (no Lovable CDN dependency). Cropped to just the JAG monogram for clarity.
const MARK = "/jag-mark.png";

export function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "md" | "lg";
}) {
  const { t } = useI18n();
  const tile = size === "lg" ? "h-14 w-14" : "h-12 w-12";
  const name = size === "lg" ? "text-lg md:text-xl" : "text-[15px] sm:text-[17px]";
  return (
    <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group" aria-label="Jordan Advanced Gate — Home">
      <div
        className={`relative ${tile} shrink-0 rounded-xl overflow-hidden bg-white ring-1 ring-black/5 shadow-card grid place-items-center transition-transform group-hover:scale-[1.04]`}
      >
        <img
          src={MARK}
          alt="Jordan Advanced Gate logo"
          width={512}
          height={512}
          className="h-full w-full object-contain p-1"
        />
      </div>
      <div className="flex flex-col leading-tight min-w-0">
        <span
          className={`${name} font-bold tracking-tight whitespace-nowrap ${
            variant === "light" ? "text-foreground" : "text-white"
          }`}
        >
          {t("brand.name")}
        </span>
        <span
          className={`hidden sm:block text-[10px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap ${
            variant === "light" ? "text-[var(--emerald-brand)]" : "text-[var(--emerald-glow)]"
          }`}
        >
          {t("brand.tagline")}
        </span>
      </div>
    </Link>
  );
}
