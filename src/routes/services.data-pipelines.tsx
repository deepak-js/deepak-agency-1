import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/data-pipelines")({
  head: () => ({
    meta: [
      { title: "Data Pipelines — Heisen Labs" },
      { name: "description", content: "ETL, dashboards, and the quiet data plumbing that makes the rest of the business legible." },
      { property: "og:title", content: "Data Pipelines — Heisen Labs" },
      { property: "og:url", content: "/services/data-pipelines" },
    ],
    links: [{ rel: "canonical", href: "/services/data-pipelines" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Data Pipelines"
      title="Move data where it needs to be."
      subtitle="We build the ingest, transform, and reporting layers that turn scattered systems into one calm source of truth."
      includes={[
        "Source-to-warehouse ingestion pipelines",
        "Transformations, modelling, and quality checks",
        "Dashboards for the metrics that matter",
        "Scheduled exports and reverse-ETL",
        "Observability so you know it ran",
      ]}
      outcomes={[
        "One number, one definition, one place to look",
        "Reports that arrive on their own, on time",
        "A clean foundation for AI on top of your data",
      ]}
    />
  ),
});
