import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, Sparkles, Search, Workflow, Bot, Database, LayoutTemplate,
  Globe, Moon, Cpu, TrendingUp, Zap, ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { MetricsBand } from "@/components/site/MetricsBand";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heisen Labs — AI & automation studio" },
      { name: "description", content: "Boutique AI and automation studio. Websites that rank, workflows that run overnight, AI integrations that actually work." },
      { property: "og:title", content: "Heisen Labs — AI & automation studio" },
      { property: "og:description", content: "The systems behind business growth." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const pillars = [
  { icon: Globe, title: "Websites that rank", desc: "Fast, accessible, search-friendly sites engineered for growth — not brochures dressed up as products." },
  { icon: Moon, title: "Workflows that run overnight", desc: "Automations that quietly take the busywork off your plate, every day, without anyone clicking a button." },
  { icon: Cpu, title: "AI that actually works", desc: "Models and agents wired into your real tools, scoped to real jobs, with guardrails that hold up in production." },
];

const featured = [
  { client: "Northwind Labs", tag: "Operations · Logistics", metric: "−72%", metricLabel: "manual ops time", desc: "Replaced four spreadsheets and a daily standup with one quiet workflow." },
  { client: "Atlas Audio", tag: "Internal AI · SaaS", metric: "+38%", metricLabel: "qualified leads", desc: "Built a docs-aware copilot the team reaches for before Slack." },
  { client: "Calder & Bloom", tag: "Web System · Atelier", metric: "4.2s → 0.9s", metricLabel: "LCP improvement", desc: "Rebuilt the site, the pipeline, and the ranking from the foundations up." },
];

const services = [
  { icon: Sparkles, title: "AI Integrations", desc: "Models wired into your stack.", to: "/services/ai-integrations" },
  { icon: Workflow, title: "Automation", desc: "Workflows that run themselves.", to: "/services/automation" },
  { icon: LayoutTemplate, title: "Web Systems", desc: "Sites built to rank and convert.", to: "/services/web-systems" },
  { icon: Search, title: "SEO", desc: "Grounded in real search intent.", to: "/services/seo" },
  { icon: Database, title: "Data Pipelines", desc: "One source of truth, finally.", to: "/services/data-pipelines" },
  { icon: Bot, title: "AI Agents", desc: "Copilots tuned to your data.", to: "/services/ai-agents" },
];

const trustChips = [
  { icon: ShieldCheck, label: "SOC 2 aware" },
  { icon: Zap, label: "Production-grade" },
  { icon: TrendingUp, label: "Outcome-priced" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative mx-auto max-w-5xl px-4 py-28 text-center lg:px-8 lg:py-36">
          <div data-cursor="view" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs animate-fade-in-up">
            <span className="inline-flex h-2 w-2 rounded-full bg-status animate-pulse" />
            <span className="text-muted-foreground">Now booking — Q3 systems · 2 slots open</span>
          </div>

          <h1 className="mt-7 fluid-display text-serif text-gradient animate-fade-in-up" style={{ animationDelay: "60ms" }}>
            The systems behind <em className="text-aurora not-italic">business growth.</em>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            Heisen Labs is a boutique AI and automation studio. We build websites that rank,
            workflows that run overnight, and AI integrations that actually work.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "180ms" }}>
            <Link to="/book-a-call" className="shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-95">
              Book a free call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-6 py-3.5 text-sm text-foreground transition hover:bg-card">
              See the work
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            {trustChips.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-amber-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* PILLARS */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What we build</p>
            <h2 className="mt-3 fluid-h2 text-serif">
              Three things, <em className="text-muted-foreground">done deeply.</em>
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border/50 bg-card-grad p-8 hover-lift hover:border-strong shine">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-card">
                    <Icon className="h-5 w-5 text-amber-accent" />
                  </div>
                  <h3 className="mt-8 text-serif text-3xl text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SYSTEMS */}
      <section className="border-t border-border/40 bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured systems</p>
              <h2 className="mt-3 fluid-h2 text-serif">
                Built quietly. <em className="text-muted-foreground">Measured loudly.</em>
              </h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground">
              All work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {featured.map((f, i) => (
              <Reveal key={f.client} delay={i * 80}>
                <Link
                  to="/portfolio"
                  className="group block h-full overflow-hidden rounded-3xl border border-border/50 bg-card hover-lift hover:border-strong"
                >
                  <div className="relative aspect-[5/3] overflow-hidden bg-aurora animate-aurora">
                    <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-serif text-4xl text-foreground">{f.metric}</p>
                      <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70">{f.metricLabel}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{f.tag}</p>
                    <h3 className="mt-3 text-serif text-2xl">{f.client}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-xs text-amber-accent">
                      Read the system <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* SERVICES */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Disciplines</p>
              <h2 className="mt-3 fluid-h2 text-serif">
                Six surfaces, <em className="text-muted-foreground">one studio.</em>
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, to }, i) => (
              <Reveal key={title} delay={i * 60}>
                <Link
                  to={to}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-border/50 bg-card-grad p-6 transition hover:border-strong hover:bg-card shine"
                >
                  <Icon className="h-6 w-6 text-amber-accent" />
                  <h3 className="mt-6 text-serif text-2xl text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MetricsBand />
      <TestimonialCarousel />

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/40 bg-background">
        <div aria-hidden className="absolute inset-0 bg-aurora animate-aurora opacity-10" />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-5xl px-4 py-28 text-center lg:px-8">
          <div className="mx-auto mb-10 hidden lg:block">
            <div className="relative mx-auto h-32 w-32">
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="h-full w-full text-muted-foreground">
                  <defs>
                    <path id="circle" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  </defs>
                  <text fontSize="8.5" letterSpacing="2.2" fill="currentColor" fontFamily="Instrument Serif">
                    <textPath href="#circle">HEISEN LABS · START A PROJECT · HEISEN LABS · START A PROJECT · </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-3xl text-foreground/80">+</div>
            </div>
          </div>
          <h2 className="mx-auto max-w-3xl fluid-h2 text-serif text-gradient">
            Ready to change what your business measures? <em className="text-muted-foreground">Let's build the system.</em>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/book-a-call" className="shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground shadow-glow">
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3.5 text-sm">
              Send a note
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
