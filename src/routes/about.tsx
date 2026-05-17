import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HeisenLabs" },
      { name: "description", content: "A small senior studio building bespoke websites with care. Meet the team behind HeisenLabs." },
      { property: "og:title", content: "About — HeisenLabs" },
      { property: "og:description", content: "Meet the team behind HeisenLabs." },
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
        title="A senior studio that ships."
        subtitle="We're a tight team of designers, developers, and strategists. We take on a small number of projects each quarter so we can stay close to the work."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-serif text-4xl">How we work</h2>
          <ol className="mt-6 space-y-6">
            {[
              ["Discover", "Short, focused calls to understand the business, audience, and the gap your site needs to close."],
              ["Design", "Bespoke layouts, never templates. We share work weekly and refine in the open."],
              ["Build", "We write clean, fast, accessible code. Performance is non-negotiable."],
              ["Launch & care", "We don't disappear after launch. Optional monthly care plans keep things humming."],
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
            <li><strong className="text-foreground">Craft.</strong> Pixels, performance, and prose all matter.</li>
            <li><strong className="text-foreground">Clarity.</strong> Plain words. Clear scopes. Honest timelines.</li>
            <li><strong className="text-foreground">Speed.</strong> Sub-second load times are the baseline, not the goal.</li>
            <li><strong className="text-foreground">Accessibility.</strong> Good sites work for everyone, on every device.</li>
            <li><strong className="text-foreground">Privacy.</strong> No trackers we don't need. No dark patterns. Ever.</li>
          </ul>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground">
            Work with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
