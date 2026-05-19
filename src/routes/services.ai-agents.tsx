import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/ai-agents")({
  head: () => ({
    meta: [
      { title: "AI Agents — Heisen Labs" },
      { name: "description", content: "Internal copilots and assistants tuned to your data." },
      { property: "og:title", content: "AI Agents — Heisen Labs" },
      { property: "og:url", content: "/services/ai-agents" },
    ],
    links: [{ rel: "canonical", href: "/services/ai-agents" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="AI Agents"
      title="Copilots that know your business."
      subtitle="Internal AI assistants grounded in your docs, your data, and your guardrails — that actually save your team time."
      metrics={[
        { value: "0.4s", label: "p95 response" },
        { value: "+41%", label: "Search satisfaction" },
        { value: "1,840h", label: "Saved annually" },
      ]}
      includes={[
        "RAG architecture over your private corpus",
        "Tool-using agents with explicit scopes",
        "Evaluation harness with real-world tasks",
        "Citations, escalation paths, and audit logs",
        "Slack, web, or in-product surfaces",
      ]}
      outcomes={[
        "An assistant your team trusts and reaches for",
        "Faster answers, with the source attached",
        "A measurable reduction in repeat support load",
      ]}
      process={[
        { step: "01", title: "Scope", desc: "We pick the jobs the agent will own and the ones it will explicitly hand off." },
        { step: "02", title: "Ground", desc: "Retrieval, ranking, and prompt design tuned against a real eval set you can audit." },
        { step: "03", title: "Ship", desc: "Production deployment with citations, telemetry, and human escalation built in." },
        { step: "04", title: "Tune", desc: "We watch real conversations and tighten the rough edges every two weeks." },
      ]}
      caseStudy={{ client: "Verdant Co", result: "1,840 hours saved per year", quote: "Two analysts now do the work of six — with better citations." }}
      faqs={[
        { q: "What's stopping it from hallucinating?", a: "Retrieval with citations, evaluation harnesses, refusal paths, and confidence-scored escalation. We measure hallucination rate every release." },
        { q: "Where does the agent live?", a: "Wherever your team already works — Slack, a web app, embedded in your product. Same brain, different surfaces." },
      ]}
      related={[
        { title: "AI Integrations", to: "/services/ai-integrations" },
        { title: "Data Pipelines", to: "/services/data-pipelines" },
        { title: "Automation", to: "/services/automation" },
      ]}
    />
  ),
});
