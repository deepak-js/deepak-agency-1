import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

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

const channels = [
  { icon: Mail, title: "Email us", body: "hello@heisenlabs.studio", note: "Fastest for written briefs." },
  { icon: MessageCircle, title: "Book a call", body: "Free 30-minute intro", note: "Best for sizing a project." },
  { icon: Clock, title: "Response time", body: "Within 1 business day", note: "Most enquiries get a same-day reply." },
  { icon: MapPin, title: "Where we are", body: "Distributed · GMT ↔ PST", note: "We schedule in your time zone." },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="What system do you want built?"
        subtitle="A short note is enough. We reply within one business day with a few sharp questions and a sense of fit."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 lg:grid-cols-[1fr_1.15fr] lg:px-8">
        <div className="space-y-4">
          {channels.map(({ icon: Icon, title, body, note }) => (
            <div key={title} className="rounded-2xl border border-border/50 bg-card/60 p-6 hover-lift">
              <Icon className="h-5 w-5 text-amber-accent" />
              <h3 className="mt-4 text-serif text-2xl">{title}</h3>
              <p className="mt-1 text-sm text-foreground">{body}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{note}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-border/40 bg-surface/60 p-6">
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">What to include</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>· The metric you want this system to move</li>
              <li>· Tools or stack you're already using</li>
              <li>· Rough timeline or constraints</li>
              <li>· Anything we should know about your team</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
