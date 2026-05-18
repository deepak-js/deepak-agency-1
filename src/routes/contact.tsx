import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Heisen Labs" },
      { name: "description", content: "Tell us about the system you want to build. We reply within one business day." },
      { property: "og:title", content: "Contact — Heisen Labs" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="What system do you want built?"
        subtitle="A short note is enough. We reply within one business day with a few sharp questions and a sense of fit."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border/50 bg-card/60 p-6">
            <Mail className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-serif text-2xl">Prefer email?</h3>
            <p className="mt-1 text-sm text-muted-foreground">hello@heisenlabs.studio</p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card/60 p-6">
            <MessageCircle className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-serif text-2xl">Quick question?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Most enquiries get a substantive reply the same day during business hours.</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
