import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/web-systems")({
  head: () => ({
    meta: [
      { title: "Web Systems — Heisen Labs" },
      { name: "description", content: "High-performance websites engineered to rank, convert, and scale." },
      { property: "og:title", content: "Web Systems — Heisen Labs" },
      { property: "og:url", content: "/services/web-systems" },
    ],
    links: [{ rel: "canonical", href: "/services/web-systems" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Web Systems"
      title="Websites built like systems, not brochures."
      subtitle="Fast, accessible, search-friendly sites with the plumbing to grow — CMS, integrations, analytics, the works."
      includes={[
        "Custom design and front-end build",
        "Headless CMS configured for your team",
        "Core Web Vitals tuned to green across the board",
        "Analytics, events, and conversion tracking",
        "Integration points for CRM, payments, and AI",
      ]}
      outcomes={[
        "A site that loads instantly and ranks well",
        "Editors who can publish without a developer",
        "A foundation that grows with the business",
      ]}
    />
  ),
});
