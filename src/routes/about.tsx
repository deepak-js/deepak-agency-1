import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";

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

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A studio for systems, not deliverables."
        subtitle="Heisen Labs is a small, senior team of engineers, designers, and AI practitioners. We take on a handful of projects each quarter so we can stay close to the work."
      />

      <section className="mx-auto max-w-4xl px-4 pb-4 lg:px-8">
        <div className="rounded-3xl border border-border/50 bg-card/60 p-8">
          <p className="text-serif text-2xl leading-snug text-foreground sm:text-3xl">
            Named after the Heisenberg principle — the right system doesn't just{" "}
            <em className="text-muted-foreground">observe</em> your business,{" "}
            it <em className="text-muted-foreground">changes</em> it.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Every site we ship, workflow we automate, and agent we deploy is built to shift a metric you actually care about — bookings, lead time, support load, ranking, retention. Nothing we make is decorative.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-serif text-4xl">How we work</h2>
          <ol className="mt-6 space-y-6">
            {[
              ["Map", "We start with the system as it is today — the tools, the handoffs, the leaks. Short, focused calls. No jargon."],
              ["Design", "We propose the smallest system that moves the metric. Architecture, models, surfaces, fallbacks — written down before code."],
              ["Build", "Tight loops. Weekly demos. Production-grade code, observability from day one, and humans in the loop where it counts."],
              ["Operate", "We don't disappear at launch. Optional partnerships keep the system tuned as your business changes shape."],
            ].map(([t, d]) => (
              <li key={t} className="border-l border-border/60 pl-4">
                <h3 className="text-serif text-xl">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-serif text-4xl">What we value</h2>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Outcomes over outputs.</strong> A shipped feature is not the win. The metric is.</li>
            <li><strong className="text-foreground">Boring reliability.</strong> Production AI and automation should be quiet, observable, and dull to operate.</li>
            <li><strong className="text-foreground">Small surfaces.</strong> We'd rather solve one job completely than ten jobs half-way.</li>
            <li><strong className="text-foreground">Honest scope.</strong> Plain words. Clear deliverables. Truthful timelines.</li>
            <li><strong className="text-foreground">Data dignity.</strong> Your data stays yours. No silent training, no surprise sharing.</li>
          </ul>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground">
            Work with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
