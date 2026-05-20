import { useEffect, useState } from "react";

export type CapabilityTier = "tier-1" | "tier-2" | "tier-3";

export interface DeviceCapability {
  tier: CapabilityTier;
  reducedMotion: boolean;
  isTouch: boolean;
  hasWebGL: boolean;
  hydrated: boolean;
}

const DEFAULT: DeviceCapability = {
  tier: "tier-1",
  reducedMotion: false,
  isTouch: false,
  hasWebGL: false,
  hydrated: false,
};

function detectWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(
      c.getContext("webgl2") ||
      c.getContext("webgl") ||
      c.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export function useDeviceCapability(): DeviceCapability {
  const [cap, setCap] = useState<DeviceCapability>(DEFAULT);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const hasWebGL = detectWebGL();
    const cores = navigator.hardwareConcurrency ?? 4;
    // deviceMemory is non-standard; default to 4 if missing
    const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;

    let tier: CapabilityTier = "tier-1";
    if (hasWebGL && !reducedMotion) {
      if (!isTouch && cores >= 8 && mem >= 8) tier = "tier-3";
      else if (cores >= 4 && mem >= 4) tier = "tier-2";
    }

    setCap({ tier, reducedMotion, isTouch, hasWebGL, hydrated: true });
  }, []);

  return cap;
}
