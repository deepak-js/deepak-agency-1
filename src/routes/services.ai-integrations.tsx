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
      metrics={[
        { value: "4×", label: "Faster reply latency" },
        { value: "−61%", label: "Manual triage" },
        { value: "30d", label: "First value in" },
      ]}
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
      process={[
        { step: "01", title: "Map", desc: "We audit the workflows where AI would move a metric and rule out the ones it wouldn't." },
        { step: "02", title: "Design", desc: "We pick the model, the surface, and the guardrails — written down before any code ships." },
        { step: "03", title: "Build", desc: "We wire it into your tools with evals, observability, and cost controls from day one." },
        { step: "04", title: "Operate", desc: "We tune prompts, swap models, and tighten guardrails as your usage grows." },
      ]}
      caseStudy={{ client: "Atlas Audio", result: "+38% qualified leads in one quarter", quote: "We finally have an internal assistant that knows our docs and doesn't make things up." }}
      faqs={[
        { q: "Which providers do you work with?", a: "OpenAI, Anthropic, Google, Mistral, and open-weights via Together or your own infra. We pick per job, not per fashion." },
        { q: "How do you control cost?", a: "Per-endpoint budgets, cached responses where safe, smaller models for cheap jobs, and dashboards that tell you what's spending what." },
      ]}
      related={[
        { title: "AI Agents", to: "/services/ai-agents" },
        { title: "Automation", to: "/services/automation" },
        { title: "Data Pipelines", to: "/services/data-pipelines" },
      ]}
    />
  ),
});
