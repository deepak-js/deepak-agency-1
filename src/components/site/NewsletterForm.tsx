import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { submitContact } from "@/lib/forms.functions";

export function NewsletterForm() {
  const submit = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    if (!email) return;
    setLoading(true);
    try {
      await submit({
        data: {
          name: "Newsletter subscriber",
          email,
          subject: "Newsletter",
          message: "Subscribed via footer.",
        },
      });
      toast.success("You're on the list.");
      e.currentTarget.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 p-1.5">
      <input
        name="email"
        type="email"
        required
        maxLength={255}
        placeholder="you@company.com"
        className="flex-1 bg-transparent px-3 py-1.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        aria-label="Subscribe"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
