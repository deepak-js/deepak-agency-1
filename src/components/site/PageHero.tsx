export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-status" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
