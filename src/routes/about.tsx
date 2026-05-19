import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { LogoMarquee } from "@/components/site/LogoMarquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Heisen Labs" },
      { name: "description", content: "Heisen Labs is a boutique AI and automation studio building the systems behind business growth." },
      { property: "og:title", content: "About — Heisen Labs" },
      { property: "og:description", content: "The studio behind the systems." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { t: "Outcomes over outputs", d: "A shipped feature is not the win. The metric is. We instrument before we ship." },
  { t: "Boring reliability", d: "Production AI and automation should be quiet, observable, and dull to operate." },
  { t: "Small surfaces", d: "We'd rather solve one job completely than ten jobs half-way." },
  { t: "Honest scope", d: "Plain words. Clear deliverables. Truthful timelines. We'd rather say no than overpromise." },
  { t: "Data dignity", d: "Your data stays yours. No silent training. No surprise sharing. Documented paths." },
  { t: "Writing is thinking", d: "Every decision is written down before code. It's slower, then much faster." },
];

const process = [
  ["Map", "We start with the system as it is today — the tools, the handoffs, the leaks. Short, focused calls."],
  ["Design", "We propose the smallest system that moves the metric. Architecture, models, surfaces, fallbacks."],
  ["Build", "Tight loops. Weekly demos. Production-grade code, observability from day one."],
  ["Operate", "We stay on for tuning. Optional partnerships keep the system tuned as your business changes shape."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A studio for systems, not deliverables."
        subtitle="Heisen Labs is a small, senior team of engineers, designers, and AI practitioners. We take on a handful of projects each quarter so we can stay close to the work."
      />

      <section className="mx-auto max-w-5xl px-4 -mt-6 pb-4 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card-grad p-10 shadow-card">
            <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-aurora opacity-20 blur-3xl animate-aurora" />
            <p className="relative text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The name</p>
            <p className="relative mt-4 text-serif text-3xl leading-snug text-foreground sm:text-4xl">
              Named after the Heisenberg principle — the right system doesn't just{" "}
              <em className="text-muted-foreground">observe</em> your business,{" "}
              it <em className="text-aurora not-italic">changes</em> it.
            </p>
            <p className="relative mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Every site we ship, workflow we automate, and agent we deploy is built to shift a metric you actually care about —
              bookings, lead time, support load, ranking, retention. Nothing we make is decorative.
            </p>
          </div>
        </Reveal>
      </section>

      <LogoMarquee />

      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What we value</p>
        <h2 className="mt-3 fluid-h2 text-serif max-w-2xl">Six principles. <em className="text-muted-foreground">Held quietly.</em></h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 50}>
              <div className="h-full rounded-2xl border border-border/50 bg-card/60 p-6 hover-lift">
                <h3 className="text-serif text-2xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">How we work</p>
              <h2 className="mt-3 fluid-h2 text-serif">Four phases. <em className="text-muted-foreground">No surprises.</em></h2>
              <ol className="mt-10 space-y-6">
                {process.map(([t, d], i) => (
                  <li key={t} className="relative border-l-2 border-border/60 pl-6">
                    <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-aurora" />
                    <p className="text-mono text-xs text-amber-accent">PHASE {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 text-serif text-2xl">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The team</p>
              <h2 className="mt-3 fluid-h2 text-serif">A handful of seniors. <em className="text-muted-foreground">No juniors learning on you.</em></h2>
              <div className="mt-10 space-y-4">
                {[
                  { name: "E. Mercer", role: "Founder · AI systems & strategy" },
                  { name: "S. Halevi", role: "Principal engineer · backend & data" },
                  { name: "R. Okonkwo", role: "Design lead · web systems" },
                  { name: "N. Patel", role: "Automation lead · ops & integrations" },
                ].map((p) => (
                  <div key={p.name} className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/60 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-aurora text-serif text-lg text-primary-foreground">
                      {p.name[0]}
                    </div>
                    <div>
                      <p className="text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground shadow-glow">
                Work with us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
