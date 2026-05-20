import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { reducedMotion } = useDeviceCapability();

  if (reducedMotion) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
