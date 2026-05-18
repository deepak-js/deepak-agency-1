import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What kinds of projects do you take on?", a: "Web systems, automations, AI integrations, internal agents, and the data pipelines that feed them. If it's a system that needs to keep running after launch, it's in scope." },
  { q: "Which AI models do you use?", a: "We're model-agnostic. We pick the right provider for the job — OpenAI, Anthropic, Google, or open-weights — based on cost, latency, accuracy, and where your data is allowed to live." },
  { q: "Will my data be used to train anyone's model?", a: "No. We default to provider settings and contractual terms that exclude your data from training. We document the data path so you can audit it." },
  { q: "Do you offer ongoing support after launch?", a: "Yes. Most clients move into a lightweight partnership for monitoring, tuning, and the next round of systems. There's no lock-in." },
  { q: "How long does a typical project take?", a: "A focused web system is 3–6 weeks. A first automation or AI integration usually lands in 4–8 weeks. Larger system roadmaps run in monthly cadences." },
  { q: "Can you work with our existing stack?", a: "Almost certainly. We've integrated with most major CRMs, CMSs, data warehouses, and internal tools. If something is genuinely incompatible, we'll tell you on the first call." },
  { q: "Where are you based?", a: "We're a distributed team and work async by default. We schedule deep-work calls in your time zone, not ours." },
];

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
          mainEntity: faqs.map((f) => ({
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
      <PageHero eyebrow="FAQ" title="The questions we get most." />
      <section className="mx-auto max-w-3xl px-4 pb-24 lg:px-8">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q-${i}`} className="rounded-2xl border border-border/50 bg-card/60 px-5">
              <AccordionTrigger className="text-left text-base text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
