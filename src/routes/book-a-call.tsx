import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { bookCall } from "@/lib/forms.functions";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/book-a-call")({
  head: () => ({
    meta: [
      { title: "Book a call — Heisen Labs" },
      { name: "description", content: "Book a free 30-minute intro call. We'll talk through your system, scope, and next steps." },
      { property: "og:title", content: "Book a call — Heisen Labs" },
      { property: "og:url", content: "/book-a-call" },
    ],
    links: [{ rel: "canonical", href: "/book-a-call" }],
  }),
  component: BookPage,
});

function BookPage() {
  const submit = useServerFn(bookCall);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await submit({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          preferred_date: String(fd.get("preferred_date") || ""),
          notes: String(fd.get("notes") || ""),
        },
      });
      toast.success("Booking received — we'll confirm a time shortly.");
      e.currentTarget.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Book a call"
        title="Free 30-minute intro call."
        subtitle="No sales pressure. We'll talk through the system you want, scope it together, and send a written follow-up."
      />
      <section className="mx-auto max-w-3xl px-4 pb-24 lg:px-8">
        <form onSubmit={onSubmit} className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" required>
              <input name="name" required maxLength={100} className={inputCls} placeholder="Your name" />
            </Field>
            <Field label="Email" required>
              <input name="email" type="email" required maxLength={255} className={inputCls} placeholder="you@example.com" />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Preferred date / time">
              <input name="preferred_date" maxLength={120} className={inputCls} placeholder="e.g. Tuesday afternoon, GMT" />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="What system do you want built?">
              <textarea name="notes" rows={4} maxLength={2000} className={`${inputCls} resize-none`} placeholder="A few sentences on the workflow, site, or AI feature you have in mind…" />
            </Field>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Booking…" : "Request my call"}
          </button>
        </form>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-border/60 bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label} {required && <span className="text-foreground/60">*</span>}
      </span>
      {children}
    </label>
  );
}
