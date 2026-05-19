import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitContact } from "@/lib/forms.functions";

const subjects = [
  "AI integration",
  "Automation / workflow",
  "New website or web system",
  "SEO",
  "AI agent / internal copilot",
  "Data pipeline",
  "Something else",
];

export function ContactForm({ variant = "card" }: { variant?: "card" | "plain" }) {
  const submit = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // honeypot
    if (String(fd.get("website") || "").length > 0) {
      setSent(true);
      return;
    }

    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
    };
    if (!data.name || !data.email || !data.subject || !data.message) {
      toast.error("Please fill in every field.");
      return;
    }
    setLoading(true);
    try {
      await submit({ data });
      toast.success("Message sent — we'll be in touch shortly.");
      e.currentTarget.reset();
      setSent(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const wrap =
    variant === "card"
      ? "rounded-3xl border border-border/60 bg-surface-elevated p-6 text-foreground shadow-card sm:p-8"
      : "rounded-3xl border border-border/60 bg-card p-6 text-foreground sm:p-8";

  if (sent) {
    return (
      <div className={wrap}>
        <div className="flex flex-col items-center text-center py-10">
          <div className="h-14 w-14 rounded-full bg-aurora animate-aurora flex items-center justify-center text-2xl text-primary-foreground">✓</div>
          <h3 className="mt-6 text-serif text-3xl">Got it.</h3>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            We'll reply within one business day with a few sharp questions and a sense of fit.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-6 text-xs uppercase tracking-[0.18em] text-amber-accent hover:underline"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={wrap}>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input name="name" required maxLength={100} placeholder="Your full name" className={inputCls} />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required maxLength={255} placeholder="you@company.com" className={inputCls} />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Subject" required>
          <select name="subject" required defaultValue="" className={`${inputCls} appearance-none`}>
            <option value="" disabled>Select one</option>
            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Tell us about the system" required>
          <textarea name="message" required maxLength={2000} rows={5} placeholder="What metric should it move? What tools are you using? Any deadlines?" className={`${inputCls} resize-none`} />
        </Field>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send enquiry"}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">We reply within one business day.</p>
    </form>
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
