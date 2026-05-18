import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Field Notes — Heisen Labs" },
      { name: "description", content: "Notes from the studio on AI, automation, and the systems behind growing businesses. New writing soon." },
      { property: "og:title", content: "Field Notes — Heisen Labs" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title="Notes from the studio."
        subtitle="Short essays on AI, automation, and the small system choices that compound. New writing soon."
      />
      <section className="mx-auto max-w-3xl px-4 pb-24 text-center lg:px-8">
        <div className="rounded-3xl border border-dashed border-border/60 bg-card/40 p-10">
          <p className="text-serif text-2xl text-foreground">Coming soon.</p>
          <p className="mt-2 text-sm text-muted-foreground">In the meantime, take a look at the systems we've shipped.</p>
          <Link to="/portfolio" className="mt-6 inline-block rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground">
            View portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
