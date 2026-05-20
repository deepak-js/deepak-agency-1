import { useEffect } from "react";
import Lenis from "lenis";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

/**
 * Mounts Lenis smooth-scroll on capable, non-touch, non-reduced-motion devices.
 * Falls back to native scroll otherwise.
 */
export function SmoothScroll() {
  const { hydrated, reducedMotion, isTouch } = useDeviceCapability();

  useEffect(() => {
    if (!hydrated || reducedMotion || isTouch) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [hydrated, reducedMotion, isTouch]);

  return null;
}
