import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export function ServiceDetail({
  eyebrow,
  title,
  subtitle,
  includes,
  outcomes,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  includes: string[];
  outcomes: string[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-serif text-3xl">What's included</h2>
          <ul className="mt-6 space-y-3">
            {includes.map((i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-serif text-3xl">What you get</h2>
          <ul className="mt-6 space-y-3">
            {outcomes.map((i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/90">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex gap-3">
            <Link to="/book-a-call" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground">
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
