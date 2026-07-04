import logo from "@/assets/jag-logo.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative h-10 w-10 shrink-0 rounded-xl overflow-hidden bg-white ring-1 ring-black/5 shadow-card">
        <img src={logo.url} alt="Jordan Advanced Gate" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`text-[15px] font-bold tracking-tight ${
            variant === "light" ? "text-foreground" : "text-white"
          }`}
        >
          Jordan Advanced Gate
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.18em] ${
            variant === "light" ? "text-muted-foreground" : "text-white/60"
          }`}
        >
          IT Solutions & Digital Transformation
        </span>
      </div>
    </Link>
  );
}
