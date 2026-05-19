import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/web-systems")({
  head: () => ({
    meta: [
      { title: "Web Systems — Heisen Labs" },
      { name: "description", content: "Fast, accessible websites built to rank and convert." },
      { property: "og:title", content: "Web Systems — Heisen Labs" },
      { property: "og:url", content: "/services/web-systems" },
    ],
    links: [{ rel: "canonical", href: "/services/web-systems" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Web Systems"
      title="Sites engineered to rank, convert, and run themselves."
      subtitle="Not brochures dressed up as products. We build web systems with performance, content tooling, and growth instrumentation in the foundations."
      metrics={[
        { value: "0.9s", label: "Typical LCP" },
        { value: "3×", label: "Organic traffic" },
        { value: "+220%", label: "Lead form completions" },
      ]}
      includes={[
        "Brand-aligned custom design system",
        "TanStack Start / React build with SSR",
        "CMS configured for non-technical editors",
        "Performance, accessibility, and SEO baseline",
        "Analytics, event tracking, and dashboards",
      ]}
      outcomes={[
        "A site your team can update without calling us",
        "Pages that load in under a second on real devices",
        "A clear, measurable path from visit to enquiry",
      ]}
      process={[
        { step: "01", title: "Strategy", desc: "Audience, jobs-to-be-done, conversion paths, content architecture." },
        { step: "02", title: "Design", desc: "A custom system, not a template. Components, type, motion, accessibility." },
        { step: "03", title: "Build", desc: "Production code with SSR, edge caching, and instrumentation from day one." },
        { step: "04", title: "Launch", desc: "Migration, redirects, monitoring, and 30 days of post-launch tuning." },
      ]}
      caseStudy={{ client: "Calder & Bloom", result: "LCP 4.2s → 0.9s · 3× organic traffic", quote: "New site, new pipeline, new ranking. The system has been quietly running ever since." }}
      faqs={[
        { q: "Can you work with our existing CMS?", a: "Yes — we've shipped on Sanity, Contentful, Payload, WordPress, and headless Shopify. We'll recommend if there's a better fit, but we won't force a migration." },
        { q: "Do you handle hosting?", a: "We deploy to your account on Vercel, Cloudflare, or AWS, and hand over keys. We can also operate it for you under a retainer." },
      ]}
      related={[
        { title: "SEO", to: "/services/seo" },
        { title: "Automation", to: "/services/automation" },
        { title: "AI Integrations", to: "/services/ai-integrations" },
      ]}
    />
  ),
});
