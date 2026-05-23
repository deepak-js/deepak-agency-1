import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/data-pipelines")({
  head: () => ({
    meta: [
      { title: "Data Pipelines — Heisen Labs" },
      { name: "description", content: "Ingest, transform, and report on one source of truth." },
      { property: "og:title", content: "Data Pipelines — Heisen Labs" },
      { property: "og:description", content: "Heisen Labs — boutique AI and automation studio." },
      { property: "og:url", content: "/services/data-pipelines" },
    ],
    links: [{ rel: "canonical", href: "/services/data-pipelines" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Data Pipelines"
      title="One source of truth. Finally."
      subtitle="We connect your scattered sources, model them in a warehouse you can trust, and put the right numbers in the hands of the right people."
      metrics={[
        { value: "11 → 1", label: "Dashboards consolidated" },
        { value: "−9d", label: "Faster month-end close" },
        { value: "100%", label: "Audit-ready lineage" },
      ]}
      includes={[
        "Source connectors and ingestion (Airbyte, Fivetran, custom)",
        "Warehouse modelling (dbt or similar)",
        "Canonical metric layer",
        "Dashboards and alerting on drift",
        "Documentation and data dictionary",
      ]}
      outcomes={[
        "One number, not three. Everyone aligned on what 'revenue' means",
        "Pipelines that fail loudly when sources break",
        "An analytics layer your team can extend without us",
      ]}
      process={[
        { step: "01", title: "Inventory", desc: "We map every source, every destination, and every place a number is calculated today." },
        { step: "02", title: "Model", desc: "Staging → marts → metrics. Written down, tested, version-controlled." },
        { step: "03", title: "Ship", desc: "Pipelines, dashboards, and alerts running in your warehouse, owned by your team." },
        { step: "04", title: "Maintain", desc: "Optional retainer for source changes, new metrics, and analyst on-call." },
      ]}
      caseStudy={{ client: "Polaris OS", result: "Month-end close: 14d → 5d", quote: "The close runs in days, not weeks. Audit trail is automatic." }}
      faqs={[
        { q: "Which warehouses do you support?", a: "BigQuery, Snowflake, Postgres, Redshift, Databricks. We pick based on your scale and existing investments." },
        { q: "Do we need a data team to maintain this?", a: "No. Most clients run their pipelines with engineering or ops support. We document everything so handoff is real." },
      ]}
      related={[
        { title: "Automation", to: "/services/automation" },
        { title: "AI Agents", to: "/services/ai-agents" },
        { title: "SEO", to: "/services/seo" },
      ]}
    />
  ),
});
