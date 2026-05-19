import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

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

type Cat = "AI" | "Automation" | "Web" | "Data";

interface Project {
  name: string;
  client: string;
  cat: Cat;
  year: string;
  sector: string;
  metric: string;
  metricLabel: string;
  hue: string;
  problem: string;
  approach: string;
  result: string;
  tech: string[];
}

const projects: Project[] = [
  { name: "Northwind Ops", client: "Northwind Labs", cat: "Automation", year: "2025", sector: "Logistics", metric: "−72%", metricLabel: "manual ops time", hue: "from-slate-700 via-blue-900 to-indigo-950", problem: "Four spreadsheets and a daily standup kept dispatch alive — barely.", approach: "Event-driven workflows wired to the carrier APIs, with a thin internal panel for exceptions only.", result: "Operations team got a week back per month. Zero downtime in six months of running.", tech: ["Temporal", "Postgres", "Sentry", "Lovable Cloud"] },
  { name: "Atlas Copilot", client: "Atlas Audio", cat: "AI", year: "2025", sector: "SaaS", metric: "+38%", metricLabel: "qualified leads", hue: "from-indigo-800 via-violet-900 to-purple-950", problem: "Sales reps spent half their week digging through docs to answer prospects.", approach: "RAG copilot scoped to product docs + CRM, with cited sources and an answer-or-escalate guardrail.", result: "Reply latency down 4×. The team reaches for it before Slack.", tech: ["OpenAI", "pgvector", "TypeScript", "HubSpot"] },
  { name: "Calder & Bloom", client: "Calder & Bloom", cat: "Web", year: "2024", sector: "Atelier", metric: "4.2s → 0.9s", metricLabel: "LCP improvement", hue: "from-rose-800 via-amber-900 to-orange-950", problem: "A beautiful but slow site that wasn't ranking and didn't convert.", approach: "Full rebuild on a static-first stack with editorial CMS and an automated SEO pipeline.", result: "Organic traffic tripled in two quarters. Site still runs itself.", tech: ["TanStack Start", "Tailwind", "Sanity", "Vercel"] },
  { name: "Harbor Insights", client: "Harbor Insights", cat: "Data", year: "2025", sector: "F&B", metric: "11 → 1", metricLabel: "dashboards consolidated", hue: "from-amber-800 via-orange-900 to-red-950", problem: "Eleven dashboards, three definitions of revenue, no one agreeing on the number.", approach: "Single warehouse with modelled marts, one canonical metric layer, and alerting on drift.", result: "One source of truth in production. Weekly reviews now take 20 minutes.", tech: ["BigQuery", "dbt", "Metabase", "Slack"] },
  { name: "Northbound Intake", client: "Northbound", cat: "Automation", year: "2024", sector: "Wellness", metric: "+62%", metricLabel: "intake-to-booking", hue: "from-teal-800 via-cyan-900 to-sky-950", problem: "New patient intake was a 14-day email tag battle.", approach: "Intake automation routing forms to the right clinician, with reminders and pre-call prep packets.", result: "Time-to-first-booking dropped from 14 days to 18 hours.", tech: ["Lovable Cloud", "Twilio", "Calendly", "Resend"] },
  { name: "Loomwork Search", client: "Loomwork", cat: "AI", year: "2025", sector: "SaaS", metric: "0.4s", metricLabel: "p95 search latency", hue: "from-emerald-800 via-teal-900 to-stone-950", problem: "Search inside their product was keyword-only and routinely missed intent.", approach: "Hybrid lexical + vector search with re-ranking, scoped to per-workspace data.", result: "Search satisfaction up 41%. p95 latency under half a second.", tech: ["Typesense", "Cohere", "Postgres", "Rust"] },
  { name: "Ferro Studio", client: "Ferro Labs", cat: "Web", year: "2024", sector: "Industrial design", metric: "+220%", metricLabel: "lead form completions", hue: "from-stone-800 via-zinc-900 to-neutral-950", problem: "A portfolio site with no path from gallery to enquiry.", approach: "Restructured IA around projects-as-systems, with embedded specs and a friction-free intake.", result: "Lead form completions more than tripled within a quarter.", tech: ["TanStack Start", "Cloudflare", "Resend"] },
  { name: "Polaris Reports", client: "Polaris OS", cat: "Data", year: "2025", sector: "Fintech", metric: "−9 days", metricLabel: "month-end close", hue: "from-blue-800 via-indigo-900 to-slate-950", problem: "Month-end close was a calendar nightmare across four teams.", approach: "Pipelines aggregating ledger + ops data into a close-ready model, with reconciliation checks.", result: "Close runs in days, not weeks. Audit trail is automatic.", tech: ["Snowflake", "dbt", "Looker", "Airbyte"] },
  { name: "Verdant Agent", client: "Verdant Co", cat: "AI", year: "2025", sector: "Climate", metric: "1,840h", metricLabel: "hours saved / yr", hue: "from-green-800 via-emerald-900 to-teal-950", problem: "Carbon accounting reports took weeks of analyst time per disclosure cycle.", approach: "Agent that drafts and cites disclosure sections from source data, with human review.", result: "Two analysts now do the work of six, with better citations.", tech: ["Anthropic", "Postgres", "TypeScript"] },
];

const cats: Array<Cat | "All"> = ["All", "AI", "Automation", "Web", "Data"];

function PortfolioPage() {
  const [filter, setFilter] = useState<Cat | "All">("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.cat === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected systems."
        subtitle="A handful of recent builds across automation, AI, web, and data. Names changed where the work is still under wraps."
      />
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/60 text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={i * 40}>
              <button
                onClick={() => setOpen(p)}
                className="group block w-full overflow-hidden rounded-3xl border border-border/50 bg-card-grad text-left hover-lift hover:border-strong"
              >
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.hue}`}>
                  <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">{p.cat} · {p.year}</span>
                    <div>
                      <p className="text-serif text-4xl text-foreground">{p.metric}</p>
                      <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70">{p.metricLabel}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-serif text-xl text-foreground">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.client} · {p.sector}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/book-a-call" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground shadow-glow">
            Start your system <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
          onClick={() => setOpen(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border/60 bg-card shadow-elevated sm:rounded-3xl"
          >
            <div className={`relative aspect-[16/7] bg-gradient-to-br ${open.hue}`}>
              <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-5 left-6 right-6">
                <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">{open.cat} · {open.sector} · {open.year}</p>
                <h3 className="mt-2 text-serif text-3xl text-foreground sm:text-4xl">{open.name}</h3>
              </div>
            </div>
            <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2">
              <Section label="Problem" body={open.problem} />
              <Section label="Approach" body={open.approach} />
              <Section label="Result" body={open.result} />
              <div>
                <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {open.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border/60 bg-surface px-3 py-1 text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-border/40 bg-surface/40 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-serif text-3xl text-aurora">{open.metric}</p>
                  <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{open.metricLabel}</p>
                </div>
                <Link to="/book-a-call" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground">
                  Build something similar <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Section({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}
