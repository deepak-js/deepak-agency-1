import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-serif text-2xl">
            <span className="italic text-muted-foreground">by</span> HeisenLabs
          </h3>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A small studio building careful, performant websites for clients who care about the details.
          </p>
        </div>
        <FooterCol title="Services" links={[
          { label: "Website design", to: "/services/web-design" },
          { label: "SEO", to: "/services/seo" },
          { label: "Hosting & care", to: "/services/hosting" },
          { label: "Migration", to: "/services/migration" },
          { label: "E-commerce", to: "/services/ecommerce" },
          { label: "Scheduling", to: "/services/scheduling" },
        ]} />
        <FooterCol title="Company" links={[
          { label: "About", to: "/about" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "Pricing", to: "/pricing" },
          { label: "FAQ", to: "/faq" },
          { label: "Blog", to: "/blog" },
        ]} />
        <FooterCol title="Get in touch" links={[
          { label: "Contact", to: "/contact" },
          { label: "Book a call", to: "/book-a-call" },
        ]} />
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-xs text-muted-foreground lg:px-8">
          <span>© {new Date().getFullYear()} HeisenLabs Studio</span>
          <span>Crafted with care.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-foreground/80 hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
