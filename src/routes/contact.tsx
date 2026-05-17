import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HeisenLabs" },
      { name: "description", content: "Get in touch with HeisenLabs. We reply to every enquiry within one business day." },
      { property: "og:title", content: "Contact — HeisenLabs" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start a conversation." subtitle="Tell us about the project. We reply within one business day." />
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
            <p className="mt-1 text-sm text-muted-foreground">Most enquiries are answered the same day during business hours.</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
