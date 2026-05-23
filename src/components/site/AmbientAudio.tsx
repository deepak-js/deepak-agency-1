import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

const STORAGE_KEY = "hl_audio_v1";

/**
 * Tiny ambient drone using Web Audio. Off by default, opt-in via button.
 * Two detuned sine oscillators through a lowpass + gain envelope.
 */
export function AmbientAudio() {
  const { hydrated, isTouch } = useDeviceCapability();
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ gain: GainNode; oscs: OscillatorNode[] } | null>(null);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "on") setOn(true);
    } catch {
      /* ignore */
    }
    return () => {
      stopAudio();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  const startAudio = async () => {
    type WindowWithWebkit = Window & { webkitAudioContext?: typeof AudioContext };
    const Ctor = window.AudioContext || (window as WindowWithWebkit).webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();
    await ctx.resume();
    const gain = ctx.createGain();
    gain.gain.value = 0;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 700;
    filter.Q.value = 0.7;

    const freqs = [110, 164.81]; // A2 + E3
    const oscs = freqs.map((f, i) => {
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = f;
      o.detune.value = i === 0 ? -4 : 6;
      o.connect(filter);
      o.start();
      return o;
    });

    filter.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.4);

    ctxRef.current = ctx;
    nodesRef.current = { gain, oscs };
  };

  const stopAudio = () => {
    const ctx = ctxRef.current;
    const nodes = nodesRef.current;
    if (!ctx || !nodes) return;
    try {
      nodes.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
      setTimeout(() => {
        nodes.oscs.forEach((o) => {
          try {
            o.stop();
          } catch {
            /* ignore */
          }
        });
        ctx.close().catch(() => {});
      }, 700);
    } catch {
      /* ignore */
    }
    ctxRef.current = null;
    nodesRef.current = null;
  };

  const toggle = async () => {
    const next = !on;
    setOn(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
    } catch {
      /* ignore */
    }
    if (next) await startAudio();
    else stopAudio();
  };

  // Auto-start if user previously opted in (requires gesture; defer until first interaction)
  useEffect(() => {
    if (!on || ctxRef.current) return;
    const handler = () => {
      if (!ctxRef.current) startAudio();
      window.removeEventListener("pointerdown", handler);
      window.removeEventListener("keydown", handler);
    };
    window.addEventListener("pointerdown", handler, { once: true });
    window.addEventListener("keydown", handler, { once: true });
    return () => {
      window.removeEventListener("pointerdown", handler);
      window.removeEventListener("keydown", handler);
    };
  }, [on]);

  if (!hydrated || isTouch) return null;

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Mute ambient sound" : "Enable ambient sound"}
      aria-pressed={on}
      className="fixed bottom-6 right-24 z-[55] hidden h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/70 text-muted-foreground backdrop-blur-xl transition hover:text-foreground md:inline-flex"
      data-cursor
    >
      {on ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </button>
  );
}
