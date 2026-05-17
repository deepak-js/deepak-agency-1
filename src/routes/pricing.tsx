import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — HeisenLabs" },
      { name: "description", content: "Transparent, fixed-fee pricing for websites, SEO, and ongoing care." },
      { property: "og:title", content: "Pricing — HeisenLabs" },
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
    desc: "A focused launch site for small teams and founders.",
    features: ["Up to 5 pages", "Custom design", "Mobile-perfect", "Basic SEO", "Launch in ~3 weeks"],
  },
  {
    name: "Studio",
    price: "From $9,500",
    desc: "Our most popular package — full site, full polish.",
    features: ["Up to 12 pages", "Bespoke art direction", "CMS configured", "Advanced SEO", "Analytics & tracking", "Launch in ~6 weeks"],
    featured: true,
  },
  {
    name: "Bespoke",
    price: "Let's talk",
    desc: "E-commerce, custom apps, and multi-region launches.",
    features: ["Unlimited pages", "Custom integrations", "Dedicated team", "Migration support", "Ongoing partnership"],
  },
];

function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Honest pricing. No surprises." subtitle="Fixed-fee projects, scoped before we start. You'll always know what you're paying for." />
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
