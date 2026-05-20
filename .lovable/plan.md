# Heisen Labs — Immersive Experience Layer

A phased plan to layer a premium, interactive 3D/motion experience on top of the existing Heisen Labs site without breaking SSR, accessibility, or the Cloudflare Worker runtime that hosts it.

## Guiding constraints

- **Runtime**: TanStack Start on Cloudflare Workers. All 3D/audio is client-only — gated behind `useEffect` / dynamic `import()` so SSR + the sandbox preview (no `navigator.gpu`, no WebGL2 in some headless contexts) never crash.
- **Perf budget per route**: JS ≤ 250KB gz initial, LCP < 2.0s on 4G/mid mobile, INP < 200ms, 60fps desktop / 30–45fps mid mobile, ≤ 80MB GPU memory.
- **Fallback contract**: every immersive feature ships with a static/CSS fallback chosen by a `useDeviceCapability()` hook (probes `navigator.hardwareConcurrency`, `deviceMemory`, `matchMedia('(prefers-reduced-motion)')`, WebGL/WebGPU support, save-data, connection).
- **A11y**: nothing critical lives only in the 3D layer; reduced-motion disables parallax, camera flights, marquees, and scroll-driven Three.js (swap to poster image).

## Foundational design system upgrades (Phase 0)

Already partially in place — formalize before adding 3D:

- **Tokens (`src/styles.css`)**: lock 8-step type ramp via `clamp()`, a 4px spacing scale (`--space-1` … `--space-12`), elevation tokens (`--shadow-sm/md/lg/glow/inset`), radius scale, motion tokens (`--ease-out-expo`, `--dur-fast: 160ms`, `--dur-base: 280ms`, `--dur-slow: 520ms`, `--dur-cinematic: 1200ms`), and z-index scale.
- **Typography**: Instrument Serif (display) + Inter (body) + JetBrains Mono (eyebrow/metric). Fluid headings with `clamp(2.25rem, 4vw + 1rem, 5.5rem)`.
- **Layout grid**: 12-col on ≥1024, 8-col tablet, 4-col mobile; gutters via `clamp(16px, 2vw, 32px)`; section rhythm `clamp(64px, 8vw, 160px)`.
- **Motion principles**: enter = fade-in-up 280ms ease-out-expo; exit = 160ms ease-in; hover = 120ms; cinematic = ≥800ms, used sparingly. All gated by `prefers-reduced-motion`.
- **Interaction states**: hover / focus-visible (2px primary ring + 4px offset) / active / disabled / loading (shimmer) / success / error. Documented per primitive.
- **Responsive architecture**: mobile-first; container queries on cards; `content-visibility: auto` on offscreen sections; `loading="lazy"` + `decoding="async"` on non-LCP images.

## Phase 1 — Core MVP (high impact, low risk)

Ship these on every device. They define the "premium" baseline.

1. **Smooth scroll + scroll progress** — Lenis (~4KB) wrapping the existing `ScrollProgress`. Disabled on touch + reduced-motion.
2. **Scroll-triggered reveals & timelines** — GSAP + ScrollTrigger (already conceptually present via `Reveal`); upgrade to staggered headline splits, pinned section transitions on Home/About.
3. **Custom cursor** — magnetic dot + ring follower, snaps to `[data-cursor="link|view|drag"]`. Hidden on touch and reduced-motion; never replaces native focus ring.
4. **Micro-interactions** — button shine on hover, magnetic CTAs, numeric counters (`MetricsBand` already), accordion springs, image reveal masks.
5. **Page transitions** — fade + 8px lift via TanStack Router's `<Outlet>` + a `framer-motion` `AnimatePresence` wrapper at root (mode="wait"), 240ms.
6. **Cinematic typography moments** — char-by-char reveal on hero headline using a tiny custom splitter (avoid SplitText license).
7. **Foundational a11y/perf gates** — `useDeviceCapability()` hook, `<ReducedMotion>` boundary, `<ClientOnly>` wrapper, route-level `head()` with preloads.

