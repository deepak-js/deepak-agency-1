import { useEffect, useRef, useState } from "react";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

/**
 * Magnetic dot + ring cursor. Desktop only; respects reduced-motion.
 * Native cursor is preserved; this layer is decorative (pointer-events: none).
 */
export function CustomCursor() {
  const { hydrated, reducedMotion, isTouch } = useDeviceCapability();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!hydrated || reducedMotion || isTouch) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let rafId = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, [role="button"], [data-cursor]',
      );
      setHover(!!interactive);
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [hydrated, reducedMotion, isTouch]);

  if (!hydrated || reducedMotion || isTouch) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-foreground"
      />
      <div
        ref={ring}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[99] rounded-full border border-foreground/40 transition-[width,height,opacity] duration-200 ease-out ${
          hover ? "h-12 w-12 opacity-100" : "h-8 w-8 opacity-70"
        }`}
      />
    </>
  );
}
