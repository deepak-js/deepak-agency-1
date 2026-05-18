import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO — Heisen Labs" },
      { name: "description", content: "Technical and content SEO that helps the right people find you." },
      { property: "og:title", content: "SEO — Heisen Labs" },
      { property: "og:url", content: "/services/seo" },
    ],
    links: [{ rel: "canonical", href: "/services/seo" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="SEO"
      title="Rank for the queries that matter."
      subtitle="A pragmatic, no-jargon approach to search — built on technical fundamentals and content that actually answers the question."
      includes={[
        "Full technical SEO audit",
        "Keyword research grounded in real intent",
        "On-page optimisation across key templates",
        "Schema, sitemaps, robots, and indexation",
        "Monthly reporting in plain English",
      ]}
      outcomes={[
        "Higher rankings for the queries that drive revenue",
        "Faster crawl and clean indexation",
        "Clear, honest reporting — no vanity metrics",
      ]}
    />
  ),
});
