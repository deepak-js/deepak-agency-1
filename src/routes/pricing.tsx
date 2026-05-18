import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Heisen Labs" },
      { name: "description", content: "Fixed-fee engagements for web systems, automation, and AI partnerships." },
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
    price: "From $4,500",
    desc: "A focused web system for founders and small teams.",
    features: ["Up to 5 pages, custom designed", "Performance + SEO baseline", "CMS configured", "Analytics + tracking", "Launch in ~3 weeks"],
  },
  {
    name: "Systems",
    price: "From $12,000",
    desc: "Site plus the first automation or AI integration wired in.",
    features: ["Web system included", "One automation or AI integration", "Internal docs + handoff", "Observability + alerting", "30 days of post-launch support"],
    featured: true,
  },
  {
    name: "Studio",
    price: "Let's talk",
    desc: "An ongoing partnership for teams shipping AI and automation continuously.",
    features: ["Roadmap of systems, not one-offs", "Embedded senior team", "Custom agents and pipelines", "SLAs and on-call", "Quarterly business reviews"],
  },
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Fixed scope. Honest numbers."
        subtitle="Every engagement is scoped before we start, so you always know what you're paying for and what you'll get back."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl border p-7 ${
                t.featured
                  ? "border-primary/40 bg-card shadow-glow"
                  : "border-border/50 bg-card/60"
              }`}
            >
              {t.featured && (
                <span className="mb-3 inline-block rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
                  Most popular
                </span>
              )}
              <h2 className="text-serif text-3xl">{t.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <p className="mt-6 text-serif text-4xl">{t.price}</p>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/book-a-call"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm ${
                  t.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/60 text-foreground"
                }`}
              >
                Get started <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
