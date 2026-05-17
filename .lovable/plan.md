
# HeisenLabs — Squarespace-style Web Design Agency Site

A multi-page marketing site for **HeisenLabs**, modeled structurally on bycrawford.com (dark moody hero, sticky top bar notification, side-by-side hero + contact form, services grid, portfolio, pricing, testimonials, floating "Book a call" widget). All copy and imagery will be original.

## Pages (routes)

```
/                  Home — hero + inline contact form + services preview + portfolio teaser + testimonials
/about             Founder story, awards/badges, process
/services          Overview grid linking to each service
/services/web-design
/services/seo
/services/hosting
/services/migration
/services/ecommerce
/services/scheduling
/portfolio         Project grid with case-study cards
/pricing           Tiered pricing table + FAQ accordion
/contact           Full contact form + alt channels
/book-a-call       Calendar embed placeholder + intake form
/faq               Accordion of common questions
/blog              Stub index (empty state) — listed in nav
```

Each route gets its own `head()` with unique title + og tags.

## Design system

Dark theme, cinematic. Defined in `src/styles.css` via oklch tokens.

- **Background**: near-black with subtle blue light-leak gradient
- **Foreground / muted**: off-white, soft slate
- **Primary** (CTAs / accent dot): muted steel-blue
- **Surface**: translucent dark card with soft border
- **Form card**: light cream/off-white panel floating over the dark hero
- **Typography**: serif display for headings (e.g. Instrument Serif / Fraunces), clean sans for body (Inter)
- **Motifs**: thin laurel/award badges, status-dot ("● Available for work"), pill buttons with arrow icon, rotating circular "Start a project" stamp

## Key components

- `SiteHeader` — logo left, nav center, "Schedule a call" pill right; mobile sheet menu
- `TopBanner` — sticky top notification bar with dismiss (×)
- `Hero` — left column copy + dual CTA + awards row; right column floating contact form card
- `ContactForm` — Name, Email, Subject (select), Message → server fn → DB insert + toast
- `ServicesGrid`, `PortfolioGrid`, `PricingTable`, `Testimonials`, `FaqAccordion`
- `BookCallWidget` — fixed bottom-right floating card ("Book A Call / Get started today")
- `SiteFooter`

## Backend (Lovable Cloud)

Enable Lovable Cloud. Create two tables with RLS (insert open to anon, select restricted to authenticated/admin only):

- `contact_submissions` (id, name, email, subject, message, created_at)
- `call_bookings` (id, name, email, preferred_date, notes, created_at)

Server functions in `src/lib/`:
- `submitContact.functions.ts` — Zod-validated insert via `supabaseAdmin`
- `bookCall.functions.ts` — Zod-validated insert

UI feedback: shadcn `sonner` toasts for success/error notifications.

## Out of scope / placeholders

- Real portfolio imagery — use generated/placeholder images you can swap
- Real testimonials — placeholder names + headshots
- Calendar booking — intake form only; embed slot left for Cal.com/Acuity later
- Blog content — empty state with "Coming soon"

## Technical notes

- TanStack Start file-based routing under `src/routes/`
- Each route file declares its own `head()` meta
- `sitemap.xml` server route enumerating all pages
- `robots.txt` allowing all
- Zod validation client + server; length limits on all inputs
- All colors via semantic tokens, no hardcoded hex in components

Ready to build on approval.
