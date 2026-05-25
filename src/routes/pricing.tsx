import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Minus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Heisen Labs" },
      { name: "description", content: "Fixed-fee engagements for web systems, automation, and AI partnerships. Plain words, honest numbers." },
      { property: "og:title", content: "Pricing — Heisen Labs" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    price: "$4,500",
    cadence: "fixed fee",
    desc: "A focused web system for founders and small teams.",
    features: ["Up to 5 custom pages", "Performance + SEO baseline", "CMS configured", "Analytics + event tracking", "Launch in ~3 weeks", "14 days post-launch support"],
    cta: "Start small",
  },
  {
    name: "Systems",
    price: "$12,000+",
    cadence: "fixed fee",
    desc: "Site plus the first automation or AI integration wired in end-to-end.",
    features: ["Everything in Starter", "One automation or AI integration", "Observability + alerting", "Internal docs + handoff", "Custom design system", "30 days post-launch support"],
    featured: true,
    cta: "Most popular",
  },
  {
    name: "Studio",
    price: "From $6k/mo",
    cadence: "retainer",
    desc: "An ongoing partnership for teams shipping AI and automation continuously.",
    features: ["Roadmap of systems, not one-offs", "Embedded senior team", "Custom agents and pipelines", "SLAs and on-call", "Quarterly business reviews", "Pause or stop anytime"],
    cta: "Talk to us",
  },
];

const matrix = [
  { row: "Custom design", v: [true, true, true] },
  { row: "CMS configured", v: [true, true, true] },
  { row: "Perf + SEO baseline", v: [true, true, true] },
  { row: "Automation workflow", v: [false, true, true] },
  { row: "AI integration", v: [false, true, true] },
  { row: "Observability & alerts", v: [false, true, true] },
  { row: "Custom AI agent", v: [false, false, true] },
  { row: "Data pipeline", v: [false, false, true] },
  { row: "On-call & SLAs", v: [false, false, true] },
  { row: "Quarterly review", v: [false, false, true] },
];

const faqs = [
  { q: "Are these prices really fixed?", a: "Yes. Starter and Systems are fixed-fee with a written scope. Studio is a monthly retainer with a published rate card for anything outside scope." },
  { q: "What if my project doesn't fit a tier?", a: "Most don't. We use these as a starting frame, then write a custom proposal after a free 30-minute call." },
  { q: "Do you offer payment plans?", a: "Yes. Most projects pay 40% to start, 40% at midpoint, and 20% on launch. Studio retainers are billed monthly." },
  { q: "What's not included?", a: "Third-party costs (model APIs, hosting, SaaS) are passed through at cost. We'll estimate them upfront so there are no surprises." },
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Fixed scope. Honest numbers."
        subtitle="Every engagement is scoped before we start, so you always know what you're paying for and what you'll get back."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex h-full flex-col rounded-3xl border p-8 transition ${
                t.featured
                  ? "border-primary/40 bg-card shadow-glow"
                  : "border-border/50 bg-card/60 hover-lift hover:border-strong"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground shadow-glow">
                  Most popular
                </span>
              )}
              <h2 className="text-serif text-3xl">{t.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-serif text-5xl text-aurora">{t.price}</span>
                <span className="text-xs text-muted-foreground">{t.cadence}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book-a-call"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium ${
                  t.featured
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "border border-border/60 text-foreground hover:bg-accent"
                }`}
              >
                {t.cta} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/40">
        <div className="mx-auto max-w-5xl px-4 py-20 lg:px-8">
          <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Compare</p>
          <h2 className="mt-3 fluid-h2 text-serif">What's in each tier.</h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border/50">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-surface/80 text-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <th className="px-5 py-4 text-left font-normal">Feature</th>
                  {tiers.map((t) => (
                    <th key={t.name} className="px-5 py-4 text-center font-normal">{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={row.row} className={i % 2 ? "bg-card/40" : "bg-card/20"}>
                    <td className="px-5 py-3 text-foreground/90">{row.row}</td>
                    {row.v.map((v, idx) => (
                      <td key={idx} className="px-5 py-3 text-center">
                        {v ? <Check className="mx-auto h-4 w-4 text-primary" /> : <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 lg:px-8">
          <h2 className="fluid-h2 text-serif">Pricing FAQ</h2>
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q-${i}`} className="rounded-2xl border border-border/50 bg-card/60 px-5">
                <AccordionTrigger className="text-left text-base text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
