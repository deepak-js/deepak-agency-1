import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — HeisenLabs" },
      { name: "description", content: "Frequently asked questions about working with HeisenLabs." },
      { property: "og:title", content: "FAQ — HeisenLabs" },
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

const faqs = [
  { q: "How long does a typical project take?", a: "Most websites launch in 4–8 weeks from kickoff, depending on scope, content readiness, and round-trip feedback." },
  { q: "Do you work with clients outside your country?", a: "Yes — we've worked with teams across North America, Europe, Asia, and Australia. We schedule meetings around your timezone." },
  { q: "Will I be able to update the site myself?", a: "Absolutely. We hand over a clear CMS setup with documentation so non-technical team members can publish and edit confidently." },
  { q: "Do you offer ongoing support?", a: "Yes. Monthly care plans include backups, monitoring, performance tuning, and a block of hours for changes." },
  { q: "What if I already have a designer?", a: "Happy to build only. Send us the files — we'll do a feasibility review and quote the build." },
  { q: "How does payment work?", a: "A 50% deposit kicks the project off and the remainder is due at launch. Larger projects can be split into milestones." },
];

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Your questions, answered." />
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
