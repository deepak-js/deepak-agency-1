import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/ai-integrations")({
  head: () => ({
    meta: [
      { title: "AI Integrations — Heisen Labs" },
      { name: "description", content: "LLMs and AI APIs wired into the tools your team already uses." },
      { property: "og:title", content: "AI Integrations — Heisen Labs" },
      { property: "og:url", content: "/services/ai-integrations" },
    ],
    links: [{ rel: "canonical", href: "/services/ai-integrations" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="AI Integrations"
      title="AI that plugs into the work you already do."
      subtitle="We connect modern models to the tools your team lives in — CRMs, inboxes, docs, internal apps — so AI shows up where decisions actually happen."
      includes={[
        "Model selection and provider strategy",
        "Secure API wiring into your existing stack",
        "Prompt engineering and evaluation harnesses",
        "Guardrails, fallbacks, and cost controls",
        "Internal documentation and team handoff",
      ]}
      outcomes={[
        "AI features that ship, not demos that linger",
        "Predictable cost and latency under real usage",
        "A team that trusts the system because it just works",
      ]}
    />
  ),
});
