import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

export function TopBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-xs sm:text-sm">
        <span className="inline-flex h-2 w-2 rounded-full bg-status animate-pulse" />
        <span className="text-muted-foreground">Looking for a new website?</span>
        <Link
          to="/contact"
          className="rounded-full border border-border/60 px-3 py-1 text-foreground transition hover:bg-accent"
        >
          Get in touch now
        </Link>
        <button
          aria-label="Dismiss"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
