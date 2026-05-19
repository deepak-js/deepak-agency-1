import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { posts } from "@/lib/blog-posts";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Field Notes — Heisen Labs" },
      { name: "description", content: "Notes from the studio on AI, automation, and the systems behind growing businesses." },
      { property: "og:title", content: "Field Notes — Heisen Labs" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

void notFound; // keep import shape stable

function BlogPage() {
  const [feature, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title="Short essays from the studio."
        subtitle="Notes on AI, automation, and the small system choices that compound."
      />
      <section className="mx-auto max-w-7xl px-4 pb-12 lg:px-8">
        <Reveal>
          <Link
            to="/blog/$slug"
            params={{ slug: feature.slug }}
            className="group grid gap-8 overflow-hidden rounded-3xl border border-border/50 bg-card-grad p-6 transition hover:border-strong sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12"
          >
            <div className={`relative aspect-[5/3] overflow-hidden rounded-2xl bg-gradient-to-br ${feature.hue}`}>
              <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Tag className="h-3 w-3" /> {feature.category}</span>
                <span>·</span>
                <span>{feature.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {feature.readingTime} min</span>
              </div>
              <h2 className="mt-4 text-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">{feature.title}</h2>
              <p className="mt-4 text-muted-foreground">{feature.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-amber-accent">
                Read field note <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block h-full overflow-hidden rounded-3xl border border-border/50 bg-card/60 hover-lift hover:border-strong"
              >
                <div className={`relative aspect-[5/3] overflow-hidden bg-gradient-to-br ${p.hue}`}>
                  <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{p.category}</span><span>·</span><span>{p.readingTime} min</span>
                  </div>
                  <h3 className="mt-3 text-serif text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
