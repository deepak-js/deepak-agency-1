import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitContact } from "@/lib/forms.functions";

const subjects = [
  "Website design",
  "SEO",
  "Hosting & maintenance",
  "Migration",
  "E-commerce",
  "Just saying hi",
];

export function ContactForm({ variant = "card" }: { variant?: "card" | "plain" }) {
  const submit = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
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
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const wrap =
    variant === "card"
      ? "rounded-3xl bg-cream p-6 text-cream-foreground shadow-card sm:p-8"
      : "rounded-3xl border border-border/60 bg-card p-6 text-foreground sm:p-8";

  return (
    <form onSubmit={onSubmit} className={wrap}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            name="name"
            required
            maxLength={100}
            placeholder="Enter full name"
            className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/40"
          />
        </Field>
        <Field label="Email" required>
          <input
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="Enter email"
            className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/40"
          />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Subject" required>
          <select
            name="subject"
            required
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/40"
          >
            <option value="" disabled>Select one</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Message" required>
          <textarea
            name="message"
            required
            maxLength={2000}
            rows={5}
            placeholder="How can we help you?"
            className="w-full resize-none rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/40"
          />
        </Field>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-full bg-cream-foreground py-3.5 text-sm font-medium text-cream transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Submit enquiry"}
      </button>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-cream-foreground/80">
        {label} {required && <span className="text-cream-foreground/60">*</span>}
      </span>
      {children}
    </label>
  );
}
