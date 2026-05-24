import { useEffect, useRef } from "react";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

/**
 * Lightweight 2D canvas particle trail. Tier-3 / non-touch / non-reduced-motion only.
 * ~40 particles, additive blend, ember palette. Pure 2D — no WebGL cost.
 */
export function ParticleTrail() {
  const { hydrated, tier, isTouch, reducedMotion } = useDeviceCapability();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!hydrated || isTouch || reducedMotion || tier !== "tier-3") return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number; life: number; max: number; r: number };
    const parts: P[] = [];
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let moving = false;
    let lastMove = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      moving = true;
      lastMove = performance.now();
      if (parts.length < 60 && Math.random() < 0.6) {
        parts.push({
          x: mx * dpr,
          y: my * dpr,
          vx: (Math.random() - 0.5) * 0.4 * dpr,
          vy: (Math.random() - 0.5) * 0.4 * dpr - 0.15 * dpr,
          life: 0,
          max: 40 + Math.random() * 40,
          r: (1 + Math.random() * 1.8) * dpr,
        });
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "multiply";
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.005 * dpr;
        p.life++;
        const t = 1 - p.life / p.max;
        if (t <= 0) {
          parts.splice(i, 1);
          continue;
        }
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, `rgba(30, 30, 40, ${0.18 * t})`);
        grad.addColorStop(1, "rgba(30, 30, 40, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      if (performance.now() - lastMove > 120) moving = false;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [hydrated, tier, isTouch, reducedMotion]);

  if (!hydrated || isTouch || reducedMotion || tier !== "tier-3") return null;

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90]"
    />
  );
}
