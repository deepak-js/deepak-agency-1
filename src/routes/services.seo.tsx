import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO — Heisen Labs" },
      { name: "description", content: "Technical and content SEO grounded in real search intent." },
      { property: "og:title", content: "SEO — Heisen Labs" },
      { property: "og:url", content: "/services/seo" },
    ],
    links: [{ rel: "canonical", href: "/services/seo" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="SEO"
      title="SEO as a system, not a checklist."
      subtitle="We build the technical foundations and the content pipeline that compound — so rankings grow on their own, not on the back of a one-time audit."
      metrics={[
        { value: "3×", label: "Organic traffic" },
        { value: "+92", label: "Avg. keywords ranked" },
        { value: "6 mo", label: "Typical payback" },
      ]}
      includes={[
        "Technical SEO audit and fixes",
        "Information architecture and internal linking",
        "Content brief generator (AI-assisted, human-edited)",
        "Schema markup and Core Web Vitals tuning",
        "Reporting cadence with real attribution",
      ]}
      outcomes={[
        "Compounding organic traffic, not flat lines",
        "Content your team can publish without bottlenecks",
        "Clear visibility into what's working and what isn't",
      ]}
      process={[
        { step: "01", title: "Audit", desc: "Technical state, content gaps, competitive landscape — written into a prioritized plan." },
        { step: "02", title: "Fix", desc: "Technical foundations first. Speed, schema, crawlability, internal links." },
        { step: "03", title: "Publish", desc: "Content pipeline with briefs, drafts, and editor review — supported by AI, owned by humans." },
        { step: "04", title: "Measure", desc: "Monthly reports tied to revenue, not vanity. We re-prioritize based on what actually moved." },
      ]}
      faqs={[
        { q: "Do you write the content?", a: "We generate briefs and first drafts; a subject-matter expert on your side or ours edits to ship quality. AI-only content gets you AI-only results." },
        { q: "How long until results?", a: "Technical fixes show within weeks. Compounding content gains land in 3–6 months." },
      ]}
      related={[
        { title: "Web Systems", to: "/services/web-systems" },
        { title: "Data Pipelines", to: "/services/data-pipelines" },
        { title: "AI Integrations", to: "/services/ai-integrations" },
      ]}
    />
  ),
});
