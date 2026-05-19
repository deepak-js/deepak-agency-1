import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export function BookCallWidget() {
  const [show, setShow] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/book-a-call" || pathname === "/contact") return null;
  if (!show) return null;

  return (
    <Link
      to="/book-a-call"
      className="fixed bottom-5 right-5 z-40 hidden animate-fade-in-up items-center gap-3 rounded-full border border-border/60 bg-card/90 px-3 py-2 pr-4 shadow-elevated backdrop-blur transition hover:bg-card md:inline-flex"
    >
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aurora animate-aurora text-sm font-medium text-primary-foreground">
          H
        </div>
        <span className="absolute inset-0 rounded-full animate-pulse-ring" aria-hidden />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-medium text-foreground">Book a call</span>
        <span className="text-xs text-muted-foreground">30 min · free</span>
      </div>
      <ArrowUpRight className="ml-1 h-4 w-4 text-muted-foreground" />
    </Link>
  );
}
