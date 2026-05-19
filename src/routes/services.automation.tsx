import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/automation")({
  head: () => ({
    meta: [
      { title: "Automation — Heisen Labs" },
      { name: "description", content: "Workflows that quietly run the work while you sleep." },
      { property: "og:title", content: "Automation — Heisen Labs" },
      { property: "og:url", content: "/services/automation" },
    ],
    links: [{ rel: "canonical", href: "/services/automation" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Automation"
      title="The boring system that takes the busywork."
      subtitle="We design event-driven workflows that move data, trigger actions, and quietly run the ops your team shouldn't be doing by hand."
      metrics={[
        { value: "−72%", label: "Manual ops time" },
        { value: "1,840h", label: "Saved per year" },
        { value: "99.9%", label: "Workflow uptime" },
      ]}
      includes={[
        "Workflow mapping and ROI scoping",
        "Event-driven orchestration (Temporal, queues, schedulers)",
        "CRM, billing, and ops tool integrations",
        "Structured logging, alerting, retry policies",
        "Runbooks and team handoff",
      ]}
      outcomes={[
        "Hours back on your team's calendar, every week",
        "Workflows that fail loudly and recover quietly",
        "An operations layer you can extend without us",
      ]}
      process={[
        { step: "01", title: "Audit", desc: "We shadow the workflow and write down every step — including the ones nobody remembers." },
        { step: "02", title: "Architect", desc: "We model the workflow, pick the orchestrator, and define every failure mode." },
        { step: "03", title: "Build", desc: "Production-grade workflows with retries, observability, and human-in-the-loop where it counts." },
        { step: "04", title: "Operate", desc: "Optional retainer for tuning, scaling, and the next workflow." },
      ]}
      caseStudy={{ client: "Northwind Labs", result: "−72% manual ops time", quote: "They replaced four spreadsheets and a daily standup with one quiet workflow." }}
      faqs={[
        { q: "What tools do you integrate with?", a: "Salesforce, HubSpot, Stripe, Slack, Notion, Linear, most warehouses, most ticketing systems. If it has an API, we probably know it." },
        { q: "What happens when something fails?", a: "Structured alerts to Slack or PagerDuty, retries with backoff, dead-letter queues for review. Most failures we notice before you do." },
      ]}
      related={[
        { title: "AI Integrations", to: "/services/ai-integrations" },
        { title: "Data Pipelines", to: "/services/data-pipelines" },
        { title: "AI Agents", to: "/services/ai-agents" },
      ]}
    />
  ),
});
