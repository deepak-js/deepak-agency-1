import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Heisen Labs` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/blog/${params.slug}` },
        ]
      : [{ title: "Field note — Heisen Labs" }],
    links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.title,
              description: loaderData.excerpt,
              datePublished: loaderData.date,
              author: { "@type": "Organization", name: "Heisen Labs" },
            }),
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="text-serif text-4xl">Field note not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-amber-accent">← Back to field notes</Link>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-br ${post.hue}`}>
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 lg:px-8 lg:py-32">
          <Link to="/blog" className="inline-flex items-center gap-2 text-mono text-xs uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> Field notes
          </Link>
          <h1 className="mt-6 fluid-display text-serif text-foreground">{post.title}</h1>
          <div className="mt-6 flex items-center gap-3 text-mono text-xs uppercase tracking-[0.18em] text-foreground/70">
            <span>{post.category}</span><span>·</span><span>{post.date}</span><span>·</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readingTime} min</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-2xl px-4 py-20 lg:px-8">
        <p className="text-xl leading-relaxed text-foreground/90 sm:text-2xl">{post.excerpt}</p>
        <div className="mt-12 space-y-12">
          {post.body.map((section: { heading: string; paragraphs: string[] }) => (
            <section key={section.heading}>
              <h2 className="text-serif text-3xl text-foreground">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                {section.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border/50 bg-card/60 p-8">
          <p className="text-serif text-2xl">Want this kind of system in your business?</p>
          <p className="mt-2 text-sm text-muted-foreground">Book a free 30-minute call — no sales pressure, just scope.</p>
          <Link to="/book-a-call" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground shadow-glow">
            Book a call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </>
  );
}