**Stack**: GSAP + ScrollTrigger, Lenis, framer-motion (already implied), no 3D yet. Total added JS ≈ 60KB gz.

## Phase 2 — Enhanced immersive (3D, shaders, audio)

Gated behind capability checks; desktop + capable tablets get the full experience, others get Phase-1 fallbacks.

1. **Hero 3D scene** — React Three Fiber + drei. A slowly drifting low-poly "system graph" (instanced nodes + lines) reacting to mouse via `useFrame` + damped lerp. Dynamic-imported, suspense-boundaried, capped at DPR 1.5, frameloop="demand" when offscreen.
2. **Custom shader background** — single full-screen `shaderMaterial` aurora (noise + flow) behind hero. ~80 lines of GLSL, runs at half-res with `<EffectComposer>`-free pipeline to keep cost low.
3. **Scroll-driven Three.js sequence** — pinned section on Home tying scroll progress to camera dolly + node bloom. Uses GSAP ScrollTrigger to drive a single shared timeline (one rAF source, not two).
4. **Service-page 3D glyphs** — one small R3F canvas per service hero (instanced primitives, ≤ 2k tris), shared `<Canvas>` via `eventSource` portal where possible.
5. **Camera flight on `/portfolio` case study open** — modal opens with a 1.2s ease-in-out-cubic camera move + DOM crossfade.
6. **3D object projection / screen-projection effect** — drei `<MeshTransmissionMaterial>` for a hero glass shard; cheap approximation, not full refraction stack.
7. **Reactive sound design** — Web Audio API. Low-volume ambient pad (looped, < 80KB ogg) + UI clicks/hovers. Off by default; persistent unmute toggle in header; respects `prefers-reduced-motion` and autoplay policy (starts only after first user gesture).
8. **Trajectory-based motion** — bezier-driven element flights (e.g. testimonial cards arcing in) via GSAP `MotionPathPlugin`.

**Stack**: `three`, `@react-three/fiber`, `@react-three/drei`, `gsap` (+ScrollTrigger, MotionPath), `tone` or raw Web Audio. Added JS ≈ 180KB gz, lazy-loaded — never on initial Home paint.

**Perf rules**:
- One `<Canvas>` per visible section max; `frameloop="demand"` + IntersectionObserver to pause offscreen.
- DPR clamp `[1, 1.5]`; no antialias on mobile; `powerPreference: "high-performance"`.
- Instancing for any repeated geometry; merge static meshes.
- No postprocessing on mobile; bloom only if `deviceMemory ≥ 8`.
- Texture budget: ≤ 2× 1024² compressed (KTX2 if we add `gltf-transform`).

## Phase 3 — Experimental (validate before committing)

Each item gets a 1–2 day spike + measured Lighthouse/INP delta before promotion to Phase 2.

| Feature | Feasible? | Risk | Recommendation |
|---|---|---|---|
| **360° product/environment configurator** | Yes for a single hero scene | Asset weight (HDRI ≥ 1MB), GPU on mobile | Build only if a real product exists; otherwise a faked "drag-to-rotate" hero shard is 90% of the wow at 10% of the cost |
| **Spline-imported scenes** | Yes via `@splinetool/react-spline` | +200KB runtime, opaque perf, harder to optimize than hand-rolled R3F | Use Spline only for one-off marketing moments; prefer R3F for anything recurring |
| **WebGPU compute shaders** | Partial — Safari support landed 2024 but spotty; sandbox preview has no GPU adapter | Hard fallback required | Defer; revisit when >85% support. Build WebGL2 first, feature-detect WebGPU as enhancement |
| **Spatial audio (HRTF panning)** | Yes via Web Audio `PannerNode` | Easy to feel gimmicky; mobile autoplay rules | Limit to 2–3 UI cues with subtle stereo pan; no positional audio tied to scroll |
| **Cinematic guided tours** (auto camera flythrough of services) | Yes | Long animations hurt INP and feel slow on repeat visits | Make skippable, ≤ 6s, play once per session (localStorage) |
| **Physics-based cursor trails** (rapier/cannon) | Yes but heavy | +150KB, CPU cost | Replace with GPU particle trail in a shader — cheaper, prettier |

