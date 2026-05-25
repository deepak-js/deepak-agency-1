import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Sparkles, Workflow, LayoutTemplate, Search, Database, Bot, ChevronDown, Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Field notes" },
];

const services = [
  { icon: Sparkles, title: "AI Integrations", desc: "Models wired into your stack", to: "/services/ai-integrations" },
  { icon: Workflow, title: "Automation", desc: "Workflows that run themselves", to: "/services/automation" },
  { icon: LayoutTemplate, title: "Web Systems", desc: "Sites built to rank and convert", to: "/services/web-systems" },
  { icon: Search, title: "SEO", desc: "Grounded in real search intent", to: "/services/seo" },
  { icon: Database, title: "Data Pipelines", desc: "One source of truth", to: "/services/data-pipelines" },
  { icon: Bot, title: "AI Agents", desc: "Copilots tuned to your data", to: "/services/ai-agents" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hl_theme") as "light" | "dark" | "system";
    if (saved) setTheme(saved);
  }, []);

  const applyTheme = (t: "light" | "dark" | "system") => {
    setTheme(t);
    localStorage.setItem("hl_theme", t);
    
    if (t === "dark" || (t === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  useEffect(() => {
    if (!themeOpen) return;
    const handleClose = () => setThemeOpen(false);
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, [themeOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-background/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 ${scrolled ? "py-3" : "py-4"}`}>
        <Link to="/" className="text-serif text-2xl tracking-tight">
          <span className="text-foreground">Heisen</span>
          <span className="italic text-muted-foreground">Labs</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex font-mono text-[11px] uppercase tracking-[0.14em]">
          <Link
            to="/"
            className="rounded-full px-4 py-2 text-muted-foreground transition hover:text-foreground"
            activeProps={{ className: "rounded-full px-4 py-2 text-foreground" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>

          {/* Services mega-menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "inline-flex items-center gap-1 rounded-full px-4 py-2 text-foreground" }}
            >
              Services <ChevronDown className="h-3 w-3" />
            </Link>
            {megaOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3">
                <div className="glass rounded-2xl p-3 shadow-elevated">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map(({ icon: Icon, title, desc, to }) => (
                      <Link
                        key={to}
                        to={to}
                        className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-accent"
                      >
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                          <Icon className="h-4 w-4 text-foreground" />
                        </div>
                        <div>
                          <div className="text-sm text-foreground normal-case tracking-normal">{title}</div>
                          <div className="text-xs text-muted-foreground normal-case tracking-normal">{desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setThemeOpen(!themeOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" && <Sun className="h-4 w-4" />}
              {theme === "dark" && <Moon className="h-4 w-4" />}
              {theme === "system" && <Monitor className="h-4 w-4" />}
            </button>
            {themeOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-xl border border-border bg-popover p-1 shadow-elevated z-50">
                {(["light", "dark", "system"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      applyTheme(t);
                      setThemeOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-xs font-mono uppercase tracking-[0.05em] cursor-pointer transition-colors ${
                      theme === t
                        ? "bg-accent text-foreground font-semibold"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                    }`}
                  >
                    {t === "light" && <Sun className="h-3.5 w-3.5" />}
                    {t === "dark" && <Moon className="h-3.5 w-3.5" />}
                    {t === "system" && <Monitor className="h-3.5 w-3.5" />}
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/book-a-call"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground transition hover:opacity-90"
          >
            Book a call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="rounded-full border border-border/60 p-2 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l-border/60 w-[300px]">
            <div className="mt-10 flex flex-col gap-1">
              {[{ to: "/", label: "Home" }, { to: "/services", label: "Services" }, ...nav.slice(1)].map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-foreground transition hover:bg-accent"
                >
                  {n.label}
                </Link>
              ))}
              <div className="my-4 h-px bg-border/60" />
              <p className="px-3 text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Services</p>
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  {s.title}
                </Link>
              ))}
              <div className="my-4 h-px bg-border/60" />
              <p className="px-3 text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Theme</p>
              <div className="mt-2 flex gap-1 px-2">
                {(["light", "dark", "system"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => applyTheme(t)}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border py-2 text-xs font-mono uppercase tracking-[0.05em] cursor-pointer transition-colors ${
                      theme === t
                        ? "border-primary bg-primary/10 text-foreground font-semibold"
                        : "border-border/60 text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {t === "light" && <Sun className="h-3.5 w-3.5" />}
                    {t === "dark" && <Moon className="h-3.5 w-3.5" />}
                    {t === "system" && <Monitor className="h-3.5 w-3.5" />}
                    {t}
                  </button>
                ))}
              </div>

              <Link
                to="/book-a-call"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
              >
                Book a call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
