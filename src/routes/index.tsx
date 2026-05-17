import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Zap, Search, Wrench, ShoppingCart, CalendarClock } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HeisenLabs — Award-winning website design studio" },
      { name: "description", content: "HeisenLabs builds bespoke, performant websites. SEO, hosting, migration and e-commerce by a senior team that ships." },
      { property: "og:title", content: "HeisenLabs — Award-winning website design studio" },
      { property: "og:description", content: "Bespoke websites built for speed, clarity, and conversion." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Sparkles, title: "Website Design", desc: "Bespoke builds.", to: "/services/web-design" },
  { icon: Search, title: "SEO", desc: "Get seen online.", to: "/services/seo" },
  { icon: Wrench, title: "Hosting & Care", desc: "Monthly website care.", to: "/services/hosting" },
  { icon: Zap, title: "Migration", desc: "Move with zero downtime.", to: "/services/migration" },
  { icon: ShoppingCart, title: "E-commerce", desc: "Online stores that sell.", to: "/services/ecommerce" },
  { icon: CalendarClock, title: "Scheduling", desc: "Book as needed.", to: "/services/scheduling" },
];

const testimonials = [
  { quote: "They reframed our brand and shipped a site that finally feels like us. Bookings doubled within a month.", name: "Maria O.", role: "Founder, Calder & Bloom" },
  { quote: "Calm, thoughtful, and fast. Everything we asked for plus things we didn't know we needed.", name: "James K.", role: "Director, Atlas Audio" },
  { quote: "Best investment we made all year. The site loads instantly and Google noticed.", name: "Priya R.", role: "Owner, Field Notes Studio" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs">
              <span className="inline-flex h-2 w-2 rounded-full bg-status animate-pulse" />
              <span className="text-muted-foreground">Available for work</span>
              <Link to="/contact" className="ml-2 text-foreground/90 hover:text-foreground">
                Get in touch now
              </Link>
            </div>

            <h1 className="mt-6 text-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              HeisenLabs: a small studio building{" "}
              <em className="text-muted-foreground">remarkable</em> websites.
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              We've helped launch hundreds of sites for clients across the world — from local startups
              to global brands. Every project is crafted for speed, search, and clarity. No bloated
              templates. No nonsense.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book-a-call"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
              >
                Schedule a call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-3 text-sm text-foreground transition hover:bg-card"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-4 text-center">
              {["Marketplace Expert", "Community Leader", "Circle Member"].map((b) => (
                <div key={b} className="rounded-2xl border border-border/40 bg-card/40 px-2 py-4 text-[10px] uppercase tracking-wide text-muted-foreground">
                  <div className="text-serif text-2xl text-foreground/90">✦</div>
                  <div className="mt-1">{b}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating stamp + form */}
          <div className="relative">
            <div className="absolute -left-8 -top-6 z-10 hidden lg:block">
              <div className="relative h-28 w-28">
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="h-full w-full text-muted-foreground">
                    <defs>
                      <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    </defs>
                    <text fontSize="9.5" letterSpacing="2" fill="currentColor">
                      <textPath href="#circle">START A PROJECT · START A PROJECT · </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-2xl text-foreground/80">+</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-serif text-4xl sm:text-5xl">
              Everything you need, <em className="text-muted-foreground">under one roof.</em>
            </h2>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, to }) => (
              <Link
                key={title}
                to={to}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 p-6 transition hover:border-border hover:bg-card"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-6 text-serif text-2xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / TESTIMONIALS */}
      <section className="border-t border-border/40 bg-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <h2 className="max-w-xl text-serif text-4xl sm:text-5xl">
            Kind words from <em className="text-muted-foreground">kind people.</em>
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-border/50 bg-card/60 p-6">
                <blockquote className="text-serif text-xl leading-snug text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <h2 className="mx-auto max-w-2xl text-serif text-4xl sm:text-5xl">
            Ready when you are. <em className="text-muted-foreground">Let's build something.</em>
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/book-a-call" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground shadow-glow">
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm">
              See the work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
