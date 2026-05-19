import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export interface ServiceDetailProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  includes: string[];
  outcomes: string[];
  metrics?: { value: string; label: string }[];
  process?: { step: string; title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
  related?: { title: string; to: string }[];
  caseStudy?: { client: string; result: string; quote: string };
}

export function ServiceDetail({
  eyebrow,
  title,
  subtitle,
  includes,
  outcomes,
  metrics,
  process,
  faqs,
  related,
  caseStudy,
}: ServiceDetailProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      {metrics && metrics.length > 0 && (
        <section className="border-y border-border/40 bg-surface/40">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3 lg:px-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-serif text-4xl text-aurora sm:text-5xl">{m.value}</p>
                <p className="mt-2 text-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What's included</p>
          <h2 className="mt-3 fluid-h2 text-serif">Engineered end-to-end.</h2>
          <ul className="mt-8 space-y-4">
            {includes.map((i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What you get</p>
          <h2 className="mt-3 fluid-h2 text-serif">Outcomes, not artifacts.</h2>
          <ul className="mt-8 space-y-4">
            {outcomes.map((o) => (
              <li key={o} className="flex gap-3 text-sm text-foreground/90">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-accent" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/book-a-call" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90">
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm transition hover:bg-accent">
              See pricing
            </Link>
          </div>
        </Reveal>
      </section>

      {process && process.length > 0 && (
        <section className="border-t border-border/40 bg-surface/40">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The process</p>
            <h2 className="mt-3 fluid-h2 text-serif max-w-2xl">From first call to running system.</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 70}>
                  <div className="h-full rounded-2xl border border-border/50 bg-card/60 p-6 hover-lift">
                    <span className="text-mono text-xs text-aurora">{p.step}</span>
                    <h3 className="mt-4 text-serif text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {caseStudy && (
        <section className="border-t border-border/40 bg-hero">
          <div className="mx-auto max-w-5xl px-4 py-24 text-center lg:px-8">
            <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Recent work · {caseStudy.client}</p>
            <p className="mt-6 text-serif text-3xl text-aurora sm:text-5xl">{caseStudy.result}</p>
            <blockquote className="mx-auto mt-8 max-w-2xl text-serif text-xl text-foreground/90 sm:text-2xl">
              &ldquo;{caseStudy.quote}&rdquo;
            </blockquote>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="border-t border-border/40 bg-background">
          <div className="mx-auto max-w-3xl px-4 py-20 lg:px-8">
            <h2 className="fluid-h2 text-serif">Common questions.</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border/50 bg-card/60 p-5 transition open:bg-card">
                  <summary className="cursor-pointer list-none text-sm font-medium text-foreground marker:hidden flex justify-between gap-4">
                    {f.q}
                    <span className="text-muted-foreground transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {related && related.length > 0 && (
        <section className="border-t border-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Related services</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((r) => (
                <Link key={r.to} to={r.to} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm transition hover:bg-card">
                  {r.title} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
