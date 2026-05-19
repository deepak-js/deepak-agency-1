import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const groups = [
  {
    title: "General",
    items: [
      { q: "What kinds of projects do you take on?", a: "Web systems, automations, AI integrations, internal agents, and the data pipelines that feed them. If it's a system that needs to keep running after launch, it's in scope." },
      { q: "How small or large can a project be?", a: "From a single AI workflow (~2 weeks) to a multi-quarter studio engagement. We don't do throwaway prototypes." },
      { q: "Where are you based?", a: "We're a distributed team and work async by default. We schedule deep-work calls in your time zone, not ours." },
      { q: "How long does a typical project take?", a: "A focused web system is 3–6 weeks. A first automation or AI integration usually lands in 4–8 weeks. Studio engagements run monthly." },
    ],
  },
  {
    title: "AI",
    items: [
      { q: "Which AI models do you use?", a: "We're model-agnostic. We pick the right provider for the job — OpenAI, Anthropic, Google, or open-weights — based on cost, latency, accuracy, and where your data is allowed to live." },
      { q: "How do you handle hallucinations?", a: "Retrieval-augmented generation with explicit citations, evaluation harnesses, and answer-or-escalate guardrails. We test against real questions, not toy ones." },
      { q: "Will my data be used to train anyone's model?", a: "No. We default to provider settings and contractual terms that exclude your data from training. We document the data path so you can audit it." },
      { q: "Can you fine-tune models?", a: "Yes, when it actually moves a metric. Most teams get further faster with better prompts, retrieval, and tools — we recommend fine-tuning only when measurement supports it." },
    ],
  },
  {
    title: "Automation",
    items: [
      { q: "Which tools do you integrate with?", a: "Most major CRMs, CMSs, data warehouses, ticketing systems, and messaging platforms. If something is genuinely incompatible, we'll tell you on the first call." },
      { q: "What happens when a workflow fails?", a: "Every workflow ships with structured logging, retries with backoff, and Slack or email alerts. Most failures are noticed by us before the client does." },
      { q: "Can we run automations on our own infrastructure?", a: "Yes. We're happy to deploy into your cloud, your VPC, or your existing orchestrator. Default is whatever is simplest and cheapest for your scale." },
    ],
  },
  {
    title: "Engagement",
    items: [
      { q: "How do we get started?", a: "Book a 30-minute call. If there's fit, we send a written proposal with scope, timeline, and price within 48 hours." },
      { q: "Do you offer ongoing support after launch?", a: "Yes. Most clients move into a lightweight partnership for monitoring, tuning, and the next round of systems. There's no lock-in." },
      { q: "Can we work with your team day-to-day?", a: "Yes. Studio engagements include shared docs, weekly demos, and a Slack channel with same-day response in your business hours." },
      { q: "Who owns the IP?", a: "You do. All code, models, prompts, and documentation are yours from day one." },
    ],
  },
  {
    title: "Security & Data",
    items: [
      { q: "Do you sign NDAs?", a: "Yes, mutual NDAs are standard before scoping calls. We can sign yours or send ours." },
      { q: "Are you SOC 2 compliant?", a: "We follow SOC 2-aware practices internally. We're happy to complete your vendor security questionnaire and align with your controls." },
      { q: "Where does customer data live?", a: "By default in your tenant, your warehouse, or your cloud. We don't centralize client data on our side unless explicitly contracted." },
    ],
  },
];

const flatFaqs = groups.flatMap((g) => g.items);

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Heisen Labs" },
      { name: "description", content: "Common questions about working with Heisen Labs on AI, automation, and web systems." },
      { property: "og:title", content: "FAQ — Heisen Labs" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: flatFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="The questions we get most."
        subtitle="If yours isn't here, send a note — we reply within one business day."
      />
      <section className="mx-auto max-w-3xl px-4 pb-24 lg:px-8">
        <div className="space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-mono text-xs uppercase tracking-[0.2em] text-amber-accent">{g.title}</p>
              <Accordion type="single" collapsible className="mt-4 space-y-3">
                {g.items.map((f, i) => (
                  <AccordionItem key={f.q} value={`${g.title}-${i}`} className="rounded-2xl border border-border/50 bg-card/60 px-5">
                    <AccordionTrigger className="text-left text-base text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
