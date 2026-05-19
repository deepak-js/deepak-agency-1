import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Sparkles, Workflow, LayoutTemplate, Bot, Database, Search, Calendar, Check } from "lucide-react";
import { bookCall } from "@/lib/forms.functions";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/book-a-call")({
  head: () => ({
    meta: [
      { title: "Book a call — Heisen Labs" },
      { name: "description", content: "Free 30-minute intro call. Talk through the system you want, scope it together, get a written follow-up." },
      { property: "og:title", content: "Book a call — Heisen Labs" },
      { property: "og:url", content: "/book-a-call" },
    ],
    links: [{ rel: "canonical", href: "/book-a-call" }],
  }),
  component: BookPage,
});

const goals = [
  { icon: Sparkles, label: "AI integration", desc: "LLMs wired into our tools" },
  { icon: Workflow, label: "Automation", desc: "A workflow that runs itself" },
  { icon: LayoutTemplate, label: "Web system", desc: "A site that ranks & converts" },
  { icon: Bot, label: "AI agent", desc: "Internal copilot for our team" },
  { icon: Database, label: "Data pipeline", desc: "One source of truth" },
  { icon: Search, label: "SEO", desc: "Grow organic traffic" },
];

const slots = ["Tomorrow · 10:00", "Tomorrow · 15:30", "Thu · 11:00"];

function BookPage() {
  const submit = useServerFn(bookCall);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [goal, setGoal] = useState<string>("");
  const [slot, setSlot] = useState<string>(slots[0]);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<{ name: string; email: string; when: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const notes = `Goal: ${goal || "Unspecified"}\n${String(fd.get("notes") || "")}`;
    if (!name || !email) {
      toast.error("Name and email are required.");
      return;
    }
    setLoading(true);
    try {
      await submit({
        data: { name, email, preferred_date: slot, notes },
      });
      setConfirmation({ name, email, when: slot });
      setStep(3);
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
        title="A 30-minute intro. No sales pressure."
        subtitle="We'll talk through the system you want, scope it together, and send a written follow-up the same day."
      />
      <section className="mx-auto max-w-3xl px-4 pb-24 lg:px-8">
        <Stepper step={step} />

        {step === 1 && (
          <div className="mt-10 rounded-3xl border border-border/60 bg-card-grad p-6 sm:p-8">
            <h2 className="text-serif text-3xl">What kind of system?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Pick the closest one. We can shape it on the call.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {goals.map(({ icon: Icon, label, desc }) => {
                const active = goal === label;
                return (
                  <button
                    key={label}
                    onClick={() => setGoal(label)}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-primary bg-primary/10"
                        : "border-border/60 bg-card/60 hover:bg-card"
                    }`}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card">
                      <Icon className="h-4 w-4 text-amber-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!goal}
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={onSubmit} className="mt-10 rounded-3xl border border-border/60 bg-card-grad p-6 sm:p-8">
            <h2 className="text-serif text-3xl">Your details</h2>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface px-3 py-1 text-xs text-muted-foreground">
              <Check className="h-3 w-3 text-primary" /> Goal: {goal}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Field label="Name" required>
                <input name="name" required maxLength={100} className={inputCls} placeholder="Your name" />
              </Field>
              <Field label="Email" required>
                <input name="email" type="email" required maxLength={255} className={inputCls} placeholder="you@company.com" />
              </Field>
            </div>

            <div className="mt-6">
              <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Pick a slot</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {slots.map((s) => {
                  const active = slot === s;
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm transition ${
                        active ? "border-primary bg-primary/10 text-foreground" : "border-border/60 bg-card/60 text-muted-foreground hover:bg-card"
                      }`}
                    >
                      <Calendar className="h-4 w-4" /> {s}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">All times shown in your local zone. We'll confirm by email.</p>
            </div>

            <div className="mt-6">
              <Field label="Anything we should know?">
                <textarea name="notes" rows={4} maxLength={2000} className={`${inputCls} resize-none`} placeholder="A few sentences on the workflow, site, or AI feature you have in mind…" />
              </Field>
            </div>

            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-95 disabled:opacity-60"
              >
                {loading ? "Booking…" : "Request my call"}
              </button>
            </div>
          </form>
        )}

        {step === 3 && confirmation && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
            <div className="relative bg-aurora animate-aurora p-8 text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-background/90 flex items-center justify-center text-2xl text-primary">✓</div>
              <h2 className="mt-5 text-serif text-3xl text-primary-foreground">You're booked.</h2>
              <p className="mt-2 text-sm text-primary-foreground/80">Confirmation sent to {confirmation.email}.</p>
            </div>
            <div className="p-8 text-sm">
              <Row label="Goal" value={goal} />
              <Row label="When" value={confirmation.when} />
              <Row label="Where" value="Google Meet link in confirmation email" />
              <Row label="Length" value="30 minutes" />
              <Row label="Cost" value="Free" />
              <div className="mt-6 rounded-xl border border-border/60 bg-surface p-4 text-xs text-muted-foreground">
                <p className="text-foreground">What to expect</p>
                <p className="mt-1">A short conversation about the system you want, the metric it should move, and whether there's a fit. We follow up the same day with a written summary.</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

const inputCls = "w-full rounded-xl border border-border/60 bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label} {required && <span className="text-amber-accent">*</span>}
      </span>
      {children}
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/40 py-3 last:border-0">
      <span className="text-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <span className="text-right text-foreground">{value}</span>
    </div>
  );
}

function Stepper({ step }: { step: 1 | 2 | 3 }) {
  const steps = ["Goal", "Details", "Confirm"];
  return (
    <div className="flex items-center justify-center gap-2 text-xs">
      {steps.map((s, i) => {
        const n = (i + 1) as 1 | 2 | 3;
        const active = step === n;
        const done = step > n;
        return (
          <div key={s} className="flex items-center gap-2">
            <div className={`flex h-7 w-7 items-center justify-center rounded-full border text-mono text-[10px] ${
              done ? "border-primary bg-primary text-primary-foreground" : active ? "border-primary text-primary" : "border-border/60 text-muted-foreground"
            }`}>{done ? "✓" : n}</div>
            <span className={active ? "text-foreground" : "text-muted-foreground"}>{s}</span>
            {i < steps.length - 1 && <span className="mx-1 h-px w-8 bg-border/60" />}
          </div>
        );
      })}
    </div>
  );
}
