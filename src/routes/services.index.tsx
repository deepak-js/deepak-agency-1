import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight, Sparkles, Search, Wrench, Zap, ShoppingCart, CalendarClock } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — HeisenLabs" },
      { name: "description", content: "Web design, SEO, hosting, migration, e-commerce, and scheduling. Pick what you need." },
      { property: "og:title", content: "Services — HeisenLabs" },
      { property: "og:description", content: "Everything we offer, in one place." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

const services = [
  { icon: Sparkles, title: "Website Design", desc: "Bespoke designs built from scratch — never templates.", to: "/services/web-design" },
  { icon: Search, title: "SEO", desc: "Technical and on-page SEO so the right people find you.", to: "/services/seo" },
  { icon: Wrench, title: "Hosting & Maintenance", desc: "Monthly care plans, backups, updates, and on-call help.", to: "/services/hosting" },
  { icon: Zap, title: "Website Migration", desc: "Move your existing site to a faster, friendlier home.", to: "/services/migration" },
  { icon: ShoppingCart, title: "E-commerce", desc: "Online stores that load fast and convert visitors.", to: "/services/ecommerce" },
  { icon: CalendarClock, title: "Scheduling", desc: "Booking and calendars woven into your website.", to: "/services/scheduling" },
];

function ServicesIndex() {
  return (
    <>
      <PageHero eyebrow="Services" title="Pick what you need. We'll handle the rest." />
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, to }) => (
            <Link
              key={title}
              to={to}
              className="group relative rounded-3xl border border-border/50 bg-card/60 p-6 transition hover:bg-card"
            >
              <Icon className="h-6 w-6 text-primary" />
              <h2 className="mt-6 text-serif text-2xl">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
