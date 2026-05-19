import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Heisen Labs" },
      { name: "description", content: "Terms of service for working with Heisen Labs." },
      { property: "og:title", content: "Terms — Heisen Labs" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of service" subtitle="Plain words on how we work together, what we promise, and what we don't." />
      <article className="mx-auto max-w-3xl px-4 pb-24 lg:px-8">
        <Section title="Scope">
          Every engagement is governed by a written statement of work that includes scope, timeline, price, and deliverables. These terms apply where the SOW is silent.
        </Section>
        <Section title="Ownership">
          You own all code, models, prompts, and documentation we produce specifically for you, from day one. We retain ownership of generic tooling, internal libraries, and patterns we bring with us.
        </Section>
        <Section title="Payment">
          Most projects bill 40% on start, 40% at midpoint, and 20% on launch. Studio retainers are billed monthly in advance. Invoices are due net 14.
        </Section>
        <Section title="Cancellation">
          You can cancel a fixed-fee project at any time; you pay for work completed up to the cancellation date plus a 10% wind-down fee. Studio retainers can be paused or stopped with 30 days' notice.
        </Section>
        <Section title="Warranty & liability">
          We warrant our work against defects for 30 days post-launch. Our total liability under any engagement is limited to the fees you paid us for that engagement. Neither party is liable for indirect or consequential damages.
        </Section>
        <Section title="Confidentiality">
          We treat your information as confidential. We sign mutual NDAs on request and will not name you publicly without your written permission.
        </Section>
        <Section title="Governing law">
          Disputes are governed by the laws of the jurisdiction named in the SOW.
        </Section>
        <p className="mt-12 text-xs text-muted-foreground">Last updated: May 2026.</p>
      </article>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-serif text-3xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p>
    </section>
  );
}
