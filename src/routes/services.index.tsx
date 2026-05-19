import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight, Check, Sparkles, Search, Workflow, Bot, Database, LayoutTemplate } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Heisen Labs" },
      { name: "description", content: "AI integrations, automation, web systems, SEO, data pipelines, and AI agents — built end-to-end." },
      { property: "og:title", content: "Services — Heisen Labs" },
      { property: "og:description", content: "The systems we build for growing businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

const services = [
  { icon: Sparkles, title: "AI Integrations", desc: "LLMs and AI APIs plugged into the tools you already use.", scope: ["Model selection & strategy", "Secure API wiring", "Guardrails & cost controls"], to: "/services/ai-integrations" },
  { icon: Workflow, title: "Automation", desc: "Workflows that quietly run the work while you sleep.", scope: ["Event-driven workflows", "CRM & ops integrations", "Alerting & observability"], to: "/services/automation" },
  { icon: LayoutTemplate, title: "Web Systems", desc: "Fast, accessible websites built to rank and convert.", scope: ["Design & build", "CMS configuration", "Perf & SEO baseline"], to: "/services/web-systems" },
  { icon: Search, title: "SEO", desc: "Technical and content SEO grounded in real intent.", scope: ["Technical audit", "Content architecture", "Reporting cadence"], to: "/services/seo" },
  { icon: Database, title: "Data Pipelines", desc: "Ingest, transform, and report on one source of truth.", scope: ["Source connectors", "Warehouse modelling", "Dashboards & alerts"], to: "/services/data-pipelines" },
  { icon: Bot, title: "AI Agents", desc: "Internal copilots and assistants tuned to your data.", scope: ["RAG over your docs", "Tool-using agents", "Evaluation harness"], to: "/services/ai-agents" },
];

const tiers = [
  { name: "Starter", price: "From $4.5k", best: "Small teams shipping a focused web system." },
  { name: "Systems", price: "From $12k", best: "Site plus the first automation or AI integration.", featured: true },
  { name: "Studio", price: "Let's talk", best: "Ongoing partnership for teams shipping continuously." },
];

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Systems, not just deliverables."
        subtitle="We design and build the moving parts behind growing businesses — websites, workflows, and AI that pull their weight."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, scope, to }, i) => (
            <Reveal key={title} delay={i * 60}>
              <Link
                to={to}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border/50 bg-card-grad p-7 transition hover:border-strong hover:bg-card shine"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-card">
                    <Icon className="h-5 w-5 text-amber-accent" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <h2 className="mt-7 text-serif text-2xl">{title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {scope.map((s) => (
                    <li key={s} className="flex gap-2 text-xs text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Engagements</p>
              <h2 className="mt-3 fluid-h2 text-serif">Three ways to work together.</h2>
            </div>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground">
              Full pricing <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-3xl border p-7 ${t.featured ? "border-primary/40 bg-card shadow-glow" : "border-border/50 bg-card/60"}`}
              >
                {t.featured && (
                  <span className="mb-3 inline-block rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">Most popular</span>
                )}
                <h3 className="text-serif text-2xl">{t.name}</h3>
                <p className="mt-2 text-serif text-3xl text-aurora">{t.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
