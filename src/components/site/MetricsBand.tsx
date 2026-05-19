import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 47, suffix: "+", label: "Systems shipped" },
  { value: 1840, suffix: "h", label: "Hours automated / mo" },
  { value: 6.4, suffix: "wk", label: "Avg. payback", decimals: 1 },
  { value: 72, suffix: "", label: "NPS across clients" },
];

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-serif text-5xl text-foreground sm:text-6xl">
      {n.toFixed(decimals)}
      <span className="text-aurora">{suffix}</span>
    </span>
  );
}

export function MetricsBand() {
  return (
    <section className="border-y border-border/40 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {metrics.map((m) => (
          <div key={m.label}>
            <Counter value={m.value} suffix={m.suffix} decimals={m.decimals} />
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
