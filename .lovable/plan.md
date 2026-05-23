# Phase 3 Plan — Validate, Harden, then Ship Experimental Layer

Before adding more 3D, we lock the foundation: functional QA across every page, an admin/data integrity pass, and a full SEO/AEO/LLM-discoverability audit. Then we ship Phase 3 experimental features behind capability gates.

---

## Part A — Functional QA & Validation Pass

### A1. Navigation & link audit
- Walk every route (`/`, `/about`, `/services` + 6 sub-routes, `/portfolio`, `/pricing`, `/blog` + `$slug`, `/faq`, `/contact`, `/book-a-call`, `/privacy`, `/terms`) in `SiteHeader`, `SiteFooter`, mega-menu, and inline CTAs.
- Verify every `<Link to="…">` resolves, no dead anchors, and active states render.
- Check breadcrumbs and cross-page interlinking (services ↔ portfolio ↔ blog ↔ contact).
- Mobile menu open/close, keyboard nav, focus trap, ESC to close.

### A2. Forms end-to-end
- **ContactForm** → `contact_submissions` insert; success + error toasts; field validation.
- **BookCallWidget** (3-step funnel) → `call_bookings` insert with goal + details.
- **NewsletterForm** → `contact_submissions` insert (or dedicated table) with `subject: "newsletter"`.
- Verify rows appear via `supabase--read_query` after each test submission.
- RLS: confirm anon insert works, anon select blocked.

### A3. Admin / data visibility
- No admin dashboard exists yet. Add a minimal protected `/admin` route (under `_authenticated` layout) listing recent `contact_submissions` and `call_bookings` via `createServerFn` + `requireSupabaseAuth`, with a `has_role` check (new `user_roles` table + `app_role` enum + `has_role()` security-definer function).
- Add login page (email/password + Google via Lovable broker; call `configure_social_auth`).
- Confirm data integrity: created_at ordering, no PII leakage to anon.

### A4. Responsive & cross-device
- Test viewports: 1920, 1366, 1024, 820, 414, 360 via browser tools.
- Check Phase 1/2 features degrade: cursor hidden on touch, Lenis disabled on touch + reduced-motion, R3F hero swaps to poster on tier-1.
- Verify `prefers-reduced-motion`: no parallax, no marquee, no camera flights.

### A5. Performance & regression
- Run `browser--performance_profile` on `/`, `/portfolio`, `/services/ai-agents`.
- Confirm JS budget ≤ 250KB gz/route; hero R3F lazy-loaded (not in initial chunk).
- Lighthouse-style checks: LCP < 2.0s, INP < 200ms, CLS < 0.1.
- Console + network: no 404s, no hydration mismatches, no uncaught errors.

---

## Part B — SEO / AEO / LLM Discoverability Audit

### B1. Technical SEO
- **Per-route `head()`**: confirm unique title (<60 chars), description (<160 chars), og:title, og:description, og:url on every route. Add where missing.
- **Canonical**: leaf-only `<link rel="canonical">` (not root — avoid TanStack dedup bug).
- **`sitemap.xml`**: regenerate to include all current routes + dynamic blog slugs from `blog-posts.ts`.
- **`robots.txt`**: ensure `Allow: /` + sitemap reference once domain is set.
- **Single H1 per page**, semantic landmarks (`<main>`, `<nav>`, `<footer>`), alt text on every image.
- **Internal linking**: each service page links to ≥2 related services + portfolio case studies + contact CTA.

### B2. Structured data (JSON-LD)
- Root: `Organization` + `WebSite` with `SearchAction`.
- `/`: add `Service` items for the 6 service pillars.
- Service pages: `Service` schema with `provider`, `areaServed`, `offers`.
- `/portfolio/$slug` modal context → `CreativeWork` / `CaseStudy`.
- Blog posts: `Article` with headline, datePublished, author, image.
- `/faq`: `FAQPage` with each Q&A as `mainEntity`.
- `/pricing`: `Product` + `Offer` per tier.
- `/contact`, `/book-a-call`: `ContactPage` + `LocalBusiness` if applicable.
- Deep routes: `BreadcrumbList`.

### B3. Social / Open Graph
- og:type per route (`website` default, `article` for blog).
- og:image: only where a real image exists; otherwise omit (no generic placeholders).
- Twitter card meta (`twitter:card="summary_large_image"`) on routes with og:image.

