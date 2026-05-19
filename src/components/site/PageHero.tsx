export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-28 lg:px-8 lg:py-32">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-status" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-4xl fluid-display text-serif text-gradient">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
