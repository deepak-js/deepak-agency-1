
# Heisen Labs — Production-Ready Polish

Goal: take the existing Heisen Labs site from "scaffolded clone" to a premium, $10k-feeling boutique AI & automation studio — fully populated, smoothly animated, conversion-focused, accessible, and responsive.

## 1. Design system upgrade (`src/styles.css`)

Refine the dark cinematic theme into something more distinctive and premium:
- Tighten oklch palette: deeper near-black background, warm ivory foreground, refined "ember/amber" primary accent for CTAs, cool indigo secondary for data/AI motifs, soft cream for inverted contact card.
- Add tokens: `--surface`, `--surface-elevated`, `--border-strong`, `--ring`, `--success`, `--warning`, gradient tokens (`--gradient-hero`, `--gradient-aurora`, `--gradient-card`), shadow tokens (`--shadow-card`, `--shadow-glow`, `--shadow-elevated`).
- Typography: keep `Instrument Serif` for display; pair with `Inter` body + `JetBrains Mono` for eyebrow/code/metric labels. Add fluid `clamp()` headings (h1/h2/h3) and tighter tracking on display.
- Utilities: `.bg-hero` (multi-stop aurora), `.bg-grid` (subtle dot/grid overlay), `.text-gradient`, `.glass-card`, `.noise` (SVG noise overlay), `.marquee`, `.shine` (hover sheen), reduced-motion safe.
- Keyframes: `fade-in-up`, `aurora-shift`, `marquee`, `shimmer`, `pulse-ring`, `rotate-stamp`. All respect `prefers-reduced-motion`.

## 2. Global shell

- **SiteHeader**: sticky translucent header with scroll-shrink, mega-menu dropdown for Services (icons + one-line descriptions), animated underline on active link, refined mobile sheet with sectioned nav + CTA.
- **TopBanner**: dismissible, persisted in `localStorage`, subtle marquee variant on desktop.
- **SiteFooter**: 4-column (Studio / Services / Resources / Contact), newsletter form (wired to `contact_submissions` with subject = "Newsletter"), social icons, location + status pill ("Booking Q3 systems · 2 slots left"), legal links.
- **BookCallWidget**: floating pill, appears after 600px scroll with fade-in-up, hidden on `/book-a-call` & `/contact`.
- **ScrollProgress**: thin top progress bar tied to scroll.
- **Reveal** wrapper component using IntersectionObserver for fade-in-up on sections.
- **404** `not-found` route with branded illustration + helpful links.

## 3. Page-by-page content & UX

### Home (`/`)
- Hero: single column, eyebrow chip (status dot · "Now booking — Q3 systems"), large serif headline, supporting sub, dual CTA (Book a call / See the work), trust strip (5 muted client logos as SVG wordmarks).
- **Logo marquee** of 10 fictional companies.
- **Pillars** section (3 cards: Websites that rank · Workflows that run overnight · AI that actually works) with iconography + hover lift.
- **Featured systems** (3 case-study teasers w/ metric chips: "−72% manual ops", "+38% qualified leads", "4.2s → 0.9s LCP").
- **Process** timeline: Discover → Architect → Build → Operate (4 steps, numbered, connected line).
- **Services grid** linking to 6 service detail pages with icons + tagline.
- **Testimonials** carousel (4 realistic quotes w/ name, role, company).
- **Metrics band**: animated counters (systems shipped, hours automated/mo, avg. payback weeks, NPS).
- **FAQ teaser** (3 questions + link to /faq).
- **Final CTA** band with rotating stamp.

### About (`/about`)
- Story (Heisenberg principle), values grid (Outcomes over outputs, Boring reliability, Systems before software, Clarity in writing), founder card placeholder, "How we work" 3-column, press/feature logos.

### Services index (`/services`)
- Hero + 6 detail cards w/ hover reveal of included scope; comparison table (Starter vs Systems vs Studio) reusing pricing data.

### Service detail pages (6)
- Enhance `ServiceDetail` to accept: `metrics`, `process` (4 steps), `deliverables`, `faqs`, `relatedServices`, `caseStudyTeaser`. Render all sections with anchor sub-nav.
- Populate each of the 6 service routes with rich, distinct dummy copy.

