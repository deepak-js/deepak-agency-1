import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — HeisenLabs" },
      { name: "description", content: "Notes from the studio on design, performance, and SEO. Coming soon." },
      { property: "og:title", content: "Blog — HeisenLabs" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Notes from the studio." subtitle="Essays on craft, performance, and the small choices that add up. New writing soon." />
      <section className="mx-auto max-w-3xl px-4 pb-24 text-center lg:px-8">
        <div className="rounded-3xl border border-dashed border-border/60 bg-card/40 p-10">
          <p className="text-serif text-2xl text-foreground">Coming soon.</p>
          <p className="mt-2 text-sm text-muted-foreground">In the meantime, take a look at our recent work.</p>
          <Link to="/portfolio" className="mt-6 inline-block rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground">
            View portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
