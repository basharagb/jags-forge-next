import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Briefcase, ArrowRight, Heart, Sparkles, Award, Users } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Jordan Advanced Gate" },
      { name: "description", content: "Build the future of enterprise technology with JAG. Open roles in engineering, AI, design and consulting." },
      { property: "og:title", content: "Careers — JAG" },
      { property: "og:url", content: "https://jagjo.com/careers" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/careers" }],
  }),
  component: CareersPage,
});

const ROLES = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Amman · Hybrid" },
  { title: "AI Research Engineer (LLM)", team: "AI Practice", location: "Amman / Remote" },
  { title: "Cloud Architect — Azure", team: "Cloud", location: "Riyadh · Onsite" },
  { title: "Cybersecurity Consultant", team: "Security", location: "Dubai / Amman" },
  { title: "Product Designer", team: "Design", location: "Amman · Hybrid" },
  { title: "Delivery Manager", team: "PMO", location: "Doha · Onsite" },
  { title: "Data Engineer", team: "Data & Analytics", location: "Amman · Hybrid" },
  { title: "DevOps Engineer", team: "Platform", location: "Remote (MENA)" },
];

const BENEFITS = [
  { icon: Heart, title: "Health & wellbeing", desc: "Comprehensive medical, dental and mental-health coverage." },
  { icon: Sparkles, title: "Learning budget", desc: "Annual budget for courses, conferences and certifications." },
  { icon: Award, title: "Ownership", desc: "Performance bonus and long-term participation for senior roles." },
  { icon: Users, title: "Flexible work", desc: "Hybrid by default. Remote-friendly for most engineering roles." },
];

function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title={<>Build the future of <span className="text-gradient">enterprise technology</span></>}
        sub="Join a team of engineers, designers and strategists shipping software that runs critical parts of the region."
      />

      <section className="container-x py-20">
        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="premium-card p-6">
                  <Icon className="h-5 w-5 text-[var(--emerald-brand)]" />
                  <h3 className="mt-4 font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">Open roles</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-border border border-border rounded-2xl overflow-hidden bg-surface">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.03}>
              <Link to="/contact" className="flex items-center justify-between gap-6 px-6 py-5 hover:bg-muted transition group">
                <div>
                  <div className="text-lg font-semibold">{r.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground flex items-center gap-4">
                    <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{r.team}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{r.location}</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-[var(--emerald-brand)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
