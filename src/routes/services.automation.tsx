import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/automation")({
  head: () => ({
    meta: [
      { title: "Automation — Heisen Labs" },
      { name: "description", content: "Workflows that run overnight. We design and ship the automations that quietly do the work." },
      { property: "og:title", content: "Automation — Heisen Labs" },
      { property: "og:url", content: "/services/automation" },
    ],
    links: [{ rel: "canonical", href: "/services/automation" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Automation"
      title="Workflows that run while you sleep."
      subtitle="We map the busywork, then replace it with reliable systems built on n8n, Zapier, or custom code — whichever fits the job."
      includes={[
        "Process discovery and workflow mapping",
        "n8n, Zapier, Make, or custom-code builds",
        "Scheduled and event-driven pipelines",
        "Error handling, retries, and alerting",
        "Lightweight admin dashboards where you need them",
      ]}
      outcomes={[
        "Hours of manual work removed every week",
        "Fewer dropped balls and copy-paste errors",
        "A back office that scales without more headcount",
      ]}
    />
  ),
});
