import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function BookCallWidget() {
  return (
    <Link
      to="/book-a-call"
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-3 rounded-full border border-border/60 bg-card/90 px-3 py-2 pr-4 shadow-card backdrop-blur transition hover:bg-card md:inline-flex"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm text-primary-foreground">
        H
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-medium text-foreground">Book a call</span>
        <span className="text-xs text-muted-foreground">Get started today</span>
      </div>
      <ArrowUpRight className="ml-1 h-4 w-4 text-muted-foreground" />
    </Link>
  );
}
