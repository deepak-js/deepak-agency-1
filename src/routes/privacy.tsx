import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Heisen Labs" },
      { name: "description", content: "How Heisen Labs handles your data and the data of your customers." },
      { property: "og:title", content: "Privacy — Heisen Labs" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" subtitle="What we collect, why we collect it, and how we keep it safe." />
      <article className="mx-auto max-w-3xl px-4 pb-24 lg:px-8 prose-content">
        <Section title="What we collect">
          We collect the information you give us when you contact us, book a call, or subscribe to field notes — typically your name, email, and the message you send.
          We log basic, anonymized analytics about how the site is used (page views, referrers, device class) to improve it. We do not sell personal data, ever.
        </Section>
        <Section title="How we use it">
          We use your information to respond to you, schedule calls, send the occasional field note if you've subscribed, and run the site. That's it.
          Where applicable, we rely on legitimate interest (replying to your enquiry) or your explicit consent (newsletter, cookies) as the legal basis.
        </Section>
        <Section title="Client data">
          When we build systems on your behalf, your data stays in your tenant, your warehouse, or your cloud by default. We don't centralize client data unless explicitly contracted to do so, and we document the data path so you can audit it.
          Provider settings are configured to exclude your data from model training wherever the option exists.
        </Section>
        <Section title="Your rights">
          You can request access to, correction of, or deletion of any personal data we hold about you by emailing hello@heisenlabs.studio. We respond within 30 days.
        </Section>
        <Section title="Contact">
          Questions? Email hello@heisenlabs.studio.
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
