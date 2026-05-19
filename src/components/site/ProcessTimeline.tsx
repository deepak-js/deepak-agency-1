import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Discover", d: "We map the system as it stands — tools, handoffs, hidden costs. One short, focused conversation, no jargon." },
  { n: "02", t: "Architect", d: "We propose the smallest design that moves the metric. Surfaces, models, fallbacks — written down before code." },
  { n: "03", t: "Build", d: "Tight cycles. Weekly demos. Production-grade code with observability and humans in the loop where it counts." },
  { n: "04", t: "Operate", d: "We stay on for tuning, monitoring, and the next round of systems. No lock-in, no abandoned launches." },
];

export function ProcessTimeline() {
  return (
    <section className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">How we work</p>
          <h2 className="mt-3 fluid-h2 text-serif">
            Four steps. <em className="text-muted-foreground">No surprises.</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border/50 bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="h-full bg-card/80 p-8">
                <span className="text-mono text-xs tracking-widest text-aurora">{s.n}</span>
                <h3 className="mt-6 text-serif text-3xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
