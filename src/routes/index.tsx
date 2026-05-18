import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Search, Workflow, Bot, Database, LayoutTemplate, Globe, Moon, Cpu } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heisen Labs — AI & automation studio" },
      { name: "description", content: "Heisen Labs is a boutique AI and automation studio. We build websites that rank, workflows that run overnight, and AI integrations that actually work." },
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

const services = [
  { icon: Sparkles, title: "AI Integrations", desc: "Models wired into your stack.", to: "/services/ai-integrations" },
  { icon: Workflow, title: "Automation", desc: "Workflows that run themselves.", to: "/services/automation" },
  { icon: LayoutTemplate, title: "Web Systems", desc: "Sites built to rank and convert.", to: "/services/web-systems" },
  { icon: Search, title: "SEO", desc: "Grounded in real search intent.", to: "/services/seo" },
  { icon: Database, title: "Data Pipelines", desc: "One source of truth, finally.", to: "/services/data-pipelines" },
  { icon: Bot, title: "AI Agents", desc: "Copilots tuned to your data.", to: "/services/ai-agents" },
];

const testimonials = [
  { quote: "They replaced four spreadsheets and a daily standup with one quiet workflow. Our ops team got a week back every month.", name: "Priya R.", role: "Head of Operations, Northwind Labs" },
  { quote: "We finally have an internal assistant that knows our docs and doesn't make things up. The team uses it before Slack.", name: "James K.", role: "CTO, Atlas Audio" },
  { quote: "New site, new pipeline, new ranking. Organic traffic tripled in two quarters and the system still runs itself.", name: "Maria O.", role: "Founder, Calder & Bloom" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero">
        <div className="mx-auto max-w-5xl px-4 py-24 text-center lg:px-8 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs">
            <span className="inline-flex h-2 w-2 rounded-full bg-status animate-pulse" />
            <span className="text-muted-foreground">Taking on new builds this quarter</span>
          </div>

          <h1 className="mt-6 text-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            The systems behind{" "}
            <em className="text-muted-foreground">business growth.</em>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Heisen Labs is a boutique AI and automation studio. We build websites that rank,
            workflows that run overnight, and AI integrations that actually work.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/book-a-call"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-3 text-sm text-foreground transition hover:bg-card"
            >
              See what we build
            </Link>
          </div>

          <p className="mx-auto mt-10 max-w-xl text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Named after the Heisenberg principle — the right system doesn't just observe your business, it changes it.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-3xl border border-border/50 bg-card/60 p-7">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="mt-6 text-serif text-3xl text-foreground">{title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT BAND */}
      <section className="border-t border-border/40 bg-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="text-serif text-4xl sm:text-5xl">
              Tell us about the system you want to build.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              A short note is enough. We'll reply within one business day with a few sharp questions and a sense of fit.
            </p>
            <div className="mt-10 hidden lg:block">
              <div className="relative h-28 w-28">
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="h-full w-full text-muted-foreground">
                    <defs>
                      <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    </defs>
                    <text fontSize="9.5" letterSpacing="2" fill="currentColor">
                      <textPath href="#circle">HEISEN LABS · HEISEN LABS · </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-2xl text-foreground/80">+</div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-serif text-4xl sm:text-5xl">
              Six disciplines, <em className="text-muted-foreground">one studio.</em>
            </h2>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, to }) => (
              <Link
                key={title}
                to={to}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 p-6 transition hover:border-border hover:bg-card"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-6 text-serif text-2xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border/40 bg-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <h2 className="max-w-xl text-serif text-4xl sm:text-5xl">
            Built quietly. <em className="text-muted-foreground">Noticed loudly.</em>
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-border/50 bg-card/60 p-6">
                <blockquote className="text-serif text-xl leading-snug text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <h2 className="mx-auto max-w-2xl text-serif text-4xl sm:text-5xl">
            Ready to change what your business measures? <em className="text-muted-foreground">Let's build the system.</em>
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/book-a-call" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground shadow-glow">
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm">
              See the work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
