import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Sparkles } from "lucide-react";

export function TopBanner() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem("hl-banner-dismissed") === "1") setOpen(false);
    } catch { /* ignore */ }
  }, []);

  function dismiss() {
    setOpen(false);
    try { localStorage.setItem("hl-banner-dismissed", "1"); } catch { /* ignore */ }
  }

  if (!open) return null;
  return (
    <div className="relative z-50 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-10 py-2 font-mono text-[11px] uppercase tracking-[0.12em]">
        <Sparkles className="h-3.5 w-3.5 text-amber-accent" />
        <span className="text-muted-foreground normal-case tracking-normal">Want a system, not just a site?</span>
        <Link
          to="/book-a-call"
          className="rounded-full border border-foreground/80 px-3 py-1 text-foreground transition hover:bg-foreground hover:text-background"
        >
          Book a free call
        </Link>
        <button
          aria-label="Dismiss banner"
          onClick={dismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
