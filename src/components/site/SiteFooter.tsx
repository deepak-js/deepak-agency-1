import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/40 bg-background">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-accent/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="text-serif text-2xl">
              <span className="text-foreground">Heisen</span>{" "}
              <span className="italic text-muted-foreground">Labs</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A boutique AI and automation studio building the systems behind business growth.
            </p>
            <div className="mt-6">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Field notes</p>
              <div className="mt-3 max-w-sm">
                <NewsletterForm />
              </div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1.5 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-status" />
              </span>
              <span className="text-muted-foreground">Booking Q3 systems · 2 slots open</span>
            </div>
          </div>
          <FooterCol title="Services" links={[
            { label: "AI Integrations", to: "/services/ai-integrations" },
            { label: "Automation", to: "/services/automation" },
            { label: "Web Systems", to: "/services/web-systems" },
            { label: "SEO", to: "/services/seo" },
            { label: "Data Pipelines", to: "/services/data-pipelines" },
            { label: "AI Agents", to: "/services/ai-agents" },
          ]} />
          <FooterCol title="Studio" links={[
            { label: "About", to: "/about" },
            { label: "Work", to: "/portfolio" },
            { label: "Pricing", to: "/pricing" },
            { label: "FAQ", to: "/faq" },
            { label: "Field notes", to: "/blog" },
          ]} />
          <FooterCol title="Get in touch" links={[
            { label: "Contact", to: "/contact" },
            { label: "Book a call", to: "/book-a-call" },
            { label: "Privacy", to: "/privacy" },
            { label: "Terms", to: "/terms" },
          ]} />
        </div>

        <div className="mt-16 border-t border-border/40 pt-6">
          <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Heisen Labs · The systems behind business growth.</p>
            <div className="flex items-center gap-2">
              <SocialLink href="mailto:hello@heisenlabs.studio" label="Email"><Mail className="h-4 w-4" /></SocialLink>
              <SocialLink href="https://github.com" label="GitHub"><Github className="h-4 w-4" /></SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
              <SocialLink href="https://twitter.com" label="Twitter"><Twitter className="h-4 w-4" /></SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-foreground/80 transition hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:bg-accent hover:text-foreground"
    >
      {children}
    </a>
  );
}