## Per-feature feasibility matrix

| Feature | Feasibility | Perf cost | Compat | Stack | Fallback |
|---|---|---|---|---|---|
| Scroll-driven R3F | High | Med-High | WebGL2 ~98% | R3F + GSAP ScrollTrigger | Static SVG aurora |
| Custom GLSL shaders | High | Low–Med | Universal WebGL2 | `shaderMaterial` (drei) | CSS gradient + noise PNG |
| Mouse-reactive 3D | High | Low | WebGL2 | R3F + damped lerp | CSS parallax on pointer |
| Custom cursor | High | Negligible | Desktop only | Vanilla + GSAP | Native cursor |
| Camera flights | High | Low | WebGL2 | GSAP timeline on `camera` | DOM crossfade |
| Spatial audio | Med | Low | All modern; needs gesture | Web Audio API | Muted by default |
| 360° configurator | Med | High | Desktop strong, mobile OK | R3F + drei `<OrbitControls>` | Image sequence on mobile |
| Screen-projection / transmission | Med | High (refraction) | WebGL2 | drei `<MeshTransmissionMaterial>` | Frosted-glass CSS |
| Trajectory motion | High | Low | All | GSAP MotionPath | Straight tween |
| Smooth scroll | High | Low | All non-touch | Lenis | Native scroll |

## Performance & fallback strategy

- **Capability tiers**: `tier-3` (desktop, ≥8GB, WebGL2 + hardware concurrency ≥ 8) → full Phase 2. `tier-2` (modern tablet/laptop) → Phase 2 without postprocessing + DPR 1. `tier-1` (mobile, low-end, save-data, reduced-motion) → Phase 1 only.
- **Budgets enforced in CI** via `size-limit` on the route chunks; fail build if hero route > 250KB gz initial.
- **Monitoring hook**: tiny `usePerfWatchdog()` measuring rolling FPS via `requestAnimationFrame` deltas — if < 30fps for 2s, downgrade tier live (lower DPR, disable shader bg).
- **SSR safety**: every 3D/audio import goes through `const Hero3D = lazy(() => import('./Hero3D.client'))` + `<Suspense fallback={<HeroPoster />}>`. Files suffixed `.client.tsx` are never touched during SSR.

## Risks

- **Worker bundle bloat**: three/R3F must be in the client chunk only — verify via build analysis; never import them in a server function or `__root.tsx` head.
- **Sandbox preview has no GPU** — code must compile and degrade, not crash. Wrap WebGPU/WebGL probes in try/catch + return tier-1.
- **Autoplay audio policies** — never start audio without explicit user gesture; persist mute state.
- **Motion sickness / a11y** — reduced-motion is a hard switch, not a softener: it must disable Lenis, camera flights, and parallax entirely.
- **License / asset risk** — no SplitText, no GSAP Club plugins unless we buy a license; use MIT alternatives.

## Recommended sequencing

1. **Week 1**: Phase 0 tokens + capability hook + Lenis + GSAP reveals + custom cursor + page transitions.
2. **Week 2**: Hero R3F scene + GLSL aurora behind hero + scroll-pinned section.
3. **Week 3**: Service-page glyphs + portfolio camera flights + ambient audio toggle + trajectory motion polish.
4. **Week 4**: Spike experimental items, measure, promote or drop.

## Out of scope (intentionally)

- Real-time multi-user 3D, AR/VR (WebXR), video-textured scenes, ML-driven personalization, server-side 3D rendering. Revisit only if the brand demands it.

Ready to build on approval — recommend starting with Phase 0 + Phase 1 in the first implementation pass.