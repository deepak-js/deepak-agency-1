import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "They replaced four spreadsheets and a daily standup with one quiet workflow. Our operations team got a week back every month, and nothing breaks.",
    name: "Priya Ramaswamy",
    role: "Head of Operations",
    company: "Northwind Labs",
  },
  {
    quote: "We finally have an internal assistant that knows our docs and doesn't make things up. The team reaches for it before Slack now.",
    name: "James Kowalski",
    role: "CTO",
    company: "Atlas Audio",
  },
  {
    quote: "New site, new pipeline, new ranking. Organic traffic tripled in two quarters and the system has been quietly running ever since.",
    name: "Maria Okafor",
    role: "Founder",
    company: "Calder & Bloom",
  },
  {
    quote: "What I appreciated most was the writing. Every decision was documented before code shipped. That kind of clarity is rare.",
    name: "Daniel Vogt",
    role: "Director of Product",
    company: "Harbor Insights",
  },
];

export function TestimonialCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="border-t border-border/40 bg-hero">
      <div className="mx-auto max-w-5xl px-4 py-24 text-center lg:px-8">
        <p className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">In their words</p>
        <blockquote
          key={i}
          className="mx-auto mt-8 max-w-3xl animate-fade-in-up text-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-10 text-sm">
          <span className="text-foreground">{t.name}</span>
          <span className="text-muted-foreground"> · {t.role}, {t.company}</span>
        </figcaption>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-foreground" : "w-1.5 bg-muted-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
