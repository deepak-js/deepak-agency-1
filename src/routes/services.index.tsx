import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight, Sparkles, Search, Workflow, Bot, Database, LayoutTemplate } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Heisen Labs" },
      { name: "description", content: "AI integrations, automation, web systems, SEO, data pipelines, and AI agents." },
      { property: "og:title", content: "Services — Heisen Labs" },
      { property: "og:description", content: "The systems we build for growing businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

const services = [
  { icon: Sparkles, title: "AI Integrations", desc: "LLMs and AI APIs plugged into the tools you already use.", to: "/services/ai-integrations" },
  { icon: Workflow, title: "Automation", desc: "Workflows that quietly run the work while you sleep.", to: "/services/automation" },
  { icon: LayoutTemplate, title: "Web Systems", desc: "Fast, accessible websites built to rank and convert.", to: "/services/web-systems" },
  { icon: Search, title: "SEO", desc: "Technical and content SEO grounded in real intent.", to: "/services/seo" },
  { icon: Database, title: "Data Pipelines", desc: "Ingest, transform, and report on one source of truth.", to: "/services/data-pipelines" },
  { icon: Bot, title: "AI Agents", desc: "Internal copilots and assistants tuned to your data.", to: "/services/ai-agents" },
];

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Systems, not just deliverables."
        subtitle="We design and build the moving parts behind growing businesses — websites, workflows, and AI that actually pull their weight."
      />
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
