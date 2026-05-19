const logos = [
  "Northwind", "Atlas Audio", "Calder & Bloom", "Harbor Insights",
  "Loomwork", "Polaris OS", "Verdant Co", "Maren Group",
  "Ferro Labs", "Quill & Vault",
];

export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/40 bg-surface/40 py-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />
      <div className="flex w-max animate-marquee gap-16 pr-16">
        {[...logos, ...logos].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="text-mono whitespace-nowrap text-sm uppercase tracking-[0.25em] text-muted-foreground/70"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
