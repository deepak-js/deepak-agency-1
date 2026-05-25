import React from "react";

const logos = [
  {
    name: "Northwind",
    svg: (
      <svg className="h-5 w-auto text-muted-foreground/60" viewBox="0 0 120 24" fill="currentColor">
        <path d="M12 2L4 20h4.5l1.5-3.5h4l1.5 3.5H20L12 2zm1.5 11h-3l1.5-3.5 1.5 3.5z" />
        <text x="28" y="17" fontWeight="600" fontSize="10.5" letterSpacing="0.12em" fontFamily="Inter, sans-serif">NORTHWIND</text>
      </svg>
    )
  },
  {
    name: "Atlas Audio",
    svg: (
      <svg className="h-5 w-auto text-muted-foreground/60" viewBox="0 0 120 24" fill="currentColor">
        <circle cx="10" cy="12" r="3" />
        <circle cx="10" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        <text x="28" y="17" fontWeight="600" fontSize="10.5" letterSpacing="0.12em" fontFamily="Inter, sans-serif">ATLAS AUDIO</text>
      </svg>
    )
  },
  {
    name: "Calder & Bloom",
    svg: (
      <svg className="h-5 w-auto text-muted-foreground/60" viewBox="0 0 135 24" fill="currentColor">
        <path d="M6 12a4 4 0 118 0 4 4 0 01-8 0z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v12M6 12h8" stroke="currentColor" strokeWidth="1" />
        <text x="24" y="17" fontStyle="italic" fontWeight="500" fontSize="11" letterSpacing="0.05em" fontFamily="Fraunces, serif">Calder & Bloom</text>
      </svg>
    )
  },
  {
    name: "Harbor Insights",
    svg: (
      <svg className="h-5 w-auto text-muted-foreground/60" viewBox="0 0 130 24" fill="currentColor">
        <path d="M10 4l-7 14h14L10 4zm0 4.5l3.5 7h-7l3.5-7z" />
        <text x="26" y="17" fontWeight="600" fontSize="10.5" letterSpacing="0.12em" fontFamily="Inter, sans-serif">HARBOR</text>
      </svg>
    )
  },
  {
    name: "Loomwork",
    svg: (
      <svg className="h-5 w-auto text-muted-foreground/60" viewBox="0 0 110 24" fill="currentColor">
        <path d="M4 6h12v2H4zm2 4h12v2H6zm-2 4h12v2H4z" />
        <text x="26" y="17" fontWeight="600" fontSize="10.5" letterSpacing="0.12em" fontFamily="Inter, sans-serif">LOOMWORK</text>
      </svg>
    )
  },
  {
    name: "Polaris OS",
    svg: (
      <svg className="h-5 w-auto text-muted-foreground/60" viewBox="0 0 110 24" fill="currentColor">
        <path d="M10 2l1.5 6.5L18 10l-6.5 1.5L10 18l-1.5-6.5L2 10l6.5-1.5L10 2z" />
        <text x="26" y="17" fontWeight="600" fontSize="10.5" letterSpacing="0.12em" fontFamily="Inter, sans-serif">POLARIS OS</text>
      </svg>
    )
  },
  {
    name: "Verdant Co",
    svg: (
      <svg className="h-5 w-auto text-muted-foreground/60" viewBox="0 0 115 24" fill="currentColor">
        <path d="M6 18c0-4.4 3.6-8 8-8s8 3.6 8 8H6zM14 6c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
        <text x="28" y="17" fontWeight="600" fontSize="10.5" letterSpacing="0.12em" fontFamily="Inter, sans-serif">VERDANT CO</text>
      </svg>
    )
  },
  {
    name: "Ferro Labs",
    svg: (
      <svg className="h-5 w-auto text-muted-foreground/60" viewBox="0 0 110 24" fill="currentColor">
        <rect x="3" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="7" y="9" width="6" height="6" rx="0.5" />
        <text x="26" y="17" fontWeight="600" fontSize="10.5" letterSpacing="0.12em" fontFamily="Inter, sans-serif">FERRO LABS</text>
      </svg>
    )
  }
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
      <div className="flex w-max animate-marquee gap-16 pr-16 items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center text-muted-foreground/60 hover:text-foreground transition-colors duration-200"
          >
            {logo.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
