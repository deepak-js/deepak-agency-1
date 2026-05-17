import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/web-design")({
  head: () => ({
    meta: [
      { title: "Website Design — HeisenLabs" },
      { name: "description", content: "Bespoke website design, built from scratch for your business." },
      { property: "og:title", content: "Website Design — HeisenLabs" },
      { property: "og:url", content: "/services/web-design" },
    ],
    links: [{ rel: "canonical", href: "/services/web-design" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Website Design"
      title="Bespoke websites, built from scratch."
      subtitle="Crafted layouts, original art direction, and code that performs. No template, no compromise."
      includes={[
        "Discovery & strategy workshop",
        "Custom UI/UX design across all breakpoints",
        "Brand-aligned typography and motion",
        "Performant front-end implementation",
        "Built-in SEO foundations",
        "Pre-launch QA and post-launch handover",
      ]}
      outcomes={[
        "A site that looks unmistakably yours",
        "Sub-second page loads on real devices",
        "Higher engagement and conversion",
        "A foundation that's easy to maintain and extend",
      ]}
    />
  ),
});
