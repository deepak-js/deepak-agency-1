
# Rebrand to Heisen Labs — AI & Automation Studio

Shift the site's positioning from a Squarespace-style web design agency to **Heisen Labs**: a boutique AI and automation studio. Update copy, services, and meta everywhere; keep the dark cinematic visual system. Also distance further from bycrawford.com by removing layout/copy patterns that too closely mirror it.

## Brand foundation (applied site-wide)

- **Name**: Heisen Labs (two words, not "HeisenLabs")
- **Tagline**: "The systems behind business growth."
- **Story line**: "Named after the Heisenberg principle — the right system doesn't just observe your business, it changes it."
- **Pillars**: Websites that rank · Workflows that run overnight · AI integrations that actually work

## Service lineup (replace current six)

```
/services/ai-integrations     LLM + API wiring into existing tools
/services/automation          n8n / Zapier / custom workflows, overnight jobs
/services/web-systems         High-performance sites built to rank
/services/seo                 Technical + content SEO
/services/data-pipelines      ETL, dashboards, internal data plumbing
/services/ai-agents           Custom assistants, RAG, internal copilots
```

Delete: `services.hosting.tsx`, `services.migration.tsx`, `services.ecommerce.tsx`, `services.scheduling.tsx`, `services.web-design.tsx`.
Keep + retitle: `services.seo.tsx`.
Add: 5 new service detail files using existing `ServiceDetail` component.
Update `services.index.tsx` grid and `SiteFooter` services column.

## Copy rewrites (per route)

- **`/` (Home)**: New hero headline + subhead about systems, not just websites. Replace "Squarespace experts" framing. New 3-up pillars section (Websites/Workflows/AI), services preview pointing at new routes, testimonials reworded as automation/AI outcomes.
- **`/about`**: Founder/studio story explicitly invoking the Heisenberg principle line. Drop "small design studio" framing.
- **`/services`**: New intro + 6 new cards.
- **`/portfolio`**: Reframe case-study cards as automation/AI/web systems (placeholder projects).
- **`/pricing`**: Retier around Starter (site) / Systems (site + automations) / Studio (ongoing AI partner).
- **`/contact`, `/book-a-call`**: Update subject options and intake copy ("What system do you want built?").
- **`/faq`**: New Q&A focused on AI/automation scope, data handling, model choice.
- **`/blog`**: Empty-state copy updated.

## Meta + SEO

- `__root.tsx`: new default title `Heisen Labs — AI & automation studio`, new description, `og:site_name: "Heisen Labs"`.
- Every route `head()`: rewrite title + description to match new positioning.
- `sitemap[.]xml.ts`: update path list to new service slugs.

## Visual / chrome (light touch, no redesign)

- `SiteHeader` logo: `Heisen Labs` (drop the italic "by " prefix that echoes bycrawford).
- `SiteFooter` logo + tagline updated.
- `TopBanner`: change "Looking for a new website?" → "Want a system, not just a site?"
- `BookCallWidget`: avatar letter `H`, label unchanged.
- Rotating "Start a project" stamp text kept.
- Keep dark theme, oklch tokens, Instrument Serif + Inter — no token changes.

## De-risk vs. bycrawford.com

- Replace the side-by-side hero-with-floating-contact-form layout on `/` with a single-column hero + CTA pair; move the inline contact form into its own band below the pillars.
- Reword any phrases that paralleled the source ("Looking for a new website?", "Available for work" dot, "Schedule a call" pill copy) to original phrasing.
- All testimonials, project titles, and FAQ wording written fresh.

## Out of scope

- No database schema changes (`contact_submissions`, `call_bookings` keep working).
- No new dependencies. No new design tokens.
- Real portfolio assets, real testimonials, real calendar — still placeholders.

## Technical notes

- Files touched: `__root.tsx`, `index.tsx`, `about.tsx`, `portfolio.tsx`, `pricing.tsx`, `contact.tsx`, `book-a-call.tsx`, `faq.tsx`, `blog.tsx`, `services.index.tsx`, `services.seo.tsx`, `sitemap[.]xml.ts`, `SiteHeader.tsx`, `SiteFooter.tsx`, `TopBanner.tsx`, `BookCallWidget.tsx`, `ContactForm.tsx` (subject options).
- Files created: `services.ai-integrations.tsx`, `services.automation.tsx`, `services.web-systems.tsx`, `services.data-pipelines.tsx`, `services.ai-agents.tsx`.
- Files deleted: `services.hosting.tsx`, `services.migration.tsx`, `services.ecommerce.tsx`, `services.scheduling.tsx`, `services.web-design.tsx`.
- `routeTree.gen.ts` regenerates automatically.

Ready to build on approval.