### Portfolio (`/portfolio`)
- Filterable grid (All / AI / Automation / Web Systems / Data) — 9 dummy projects with cover gradients, client, year, sector, headline metric. Click opens detail modal with problem/approach/result + tech chips.

### Pricing (`/pricing`)
- 3 tiers (Starter / Systems / Studio) with feature checklists, "Most popular" highlight, monthly retainer add-on row, FAQ accordion, fine print.

### FAQ (`/faq`)
- Categorized accordions (General · AI · Automation · Engagement · Security & Data) — 4-6 Qs each.

### Blog (`/blog`)
- 6 sample articles (title, excerpt, date, reading time, category, gradient cover). Click → static article detail route `/blog/$slug` with 3 dummy long-form posts + table of contents.

### Contact (`/contact`)
- Improved 2-col layout: left = contact channels (email, calendar, location, response SLA, "what to include"), right = `ContactForm` with success state inline (no full reset on toast).

### Book a call (`/book-a-call`)
- Two-step flow: Step 1 pick goal (chips), Step 2 details form. Show 3 sample time slots (dummy), confirm with calendar `.ics` style summary card after submit. Insert into `call_bookings`.

### Legal
- Add `/privacy` and `/terms` with realistic boilerplate; link from footer.

## 4. Forms & toasts
- Keep server functions; add honeypot field + min-submit-time anti-spam (client-side).
- Inline field errors + accessible `aria-invalid` / `aria-describedby`.
- Replace cream surface with subtler `surface-elevated` for visual harmony.

## 5. SEO & a11y
- Per-route `head()` with unique title/description/og + JSON-LD (Organization on root, Service on service pages, FAQPage on /faq, BreadcrumbList on detail pages).
- Update `sitemap[.]xml.ts` with new routes (blog posts, privacy, terms).
- Single `<main>` in `__root.tsx`, skip-link, focus-visible rings on tokens, color contrast verified.
- All icon-only buttons get `aria-label`.

## 6. Responsive & motion
- Verified breakpoints at 360 / 768 / 1024 / 1440.
- Section paddings via fluid `clamp()`.
- Reveal-on-scroll, hover sheens, header shrink, marquee, counter animations — all gated by `prefers-reduced-motion`.

## 7. Assets
- Use generated SVG patterns (grid, noise, aurora gradients) inline — no new image deps.
- Generate 2 hero/abstract images via `imagegen` (subtle, dark, premium feel) for blog covers + about section.

## 8. Files

**Created**
- `src/components/site/Reveal.tsx`
- `src/components/site/ScrollProgress.tsx`
- `src/components/site/LogoMarquee.tsx`
- `src/components/site/TestimonialCarousel.tsx`
- `src/components/site/MetricsBand.tsx`
- `src/components/site/ProcessTimeline.tsx`
- `src/components/site/PortfolioGrid.tsx`
- `src/components/site/PricingTable.tsx`
- `src/components/site/FAQAccordion.tsx`
- `src/components/site/NewsletterForm.tsx`
- `src/components/site/JsonLd.tsx`
- `src/routes/privacy.tsx`, `src/routes/terms.tsx`
- `src/routes/blog.$slug.tsx`
- `src/routes/not-found.tsx` (or root `notFoundComponent`)
- 2 generated images in `src/assets/`

**Edited**
- `src/styles.css` (tokens, utilities, keyframes)
- `src/routes/__root.tsx` (main wrapper, scroll progress, JSON-LD, 404)
- All page routes (`index`, `about`, `services.*`, `portfolio`, `pricing`, `faq`, `blog`, `contact`, `book-a-call`)
- `src/components/site/SiteHeader.tsx`, `SiteFooter.tsx`, `TopBanner.tsx`, `BookCallWidget.tsx`, `ContactForm.tsx`, `ServiceDetail.tsx`, `PageHero.tsx`
- `src/routes/sitemap[.]xml.ts`

**Not changed**
- Supabase schema / RLS / server fn validators
- `client.ts`, `client.server.ts`, `types.ts`, `routeTree.gen.ts`
- No new heavy deps (uses existing `lucide-react`, `sonner`, Tailwind, shadcn).

Ready to build on approval.
