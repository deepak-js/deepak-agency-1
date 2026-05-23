import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

const STORAGE_KEY = "hl_tour_v1";

const steps = [
  {
    title: "Welcome to Heisen Labs",
    body: "A boutique studio for AI, automation, and the systems behind business growth.",
  },
  {
    title: "Services, end-to-end",
    body: "From AI integrations to data pipelines — pick the layer you need, or stack them all.",
  },
  {
    title: "Book a call when you're ready",
    body: "Most engagements start with a 30-minute scoping call. No deck, no pressure.",
  },
];

export function GuidedTour() {
  const { hydrated, reducedMotion } = useDeviceCapability();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setOpen(true), 1400);
        return () => clearTimeout(t);
      }
    } catch {
      /* ignore */
    }
  }, [hydrated]);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const next = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
    else close();
  };

  if (!hydrated) return null;
  const s = steps[step];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: reducedMotion ? 0 : 0.32, ease: [0.2, 0.7, 0.2, 1] }}
          className="fixed bottom-6 left-6 z-[60] hidden w-[340px] md:block"
          role="dialog"
          aria-label="Guided tour"
        >
          <div className="glass relative overflow-hidden rounded-2xl border border-border/60 p-5 shadow-elevated">
            <button
              onClick={close}
              aria-label="Dismiss tour"
              className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-amber-accent">
              Tour · {step + 1} / {steps.length}
            </p>
            <h3 className="mt-2 text-serif text-xl text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={close}
                className="text-xs text-muted-foreground transition hover:text-foreground"
              >
                Skip
              </button>
              <button
                onClick={next}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs text-primary-foreground shadow-glow transition hover:opacity-90"
              >
                {step < steps.length - 1 ? "Next" : "Got it"}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="mt-3 flex gap-1">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 flex-1 rounded-full transition-colors ${
                    i <= step ? "bg-amber-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
