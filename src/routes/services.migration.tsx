import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/migration")({
  head: () => ({
    meta: [
      { title: "Website Migration — HeisenLabs" },
      { name: "description", content: "Move your existing site without losing rankings, content, or sleep." },
      { property: "og:title", content: "Website Migration — HeisenLabs" },
      { property: "og:url", content: "/services/migration" },
    ],
    links: [{ rel: "canonical", href: "/services/migration" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Migration"
      title="A smooth move, no surprises."
      subtitle="We migrate content, redirects, SEO, and integrations carefully — with rollback plans for everything."
      includes={[
        "Full content audit and inventory",
        "URL mapping and 301 redirect plan",
        "Analytics, tag, and form preservation",
        "Staging environment for sign-off",
        "Cutover plan with rollback",
      ]}
      outcomes={[
        "Zero loss in organic traffic",
        "A faster, more maintainable platform",
        "Documented setup your team can own",
      ]}
    />
  ),
});