### B4. AEO / LLM discoverability
- **Answer-first copy**: each service page opens with a 1-sentence direct answer to "What is X / what does Heisen Labs do for X?" before marketing prose.
- **FAQ density**: expand `/faq` to ≥12 high-intent questions with concise, citation-friendly answers; mirror key Q&As inline on service pages with `FAQPage` schema.
- **Semantic chunking**: every section gets an `id` and a clear H2 phrased as a question or noun phrase (LLM crawlers chunk by heading).
- **Author/entity signals**: add `author` + `sameAs` (LinkedIn, GitHub, X) on root Organization JSON-LD.
- **`llms.txt`** at `/llms.txt` (server route) summarizing the brand, services, and key URLs in markdown for LLM crawlers (emerging convention).
- **Clear pricing in text** (not images) so LLMs can quote it.

### B5. Core Web Vitals
- Preload LCP image per route (hero poster) via `head().links`.
- Defer R3F + GSAP + Lenis to post-LCP; `<HeroBackdrop>` mounts after first paint.
- `content-visibility: auto` on offscreen sections.
- Font: `display: swap` on Instrument Serif + Inter; preload only the display weight.
- Image formats: WebP/AVIF for portfolio thumbnails.

### B6. Crawlability
- No `noindex` anywhere except `/admin`.
- Verify all routes return 200; no client-only redirects on indexable URLs.
- Add `<link rel="alternate" hreflang="en">` if multi-locale considered later (skip for now).

---

## Part C — Phase 3 Experimental Implementation

Ship only after A + B are green. Each spike: build → measure → keep or drop.

### C1. Promoted to ship
1. **Cinematic guided tour** (skippable, ≤6s, once per session via localStorage) — auto camera flight across hero R3F scene introducing the 3 service pillars.
2. **Subtle spatial audio** — 2 UI cues (hover, success) with light stereo pan via Web Audio `PannerNode`; muted by default, persistent toggle in header.
3. **GPU particle cursor trail** (replacing physics-based) — shader-driven trail on `tier-3` only.

### C2. Spike & measure (keep if INP delta < 30ms, JS delta < 40KB gz)
4. **Spline hero variant** for `/` A/B — measure vs hand-rolled R3F; keep only if wow justifies +200KB.
5. **WebGPU enhancement path** — feature-detect `navigator.gpu`; if present, swap shader backdrop to WebGPU compute version; WebGL2 stays default.
6. **Drag-to-rotate hero shard** (faked 360° configurator) using `<MeshTransmissionMaterial>` already in Phase 2.

### C3. Dropped (documented, not built)
- Real 360° product configurator — no real product asset.
- Physics cursor (rapier) — replaced by GPU particle approach.
- Positional audio tied to scroll — gimmicky, hurts INP.

---

## Technical details

**New files**
- `src/routes/_authenticated.tsx` (layout with `beforeLoad` auth gate)
- `src/routes/_authenticated/admin.tsx` (submissions + bookings dashboard)
- `src/routes/login.tsx`
- `src/lib/admin.functions.ts` (serverFn reads, `requireSupabaseAuth` + role check)
- `src/routes/llms[.]txt.ts` (server route, markdown response)
- `src/components/site/AudioToggle.tsx`, `GuidedTour.client.tsx`, `ParticleTrail.client.tsx`
- `src/components/site/FaqSchema.tsx`, `ServiceSchema.tsx`, `ArticleSchema.tsx`

**Edited files**
- All route files: add/refine `head()` meta + JSON-LD.
- `src/routes/__root.tsx`: Organization + WebSite JSON-LD, audio toggle, ensure auth state listener invalidates router + react-query cache.
- `src/routes/sitemap[.]xml.ts`: include blog slugs from `blog-posts.ts`.
- `src/routes/faq.tsx`: expand to 12+ Q&As + FAQPage schema.
- Each service page: opening answer sentence + inline FAQ + Service schema.
- `src/components/site/SiteHeader.tsx`: audio toggle, admin link when authed+role.

**Database migration**
- `app_role` enum (`admin`, `user`).
- `user_roles` table (id, user_id → auth.users, role, unique(user_id, role)) + RLS.
- `has_role(_user_id uuid, _role app_role)` SECURITY DEFINER function.
- RLS policy: only `has_role(auth.uid(), 'admin')` can SELECT from `contact_submissions` and `call_bookings` (replace current `authenticated → true` policies).

**Auth**
- Email/password + Google via Lovable broker; call `supabase--configure_social_auth` with `["google"]`.
- Do NOT auto-confirm email signups.

**Stack additions**
- None for QA/SEO (uses existing libs).
- Phase 3: no new deps (Web Audio is native, particle trail reuses three, Spline only if approved after spike).

---

## Sequencing

1. Part A QA sweep → fix any defects found.
2. Database migration (roles) → admin + login routes → verify admin data flow.
3. Part B SEO pass (meta, JSON-LD, sitemap, FAQ expansion, llms.txt).
4. Re-run Lighthouse / performance profile.
5. Part C1 ship → measure → C2 spikes one at a time.

Out of scope: multi-locale, AR/VR, ML personalization, real-time collab 3D.
