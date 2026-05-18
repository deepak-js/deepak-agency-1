import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Heisen Labs" },
      { name: "description", content: "Selected systems from Heisen Labs — websites, automations, and AI integrations for growing teams." },
      { property: "og:title", content: "Portfolio — Heisen Labs" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  { name: "Northwind Ops", tag: "Automation · Logistics", hue: "from-slate-800/70 to-blue-900/40" },
  { name: "Atlas Copilot", tag: "AI agent · Internal tools", hue: "from-indigo-900/60 to-violet-900/40" },
  { name: "Calder & Bloom", tag: "Web system · Atelier", hue: "from-rose-900/60 to-amber-900/40" },
  { name: "Harbor Insights", tag: "Data pipeline · F&B", hue: "from-amber-900/60 to-orange-900/40" },
  { name: "Northbound Intake", tag: "Automation · Wellness", hue: "from-teal-900/60 to-sky-900/40" },
  { name: "Loomwork Search", tag: "AI integration · SaaS", hue: "from-emerald-900/60 to-stone-800/40" },
];

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected systems."
        subtitle="A handful of recent builds across automation, AI, and web. Names changed where the work is still under wraps."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-3xl border border-border/50 bg-card/40">
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.hue}`} />
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-serif text-xl">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.tag}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/book-a-call" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
