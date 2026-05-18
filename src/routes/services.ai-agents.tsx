import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/ai-agents")({
  head: () => ({
    meta: [
      { title: "AI Agents — Heisen Labs" },
      { name: "description", content: "Custom assistants, RAG, and internal copilots tuned to your data and tools." },
      { property: "og:title", content: "AI Agents — Heisen Labs" },
      { property: "og:url", content: "/services/ai-agents" },
    ],
    links: [{ rel: "canonical", href: "/services/ai-agents" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="AI Agents"
      title="Assistants that know your business."
      subtitle="Internal copilots, support agents, and research bots — grounded in your data, scoped to real jobs, and safe to ship."
      includes={[
        "Retrieval-augmented generation over your sources",
        "Tool-use and function calling against your APIs",
        "Evaluation suites so quality is measurable",
        "Access controls and audit trails",
        "Slack, web, or in-app delivery",
      ]}
      outcomes={[
        "An assistant your team actually uses",
        "Faster answers without paging a human",
        "AI behaviour you can monitor and improve",
      ]}
    />
  ),
});
