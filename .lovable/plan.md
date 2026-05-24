# Redpanda-Inspired Light Re-skin

Yes — fully feasible. It's a token swap + a few component tweaks, not a rebuild. All current routes, layouts, animations, shader backdrop, particles, etc. stay; only the surface language changes.

## What we're matching (from redpanda.com)

- **Background**: near-white with a faint cool gradient (lavender → ice blue → white).
- **Display type**: a high-contrast transitional serif (Redpanda uses a custom face — closest free Google match: **Fraunces** with `opsz` 144 + slight `wdth`, or **Instrument Serif** which we already load).
- **UI / body / nav / buttons**: a slab-ish **monospace** (closest free: **Geist Mono** or **JetBrains Mono**, which we already load).
- **Buttons**: fully pill (`rounded-full`), solid black primary, outlined ghost — mono uppercase-ish label.
- **Accent**: small coral/red pings (links in the top bar). Otherwise the palette is black + neutrals.
- **Motion**: very restrained — no neon, no aurora glow. Subtle fades only.

## Token changes (`src/styles.css`)

Flip `:root` to a light palette (keep the same variable names so nothing else changes):

- `--background` ≈ `oklch(0.985 0.005 250)` (off-white)
- `--foreground` ≈ `oklch(0.16 0.01 250)` (near-black ink)
- `--surface` / `--card` ≈ `oklch(0.99 0.004 250)` with `--border` `oklch(0.2 0 0 / 0.1)`
- `--muted-foreground` ≈ `oklch(0.45 0.01 250)`
- `--primary` → near-black `oklch(0.12 0.005 250)`, `--primary-foreground` white
- `--accent` (coral) → `oklch(0.62 0.2 25)` for the few red dots/links
- `--gradient-hero` → `radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.93 0.04 270 / 0.55), transparent 60%), linear-gradient(180deg, #fafbff, #f3f4f9)`
- Drop `--gradient-aurora` ember/indigo; replace with mono grayscale variant (used by `.text-aurora` — will quietly become a soft gray gradient).
- `--shadow-card` → much lighter (`0 10px 30px -15px oklch(0 0 0 / 0.15)`).
- `.bg-grid` / `.bg-dots` → switch the line color from `oklch(1 0 0 / 0.04)` to `oklch(0 0 0 / 0.05)` so the grid reads on white.
- `::selection` → black on light coral.

Keep `.dark` variant intact so we can offer a toggle later.

## Typography

- Keep **Instrument Serif** as `--font-serif` (already loaded, very close to Redpanda's display feel). Optionally add **Fraunces** as a closer match — one extra `<link>` in `__root.tsx`.
- Promote **JetBrains Mono** to the default body/UI face: swap `--font-sans` to the mono stack for nav, buttons, badges, body. Keep serif strictly for H1/H2/display.
- Tighten letter-spacing on display serif (`-0.03em`), loosen mono UI to `0.02em` uppercase for nav + button labels.

## Component tweaks (small, surgical)

- `src/components/ui/button.tsx`: change `rounded-md` → `rounded-full`, default size `h-10 px-6`, label `font-mono text-xs uppercase tracking-wider`. Add a `pill-outline` variant (1px black border, transparent bg).
- `SiteHeader.tsx`: switch nav links to mono uppercase, add pill container with white/blur background and subtle border to mimic the floating nav bar.
- `TopBanner.tsx`: light cream background, mono text, small pill "Watch now" CTA, coral close icon.
- `PageHero.tsx`: drop `bg-hero` dark treatment; rely on new light hero gradient + `bg-grid`. Center-align display H1 like Redpanda (currently left-aligned — keep current alignment if user prefers; configurable).
- `HeroBackdrop` (WebGL shader): swap fragment colors from ember+indigo+deep to **pale lavender + ice blue + white**, lower opacity to ~0.5. Still tier-gated.
- `CustomCursor` / `ParticleTrail`: invert to dark dot on light, lower opacity. Particles use near-black with `multiply` blend instead of `lighter`.
- `AmbientAudio` toggle button: light pill.
- `SiteFooter` / cards: light surface, hairline borders, no glow.

## Out of scope (won't change)

- Routing, content, copy, SEO/JSON-LD, server functions, Supabase, forms, admin plans — all untouched.
- No new dependencies required. Fraunces is optional (1 Google Fonts line if you want a tighter font match).

## Risks

- **Contrast regressions**: a few components hardcode opacity over dark surfaces (`bg-card-grad`, glass blur). I'll re-tune those in the same pass.
- **Custom cursor on white**: needs an inverted color or it disappears.
- **Shader colors**: if left as ember/indigo on white, they'll look muddy — must retune in the same pass.
- **Trademark/font fidelity**: Redpanda's exact display face is custom; Instrument Serif/Fraunces are the closest legal substitutes. Won't be pixel-identical.

## Deliverable order

1. Token swap in `styles.css` (light palette + gradients + grid color).
2. Button + Header + TopBanner restyle (pill + mono).
3. Shader + cursor + particles recolor for light bg.
4. Spot-check every route in preview, fix any hardcoded dark assumptions.

Ready to switch to build mode and execute when you approve.