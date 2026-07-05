import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jordan Advanced Gate" },
      { name: "description", content: "Reach the JAG team. Sales, support and technical inquiries — we respond within one business day." },
      { property: "og:title", content: "Contact — Jordan Advanced Gate" },
      { property: "og:description", content: "Talk to JAG about your enterprise IT project." },
      { property: "og:url", content: "https://jagjo.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://jagjo.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <section className="relative overflow-hidden gradient-hero text-white -mt-24 pt-40 pb-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-x relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[var(--emerald-glow)]">Contact</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">{t("contact.title")}</h1>
            <p className="mt-4 max-w-xl text-lg text-white/75">{t("contact.sub")}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <Reveal>
            <form
              className="premium-card p-8 md:p-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-12 w-12 mx-auto text-[var(--emerald-brand)]" />
                  <p className="mt-4 text-lg font-semibold">{t("contact.sent")}</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={t("contact.name")} name="name" required />
                    <Field label={t("contact.email")} name="email" type="email" required />
                    <Field label={t("contact.company")} name="company" />
                    <Field label={t("contact.phone")} name="phone" type="tel" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">{t("contact.message")}</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--emerald-brand)]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="gradient-brand text-white shadow-emerald">
                    {t("contact.submit")} <Send className="ms-2 h-4 w-4" />
                  </Button>
                </>
              )}
            </form>
          </Reveal>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: MapPin, label: "Head office", value: "King Hussein Business Park, Amman, Jordan" },
            { icon: Mail, label: "Email", value: "hello@jag.jo" },
            { icon: Phone, label: "Phone", value: "+962 6 500 0000" },
            { icon: Clock, label: "Working hours", value: "Sun – Thu · 9:00 – 18:00 (GMT+3)" },
            { icon: MessageCircle, label: "WhatsApp", value: "+962 7 9000 0000" },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="premium-card p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg gradient-brand grid place-items-center shrink-0">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="mt-1 font-medium">{c.value}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl overflow-hidden border border-border shadow-elegant aspect-[16/8]">
          <iframe
            title="JAG office location"
            src="https://www.google.com/maps?q=Amman+Jordan+King+Hussein+Business+Park&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--emerald-brand)]"
      />
    </div>
  );
}
