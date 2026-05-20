import { lazy, Suspense } from "react";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

const ShaderBackdrop = lazy(() => import("./ShaderBackdrop.client"));

/**
 * Mounts the WebGL shader backdrop on tier-2/3 devices only.
 * On tier-1 or SSR the existing CSS gradient (bg-hero) covers the slot.
 */
export function HeroBackdrop() {
  const { hydrated, tier, hasWebGL, reducedMotion } = useDeviceCapability();
  const enable = hydrated && hasWebGL && !reducedMotion && tier !== "tier-1";

  if (!enable) return null;

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none opacity-80">
      <Suspense fallback={null}>
        <ShaderBackdrop />
      </Suspense>
    </div>
  );
}
